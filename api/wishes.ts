import type { VercelRequest, VercelResponse } from '@vercel/node';
import { Redis } from '@upstash/redis';

// Find whichever environment variables Vercel/Upstash injected
function getRedisClient() {
  const url =
    process.env.kv_KV_REST_API_URL ||
    process.env.KV_REST_API_URL ||
    process.env.UPSTASH_REDIS_REST_URL ||
    process.env.KV_URL ||
    process.env.STORAGE_REST_API_URL ||
    process.env.STORAGE_URL;

  const token =
    process.env.kv_KV_REST_API_TOKEN ||
    process.env.KV_REST_API_TOKEN ||
    process.env.UPSTASH_REDIS_REST_TOKEN ||
    process.env.KV_TOKEN ||
    process.env.STORAGE_REST_API_TOKEN ||
    process.env.STORAGE_TOKEN;

  if (url && token) {
    return new Redis({ url, token });
  }

  // If standard env vars are set, fromEnv() detects them automatically
  try {
    return Redis.fromEnv();
  } catch {
    return null;
  }
}

export default async function handler(req: VercelRequest, res: VercelResponse) {
  res.setHeader('Access-Control-Allow-Credentials', 'true');
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Methods', 'GET,OPTIONS,PATCH,DELETE,POST,PUT');
  res.setHeader(
    'Access-Control-Allow-Headers',
    'X-CSRF-Token, X-Requested-With, Accept, Accept-Version, Content-Length, Content-MD5, Content-Type, Date, X-Api-Version'
  );

  if (req.method === 'OPTIONS') {
    res.status(200).end();
    return;
  }

  const redis = getRedisClient();

  // GET: Fetch all public wishes
  if (req.method === 'GET') {
    if (!redis) {
      return res.status(200).json([]);
    }
    try {
      const wishes = (await redis.get('mohamed_menna_wishes')) || [];
      return res.status(200).json(Array.isArray(wishes) ? wishes : []);
    } catch {
      return res.status(200).json([]);
    }
  }

  // POST: Add new wish
  if (req.method === 'POST') {
    if (!redis) {
      return res.status(500).json({
        error: 'Database not connected. Please check Vercel environment variables.',
      });
    }

    try {
      const body = typeof req.body === 'string' ? JSON.parse(req.body) : req.body;
      const { name, message } = body;

      if (!name || !message) {
        return res.status(400).json({ error: 'Name and message are required' });
      }

      const newWish = {
        id: Date.now().toString(),
        name: String(name).slice(0, 100),
        message: String(message).slice(0, 1000),
        createdAt: new Date().toLocaleDateString('en-US', {
          month: 'short',
          day: 'numeric',
          year: 'numeric',
        }),
      };

      let existing: any[] = [];
      try {
        existing = (await redis.get('mohamed_menna_wishes')) || [];
        if (!Array.isArray(existing)) existing = [];
      } catch {
        existing = [];
      }

      const updated = [newWish, ...existing];
      await redis.set('mohamed_menna_wishes', updated);

      return res.status(200).json(newWish);
    } catch (err: any) {
      return res.status(500).json({ error: err.message || 'Failed to save wish' });
    }
  }

  return res.status(405).json({ error: 'Method not allowed' });
}

import type { VercelRequest, VercelResponse } from '@vercel/node';
import { kv } from '@vercel/kv';

export default async function handler(req: VercelRequest, res: VercelResponse) {
  // Enable CORS
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

  // GET: Fetch all public wishes
  if (req.method === 'GET') {
    try {
      const wishes = (await kv.get('mohamed_menna_wishes')) || [];
      return res.status(200).json(wishes);
    } catch {
      return res.status(200).json([]);
    }
  }

  // POST: Add new wish
  if (req.method === 'POST') {
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
        existing = (await kv.get('mohamed_menna_wishes')) || [];
        if (!Array.isArray(existing)) existing = [];
      } catch {
        existing = [];
      }

      const updated = [newWish, ...existing];
      await kv.set('mohamed_menna_wishes', updated);

      return res.status(200).json(newWish);
    } catch {
      return res.status(500).json({ error: 'Failed to save wish' });
    }
  }

  return res.status(405).json({ error: 'Method not allowed' });
}

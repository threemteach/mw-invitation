import React, { useState, useEffect } from 'react';
import { Heart } from 'lucide-react';
import { WishItem } from '../data/invitationData';

export const Guestbook: React.FC = () => {
  const STORAGE_KEY = 'mohamed_menna_wedding_wishes_v2';

  const [wishes, setWishes] = useState<WishItem[]>(() => {
    try {
      const saved = localStorage.getItem(STORAGE_KEY);
      if (saved) return JSON.parse(saved);
    } catch {
      // ignore
    }
    return [];
  });

  const [name, setName] = useState('');
  const [message, setMessage] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);

  // Fetch public wishes from Vercel API on load
  useEffect(() => {
    fetch('/api/wishes')
      .then((res) => {
        if (res.ok) return res.json();
        return null;
      })
      .then((data) => {
        if (Array.isArray(data) && data.length > 0) {
          setWishes(data);
          try {
            localStorage.setItem(STORAGE_KEY, JSON.stringify(data));
          } catch {
            // ignore
          }
        }
      })
      .catch(() => {
        // Fallback silently to local cache if API not reached
      });
  }, []);

  // Egyptian Arabic wedding wishes for the AI wand
  const egyptianWishes = [
    "ألف ألف مبروك يا غاليين! ربنا يسعدكم ويهنيكم ويكتبلكم أيام كلها فرح وهنا يا رب 🤍💍",
    "بارك الله لكما وبارك عليكما وجمع بينكما في خير.. أحلى عريس وأحلى عروسة في الدنيا! 🎉✨",
    "فرحتكم فرحتنا والله! ربنا يتمملكم على ألف خير ويرزقكم حياة كلها حب وسعادة وبركة 🤍",
    "ما شاء الله تبارك الله، قمر وملايكة! ربنا يحفظكم من كل شر ويسعد قلوبكم دايمًا يا محمد ويا منة 🌸",
    "يا رب يجعل كل أيامكم أفراح وبيوتكم دايمًا عامرة بالحب والخير والسرور 👰🤵",
    "ألف مليون مبروك لأجمل كابل في مصر! عقبال العمر كله سوا في فرح وراحة بال يا رب 🤍",
    "اللهم بارك.. فرحانين ليكم من كل قلبنا، ربنا يجمع بينكم في كل خير ويسعد أيامكم ✨",
  ];

  const handleMagicAiWish = () => {
    const randomWish = egyptianWishes[Math.floor(Math.random() * egyptianWishes.length)];
    setMessage(randomWish);
  };

  const handleSendWish = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!name.trim() || !message.trim() || isSubmitting) return;

    setIsSubmitting(true);

    const newWish: WishItem = {
      id: Date.now().toString(),
      name: name.trim(),
      message: message.trim(),
      createdAt: new Date().toLocaleDateString('en-US', {
        month: 'short',
        day: 'numeric',
        year: 'numeric',
      }),
    };

    // Optimistically update UI immediately
    const updated = [newWish, ...wishes];
    setWishes(updated);
    try {
      localStorage.setItem(STORAGE_KEY, JSON.stringify(updated));
    } catch {
      // ignore
    }

    // Post to Vercel backend
    try {
      await fetch('/api/wishes', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ name: name.trim(), message: message.trim() }),
      });
    } catch {
      // safe fallback, local wish already stored
    } finally {
      setIsSubmitting(false);
      setName('');
      setMessage('');
    }
  };

  return (
    <section className="relative z-10 px-4 sm:px-6 py-8 max-w-[620px] mx-auto font-baskerville">
      <div className="text-center mb-6">
        <h2 className="font-baskerville font-bold text-xl md:text-2xl tracking-widest uppercase text-[#215589]">
          Guestbook
        </h2>
        <p className="text-xs sm:text-sm text-[#2F3A45]/70 mt-1 italic">
          Leave your warm wishes for Mohamed & Menna
        </p>
      </div>

      {/* Form Card */}
      <form
        onSubmit={handleSendWish}
        className="mt-6 mx-auto w-full max-w-full md:max-w-[600px]"
      >
        <div
          className="rounded-2xl border p-6 font-baskerville"
          style={{
            borderColor: 'rgba(33, 85, 137, 0.2)',
            backgroundColor: 'transparent',
          }}
        >
          {/* Name Input */}
          <div className="mb-4">
            <input
              placeholder="Enter your name*"
              className="w-full rounded-lg border px-4 py-3 text-sm focus:outline-none placeholder:text-[#2F3A45]/50"
              maxLength={500}
              required
              type="text"
              value={name}
              onChange={(e) => setName(e.target.value)}
              style={{
                borderColor: 'rgba(47, 58, 69, 0.4)',
                color: 'rgb(47, 58, 69)',
                backgroundColor: 'transparent',
              }}
              dir="auto"
            />
          </div>

          {/* Wishes Textarea */}
          <textarea
            placeholder="Enter your wishes*"
            className="w-full rounded-lg border px-4 py-3 text-sm focus:outline-none placeholder:text-[#2F3A45]/50 leading-relaxed"
            rows={4}
            maxLength={10000}
            required
            value={message}
            onChange={(e) => setMessage(e.target.value)}
            style={{
              borderColor: 'rgba(47, 58, 69, 0.4)',
              color: 'rgb(47, 58, 69)',
              backgroundColor: 'transparent',
              resize: 'none',
            }}
            dir="auto"
          />

          {/* Bottom Action Row */}
          <div className="mt-4 flex items-center justify-between text-xs">
            <div className="flex items-center text-xs space-x-1">
              <button
                type="button"
                onClick={handleMagicAiWish}
                className="p-2.5 rounded-lg transition-all duration-200 hover:scale-110 text-base leading-none cursor-pointer flex items-center justify-center shadow-sm"
                title="Generate wish with AI"
                style={{
                  backgroundColor: 'rgba(33, 85, 137, 0.1)',
                  color: 'rgb(33, 85, 137)',
                }}
              >
                🪄
              </button>
            </div>

            <button
              type="submit"
              disabled={isSubmitting}
              className="rounded-full px-7 py-2.5 text-sm font-semibold text-white transition-transform hover:scale-105 active:scale-95 cursor-pointer shadow-md font-baskerville tracking-wider uppercase disabled:opacity-50"
              style={{ backgroundColor: 'rgb(33, 85, 137)' }}
            >
              <span dir="auto">{isSubmitting ? 'SENDING...' : 'SEND WISHES'}</span>
            </button>
          </div>
        </div>
      </form>

      {/* Wishes Feed */}
      <div className="mt-6 space-y-3 max-h-[420px] overflow-y-auto pr-1">
        {wishes.length === 0 ? (
          <div className="text-center py-6 px-4 rounded-xl border border-dashed border-[#215589]/20 bg-white/30 text-[#2F3A45]/70 text-xs sm:text-sm">
            <Heart className="w-6 h-6 text-[#215589]/40 mx-auto mb-2" />
            <span>Be the first to leave a wish for the happy couple! 🤍</span>
          </div>
        ) : (
          wishes.map((w) => (
            <div
              key={w.id}
              className="rounded-xl border border-[#215589]/20 bg-white/70 p-4 text-sm shadow-sm transition-all hover:shadow"
            >
              <div className="flex items-center justify-between mb-1.5">
                <span className="font-semibold text-[#215589] flex items-center gap-1.5">
                  <Heart className="w-3.5 h-3.5 text-[#215589] fill-current opacity-75" />
                  {w.name}
                </span>
                <span className="text-[11px] text-[#2F3A45]/60 font-sans">
                  {w.createdAt}
                </span>
              </div>
              <p className="text-xs sm:text-sm text-[#2F3A45] leading-relaxed" dir="auto">
                {w.message}
              </p>
            </div>
          ))
        )}
      </div>
    </section>
  );
};

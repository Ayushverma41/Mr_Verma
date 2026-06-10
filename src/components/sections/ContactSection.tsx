'use client';

import { useMemo, useState } from 'react';
import Header, { Section } from '@/components/layout/Header';

const contactLinks = [
  { label: 'GitHub', href: 'https://github.com/Ayushverma41' },
  { label: 'LinkedIn', href: 'https://linkedin.com/in/ayushverma41/' },
  { label: 'Email', href: 'mailto:ayush21032016@gmail.com' },
  { label: 'Linktree', href: 'https://linktr.ee/ayush21032016' },
];

export default function ContactSection() {
  const [message, setMessage] = useState('');
  const [chat, setChat] = useState<{ from: 'You' | 'Ayush'; text: string }[]>([
    { from: 'Ayush', text: 'Hi, share your project or role details. I will reply soon.' },
  ]);

  const canSend = useMemo(() => message.trim().length > 0, [message]);

  function onSend() {
    if (!canSend) return;
    const text = message.trim();
    setChat((prev) => [
      ...prev,
      { from: 'You', text },
      { from: 'Ayush', text: 'Thanks for reaching out. I will review and get back to you.' },
    ]);
    setMessage('');
  }

  return (
    <Section id="contact">
      <Header title="Contact" subtitle="Chat directly from portfolio" />
      <div className="grid gap-6 md:grid-cols-2">
        <div className="rounded-xl border border-slate-800 bg-slate-900/60 p-5">
          <h3 className="font-semibold">Direct Contact</h3>
          <ul className="mt-3 space-y-2 text-sm text-slate-300">
            {contactLinks.map((s) => (
              <li key={s.label}><a href={s.href} target="_blank" rel="noopener noreferrer" className="hover:text-cyan-300">{s.label}</a></li>
            ))}
          </ul>
        </div>

        <div className="rounded-xl border border-slate-800 bg-slate-900/60 p-5">
          <div className="mb-4 h-60 space-y-2 overflow-y-auto rounded border border-slate-800 p-3">
            {chat.map((line, idx) => (
              <p key={`${line.from}-${idx}`} className="text-sm">
                <span className="font-semibold text-cyan-300">{line.from}:</span> {line.text}
              </p>
            ))}
          </div>
          <div className="flex gap-2">
            <input
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              placeholder="Type your message..."
              className="w-full rounded border border-slate-700 bg-slate-950 px-3 py-2 text-sm outline-none"
            />
            <button type="button" onClick={onSend} className="rounded bg-cyan-400 px-4 py-2 text-sm font-semibold text-slate-950">
              Send
            </button>
          </div>
        </div>
      </div>
    </Section>
  );
}

"use client";

import { useState } from "react";

// Mockup form: nothing is sent anywhere. Submitting just shows a thank-you message.
export default function ContactForm() {
  const [sent, setSent] = useState(false);

  if (sent) {
    return (
      <div className="flex h-full flex-col items-center justify-center rounded-2xl border border-line bg-card p-8 text-center">
        <p className="font-display text-2xl font-semibold">Thanks for reaching out!</p>
        <p className="mt-2 text-muted">This is a demo form, so no message was actually sent.</p>
        <button
          type="button"
          onClick={() => setSent(false)}
          className="mt-6 text-sm font-semibold text-accent hover:underline"
        >
          Send another message
        </button>
      </div>
    );
  }

  const inputClass =
    "w-full rounded-xl border border-line bg-paper px-4 py-3 outline-none transition-colors placeholder:text-muted/70 focus:border-accent";

  return (
    <form
      onSubmit={(e) => {
        e.preventDefault();
        setSent(true);
      }}
      className="space-y-4 rounded-2xl border border-line bg-card p-6 sm:p-8"
    >
      <div className="grid gap-4 sm:grid-cols-2">
        <label className="block">
          <span className="mb-1.5 block text-sm font-medium">Name</span>
          <input required name="name" placeholder="Your name" className={inputClass} />
        </label>
        <label className="block">
          <span className="mb-1.5 block text-sm font-medium">Email</span>
          <input required type="email" name="email" placeholder="you@example.com" className={inputClass} />
        </label>
      </div>
      <label className="block">
        <span className="mb-1.5 block text-sm font-medium">Message</span>
        <textarea
          required
          name="message"
          rows={5}
          placeholder="Tell me about your project or opportunity..."
          className={`${inputClass} resize-none`}
        />
      </label>
      <button
        type="submit"
        className="w-full rounded-full bg-accent px-6 py-3 font-semibold text-accent-ink transition-opacity hover:opacity-90 sm:w-auto"
      >
        Send message
      </button>
    </form>
  );
}

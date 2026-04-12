"use client";

import { useState } from "react";
import { SiteIcon } from "./site-icons";

export function ContactForm() {
  const [submitted, setSubmitted] = useState(false);

  return (
    <form
      onSubmit={(event) => {
        event.preventDefault();
        setSubmitted(true);
      }}
      className="space-y-4 rounded-[1.75rem] border border-[color:var(--border)] bg-white/92 p-6 shadow-[0_16px_45px_rgba(17,17,17,0.05)]"
    >
      <div className="grid gap-4 sm:grid-cols-2">
        <label className="space-y-2 text-sm font-medium text-[var(--foreground)]">
          Name
          <input
            className="w-full rounded-2xl border border-[color:var(--border)] bg-[var(--background)] px-4 py-3 text-sm outline-none transition focus:border-[var(--accent)]"
            name="name"
            placeholder="Your name"
          />
        </label>
        <label className="space-y-2 text-sm font-medium text-[var(--foreground)]">
          Email
          <input
            className="w-full rounded-2xl border border-[color:var(--border)] bg-[var(--background)] px-4 py-3 text-sm outline-none transition focus:border-[var(--accent)]"
            name="email"
            type="email"
            placeholder="you@company.com"
          />
        </label>
      </div>
      <label className="space-y-2 text-sm font-medium text-[var(--foreground)]">
        Project summary
        <textarea
          className="min-h-36 w-full rounded-2xl border border-[color:var(--border)] bg-[var(--background)] px-4 py-3 text-sm outline-none transition focus:border-[var(--accent)]"
          name="message"
          placeholder="Tell us what you want to launch."
        />
      </label>
      <button
        type="submit"
        className="inline-flex items-center justify-center gap-2 rounded-full bg-[var(--accent)] px-5 py-3 text-sm font-semibold text-white transition hover:bg-[var(--accent-strong)]"
      >
        Send inquiry
        <SiteIcon name="arrow-right" className="h-4 w-4" />
      </button>
      {submitted ? (
        <p className="text-sm text-[var(--accent)]">
          Thanks. This milestone keeps the form local only, so the BE worker can wire delivery later.
        </p>
      ) : (
        <p className="text-sm text-[var(--muted)]">
          Placeholder form for milestone 1. Backend delivery will be wired by the content team.
        </p>
      )}
    </form>
  );
}

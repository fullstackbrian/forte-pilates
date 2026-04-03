"use client";

import { useState } from "react";

export function ContactForm() {
  const [status, setStatus] = useState<"idle" | "sending" | "sent" | "error">(
    "idle"
  );

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setStatus("sending");

    const form = e.currentTarget;
    const data = new FormData(form);

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          name: data.get("name"),
          email: data.get("email"),
          phone: data.get("phone"),
          message: data.get("message"),
        }),
      });

      if (res.ok) {
        setStatus("sent");
        form.reset();
      } else {
        setStatus("error");
      }
    } catch {
      setStatus("error");
    }
  }

  if (status === "sent") {
    return (
      <div className="p-10 border border-gold/20 text-center">
        <div className="flex items-center justify-center gap-4 mb-4">
          <span className="block h-px w-8 bg-gold/40" />
          <span className="block w-1.5 h-1.5 rounded-full bg-gold/50" />
          <span className="block h-px w-8 bg-gold/40" />
        </div>
        <p className="text-xl font-forum mb-2">Thank you</p>
        <p className="text-charcoal-light text-sm">
          We have received your message and will get back to you soon.
        </p>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-6">
      <div>
        <label
          htmlFor="name"
          className="block text-xs tracking-[0.15em] uppercase text-brown/70 mb-2"
        >
          Name
        </label>
        <input
          type="text"
          id="name"
          name="name"
          required
          className="w-full px-4 py-3.5 bg-cream-light border border-brown/10 focus:border-gold/50 focus:outline-none transition-colors duration-300 text-sm"
          placeholder="Your name"
        />
      </div>
      <div>
        <label
          htmlFor="email"
          className="block text-xs tracking-[0.15em] uppercase text-brown/70 mb-2"
        >
          Email
        </label>
        <input
          type="email"
          id="email"
          name="email"
          required
          className="w-full px-4 py-3.5 bg-cream-light border border-brown/10 focus:border-gold/50 focus:outline-none transition-colors duration-300 text-sm"
          placeholder="your@email.com"
        />
      </div>
      <div>
        <label
          htmlFor="phone"
          className="block text-xs tracking-[0.15em] uppercase text-brown/70 mb-2"
        >
          Phone{" "}
          <span className="normal-case tracking-normal text-charcoal-light/50">
            (optional)
          </span>
        </label>
        <input
          type="tel"
          id="phone"
          name="phone"
          className="w-full px-4 py-3.5 bg-cream-light border border-brown/10 focus:border-gold/50 focus:outline-none transition-colors duration-300 text-sm"
          placeholder="(213) 555-0000"
        />
      </div>
      <div>
        <label
          htmlFor="message"
          className="block text-xs tracking-[0.15em] uppercase text-brown/70 mb-2"
        >
          Message
        </label>
        <textarea
          id="message"
          name="message"
          required
          rows={5}
          className="w-full px-4 py-3.5 bg-cream-light border border-brown/10 focus:border-gold/50 focus:outline-none transition-colors duration-300 resize-none text-sm"
          placeholder="Tell us how we can help..."
        />
      </div>
      <button
        type="submit"
        disabled={status === "sending"}
        className="w-full py-4 bg-blush text-charcoal font-forum text-xs tracking-[0.2em] uppercase hover:bg-blush-dark transition-colors duration-300 disabled:opacity-50 cursor-pointer"
      >
        {status === "sending" ? "Sending..." : "Send Message"}
      </button>
      {status === "error" && (
        <p className="text-red-700/70 text-xs text-center">
          Something went wrong. Please try again or email us directly.
        </p>
      )}
    </form>
  );
}

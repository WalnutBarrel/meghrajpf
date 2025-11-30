"use client";
import { useState } from "react";
import { motion } from "framer-motion";

export default function ContactPage() {
  const [status, setStatus] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    setStatus("Sending...");

    setTimeout(() => {
      setStatus("Message sent! I'll reply soon 🚀");
    }, 1000);
  };

  return (
    <section className="mt-4 max-w-3xl mx-auto">
      <motion.h1
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="text-4xl font-display text-center mb-3"
      >
        Let’s Build Something <span className="text-primary">Impactful</span>
      </motion.h1>

      <p className="text-center text-zinc-400 mb-10">
        Want to collaborate, hire, or discuss a project?  
        Fill this form — I respond quickly.
      </p>

      <motion.form
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: 1, scale: 1 }}
        onSubmit={handleSubmit}
        className="glass rounded-3xl p-6 space-y-4"
      >
        <input
          type="text"
          placeholder="Your Name"
          required
          className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-sm outline-none placeholder:text-zinc-500"
        />

        <input
          type="email"
          placeholder="Your Email"
          required
          className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-sm outline-none placeholder:text-zinc-500"
        />

        <textarea
          rows={5}
          placeholder="Your Message..."
          required
          className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-sm outline-none placeholder:text-zinc-500"
        ></textarea>

        <button
          type="submit"
          className="w-full rounded-xl bg-primary text-black font-semibold py-3 text-sm hover:bg-primary/80 transition"
        >
          Send Message 🚀
        </button>

        {status && (
          <p className="text-center text-emerald-400 text-sm mt-1">{status}</p>
        )}
      </motion.form>
    </section>
  );
}

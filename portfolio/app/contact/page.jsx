"use client";
import { useState } from "react";
import { motion } from "framer-motion";
import { Mail, User, MessageSquare } from "lucide-react";

export default function ContactPage() {
  const [status, setStatus] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    setStatus("Sending...");

    setTimeout(() => {
      setStatus("Message sent successfully! 🚀 I will reach you soon.");
    }, 1000);
  };

  return (
    <main className="pt-28 pb-20 max-w-3xl mx-auto px-6">

      {/* Header */}
      <motion.h1
        initial={{ opacity: 0, y: 15 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.4 }}
        className="text-4xl md:text-5xl font-semibold text-center"
      >
        Let's Build Something{" "}
        <span className="text-primary">Meaningful</span>
      </motion.h1>

      <motion.p
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.4, delay: 0.1 }}
        className="mt-3 text-center text-zinc-400 text-[15px]"
      >
        Whether it’s a product idea, collaboration or problem to solve — 
        don’t hesitate to reach out.
      </motion.p>

      {/* Contact Form */}
      <motion.form
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.2, duration: 0.5 }}
        onSubmit={handleSubmit}
        className="glass rounded-3xl p-8 mt-12 space-y-5 border border-white/10 shadow-[0_0_25px_#00eaff10]"
      >
        {/* Name */}
        <div className="relative">
          <User className="absolute left-4 top-3 text-zinc-500 h-5 w-5" />
          <input
            type="text"
            placeholder="Your Name"
            required
            className="w-full bg-white/5 pl-12 py-3 border border-white/10 rounded-lg 
                       text-sm placeholder:text-zinc-500 focus:border-primary outline-none transition"
          />
        </div>

        {/* Email */}
        <div className="relative">
          <Mail className="absolute left-4 top-3 text-zinc-500 h-5 w-5" />
          <input
            type="email"
            placeholder="Your Email"
            required
            className="w-full bg-white/5 pl-12 py-3 border border-white/10 rounded-lg 
                       text-sm placeholder:text-zinc-500 focus:border-primary outline-none transition"
          />
        </div>

        {/* Message */}
        <div className="relative">
          <MessageSquare className="absolute left-4 top-3 text-zinc-500 h-5 w-5" />
          <textarea
            rows={5}
            placeholder="Write your message..."
            required
            className="w-full bg-white/5 pl-12 py-3 border border-white/10 rounded-lg
                       text-sm placeholder:text-zinc-500 focus:border-primary outline-none transition"
          ></textarea>
        </div>

        {/* Submit */}
        <motion.button
          whileHover={{ scale: 1.03 }}
          whileTap={{ scale: 0.97 }}
          type="submit"
          className="w-full rounded-lg bg-primary text-black font-semibold py-3 text-sm shadow-[0_0_20px_#00eaff50] hover:shadow-[0_0_35px_#00eaff80] transition"
        >
          Send Message 🚀
        </motion.button>

        {status && (
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="text-center text-emerald-400 text-sm mt-2"
          >
            {status}
          </motion.p>
        )}
      </motion.form>
    </main>
  );
}

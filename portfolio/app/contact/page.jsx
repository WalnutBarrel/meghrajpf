"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import emailjs from "emailjs-com";

export default function ContactPage() {
  const [status, setStatus] = useState("");

  const sendEmail = (e) => {
    e.preventDefault();
    setStatus("Sending...");

    emailjs
      .sendForm(
        "service_y8wumaj",    // your service ID
        "template_k42rjxf",   // your template ID
        e.target,
        "gA0DPDw4nIKsemMCR"   // your public key
      )
      .then(() => {
        setStatus("Message sent! I’ll reply soon 🚀");
        e.target.reset();
      })
      .catch(() => setStatus("Error sending message ❌"));
  };

  return (
    <section className="max-w-3xl mx-auto pt-24 pb-32 px-6 text-center">

      {/* HEADING */}
      <motion.h1
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="text-4xl md:text-5xl font-semibold font-display mb-4"
      >
        Let’s Build Something <span className="text-primary">Impactful</span>
      </motion.h1>

      <p className="text-zinc-400 mb-12 max-w-xl mx-auto text-sm md:text-base leading-relaxed">
        Collaboration? Internship? Freelance?  
        Drop a message — I respond fast ⚡
      </p>

      {/* FORM */}
      <motion.form
        onSubmit={sendEmail}
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: 1, scale: 1 }}
        className="glass rounded-3xl px-8 py-10 space-y-6 w-full"
      >

        {/* 2 Input Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <input
            name="name"
            type="text"
            placeholder="Your Name"
            required
            className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 
                      text-sm placeholder:text-zinc-500 focus:border-primary outline-none"
          />

          <input
            name="email"
            type="email"
            placeholder="Your Email"
            required
            className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 
                      text-sm placeholder:text-zinc-500 focus:border-primary outline-none"
          />
        </div>

        {/* Message Box */}
        <textarea
          name="message"
          rows="6"
          placeholder="Your Message..."
          required
          className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 
                    text-sm placeholder:text-zinc-500 focus:border-primary outline-none resize-none"
        />

        {/* Submit Button */}
        <button
          type="submit"
          className="w-full py-3 rounded-xl bg-[#00eaff] text-black font-semibold 
                    hover:bg-[#00dbf2] transition shadow-[0_0_18px_#00eaff80]"
        >
          Send Message 🚀
        </button>

        {status && <p className="text-sm text-emerald-400 mt-2">{status}</p>}
      </motion.form>
    </section>
  );
}

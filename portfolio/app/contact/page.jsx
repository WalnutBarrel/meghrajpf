"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import emailjs from "emailjs-com";

export default function ContactPage() {
  const [status, setStatus] = useState("");

  const sendEmail = (e) => {
    e.preventDefault();
    setStatus("Sending...");

    emailjs.sendForm(
      "YOUR_SERVICE_ID",      // <-- replace
      "YOUR_TEMPLATE_ID",     // <-- replace
      e.target, 
      "YOUR_PUBLIC_KEY"       // <-- replace
    )
    .then(() => {
      setStatus("Message sent! I’ll reply soon 🚀");
      e.target.reset(); // clear form
    })
    .catch(() => setStatus("Error sending message ❌"));
  };

  return (
    <section className="mt-4 max-w-3xl mx-auto text-center">
      <motion.h1
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="text-4xl font-display mb-3"
      >
        Let’s Build Something <span className="text-primary">Impactful</span>
      </motion.h1>

      <p className="text-zinc-400 mb-10">
        Fill the form — Your message will be delivered to my email inbox.
      </p>

      <motion.form
        onSubmit={sendEmail}
        className="glass rounded-3xl p-6 space-y-4"
      >
        <input name="name" type="text" placeholder="Your Name" required className="input-field" />
        <input name="email" type="email" placeholder="Your Email" required className="input-field" />
        <textarea name="message" rows="5" placeholder="Your Message..." required className="input-field" />

        <button
          type="submit"
          className="w-full rounded-xl bg-primary text-black font-semibold py-3 hover:bg-primary/80 transition"
        >
          Send Message 🚀
        </button>

        {status && <p className="text-sm mt-2 text-emerald-400">{status}</p>}
      </motion.form>
    </section>
  );
}

"use client";

import Link from "next/link";
import { motion } from "framer-motion";

export default function Navbar() {
  return (
    <motion.nav
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      className="glass fixed top-5 left-1/2 -translate-x-1/2 flex gap-6 px-8 py-3 rounded-full backdrop-blur-xl border border-white/10 shadow-[0_0_25px_rgba(0,0,0,.4)] text-sm z-50"
    >
      <Link href="/" className="hover:text-primary">Home</Link>
      <Link href="/about" className="hover:text-primary">About</Link>
      <Link href="/projects" className="hover:text-primary">Projects</Link>
      <Link href="/contact" className="hover:text-primary">Contact</Link>
    </motion.nav>
  );
}

"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowDown, BookOpen, Sparkles } from "lucide-react";

export function BlogHero() {
  return (
    <section className="relative mx-auto max-w-7xl overflow-hidden px-4 py-16 md:px-6 md:py-24" aria-labelledby="blog-hero-title">
      <div className="absolute inset-0 -z-10 rounded-[2rem] border border-white/10 bg-[radial-gradient(circle_at_20%_20%,rgba(255,90,0,.22),transparent_28rem),linear-gradient(135deg,rgba(255,255,255,.08),rgba(255,255,255,.02))]" />
      <motion.div
        className="absolute right-8 top-10 -z-10 h-40 w-40 rounded-full bg-ember/20 blur-3xl"
        animate={{ y: [0, 18, 0], scale: [1, 1.08, 1] }}
        transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
      />
      <motion.div
        className="absolute bottom-8 left-8 -z-10 h-28 w-28 rounded-3xl border border-ember/20 bg-white/5 blur-[1px]"
        animate={{ y: [0, -14, 0], rotate: [0, 8, 0] }}
        transition={{ duration: 9, repeat: Infinity, ease: "easeInOut" }}
      />

      <div className="grid items-center gap-10 lg:grid-cols-[1fr_.72fr]">
        <div>
          <motion.p
            initial={{ opacity: 0, y: 18 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.55, ease: "easeOut" }}
            className="mb-5 inline-flex items-center gap-2 rounded-full border border-ember/40 bg-ember/10 px-4 py-2 text-sm uppercase tracking-[.18em] text-ember"
          >
            <Sparkles className="h-4 w-4" aria-hidden />
            Legendary Journal
          </motion.p>
          <motion.h1
            id="blog-hero-title"
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, ease: "easeOut" }}
            className="text-balance max-w-4xl text-5xl leading-[1.05] md:text-7xl"
          >
            Insights, Stories & Updates
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 28 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.12, ease: "easeOut" }}
            className="mt-6 max-w-2xl text-lg leading-8 text-zinc-300"
          >
            Practical thinking on strategy, design, technology, Web3, and growth for brands building better digital products.
          </motion.p>
          <motion.div
            initial={{ opacity: 0, y: 28 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.22, ease: "easeOut" }}
            className="mt-9 flex flex-col gap-4 sm:flex-row sm:items-center"
          >
            <motion.div whileHover={{ scale: 1.03 }} whileTap={{ scale: 0.98 }}>
              <Link
                href="#articles"
                className="focus-ring inline-flex min-h-12 items-center justify-center gap-3 rounded-xl bg-ember px-5 text-sm text-white shadow-glow transition hover:bg-emberSoft"
              >
                Explore Articles
                <ArrowDown className="h-4 w-4" aria-hidden />
              </Link>
            </motion.div>
            <Link href="#articles" className="focus-ring inline-flex min-h-12 items-center text-sm text-zinc-300 transition hover:text-ember">
              Latest posts, guides, and resources
            </Link>
          </motion.div>
        </div>

        <motion.aside
          initial={{ opacity: 0, y: 28 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.75, delay: 0.18, ease: "easeOut" }}
          className="glass orange-border rounded-2xl p-6"
          aria-label="Blog highlights"
        >
          <div className="mb-7 flex items-center gap-3">
            <span className="grid h-12 w-12 place-items-center rounded-2xl bg-ember/10 text-ember">
              <BookOpen className="h-6 w-6" aria-hidden />
            </span>
            <div>
              <p className="text-sm uppercase tracking-[.18em] text-ember">Featured Focus</p>
              <h2 className="mt-1 text-2xl">Build smarter online</h2>
            </div>
          </div>
          <div className="grid gap-3">
            {["Digital product strategy", "Conversion-focused UI/UX", "Web3 launch playbooks"].map((item) => (
              <div key={item} className="rounded-xl border border-white/10 bg-white/5 px-4 py-3 text-sm text-zinc-300">
                {item}
              </div>
            ))}
          </div>
        </motion.aside>
      </div>
    </section>
  );
}

"use client";

import Link from "next/link";
import { useState } from "react";
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import { Footer, Header } from "@/components/site-chrome";
import { PageShell, Reveal } from "@/components/ui";
import { caseStudies } from "@/lib/data";
import Image from "next/image";

const tabs = ["All", "Websites", "Apps", "UI/UX", "Web3", "Branding"];

export default function WorkPage() {
  const [active, setActive] = useState("All");

  const filtered =
    active === "All"
      ? caseStudies
      : caseStudies.filter((item) => item.category === active);

  return (
    <PageShell>
      <Header />

      <section className="mx-auto max-w-7xl px-4 py-16 md:px-6">
        <Reveal>
          <p className="text-sm font-black uppercase tracking-[.22em] text-ember">
            Portfolio
          </p>

          <h1 className="mt-4 text-5xl font-black md:text-7xl">Our Work</h1>

          <p className="mt-6 max-w-3xl text-lg leading-8 text-zinc-300">
            Explore digital products, websites, apps and brand experiences we
            have built.
          </p>
        </Reveal>

        <Reveal delay={0.1} className="mt-10 flex flex-wrap gap-3">
          {tabs.map((tab) => (
            <button
              key={tab}
              onClick={() => setActive(tab)}
              className={`focus-ring rounded-xl border px-4 py-2 text-sm font-bold transition ${
                active === tab
                  ? "border-ember bg-ember text-white"
                  : "border-white/10 bg-white/5 text-zinc-300 hover:border-ember/60"
              }`}
            >
              {tab}
            </button>
          ))}
        </Reveal>

        <div className="mt-10 grid gap-5 md:grid-cols-2 lg:grid-cols-3">
          {filtered.map((study) => (
            <Reveal key={study.slug}>
              <motion.div whileHover={{ y: -8 }}>
                <article className="glass group flex min-h-80 flex-col rounded-2xl p-6 transition hover:border-ember/60">
                  <Link href={`/work/${study.slug}`} className="block">
                    <div className="relative mb-6 h-36 overflow-hidden rounded-xl border border-ember/20 bg-gradient-to-br from-ember/25 via-white/5 to-black">
                      <Image
                        src={study.imageUrl}
                        alt={`${study.title} project image`}
                        fill
                        sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                        className="object-cover transition duration-500 group-hover:scale-105"
                      />

                      <div className="absolute inset-0 bg-black/20" />

                      <span className="absolute left-5 top-5 rounded-full bg-black/60 px-3 py-1 text-sm font-bold text-ember">
                        {study.category}
                      </span>
                    </div>
                  </Link>

                  <Link href={`/work/${study.slug}`} className="block flex-1">
                    <h2 className="text-2xl font-black">{study.title}</h2>

                    <p className="mt-4 leading-7 text-zinc-300">
                      {study.description}
                    </p>

                    <ArrowRight className="mt-6 h-5 w-5 text-ember transition group-hover:translate-x-2" />
                  </Link>

                  <div className="mt-6 flex flex-col gap-3 sm:flex-row">
                    <a
                      href={study.codeUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="focus-ring inline-flex min-h-11 items-center justify-center rounded-xl border border-ember/70 px-4 text-sm transition hover:bg-ember/10"
                    >
                      View Code
                    </a>

                    <a
                      href={study.demoUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="focus-ring inline-flex min-h-11 items-center justify-center rounded-xl bg-ember px-4 text-sm text-white shadow-glow transition hover:bg-emberSoft"
                    >
                      View Live Demo
                    </a>
                  </div>
                </article>
              </motion.div>
            </Reveal>
          ))}
        </div>
      </section>

      <Footer />
    </PageShell>
  );
}

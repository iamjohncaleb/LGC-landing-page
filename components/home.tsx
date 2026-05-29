"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowRight, BadgeCheck, BarChart3 } from "lucide-react";
import { ButtonLink, Counter, Reveal, SectionHeading } from "@/components/ui";
import { services, stats } from "@/lib/data";

export function Hero() {
  return (
    <section className="mx-auto grid max-w-7xl items-center gap-12 px-4 pb-16 pt-12 md:px-6 lg:min-h-[760px] lg:grid-cols-[.85fr_1.15fr]">
      <div className="relative z-10">
        <motion.p initial={{ opacity: 0, y: 18 }} animate={{ opacity: 1, y: 0 }} className="mb-6 text-sm font-black uppercase tracking-[.18em] text-ember">
          Innovate. Build. Scale.
        </motion.p>
        <motion.h1 initial={{ opacity: 0, y: 24 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.08 }} className="text-balance text-5xl font-black leading-[1.06] sm:text-6xl lg:text-7xl">
          We Build Digital Solutions For The <span className="text-ember">Future.</span>
        </motion.h1>
        <motion.p initial={{ opacity: 0, y: 24 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.16 }} className="mt-7 max-w-2xl text-lg leading-8 text-zinc-300">
          We build websites, apps, Web3 products and digital systems that help ambitious brands launch faster, operate smarter and scale online.
        </motion.p>
        <motion.div initial={{ opacity: 0, y: 24 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.24 }} className="mt-9 flex flex-col gap-4 sm:flex-row">
          <ButtonLink href="/start-project">Start Your Project</ButtonLink>
          <ButtonLink href="/work" variant="ghost">View Our Work</ButtonLink>
        </motion.div>
        <TrustedBy />
      </div>

      <motion.div initial={{ opacity: 0, scale: 0.96 }} animate={{ opacity: 1, scale: 1 }} transition={{ duration: 0.9 }} className="relative min-h-[520px] lg:min-h-[660px]">
        <motion.div animate={{ y: [0, -12, 0], rotate: [0, .5, 0] }} transition={{ duration: 7, repeat: Infinity, ease: "easeInOut" }} className="absolute inset-0">
          <Image src="/astronaut-hero.png" alt="Futuristic astronaut representing Legendary Consults digital innovation" fill priority className="object-cover object-center opacity-90 [mask-image:radial-gradient(circle_at_center,black_52%,transparent_78%)]" />
        </motion.div>
        <div className="absolute inset-0 bg-radial-ember opacity-50" />
        <motion.div animate={{ y: [0, -16, 0] }} transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }} className="glass orange-border absolute bottom-8 right-0 w-full max-w-xs rounded-2xl p-6 sm:right-6">
          <div className="mb-4 flex items-center gap-3">
            <span className="grid h-11 w-11 place-items-center rounded-full border border-ember/70 text-ember">
              <BadgeCheck className="h-5 w-5" />
            </span>
            <h3 className="text-xl font-black">Mission <span className="block text-ember">Success</span></h3>
          </div>
          <p className="leading-7 text-zinc-300">Turning ideas into impactful digital realities.</p>
          <div className="mt-5 flex items-center gap-3">
            <BarChart3 className="h-6 w-6 text-ember" />
            <div className="h-2 flex-1 overflow-hidden rounded-full bg-white/10">
              <motion.div initial={{ width: 0 }} animate={{ width: "98%" }} transition={{ delay: 0.8, duration: 1.4 }} className="h-full rounded-full bg-ember" />
            </div>
            <span className="text-sm font-bold text-ember">98%</span>
          </div>
        </motion.div>
      </motion.div>
    </section>
  );
}

function TrustedBy() {
  return (
    <Reveal delay={0.35} className="mt-14">
      <p className="text-sm text-zinc-300">Trusted by <span className="font-bold text-ember">100+</span> businesses worldwide</p>
      <div className="mt-5 grid grid-cols-2 gap-3 sm:grid-cols-5">
        {["ACME Corp", "Visionary", "Quantum", "Sitemark", "Nextwave"].map((name) => (
          <div key={name} className="group flex items-center gap-2 text-sm font-bold uppercase tracking-wide text-zinc-500 transition hover:text-zinc-200">
            {name}
          </div>
        ))}
      </div>
    </Reveal>
  );
}

export function ServicesGrid() {
  return (
    <section id="services" className="mx-auto max-w-7xl scroll-mt-24 px-4 py-16 md:px-6">
      <SectionHeading eyebrow="Services" title="A complete digital launch partner" text="Move from idea to polished product with strategy, design, development and operational support under one roof." />
      <div className="mt-10 grid gap-5 md:grid-cols-2 xl:grid-cols-5">
        {services.map((service, index) => (
          <Reveal key={service.slug} delay={index * 0.04}>
            <motion.div whileHover={{ y: -10 }} className="h-full">
              <Link href={`/services/${service.slug}`} className="group glass flex h-full min-h-64 flex-col justify-between rounded-2xl p-6 transition hover:border-ember/70 hover:shadow-glow">
                <span className="grid h-14 w-14 place-items-center rounded-2xl border border-ember/30 bg-ember/10 text-ember transition group-hover:shadow-glow">
                  <service.icon className="h-7 w-7" />
                </span>
                <div>
                  <h3 className="mt-8 text-2xl font-black">{service.title}</h3>
                  <p className="mt-4 leading-7 text-zinc-300">{service.description}</p>
                </div>
                <ArrowRight className="mt-7 h-5 w-5 text-ember transition group-hover:translate-x-2" />
              </Link>
            </motion.div>
          </Reveal>
        ))}
      </div>
    </section>
  );
}

export function StatsBand() {
  return (
    <section className="mx-auto max-w-7xl px-4 py-10 md:px-6">
      <Reveal>
        <div className="glass orange-border grid gap-6 rounded-2xl p-6 md:grid-cols-4 md:p-8">
          {stats.map((stat) => (
            <div key={stat.label} className="flex items-center gap-5 border-white/10 md:border-r md:last:border-r-0">
              <span className="grid h-16 w-16 shrink-0 place-items-center rounded-full bg-ember/10 text-ember">
                <stat.icon className="h-9 w-9" />
              </span>
              <div>
                <p className="text-3xl font-black"><Counter value={stat.value} suffix={stat.suffix} /></p>
                <p className="mt-1 text-sm text-zinc-300">{stat.label}</p>
              </div>
            </div>
          ))}
        </div>
      </Reveal>
    </section>
  );
}

export function ConversionCta() {
  return (
    <section className="mx-auto max-w-7xl px-4 py-16 md:px-6">
      <Reveal>
        <div className="orange-border rounded-2xl bg-gradient-to-br from-ember/20 via-white/[.04] to-black p-8 md:p-12">
          <div className="grid gap-8 md:grid-cols-[1fr_auto] md:items-center">
            <div>
              <p className="text-sm font-bold uppercase tracking-[.22em] text-ember">Launch with clarity</p>
              <h2 className="mt-3 text-3xl font-black md:text-5xl">Tell us what you want to build. We will map the next move.</h2>
            </div>
            <ButtonLink href="/start-project">Start Your Project</ButtonLink>
          </div>
        </div>
      </Reveal>
    </section>
  );
}

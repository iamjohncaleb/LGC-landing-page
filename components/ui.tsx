"use client";

import Link from "next/link";
import { motion, useInView, useMotionValue, useSpring, useTransform } from "framer-motion";
import { ArrowRight, Loader2, Mail, PlayCircle } from "lucide-react";
import { useEffect, useRef, useState } from "react";

export function Reveal({ children, className = "", delay = 0 }: { children: React.ReactNode; className?: string; delay?: number }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 26 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-80px" }}
      transition={{ duration: 0.65, delay, ease: "easeOut" }}
      className={className}
    >
      {children}
    </motion.div>
  );
}

export function PageShell({ children }: { children: React.ReactNode }) {
  return (
    <motion.main initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 0.35 }} className="min-h-screen overflow-hidden bg-night">
      <div className="pointer-events-none fixed inset-0 z-0 opacity-80">
        <div className="absolute left-[8%] top-28 h-72 w-72 rounded-full bg-ember/10 blur-3xl" />
        <div className="absolute right-[5%] top-12 h-96 w-96 rounded-full bg-ember/15 blur-3xl" />
        <ParticleField />
      </div>
      <div className="relative z-10">{children}</div>
    </motion.main>
  );
}

export function ButtonLink({
  href,
  children,
  variant = "primary",
  icon = true
}: {
  href: string;
  children: React.ReactNode;
  variant?: "primary" | "ghost";
  icon?: boolean;
}) {
  const isExternal = href.startsWith("http");
  const opensNewTab = isExternal && !href.startsWith("tel:");
  const classes =
    variant === "primary"
      ? "bg-ember text-white shadow-glow hover:bg-emberSoft"
      : "border border-ember/70 bg-white/5 text-white hover:bg-ember/10";
  return (
    <motion.div whileHover={{ scale: 1.03 }} whileTap={{ scale: 0.98 }}>
      <Link
        href={href}
        target={opensNewTab ? "_blank" : undefined}
        rel={opensNewTab ? "noreferrer" : undefined}
        className={`focus-ring inline-flex min-h-12 items-center justify-center gap-3 rounded-xl px-5 text-sm font-semibold transition ${classes}`}
      >
        {variant === "ghost" && <PlayCircle className="h-4 w-4 text-ember" aria-hidden />}
        {children}
        {icon && <ArrowRight className="h-4 w-4" aria-hidden />}
      </Link>
    </motion.div>
  );
}

export function SectionHeading({ eyebrow, title, text }: { eyebrow?: string; title: string; text?: string }) {
  return (
    <Reveal className="mx-auto max-w-3xl text-center">
      {eyebrow && <p className="mb-3 text-sm font-bold uppercase tracking-[.22em] text-ember">{eyebrow}</p>}
      <h2 className="text-balance text-3xl font-black md:text-5xl">{title}</h2>
      {text && <p className="mt-4 text-base leading-8 text-zinc-300 md:text-lg">{text}</p>}
    </Reveal>
  );
}

export function Counter({ value, suffix }: { value: number; suffix: string }) {
  const ref = useRef<HTMLSpanElement>(null);
  const inView = useInView(ref, { once: true });
  const motionValue = useMotionValue(0);
  const spring = useSpring(motionValue, { duration: 1800, bounce: 0 });
  const rounded = useTransform(spring, (latest) => Math.round(latest));
  const [display, setDisplay] = useState(value ? "0" : suffix);

  useEffect(() => {
    if (inView && value) motionValue.set(value);
  }, [inView, motionValue, value]);

  useEffect(() => rounded.on("change", (latest) => setDisplay(`${latest}${suffix}`)), [rounded, suffix]);

  return <span ref={ref}>{value ? display : suffix}</span>;
}

export function Field({
  label,
  as = "input",
  required = true,
  options
}: {
  label: string;
  as?: "input" | "textarea" | "select";
  required?: boolean;
  options?: string[];
}) {
  const name = label.toLowerCase().replace(/[^a-z0-9]+/g, "-");
  const base =
    "focus-ring mt-2 w-full rounded-xl border border-white/10 bg-black/40 px-4 py-3 text-sm text-white outline-none transition placeholder:text-zinc-600 focus:border-ember";
  return (
    <label className="block text-sm font-semibold text-zinc-200">
      {label}
      {as === "textarea" ? (
        <textarea name={name} required={required} rows={5} className={base} />
      ) : as === "select" ? (
        <select name={name} required={required} className={base} defaultValue="">
          <option value="" disabled>
            Select {label.toLowerCase()}
          </option>
          {options?.map((option) => (
            <option key={option}>{option}</option>
          ))}
        </select>
      ) : (
        <input name={name} required={required} className={base} />
      )}
    </label>
  );
}

export function LeadForm({ type }: { type: "project" | "contact" }) {
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);

  function onSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    if (!event.currentTarget.checkValidity()) {
      event.currentTarget.reportValidity();
      return;
    }
    const formData = new FormData(event.currentTarget);
    const entries = Array.from(formData.entries())
      .map(([key, value]) => [formatFieldName(key), String(value).trim()])
      .filter(([, value]) => value);
    const heading = type === "project" ? "Hello, I want to start a project." : "Hello, I want to contact Legendary Consults.";
    const details = entries.map(([key, value]) => `${key}:\n${value}`).join("\n\n");
    const message = `${heading}\n\n${details}`;
    window.open(`https://wa.me/2348135744156?text=${encodeURIComponent(message)}`, "_blank", "noopener,noreferrer");
    setLoading(true);
    window.setTimeout(() => {
      setLoading(false);
      setSubmitted(true);
    }, 700);
  }

  if (submitted) {
    return (
      <motion.div initial={{ opacity: 0, scale: 0.96 }} animate={{ opacity: 1, scale: 1 }} className="glass orange-border rounded-2xl p-8">
        <Mail className="mb-5 h-10 w-10 text-ember" />
        <h3 className="text-2xl font-black">{type === "project" ? "Your project request has been received." : "Your message has been sent."}</h3>
        <p className="mt-3 leading-7 text-zinc-300">Our team will contact you shortly.</p>
      </motion.div>
    );
  }

  return (
    <form onSubmit={onSubmit} className="glass rounded-2xl p-5 md:p-8">
      <div className="grid gap-5 md:grid-cols-2">
        {type === "project" ? (
          <>
            <Field label="Full Name" />
            <Field label="Email Address" />
            <Field label="Phone Number" />
            <Field label="Company/Brand Name" />
            <Field label="Project Type" as="select" options={["Website", "Mobile App", "UI/UX Design", "Branding/Graphics", "Web3 Project", "Consulting", "Other"]} />
            <Field label="Budget Range" as="select" options={["Under $2,500", "$2,500 - $5,000", "$5,000 - $15,000", "$15,000+", "Not sure yet"]} />
            <Field label="Timeline" as="select" options={["ASAP", "1 - 2 months", "3 - 6 months", "Flexible"]} />
            <div className="md:col-span-2">
              <Field label="Project Description" as="textarea" />
            </div>
          </>
        ) : (
          <>
            <Field label="Name" />
            <Field label="Email" />
            <div className="md:col-span-2">
              <Field label="Subject" />
            </div>
            <div className="md:col-span-2">
              <Field label="Message" as="textarea" />
            </div>
          </>
        )}
      </div>
      <motion.button
        whileHover={{ scale: 1.02 }}
        whileTap={{ scale: 0.98 }}
        className="focus-ring mt-6 inline-flex min-h-12 items-center justify-center gap-3 rounded-xl bg-ember px-6 text-sm font-bold text-white shadow-glow transition hover:bg-emberSoft disabled:cursor-wait disabled:opacity-70"
        disabled={loading}
      >
        {loading && <Loader2 className="h-4 w-4 animate-spin" />}
        {type === "project" ? "Send Project Request" : "Submit"}
      </motion.button>
    </form>
  );
}

function formatFieldName(name: string) {
  const overrides: Record<string, string> = {
    "full-name": "Name",
    "email-address": "Email",
    "phone-number": "Phone",
    "company-brand-name": "Company/Brand Name",
    "project-type": "Project Type",
    "budget-range": "Budget",
    "project-description": "Message"
  };
  return overrides[name] ?? name.replace(/-/g, " ").replace(/\b\w/g, (letter) => letter.toUpperCase());
}

function ParticleField() {
  const dots = Array.from({ length: 28 }, (_, i) => ({
    left: `${(i * 37) % 100}%`,
    top: `${(i * 19) % 100}%`,
    delay: (i % 9) * 0.18
  }));
  return (
    <div className="absolute inset-0">
      {dots.map((dot, index) => (
        <motion.span
          key={index}
          className="absolute h-1 w-1 rounded-full bg-ember/70"
          style={{ left: dot.left, top: dot.top }}
          animate={{ opacity: [0.15, 0.9, 0.15], y: [0, -14, 0] }}
          transition={{ duration: 4, delay: dot.delay, repeat: Infinity, ease: "easeInOut" }}
        />
      ))}
    </div>
  );
}

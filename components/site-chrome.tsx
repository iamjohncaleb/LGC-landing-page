"use client";

import Link from "next/link";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import {
  ArrowRight,
  ChevronDown,
  Globe2,
  Instagram,
  Linkedin,
  Menu,
  Twitter,
  X,
} from "lucide-react";
import { useState } from "react";
import { services } from "@/lib/data";
import { ThemeToggle } from "@/components/theme-provider";

const nav = [
  { label: "About Us", href: "/about" },
  { label: "Our Work", href: "/work" },
  { label: "Web3", href: "/web3" },
  { label: "Blog", href: "/blog" },
];

export function Header() {
  const [servicesOpen, setServicesOpen] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 border-b border-white/10 bg-night/75 backdrop-blur-xl">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-4 py-4 md:px-6">
        <Link
          href="/"
          className="focus-ring flex items-center gap-3 rounded-xl"
        >
          <span className="relative block h-12 w-12 overflow-hidden rounded-full shadow-glow">
            <Image
              src="/legendary-logo.jpg"
              alt="Legendary Consults logo"
              fill
              sizes="48px"
              className="object-cover"
              priority
            />
          </span>
          <span className="flex flex-col leading-[0.8]">
            <span className="block text-xl tracking-normal">LEGENDARY</span>
            <span className="block text-lg tracking-[.08em] text-ember -mt-2">
              CONSULTS
            </span>
          </span>
        </Link>

        <nav
          className="hidden items-center gap-8 lg:flex"
          aria-label="Main navigation"
        >
          <div
            className="relative"
            onMouseEnter={() => setServicesOpen(true)}
            onMouseLeave={() => setServicesOpen(false)}
          >
            <button
              onClick={() => setServicesOpen((open) => !open)}
              className="focus-ring flex items-center gap-2 rounded-lg text-sm font-semibold text-zinc-100 transition hover:text-ember"
              aria-expanded={servicesOpen}
            >
              Services <ChevronDown className="h-4 w-4" />
            </button>
            <AnimatePresence>
              {servicesOpen && (
                <motion.div
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: 10 }}
                  className="nav-dropdown absolute left-0 top-8 z-[9999] w-72 rounded-2xl border p-3"
                >
                  {services.map((service) => (
                    <Link
                      key={service.slug}
                      href={`/services/${service.slug}`}
                      className="nav-dropdown-item focus-ring mb-2 flex min-h-[46px] items-center gap-3 rounded-xl border px-3 py-3 text-sm font-semibold transition last:mb-0"
                    >
                      <service.icon className="h-4 w-4 text-ember" />
                      {service.title}
                    </Link>
                  ))}
                </motion.div>
              )}
            </AnimatePresence>
          </div>
          {nav.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="focus-ring rounded-lg text-sm font-semibold text-zinc-100 transition hover:text-ember"
            >
              {item.label}
            </Link>
          ))}
        </nav>

        <div className="hidden items-center gap-3 lg:flex">
          <Link
            href="/contact"
            className="focus-ring inline-flex min-h-12 items-center gap-3 rounded-xl border border-ember px-5 text-sm text-ember transition hover:bg-ember hover:text-white"
          >
            Let&apos;s Talk <ArrowRight className="h-4 w-4" />
          </Link>
          <ThemeToggle />
        </div>

        <button
          className="focus-ring grid h-11 w-11 place-items-center rounded-xl border border-white/15 lg:hidden"
          onClick={() => setMobileOpen(true)}
          aria-label="Open menu"
          aria-controls="mobile-navigation"
          aria-expanded={mobileOpen}
        >
          <Menu className="h-5 w-5" />
        </button>
      </div>

      <AnimatePresence>
        {mobileOpen && (
          <motion.nav
            id="mobile-navigation"
            initial={{ opacity: 0, y: -10, scale: 0.98 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: -10, scale: 0.98 }}
            transition={{ duration: 0.18, ease: "easeOut" }}
            className="nav-dropdown fixed right-4 top-[86px] z-[9999] w-[calc(100vw-32px)] max-w-[320px] rounded-[18px] border p-[10px] sm:right-8 lg:hidden"
            aria-label="Mobile navigation"
          >
            <div className="nav-dropdown-panel mb-2 flex items-center justify-between gap-3 rounded-xl border px-3 py-2">
              <span className="flex min-w-0 items-center gap-3 text-ember">
                <span className="relative block h-9 w-9 shrink-0 overflow-hidden rounded-full">
                  <Image
                    src="/legendary-logo.jpg"
                    alt="Legendary Consults logo"
                    fill
                    sizes="36px"
                    className="object-cover"
                  />
                </span>
                <span className="truncate text-sm font-black uppercase tracking-wide">
                  LEGENDARY CONSULTS
                </span>
              </span>
              <button
                className="nav-dropdown-item focus-ring grid h-10 w-10 shrink-0 place-items-center rounded-xl border transition"
                onClick={() => setMobileOpen(false)}
                aria-label="Close menu"
              >
                <X className="h-5 w-5" />
              </button>
            </div>
            <div>
              {services.map((service) => (
                <Link
                  key={service.slug}
                  href={`/services/${service.slug}`}
                  onClick={() => setMobileOpen(false)}
                  className="nav-dropdown-item mb-2 flex min-h-[46px] items-center rounded-xl border px-4 py-3 text-[15px] font-semibold transition"
                >
                  {service.title}
                </Link>
              ))}
              {[...nav, { label: "Let's Talk", href: "/contact" }].map(
                (item) => (
                  <Link
                    key={item.href}
                    href={item.href}
                    onClick={() => setMobileOpen(false)}
                    className="nav-dropdown-item mb-2 flex min-h-[46px] items-center rounded-xl border px-4 py-3 text-[15px] font-semibold transition"
                  >
                    {item.label}
                  </Link>
                ),
              )}
              <ThemeToggle className="nav-dropdown-theme-button w-full text-[15px] font-semibold" />
            </div>
          </motion.nav>
        )}
      </AnimatePresence>
    </header>
  );
}

export function Footer() {
  const socials = [
    { label: "LinkedIn", icon: Linkedin, href: "https://linkedin.com" },
    { label: "Twitter/X", icon: Twitter, href: "https://x.com" },
    { label: "Instagram", icon: Instagram, href: "https://instagram.com" },
    { label: "Website", icon: Globe2, href: "https://dribbble.com" },
  ];
  return (
    <footer className="border-t border-white/10 py-8">
      <div className="mx-auto flex max-w-7xl flex-col gap-6 px-4 md:flex-row md:items-center md:justify-between md:px-6">
        <div className="flex flex-col gap-4 text-sm text-zinc-300 sm:flex-row sm:items-center sm:gap-8">
          <Link href="/" className="transition hover:text-ember">
            legendaryconsultsng.com
          </Link>
          <a
            href="mailto:hello@legendaryconsults.com"
            className="transition hover:text-ember"
          >
            legendaryconsults@gmail.com
          </a>
        </div>
        <div className="flex items-center gap-3">
          <span className="mr-2 text-sm font-semibold text-zinc-300">
            Follow Us
          </span>
          {socials.map((item) => (
            <a
              key={item.label}
              href={item.href}
              target="_blank"
              rel="noreferrer"
              aria-label={item.label}
              className="focus-ring grid h-11 w-11 place-items-center rounded-full border border-ember/60 text-ember transition hover:bg-ember hover:text-white hover:shadow-glow"
            >
              <item.icon className="h-5 w-5" />
            </a>
          ))}
        </div>
      </div>
    </footer>
  );
}

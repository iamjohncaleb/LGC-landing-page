import Link from "next/link";
import { Footer, Header } from "@/components/site-chrome";
import { ButtonLink, LeadForm, PageShell, Reveal } from "@/components/ui";

export default function ContactPage() {
  return (
    <PageShell>
      <Header />
      <section className="mx-auto grid max-w-7xl gap-10 px-4 py-16 md:px-6 lg:grid-cols-[1.1fr_.9fr]">
        <div>
          <Reveal>
            <p className="text-sm font-black uppercase tracking-[.22em] text-ember">Contact</p>
            <h1 className="mt-4 text-5xl font-black md:text-7xl">Let&apos;s Talk</h1>
            <p className="mt-6 max-w-2xl text-lg leading-8 text-zinc-300">Have an idea, question, or project in mind? Reach out to Legendary Consults.</p>
            <div className="mt-8 flex flex-col gap-3 text-zinc-300">
              <a href="mailto:hello@legendaryconsults.com" className="transition hover:text-ember">hello@legendaryconsults.com</a>
              <Link href="/" className="transition hover:text-ember">legendaryconsults.com</Link>
            </div>
          </Reveal>
          <Reveal delay={0.1} className="mt-10">
            <LeadForm type="contact" />
          </Reveal>
        </div>
        <Reveal delay={0.2}>
          <aside className="glass orange-border rounded-2xl p-8 lg:sticky lg:top-28">
            <h2 className="text-3xl font-black">Book a Strategy Call</h2>
            <p className="mt-4 leading-8 text-zinc-300">Get expert guidance on your next digital product.</p>
            <div className="mt-8">
              <ButtonLink href="tel:08135744156">Schedule a Call</ButtonLink>
            </div>
          </aside>
        </Reveal>
      </section>
      <Footer />
    </PageShell>
  );
}

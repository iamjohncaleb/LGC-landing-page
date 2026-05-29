import { Footer, Header } from "@/components/site-chrome";
import { LeadForm, PageShell, Reveal } from "@/components/ui";

export default function StartProjectPage() {
  return (
    <PageShell>
      <Header />
      <section className="mx-auto grid max-w-7xl gap-10 px-4 py-16 md:px-6 lg:grid-cols-[.8fr_1.2fr]">
        <Reveal>
          <p className="text-sm font-black uppercase tracking-[.22em] text-ember">Project inquiry</p>
          <h1 className="mt-4 text-5xl font-black md:text-7xl">Start Your Project</h1>
          <p className="mt-6 text-lg leading-8 text-zinc-300">Tell us what you want to build and our team will help you plan, design, and launch it.</p>
        </Reveal>
        <Reveal delay={0.1}>
          <LeadForm type="project" />
        </Reveal>
      </section>
      <Footer />
    </PageShell>
  );
}

import { Footer, Header } from "@/components/site-chrome";
import { PageShell, Reveal, SectionHeading } from "@/components/ui";
import { process, values } from "@/lib/data";

export default function AboutPage() {
  return (
    <PageShell>
      <Header />
      <section className="mx-auto max-w-7xl px-4 py-16 md:px-6">
        <Reveal>
          <p className="text-sm font-black uppercase tracking-[.22em] text-ember">About</p>
          <h1 className="mt-4 text-5xl font-black md:text-7xl">About Legendary Consults</h1>
        </Reveal>
        <div className="mt-12 grid gap-5 md:grid-cols-3">
          {[
            ["Who We Are", "We are a digital solutions company helping businesses design, build, manage and scale modern digital products."],
            ["Our Mission", "To turn bold ideas into impactful digital realities through strategy, design, technology and execution."],
            ["Our Vision", "To become a trusted innovation partner for businesses building the future of digital experiences."]
          ].map(([title, text], index) => (
            <Reveal key={title} delay={index * 0.05}>
              <article className="glass h-full rounded-2xl p-6">
                <h2 className="text-2xl font-black">{title}</h2>
                <p className="mt-4 leading-8 text-zinc-300">{text}</p>
              </article>
            </Reveal>
          ))}
        </div>
      </section>
      <section className="mx-auto max-w-7xl px-4 py-14 md:px-6">
        <SectionHeading title="Values that guide the build" />
        <div className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-6">
          {values.map((value) => (
            <Reveal key={value.title}>
              <div className="glass rounded-2xl p-5 text-center">
                <value.icon className="mx-auto h-8 w-8 text-ember" />
                <p className="mt-4 font-bold">{value.title}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </section>
      <section className="mx-auto max-w-7xl px-4 py-14 md:px-6">
        <SectionHeading title="From discovery to growth" text="A clear path keeps ambitious work moving without sacrificing polish." />
        <div className="mt-10 grid gap-4 md:grid-cols-6">
          {process.map((step, index) => (
            <Reveal key={step} delay={index * 0.04}>
              <div className="glass rounded-2xl p-5">
                <span className="text-sm font-black text-ember">0{index + 1}</span>
                <p className="mt-4 font-bold">{step}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </section>
      <Footer />
    </PageShell>
  );
}

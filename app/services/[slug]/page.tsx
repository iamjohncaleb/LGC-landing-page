import { notFound } from "next/navigation";
import { Footer, Header } from "@/components/site-chrome";
import { ButtonLink, PageShell, Reveal, SectionHeading } from "@/components/ui";
import { process, services } from "@/lib/data";

export function generateStaticParams() {
  return services.map((service) => ({ slug: service.slug }));
}

export default async function ServicePage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const service = services.find((item) => item.slug === slug);
  if (!service) notFound();
  const faq = [
    ["How long does a project take?", "Most focused projects take 2 to 8 weeks, depending on scope, content readiness and integration needs."],
    ["Can you improve an existing product?", "Yes. We can audit, redesign, rebuild or optimize existing websites, apps and digital systems."],
    ["Do you support launch?", "Yes. We help with testing, deployment, analytics setup, handoff and post-launch improvements."]
  ];

  return (
    <PageShell>
      <Header />
      <section className="mx-auto max-w-7xl px-4 py-16 md:px-6">
        <Reveal>
          <span className="grid h-16 w-16 place-items-center rounded-2xl border border-ember/40 bg-ember/10 text-ember">
            <service.icon className="h-8 w-8" />
          </span>
          <h1 className="mt-6 max-w-4xl text-5xl font-black md:text-7xl">{service.title}</h1>
          <p className="mt-6 max-w-3xl text-lg leading-8 text-zinc-300">{service.detail}</p>
          <div className="mt-8"><ButtonLink href="/start-project">Start Your Project</ButtonLink></div>
        </Reveal>
      </section>
      <section className="mx-auto max-w-7xl px-4 py-10 md:px-6">
        <SectionHeading title="What we offer" />
        <div className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {service.offerings.map((item) => (
            <Reveal key={item}>
              <div className="glass rounded-2xl p-6 font-bold">{item}</div>
            </Reveal>
          ))}
        </div>
      </section>
      <section className="mx-auto max-w-7xl px-4 py-10 md:px-6">
        <SectionHeading title="Our process" />
        <div className="mt-10 grid gap-4 md:grid-cols-6">
          {process.map((step, index) => (
            <Reveal key={step}>
              <div className="glass h-full rounded-2xl p-5">
                <span className="text-sm font-black text-ember">0{index + 1}</span>
                <p className="mt-4 font-bold">{step}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </section>
      <section className="mx-auto grid max-w-7xl gap-5 px-4 py-10 md:grid-cols-2 md:px-6">
        <Reveal>
          <div className="glass h-full rounded-2xl p-6">
            <h2 className="text-3xl font-black">Benefits</h2>
            <ul className="mt-5 space-y-3 text-zinc-300">
              {["Clearer positioning", "Faster launch cycles", "Conversion-focused interfaces", "Scalable technical foundations"].map((item) => (
                <li key={item}>• {item}</li>
              ))}
            </ul>
          </div>
        </Reveal>
        <Reveal>
          <div className="glass h-full rounded-2xl p-6">
            <h2 className="text-3xl font-black">Tools & technologies</h2>
            <div className="mt-5 flex flex-wrap gap-3">
              {service.tools.map((tool) => (
                <span key={tool} className="rounded-full border border-ember/30 bg-ember/10 px-4 py-2 text-sm font-bold text-zinc-100">{tool}</span>
              ))}
            </div>
          </div>
        </Reveal>
      </section>
      <section className="mx-auto max-w-7xl px-4 py-10 md:px-6">
        <SectionHeading title="FAQ" />
        <div className="mt-10 grid gap-4">
          {faq.map(([question, answer]) => (
            <Reveal key={question}>
              <details className="glass rounded-2xl p-6">
                <summary className="cursor-pointer text-xl font-black">{question}</summary>
                <p className="mt-4 leading-8 text-zinc-300">{answer}</p>
              </details>
            </Reveal>
          ))}
        </div>
      </section>
      <Footer />
    </PageShell>
  );
}

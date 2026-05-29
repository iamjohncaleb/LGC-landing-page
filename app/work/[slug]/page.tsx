import { notFound } from "next/navigation";
import { Footer, Header } from "@/components/site-chrome";
import { ButtonLink, PageShell, Reveal } from "@/components/ui";
import { caseStudies } from "@/lib/data";

export function generateStaticParams() {
  return caseStudies.map((study) => ({ slug: study.slug }));
}

export default async function CaseStudyPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const study = caseStudies.find((item) => item.slug === slug);
  if (!study) notFound();

  const rows = [
    ["Project overview", study.imageUrl],
    [
      "Problem",
      "The client needed a sharper digital experience that could earn trust quickly and move visitors toward action.",
    ],
    [
      "Solution",
      "We combined strategy, conversion-focused UX, polished interface design and scalable development foundations.",
    ],
    [
      "Services delivered",
      "Strategy, UI/UX design, responsive development, launch support and performance optimization.",
    ],
    [
      "Technology used",
      "Next.js, React, Tailwind CSS, analytics tooling and modern deployment workflows.",
    ],
    [
      "Result",
      "A faster, clearer and more credible digital product ready for acquisition, sales and growth campaigns.",
    ],
  ];

  return (
    <PageShell>
      <Header />
      <section className="mx-auto max-w-5xl px-4 py-16 md:px-6">
        <Reveal>
          <p className="text-sm font-black uppercase tracking-[.22em] text-ember">
            {study.category}
          </p>
          <h1 className="mt-4 text-5xl font-black md:text-7xl">
            {study.title}
          </h1>
        </Reveal>
        <div className="mt-10 grid gap-5">
          {rows.map(([title, text]) => (
            <Reveal key={title}>
              <article className="glass rounded-2xl p-6">
                <h2 className="text-2xl font-black">{title}</h2>
                <p className="mt-3 leading-8 text-zinc-300">{text}</p>
              </article>
            </Reveal>
          ))}
        </div>
        <div className="mt-10">
          <ButtonLink href="/start-project">Start a Similar Project</ButtonLink>
        </div>
      </section>
      <Footer />
    </PageShell>
  );
}

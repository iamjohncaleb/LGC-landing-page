import Link from "next/link";
import { notFound } from "next/navigation";
import { Footer, Header } from "@/components/site-chrome";
import { ButtonLink, PageShell, Reveal } from "@/components/ui";
import { posts } from "@/lib/data";

export function generateStaticParams() {
  return posts.map((post) => ({ slug: post.slug }));
}

export default async function BlogDetailPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const post = posts.find((item) => item.slug === slug);
  if (!post) notFound();
  const related = posts.filter((item) => item.slug !== post.slug).slice(0, 3);

  return (
    <PageShell>
      <Header />
      <article className="mx-auto max-w-4xl px-4 py-16 md:px-6">
        <Reveal>
          <p className="text-sm font-black uppercase tracking-[.22em] text-ember">{post.category} • May 25, 2026</p>
          <h1 className="mt-4 text-5xl font-black md:text-7xl">{post.title}</h1>
          <div className="mt-10 h-72 rounded-2xl border border-ember/25 bg-gradient-to-br from-ember/25 via-white/5 to-black" />
        </Reveal>
        <Reveal delay={0.1} className="prose prose-invert mt-10 max-w-none prose-p:text-zinc-300 prose-p:leading-8 prose-headings:text-white">
          <p>Strong digital products do more than look impressive. They clarify your offer, make action easier, and give your team a system that can keep improving after launch.</p>
          <p>For ambitious brands, the biggest wins often come from aligning strategy, design, technology and growth operations before writing a single line of production code.</p>
          <p>Legendary Consults helps teams shape that path, build the right product foundations, and launch with the speed and confidence required in modern digital markets.</p>
        </Reveal>
        <Reveal className="mt-12">
          <div className="glass rounded-2xl p-6">
            <h2 className="text-2xl font-black">Related posts</h2>
            <div className="mt-5 grid gap-3">
              {related.map((item) => (
                <Link key={item.slug} href={`/blog/${item.slug}`} className="rounded-xl border border-white/10 p-4 font-semibold transition hover:border-ember/60 hover:text-ember">
                  {item.title}
                </Link>
              ))}
            </div>
          </div>
        </Reveal>
        <Reveal className="mt-8">
          <div className="orange-border rounded-2xl bg-ember/10 p-6">
            <h2 className="text-2xl font-black">Need help building your digital product?</h2>
            <div className="mt-5"><ButtonLink href="/start-project">Start Your Project</ButtonLink></div>
          </div>
        </Reveal>
      </article>
      <Footer />
    </PageShell>
  );
}

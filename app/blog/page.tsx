import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { BlogHero } from "@/components/blog-hero";
import { Footer, Header } from "@/components/site-chrome";
import { PageShell, Reveal } from "@/components/ui";
import { posts } from "@/lib/data";

export default function BlogPage() {
  return (
    <PageShell>
      <Header />
      <BlogHero />
      <section id="articles" className="mx-auto max-w-7xl scroll-mt-24 px-4 py-16 md:px-6">
        <div className="mt-10 grid gap-5 md:grid-cols-2 lg:grid-cols-3">
          {posts.map((post) => (
            <Reveal key={post.slug}>
              <Link href={`/blog/${post.slug}`} className="glass group block min-h-72 rounded-2xl p-6 transition hover:border-ember/60">
                <div className="mb-6 h-28 rounded-xl bg-gradient-to-br from-ember/20 via-white/5 to-black" />
                <span className="text-sm font-bold text-ember">{post.category}</span>
                <h2 className="mt-4 text-2xl font-black">{post.title}</h2>
                <ArrowRight className="mt-6 h-5 w-5 text-ember transition group-hover:translate-x-2" />
              </Link>
            </Reveal>
          ))}
        </div>
      </section>
      <Footer />
    </PageShell>
  );
}

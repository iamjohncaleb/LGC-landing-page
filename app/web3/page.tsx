import { Footer, Header } from "@/components/site-chrome";
import { ButtonLink, PageShell, Reveal, SectionHeading } from "@/components/ui";
import { process, web3Builds } from "@/lib/data";

export default function Web3Page() {
  return (
    <PageShell>
      <Header />
      <section className="mx-auto max-w-7xl px-4 py-16 md:px-6">
        <Reveal>
          <p className="text-sm font-black uppercase tracking-[.22em] text-ember">Web3</p>
          <h1 className="max-w-4xl text-5xl font-black md:text-7xl">Build The Future With Web3</h1>
          <p className="mt-6 max-w-3xl text-lg leading-8 text-zinc-300">We help brands and communities launch blockchain-powered products, dApps, smart contracts and digital ecosystems.</p>
        </Reveal>
      </section>
      <section className="mx-auto max-w-7xl px-4 py-10 md:px-6">
        <SectionHeading title="What We Build" />
        <div className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {web3Builds.map((item) => (
            <Reveal key={item.title}>
              <div className="glass rounded-2xl p-6">
                <item.icon className="h-8 w-8 text-ember" />
                <h2 className="mt-5 text-2xl font-black">{item.title}</h2>
              </div>
            </Reveal>
          ))}
        </div>
      </section>
      <section className="mx-auto max-w-7xl px-4 py-10 md:px-6">
        <SectionHeading title="Process" />
        <div className="mt-10 grid gap-4 md:grid-cols-6">
          {["Strategy", "Architecture", "Development", "Testing", "Launch", "Community Growth"].map((step, index) => (
            <Reveal key={step}>
              <div className="glass h-full rounded-2xl p-5">
                <span className="text-sm font-black text-ember">0{index + 1}</span>
                <p className="mt-4 font-bold">{step}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </section>
      <section className="mx-auto max-w-7xl px-4 py-16 md:px-6">
        <Reveal>
          <div className="orange-border rounded-2xl bg-ember/10 p-8 md:p-12">
            <h2 className="text-4xl font-black">Ready to build your Web3 project?</h2>
            <div className="mt-7"><ButtonLink href={`https://wa.me/2348135744156?text=${encodeURIComponent("Hello, I want to start a Web3 project.")}`}>Start Web3 Project</ButtonLink></div>
          </div>
        </Reveal>
      </section>
      <Footer />
    </PageShell>
  );
}

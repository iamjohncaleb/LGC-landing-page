import { Footer, Header } from "@/components/site-chrome";
import { ConversionCta, Hero, ServicesGrid, StatsBand } from "@/components/home";
import { PageShell } from "@/components/ui";

export default function HomePage() {
  return (
    <PageShell>
      <Header />
      <Hero />
      <ServicesGrid />
      <StatsBand />
      <ConversionCta />
      <Footer />
    </PageShell>
  );
}

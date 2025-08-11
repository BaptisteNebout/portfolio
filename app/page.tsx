
import { Header } from "./_components/Header";
import { Spacing } from "./_components/Spacing";
import { Hero } from "./_components/Hero";
import { Footer } from "./_components/Footer";
import { Status } from "./_components/Status";

export default function Home() {
  return (
    <main >
      <Header />
      <Spacing size="lg" />
      <Hero />
      <Spacing size="lg" />
      <Status />
      <Spacing size="lg" />
      <Footer />
    </main>
  );
}

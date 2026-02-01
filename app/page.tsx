import Cocktails from "@/components/cocktails";
import Hero from "@/components/hero";
import Navbar from "@/components/navbar";

export default function Home() {
  return (
    <main>
      <Navbar />
      <Hero />
      <Cocktails />
    </main>
  );
}

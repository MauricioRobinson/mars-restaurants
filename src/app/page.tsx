import HeroSection from "@/components/HeroSection";
import SearchBar from "@/components/SearchBar";

export default function Home() {
  return (
    <section>
      <HeroSection />
      <main className="lg:max-w-screen-xl mx-auto p-8">
        <h2 className="text-2xl font-semibold">Want to explore?</h2>
        <small className="text-gray-500">
          We are continuously adding new restaurants and locations every day!!!
          😍
        </small>

        <SearchBar />
      </main>
    </section>
  );
}


import Banner from "@/components/home/Banner";
import Hero from "@/components/home/Hero";
import HowItWorks from "@/components/home/HowItWorks";
import SecuritySection from "@/components/home/SecuritySection";

export default function HomePage() {
  return (
    <>
      <Hero />
      <Banner />
      <HowItWorks />
      <SecuritySection />
    </>
  );
}

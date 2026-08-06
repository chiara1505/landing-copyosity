import { Header } from "@/components/Header";
import { Hero } from "@/components/Hero";
import { WhyWords } from "@/components/WhyWords";
import { Pillars } from "@/components/Pillars";
import { FallingKeys } from "@/components/FallingKeys";
import { Outcomes } from "@/components/Outcomes";
import { ForYou } from "@/components/ForYou";
import { HowItWorks } from "@/components/HowItWorks";
import { AboutMe } from "@/components/AboutMe";
import { Pricing } from "@/components/Pricing";
import { ApplicationForm } from "@/components/ApplicationForm";
import { Faq } from "@/components/Faq";
import { Footer } from "@/components/Footer";
import { BackToTop } from "@/components/BackToTop";
import { ScrollReset } from "@/components/ScrollReset";

export default function Home() {
  return (
    <>
      <ScrollReset />
      <Header />
      <main>
        <Hero />
        <div className="relative z-10 bg-white shadow-[0_18px_48px_rgba(36,92,71,0.12)]">
          <FallingKeys />
          <div className="relative z-10">
            <WhyWords />
            <Pillars />
          </div>
        </div>
        <Outcomes />
        <HowItWorks />
        <ForYou />
        <AboutMe />
        <Pricing />
        <ApplicationForm />
        <Faq />
      </main>
      <Footer />
      <BackToTop />
    </>
  );
}

import Footer from "@/components/common/Footer";
import Header from "@/components/common/Header";
import Newsletter from "@/components/common/NewsLetters";
import HomeCardList from "@/components/common/news/HomeCarList";
import AwardedReporters from "@/components/pages/home/awardedReporter";
import ChallengeSection from "@/components/pages/home/challengeSection";
import CommunitiesSection from "@/components/pages/home/communities";
import Hero from "@/components/pages/home/hero";
import InsightsSection from "@/components/pages/home/insightSection";

export default function Home() {
  return (
    <div className="">
      <Header />
      <main>
        <Hero />
        <HomeCardList />
        <ChallengeSection />
        <AwardedReporters />
        <InsightsSection />
        <CommunitiesSection />

        <Newsletter />
      </main>

      <Footer />
    </div>
  );
}

import HeroSection from "@/app/components/heroes";
import Partners from "@/components/partner";
import ActivitiesList from "@/components/activitieslist";
import ReasonList from "@/components/reasonlist";
import Volunteers from "@/components/volunteers";
import Backpackers from "@/components/backpackers";
import Travelers from "@/components/travelers";
import JourneyPlus from "@/components/journeyplus";
import FAQ from "@/components/faq";
import Programs from "@/components/programs";
import ContactUs from "@/components/contactus";
import Footer from "@/components/footer";

export default function HomePage() {
  return (
    <main>
      <HeroSection />
      <Partners />
      <div id="activities-list">
        <ActivitiesList />
      </div>
      <ReasonList />
      <div id="volunteers">
        <Volunteers />
      </div>
      <div id="backpackers">
        <Backpackers />
      </div>
      <div id="travelers">
        <Travelers />
      </div>
      <div id="journeyplus">
        <JourneyPlus />
      </div>
      <FAQ />
      <Programs />
      <ContactUs />
      <Footer />
    </main>
  );
}

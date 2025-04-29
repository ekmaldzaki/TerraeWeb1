import HeroesNoimg from "../../components/heroesNoimg";
import Profile from "../../components/profile";
import Recruitment from "../../components/recruitment";
import Footer from "../../components/footer";

export default function ProfilePage() {
  return (
    <div className="bg-gray-50">
      <HeroesNoimg
        title="Meet Our Team!"
        description="Behind Terrae, there is a small but dedicated team ensuring that the ecotourism experience runs smoothly, comfortably, and sustainably. We work with a spirit of collaboration, prioritize environmental sustainability, and are committed to empowering local communities."
      />
      <Profile />
      <Recruitment />
      <Footer />
    </div>
  );
}

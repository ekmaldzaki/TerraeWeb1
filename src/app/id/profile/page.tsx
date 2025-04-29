import HeroesNoimg from "../../components/heroesNoimg";
import Profile from "../../components/profile";
import Recruitment from "../../components/recruitment";
import Footer from "../../components/footer";

export default function ProfilePage() {
  return (
    <div className="bg-gray-50">
      <HeroesNoimg
        title="Meet Our Team!"
        description="Di balik Terrae, terdapat tim kecil namun berdedikasi yang memastikan pengalaman ekowisata berjalan dengan lancar, nyaman, dan tetap berkelanjutan. Kami bekerja dengan semangat kolaborasi, mengedepankan keberlanjutan lingkungan, serta berkomitmen untuk memberdayakan komunitas lokal."
      />
      <Profile />
      <Recruitment />
      <Footer />
    </div>
  );
}

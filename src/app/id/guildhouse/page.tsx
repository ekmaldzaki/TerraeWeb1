import HeroesNoImg from "../../components/heroesNoimg";
import Contacts from "../../components/contacts";
import GuildhouseDate from "../../components/guildhouseDate";

export default function GuildhousePage() {
  return (
    <div className="bg-gray-50">
      <HeroesNoImg
        title="Terrae Guild House"
        description="Bergabunglah dalam ekspedisi ekowisata dengan relawan lokal. Bantu soroti potensi alam melalui tindakan berkelanjutan. Jadilah bagian dari perubahan!"
      />
      <GuildhouseDate />
      <Contacts />
    </div>
  );
}

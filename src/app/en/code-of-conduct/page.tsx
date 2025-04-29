import HeroesNoimg from "../../components/heroesNoimg";
import Accordion from "../../components/accordion";
import Footer from "../../components/footer";

export default function ProfilePage() {
  return (
    <div className="bg-gray-50">
      <HeroesNoimg
        title="Code of Conduct"
        description="Code of Conduct for Terrae Volunteers. This document outlines the expectations and responsibilities of all volunteers, ensuring a safe and respectful environment for everyone involved."
      />
      <Accordion dataKey="coc-terraevolunteers" />
      <HeroesNoimg
        title="Code of Conduct"
        description="Code of Conduct for Terrae Freelance Workers Guildhouse. This document outlines the expectations and responsibilities of all volunteers, ensuring a safe and respectful environment for everyone involved."
      />
      <Accordion dataKey="coc-guildhouse" />
      <Footer />
    </div>
  );
}

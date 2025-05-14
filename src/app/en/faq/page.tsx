import HeroesNoimg from "../../components/heroesNoimg";
import Accordion from "../../components/accordion";
import Footer from "../../components/footer";

export default function ProfilePage() {
  return (
    <div className="bg-gray-50">
      <HeroesNoimg
        title="Frequently Asked Questions"
        description="Everything you need to know about International Terrae Volunteers, from how to apply to what to expect during the program. Find answers to common questions and get the information you need to start your volunteer journey."
      />
      <Accordion dataKey="faq-terraevolunteers" />
      <Footer />
    </div>
  );
}

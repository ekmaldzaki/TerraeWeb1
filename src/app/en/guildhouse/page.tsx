import HeroesNoImg from "../../components/heroesNoimg";
import Contacts from "../../components/contacts";
import GuildhouseDate from "../../components/guildhouseDate";

export default function GuildhousePage() {
  return (
    <div className="bg-gray-50">
      <HeroesNoImg
        title="Terrae Guild House"
        description="Join as a domestic volunteer and contribute to ecotourism expeditions. Help showcase nature’s potential through sustainable real-world actions. Be part of the change!"
      />
      <GuildhouseDate />
      <Contacts />
    </div>
  );
}

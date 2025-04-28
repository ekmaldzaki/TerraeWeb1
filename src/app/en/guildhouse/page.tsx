import Heroes from "../../components/heroes";
import QuestList from "../../components/questList";
import Contacts from "../../components/contacts";

export default function GuildhousePage() {
  return (
    <div>
      <Heroes
        title="Welcome to Guild House!"
        description="Take on missions, complete tasks, and be part of positive change! From cleaning the environment, maintaining gardens, to assisting the elderly, every task you undertake not only provides direct benefits to the community but also contributes to supporting sustainable ecotourism. By participating in these various tasks, you help preserve nature, improve community well-being, and create a cleaner, more harmonious environment for everyone. Join us and make every small action have a big impact!"
        imageUrl="/images/guildhouse_1.png"
      />
      <QuestList />
      <Contacts />
    </div>
  );
}

import Heroes from "../../components/heroes";
import QuestList from "../../components/questList";
import Contacts from "../../components/contacts";

export default function GuildhousePage() {
  return (
    <div>
      <Heroes
        title="Welcome to Guild House!"
        description="Ambil misi, kerjakan tugas, dan jadilah bagian dari perubahan positif! Dari membersihkan lingkungan, merawat taman, hingga membantu lansia, setiap pekerjaan yang dilakukan tidak hanya memberikan manfaat langsung bagi komunitas, tetapi juga berkontribusi dalam mendukung ekowisata berkelanjutan. Dengan berpartisipasi dalam berbagai tugas ini, kamu turut menjaga kelestarian alam, meningkatkan kesejahteraan masyarakat, dan menciptakan lingkungan yang lebih bersih serta harmonis bagi semua. Bergabunglah dan jadikan setiap aksi kecilmu berdampak besar!"
        imageUrl="/images/guildhouse_1.png"
      />
      <QuestList />
      <Contacts />
    </div>
  );
}

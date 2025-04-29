import HeroesNoimg from "../../components/heroesNoimg";
import Accordion from "../../components/accordion";
import Footer from "../../components/footer";

export default function ProfilePage() {
  return (
    <div className="bg-gray-50">
      <HeroesNoimg
        title="Kode Etik"
        description="Kode Etik untuk Relawan Terrae. Dokumen ini menguraikan harapan dan tanggung jawab semua relawan, memastikan lingkungan yang aman dan saling menghormati bagi semua yang terlibat."
      />
      <Accordion dataKey="faq-terraevolunteers" />
      <HeroesNoimg
        title="Kode Etik"
        description="Kode Etik untuk Pekerja Lepas Terrae Guildhouse. Dokumen ini menguraikan harapan dan tanggung jawab semua relawan, memastikan lingkungan yang aman dan saling menghormati bagi semua yang terlibat."
      />
      <Accordion dataKey="coc-guildhouse" />
      <Footer />
    </div>
  );
}

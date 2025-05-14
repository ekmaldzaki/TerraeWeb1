import HeroesNoimg from "../../components/heroesNoimg";
import Accordion from "../../components/accordion";
import Footer from "../../components/footer";

export default function ProfilePage() {
  return (
    <div className="bg-gray-50">
      <HeroesNoimg
        title="Kode Etik"
        description="Kode Etik untuk Relawan Internasional Terrae. Dokumen ini menguraikan harapan dan tanggung jawab semua relawan, memastikan lingkungan yang aman dan saling menghormati bagi semua yang terlibat."
      />
      <Accordion dataKey="faq-terraevolunteers" />
      <Footer />
    </div>
  );
}

import HeroesNoimg from "../../components/heroesNoimg";
import Accordion from "../../components/accordion";
import Footer from "../../components/footer";

export default function ProfilePage() {
  return (
    <div className="bg-gray-50">
      <HeroesNoimg
        title="Pertanyaan yang Sering Diajukan"
        description="Semua yang perlu diketahui tentang Relawan Internasional Terrae, mulai dari cara mendaftar hingga apa yang diharapkan selama program. Temukan jawaban untuk pertanyaan umum dan dapatkan informasi yang Anda butuhkan untuk memulai perjalanan relawan Anda."
      />
      <Accordion dataKey="faq-terraevolunteers" />
      <Footer />
    </div>
  );
}

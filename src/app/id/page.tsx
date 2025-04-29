"use client";

import Heroes from "../components/heroes";
import Partners from "../components/partners";
import Activities from "../components/activities";
import Projects from "../components/projects";
import Reviews from "../components/reviews";
import Contacts from "../components/contacts";
import Footer from "../components/footer";

export default function Home() {
  return (
    <div>
      <Heroes
        title="Selamat Datang di Terrae!"
        description="Terrae adalah destinasi ekowisata dekat Taman Nasional Bromo Tengger Semeru yang menawarkan pengalaman budaya mendalam bersama komunitas desa terpencil di hutan tropis. Fokus pada pengolahan produk lokal, promosi destinasi alam, dan proyek ekowisata berkelanjutan. Terrae melibatkan tim inti dan warga lokal sebagai pemandu, penyedia makanan, dan transportasi. Dengan komitmen menciptakan lapangan kerja dan menjaga alam, Terrae tersertifikasi manajemen pariwisata oleh Programma Uitzending Managers (PUM) Belanda, menjamin pengalaman wisata yang ramah dengan sentuhan budaya Jawa."
        imageUrl="/images/heroes_image.jpg"
      />
      <Partners />
      <Activities />
      <Projects />
      <Reviews />
      <Contacts />
      <Footer />
    </div>
  );
}

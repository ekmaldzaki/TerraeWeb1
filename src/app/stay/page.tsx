import Navbar from "@/components/navbar";
import TerraeHomestay from "@/components/terraehomestay";
import ContactUs from "@/components/contactus";
import Footer from "@/components/footer";

export default function HomePage() {
  return (
    <main>
      <Navbar />
      <TerraeHomestay />
      <ContactUs />
      <Footer />
    </main>
  );
}

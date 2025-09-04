import Navbar from "@/components/navbar";
import TerraeCampground from "@/components/terraecampground";
import ContactUs from "@/components/contactus";
import Footer from "@/components/footer";

export default function HomePage() {
  return (
    <main>
      <Navbar />
      <TerraeCampground />
      <ContactUs />
      <Footer />
    </main>
  );
}

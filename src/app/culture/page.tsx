import Navbar from "@/components/navbar";
import TerraeCulture from "@/components/terraeculture";
import ContactUs from "@/components/contactus";
import Footer from "@/components/footer";

export default function HomePage() {
  return (
    <main>
      <Navbar />
      <TerraeCulture />
      <ContactUs />
      <Footer />
    </main>
  );
}

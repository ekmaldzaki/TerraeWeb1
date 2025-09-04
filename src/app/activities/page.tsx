import Navbar from "@/components/navbar";
import TerraeActivities from "@/components/terraeactivities";
import ContactUs from "@/components/contactus";
import Footer from "@/components/footer";

export default function HomePage() {
  return (
    <main>
      <Navbar />
      <TerraeActivities />
      <ContactUs />
      <Footer />
    </main>
  );
}

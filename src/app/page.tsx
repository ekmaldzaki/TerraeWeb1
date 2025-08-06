import HeroSection from "@/app/components/heroes";
import Partners from "@/components/partner";
import AboutTerrae from "@/components/aboutterrae";
import TerraeLocation from "@/components/terraelocation";
import ProductList from "@/components/productlist";
import TerraeHomestay from "@/components/terraehomestay";
import TerraeActivities from "@/components/terraeactivities";
import TerraeCulture from "@/components/terraeculture";
import TerraeMerch from "@/components/terraemerch";
import TerraeBooking from "@/components/terraebooking";
import FAQ from "@/components/faq";
import ContactUs from "@/components/contactus";
import Footer from "@/components/footer";

export default function HomePage() {
  return (
    <main>
      <HeroSection />
      <Partners />
      <AboutTerrae />
      <TerraeLocation />
      <ProductList />
      <TerraeHomestay />
      <TerraeActivities />
      <TerraeCulture />
      <TerraeMerch />
      <TerraeBooking />
      <FAQ />
      <ContactUs />
      <Footer />
    </main>
  );
}

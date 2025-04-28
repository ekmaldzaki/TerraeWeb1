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
        title="Welcome to Terrae!"
        description="Terrae is an ecotourism destination near Bromo Tengger Semeru National Park, offering an immersive cultural experience with remote village communities in the tropical forest. Focusing on local product processing, natural destination promotion, and sustainable ecotourism projects, Terrae involves a core team and local residents as tour guides, food providers, and transportation service providers. Committed to creating job opportunities and preserving nature, Terrae is certified in tourism management by the Programma Uitzending Managers (PUM) Netherlands, ensuring a welcoming and memorable travel experience with a touch of Javanese culture."
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

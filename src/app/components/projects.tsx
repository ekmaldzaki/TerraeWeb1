"use client";
import { usePathname } from "next/navigation";
import { motion } from "framer-motion";

// Import JSON files
import en from "../locales/en.json";
import id from "../locales/id.json";

interface Project {
  id?: number;
  type?: string;
  sectionTitle?: string;
  sectionDescription?: string;
  sectionExploreText?: string;
  title?: string;
  description?: string;
  image?: string;
}

export default function Projects() {
  const pathname = usePathname();
  const isIndonesian = pathname.startsWith("/id");
  const projects: Project[] = isIndonesian ? id.projects : en.projects;

  const sectionData = projects.find((project) => project.type === "section");

  return (
    <section id="ourProjects" className="bg-white text-[#252525] py-16">
      <div className="container mx-auto px-6 text-center">
        {sectionData && (
          <>
            <motion.div
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
            >
              <h2 className="text-3xl md:text-4xl font-semibold mb-4">
                {sectionData.sectionTitle}
              </h2>
              <p
                className="max-w-3xl mx-auto text-lg text-gray-600 mb-4 text-justify"
                dangerouslySetInnerHTML={{
                  __html: sectionData.sectionDescription || "",
                }}
              ></p>
              <p className="max-w-3xl mx-auto my-5 font-semibold text-2xl text-center">
                {sectionData.sectionExploreText}
              </p>
            </motion.div>
          </>
        )}

        {/* Grid 3 kolom */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mt-8">
          {projects
            .filter((project) => project.type !== "section")
            .map((project) => (
              <motion.div
                key={project.id}
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5 }}
                className="bg-gray-100 rounded-lg shadow-md p-6 transition-transform duration-300 md:hover:scale-105"
              >
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-54 object-cover rounded-md"
                />
                <h3 className="text-xl font-semibold mt-4 text-start">
                  {project.title}
                </h3>
                <p className="text-sm text-gray-600 mt-2 text-justify">
                  {project.description}
                </p>
              </motion.div>
            ))}
        </div>
      </div>
    </section>
  );
}

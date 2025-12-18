"use client";
import { useState } from "react";
import { useI18n } from "../src/i18n/i18n";

export default function Page() {
  const { t } = useI18n();
  const [selectedImage, setSelectedImage] = useState(null); // State for the modal

  const projects = [
    {
      key: "city_hotel",
      techStack: [
        "Next.js",
        "React",
        "Firebase",
        "NextAuth",
        "Contentful CMS",
        "Tailwind CSS",
      ],
      link: "https://the-city-hotel.vercel.app",
      category: "Portfolio",
      // Add your screenshot paths here (put images in 'public' folder)
      images: [
        "/City-Hotel-screenshot-1.png",
        "/City-Hotel-screenshot-2.png",
        "/City-Hotel-screenshot-3.png",
        "/City-Hotel-screenshot-4.png",
      ],
    },
    {
      key: "project_1",
      techStack: [
        "React",
        "Redux",
        "Material UI",
        "Tailwind",
        "Charts.js",
        "PDF Export",
      ],
      link: null,
      category: "Professional",
      images: [
        "/tgub-screenshot-1.png",
        "/tgub-screenshot-2.png",
        "/tgub-screenshot-3.png",
        "/tgub-screenshot-4.png",
        "/tgub-screenshot-5.png",
      ],
    },
    {
      key: "project_2",
      techStack: [
        "React",
        "Angular",
        "Redux",
        "Bootstrap",
        "Firebase",
        "WebSocket",
        "Swagger",
      ],
      link: null,
      category: "Professional",
      images: [], // No images for this one, section won't render
    },
    {
      key: "project_3",
      techStack: ["HTML5", "CSS3", "JavaScript"],
      link: "https://www.dogaldengerehberi.com/",
      category: "Freelance",
      images: [],
    },
    {
      key: "project_4",
      techStack: ["HTML5", "SASS", "JavaScript"],
      link: "https://www.wbocsports.com/",
      category: "Freelance",
      images: [],
    },
  ];

  // --- Components ---

  const ProjectCard = ({
    title,
    description,
    techStack,
    projectLink,
    images,
  }) => (
    <div className="bg-white shadow-md rounded-xl p-6 mb-6 border border-gray-200 hover:shadow-lg transition-shadow">
      <h2 className="text-xl font-bold text-gray-900 mb-2">{title}</h2>

      <div className="flex flex-wrap gap-2 text-sm text-gray-600 mb-3">
        {techStack.map((tech) => (
          <span
            key={tech}
            className="bg-gray-100 text-gray-700 px-2 py-1 rounded-md"
          >
            {tech}
          </span>
        ))}
      </div>

      <p className="text-gray-700 leading-relaxed mb-4">{description}</p>

      {/* Screenshot Section (Conditionally Rendered) */}
      {images && images.length > 0 && (
        <div className="mb-4">
          <p className="text-xs text-gray-500 mb-2 uppercase tracking-wide font-semibold">
            {t("projects.screenshots") || "Screenshots"}
          </p>
          <div className="flex gap-3 overflow-x-auto pb-2">
            {images.map((img, index) => (
              <img
                key={index}
                src={img}
                alt={`${title} screenshot ${index + 1}`}
                onClick={() => setSelectedImage(img)}
                className="h-20 w-auto rounded-md border border-gray-300 cursor-pointer hover:opacity-80 transition-opacity object-cover"
              />
            ))}
          </div>
        </div>
      )}

      {/* Links Section */}
      <div className="border-t pt-3 border-gray-100">
        {projectLink ? (
          <a
            href={projectLink}
            target="_blank"
            rel="noopener noreferrer"
            className="text-blue-600 hover:underline font-medium inline-flex items-center gap-1"
          >
            {t("projects.view-project")} <span>↗</span>
          </a>
        ) : (
          <div className="inline-flex items-center gap-2 text-gray-500 italic text-sm">
            🔒 <span>{t("projects.private-project")}</span>
          </div>
        )}
      </div>
    </div>
  );

  return (
    <div className="relative">
      <h1 className="text-2xl font-bold mb-4 pb-2 border-b border-gray-300">
        {t("projects.title")}
      </h1>

      {projects.map((p) => (
        <ProjectCard
          key={p.key}
          title={t(`projects.${p.key}`)}
          description={t(`projects.${p.key}_desc`)}
          techStack={p.techStack}
          projectLink={p.link}
          images={p.images}
        />
      ))}

      {/* --- Modal / Lightbox --- */}
      {selectedImage && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/80 p-4 backdrop-blur-sm"
          onClick={() => setSelectedImage(null)} // Close when clicking background
        >
          <div className="relative max-w-5xl max-h-[90vh]">
            {/* Close Button */}
            <button
              onClick={() => setSelectedImage(null)}
              className="absolute -top-10 right-0 text-white text-3xl hover:text-gray-300 focus:outline-none"
            >
              &times;
            </button>

            <img
              src={selectedImage}
              alt="Full size preview"
              className="max-h-[85vh] w-auto rounded-lg shadow-2xl"
              onClick={(e) => e.stopPropagation()} // Prevent closing when clicking the image itself
            />
          </div>
        </div>
      )}
    </div>
  );
}

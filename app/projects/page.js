"use client";
import { useI18n } from "../src/i18n/i18n";

export default function Page() {
  const { t } = useI18n();

  const projects = [
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
    },
    {
      key: "project_3",
      techStack: ["HTML5", "CSS3", "JavaScript"],
      link: "https://www.dogaldengerehberi.com/",
      category: "Freelance",
    },
  ];

  const ProjectCard = ({ title, description, techStack, projectLink }) => (
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

      <p className="text-gray-700 leading-relaxed mb-3">{description}</p>

      {projectLink ? (
        <a
          href={projectLink}
          target="_blank"
          rel="noopener noreferrer"
          className="text-blue-600 hover:underline font-medium"
        >
          {t("projects.view-project")}
        </a>
      ) : (
        <div className="inline-flex items-center gap-2 text-gray-500 italic">
          🔒 <span>{t("projects.private-project")}</span>
        </div>
      )}
    </div>
  );

  return (
    <div>
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
        />
      ))}
    </div>
  );
}

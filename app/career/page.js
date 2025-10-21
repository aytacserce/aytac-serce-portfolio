"use client";
import { useI18n } from "../src/i18n/i18n";

export default function Page() {
  const { t } = useI18n();
  // Local JobCard component
  const JobCard = ({ position, company, year, description }) => (
    <div className="bg-white shadow-md rounded-xl p-6 mb-6 border border-gray-200">
      <h2 className="text-xl font-bold text-gray-900">{position}</h2>
      <div className="flex items-center text-md text-gray-500 mb-2">
        <span>{company}</span>
        <span className="mx-2">•</span>
        <span>{year}</span>
      </div>
      <p className="text-lg text-gray-700 leading-relaxed">{description}</p>
    </div>
  );

  return (
    <div>
      <h1 className="text-3xl font-bold mb-4 pb-2 border-b border-gray-300">
        {t("career.title")}
      </h1>

      <JobCard
        position="Frontend Developer"
        company={t("career.zebra")}
        year="2023 – 2025"
        description={t("career.zebra_desc")
          .split("\n")
          .map((line, i) => (
            <span key={i}>
              {line}
              <br />
            </span>
          ))}
      />

      <JobCard
        position="Frontend Developer"
        company="Freelance"
        year="2022 – 2023"
        description={t("career.freelance_desc")
          .split("\n")
          .map((line, i) => (
            <span key={i}>
              {line}
              <br />
            </span>
          ))}
      />

      <JobCard
        position={t("career.english_teacher")}
        company={t("career.english")}
        year="2021 – 2022"
        description={t("career.english_desc")
          .split("\n")
          .map((line, i) => (
            <span key={i}>
              {line}
              <br />
            </span>
          ))}
      />

      <JobCard
        position={t("career.officer")}
        company={t("career.nat_def_unv")}
        year="2010 – 2021"
        description={t("career.nat_def_unv_desc")
          .split("\n")
          .map((line, i) => (
            <span key={i}>
              {line}
              <br />
            </span>
          ))}
      />
    </div>
  );
}

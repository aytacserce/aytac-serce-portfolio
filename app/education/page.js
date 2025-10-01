"use client";
import { useI18n } from "../src/i18n/i18n";

export default function Page() {
  const { t } = useI18n();
  const selfDescs = [];
  for (let i = 1; i <= 6; i++) {
    selfDescs.push(t(`education.self_desc_${i}`));
  }
  // Local SchoolCard component
  const SchoolCard = ({ school, year, description }) => (
    <div className="bg-white shadow-md rounded-xl p-6 mb-6 border border-gray-200">
      <h2 className="text-xl font-bold text-gray-900">{school}</h2>
      <div className="flex items-center text-md text-gray-500 mb-2">
        <span>{year}</span>
      </div>
      {Array.isArray(description) ? (
        <ul className="list-disc list-inside text-lg text-gray-700 leading-relaxed">
          {description.map((item, idx) => (
            <li key={idx}>{item}</li>
          ))}
        </ul>
      ) : (
        <p className="text-lg text-gray-700 leading-relaxed">{description}</p>
      )}
    </div>
  );

  return (
    <div>
      <h1 className="text-4xl font-bold mb-4 pb-2 border-b border-gray-300">
        {t("education.title")}
      </h1>

      <SchoolCard
        school={t("education.anatolia")}
        year="2023 – "
        description={t("education.anatolia_desc")}
      />

      <SchoolCard
        school={t("education.patika")}
        year="2022 – 2023"
        description={t("education.patika_desc")}
      />

      <SchoolCard
        school={t("education.self")}
        year="2021 – 2023"
        description={selfDescs}
      />

      <SchoolCard
        school={t("education.nat_def_unv")}
        year="2006 – 2010"
        description={t("education.nat_def_unv_desc")}
      />
    </div>
  );
}

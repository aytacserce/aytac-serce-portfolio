"use client";
import { useI18n } from "../src/i18n/i18n";

export default function Page() {
  const { t } = useI18n();
  const selfDescs = [];
  for (let i = 1; i <= 6; i++) {
    selfDescs.push(t(`education.self_desc_${i}`));
  }
  // Local SchoolCard component
  const SchoolCard = ({ school, detail, year, description }) => (
    <div className="bg-white shadow-md rounded-xl p-6 mb-6 border border-gray-200">
      <h2 className="text-xl font-bold text-gray-900">{school}</h2>
      <div className="flex items-center text-md text-gray-500 mb-2">
        <span className="font-bold">{detail}&nbsp;</span>
        <span> | {year}</span>
      </div>
      <p className="text-lg text-gray-700 leading-relaxed">{description}</p>
    </div>
  );

  return (
    <div>
      <h1 className="text-4xl font-bold mb-4 pb-2 border-b border-gray-300">
        {t("education.title")}
      </h1>

      <SchoolCard
        school={t("education.anatolia")}
        detail={t("education.anatolia_detail")}
        year="2023 – "
        description={t("education.anatolia_desc")
          .split("\n")
          .map((line, i) => (
            <span key={i}>
              {line}
              <br />
            </span>
          ))}
      />

      <SchoolCard
        school={t("education.patika")}
        detail={t("education.patika_detail")}
        year="2022 – 2023"
        description={t("education.patika_desc")
          .split("\n")
          .map((line, i) => (
            <span key={i}>
              {line}
              <br />
            </span>
          ))}
      />

      <SchoolCard
        school={t("education.self")}
        detail={t("education.self_detail")}
        year="2021 – 2023"
        description={t("education.self_desc")
          .split("\n")
          .map((line, i) => (
            <span key={i}>
              {line}
              <br />
            </span>
          ))}
      />

      <SchoolCard
        school={t("education.nat_def_unv")}
        detail={t("education.nat_def_unv_detail")}
        year="2006 – 2010"
        description={t("education.nat_def_unv_desc")
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

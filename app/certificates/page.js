"use client";
import { useI18n } from "../src/i18n/i18n";

export default function Page() {
  const { t } = useI18n();

  // Local SchoolCard component
  const CertificateCard = ({ course, year, certificateLink }) => (
    <div className="bg-white shadow-md rounded-xl p-6 mb-6 border border-gray-200">
      <h2 className="text-2xl font-bold text-gray-900">{course}</h2>
      <div className="flex items-center text-lg text-gray-500 mb-2">
        <span>{year}</span>
      </div>

      <a
        target="_blank"
        href={certificateLink}
        className="text-xl text-gray-700 leading-relaxed"
      >
        {t("certificates.view-certificate")}
      </a>
    </div>
  );

  return (
    <div>
      <h1 className="text-4xl font-bold mb-4 pb-2 border-b border-gray-300">
        {t("certificates.title")}
      </h1>

      <CertificateCard
        course={t("certificates.html-css-course")}
        year="2022"
        certificateLink="https://www.udemy.com/certificate/UC-d9cfda7f-902e-4f30-a8fe-943be8031d08/"
      />

      <CertificateCard
        course={t("certificates.sass-course")}
        year="2023"
        certificateLink="https://www.udemy.com/certificate/UC-d9cfda7f-902e-4f30-a8fe-943be8031d08/"
      />

      <CertificateCard
        course={t("certificates.javascript-course")}
        year="2022"
        certificateLink="https://www.udemy.com/certificate/UC-2977c69d-d910-499f-beb3-18cbeb6ab252/"
      />

      <CertificateCard
        course={t("certificates.react-course")}
        year="2023"
        certificateLink="https://www.udemy.com/certificate/UC-bb3a5930-b53a-405d-9691-31bd9ae370cc/"
      />

      <CertificateCard
        course={t("certificates.node-course")}
        year="2024"
        certificateLink="https://www.udemy.com/certificate/UC-d6b17081-6ea0-4499-9221-37f1cabcbaa1/"
      />

      <CertificateCard
        course={t("certificates.java-course")}
        year="2025"
        certificateLink="https://www.udemy.com/certificate/UC-b0d90362-5bcf-4300-806f-1d776314c837/"
      />

      <CertificateCard
        course={t("certificates.html-course")}
        year="2022"
        certificateLink={t("certificates.view-certificate")}
      />
    </div>
  );
}

"use client";
import { useState } from "react";
import { useI18n } from "../src/i18n/i18n";

export default function CertificatesPage() {
  const { t } = useI18n();
  const [selectedCert, setSelectedCert] = useState(null);

  const certificates = [
    {
      key: "java-course",
      issuer: "Udemy",
      year: "2025",
      image: "/udemy-java.png",
    },
    {
      key: "node-course",
      issuer: "Udemy",
      year: "2024",
      image: "/udemy-node.png",
    },
    {
      key: "react-course",
      issuer: "Udemy",
      year: "2023",
      image: "/udemy-react.png",
    },
    {
      key: "sass-course",
      issuer: "Udemy",
      year: "2023",
      image: "/udemy-sass.png",
    },
    {
      key: "javascript-course",
      issuer: "Udemy",
      year: "2022",
      image: "/udemy-js.png",
    },
    {
      key: "html-css-course",
      issuer: "Udemy",
      year: "2022",
      image: "/udemy-html.png",
    },
    {
      key: "patika-angular-practicum",
      issuer: "Patika.dev",
      year: "2022",
      image: "/patika-angular.png",
    },
    {
      key: "btk-react-course",
      issuer: "BTK",
      year: "2022",
      image: "/btk-react.png",
    },
    {
      key: "git-course",
      issuer: "BTK",
      year: "2022",
      image: "/btk-git.png",
    },
    {
      key: "website-course",
      issuer: "BTK",
      year: "2022",
      image: "/btk-website.png",
    },
    {
      key: "html-course",
      issuer: "BTK",
      year: "2022",
      image: "/btk-html.png",
    },
  ];

  const CertificateCard = ({ title, issuer, year, image }) => (
    <div
      onClick={() => setSelectedCert({ title, image })}
      className="bg-white border border-gray-200 rounded-xl p-5 shadow-sm hover:shadow-lg cursor-pointer transition-all flex flex-col justify-between h-full"
    >
      <div>
        <div className="flex items-center justify-between mb-3">
          <h2 className="font-semibold text-gray-900 text-lg flex items-center gap-2">
            🎓
            {title}
          </h2>
        </div>

        <div className="flex items-center justify-start mb-3">
          <p className="text-gray-600 text-sm">{issuer}&nbsp;|&nbsp;</p>
          <span className="text-sm text-gray-500">{year}</span>
        </div>
      </div>

      {/* Bottom-aligned label */}
      <div className="mt-auto pt-2 inline-flex items-center gap-2 text-blue-600 hover:text-blue-700 font-medium text-sm">
        {t("certificates.view-certificate")}
      </div>
    </div>
  );

  return (
    <div>
      <h1 className="text-2xl font-bold mb-4 pb-2 border-b border-gray-300">
        {t("certificates.title")}
      </h1>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {certificates.map((c) => (
          <CertificateCard
            key={c.key}
            title={t(`certificates.${c.key}`)}
            issuer={c.issuer}
            year={c.year}
            image={c.image}
          />
        ))}
      </div>

      {selectedCert && (
        <div
          className="fixed inset-0 bg-black bg-opacity-70 flex justify-center items-center z-50 transition-opacity"
          onClick={() => setSelectedCert(null)}
        >
          <div
            className="bg-white rounded-2xl shadow-xl relative p-4 max-w-3xl w-full mx-4"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              className="absolute top-3 right-3 text-gray-600 hover:text-gray-900"
              onClick={() => setSelectedCert(null)}
            >
              ✖️
            </button>

            <h2 className="text-xl font-semibold text-center mb-3">
              {selectedCert.title}
            </h2>

            <img
              src={selectedCert.image}
              alt={selectedCert.title}
              className="rounded-lg w-full max-h-[80vh] object-contain"
            />
          </div>
        </div>
      )}
    </div>
  );
}

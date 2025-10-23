"use client";
import { useI18n } from "./src/i18n/i18n";

export default function Page() {
  const { t } = useI18n();

  return (
    <div>
      <h1 className="text-3xl font-bold mb-4 pb-2 border-b border-gray-300">
        {t("about.title")}
      </h1>

      <h1 className="text-2xl mb-4 leading-relaxed text-gray-700">
        👋 {t("about.greeting")}
      </h1>

      <p className="text-1xl mb-4 leading-relaxed text-gray-700">
        🪪 {t("about.about_me")}
      </p>

      <p className="text-1xl mb-4 leading-relaxed text-gray-700">
        🎓 {t("about.graduation")}
      </p>

      <p className="text-1xl mb-4 leading-relaxed text-gray-700">
        🌍 {t("about.scholarship")}
      </p>

      <p className="text-1xl mb-4 leading-relaxed text-gray-700">
        💼 {t("about.work_experience")}
      </p>

      <p className="text-1xl mb-4 leading-relaxed text-gray-700">
        💻 {t("about.current_position")}
      </p>

      <p className="text-1xl mb-4 leading-relaxed text-gray-700">
        ⚙️ {t("about.portfolio")}
      </p>

      <p className="text-1xl mb-4 leading-relaxed text-gray-700">
        👨‍👩‍👧‍👦 {t("about.family")}
      </p>

      <p className="text-1xl mb-4 leading-relaxed text-gray-700">
        📅 {t("about.update")}
      </p>

      {/* Download Resume Button */}
      <div className="mt-8">
        <a
          href="/Aytac_Serce_Resume.pdf"
          download
          className="inline-block bg-blue-600 text-white font-semibold px-4 py-2 rounded hover:bg-blue-700 transition"
        >
          {t("about.download_resume")}
        </a>
      </div>
    </div>
  );
}

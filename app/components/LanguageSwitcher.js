"use client";

import { useI18n } from "../src/i18n/i18n";

export default function LanguageSwitcher() {
  const { lang, setLang } = useI18n();

  return (
    <div className="flex gap-2">
      <button
        onClick={() => setLang("en")}
        className={`px-3 py-1 rounded ${
          lang === "en"
            ? "bg-blue-600 text-white"
            : "bg-gray-700 hover:bg-gray-600"
        }`}
      >
        EN
      </button>
      <button
        onClick={() => setLang("tr")}
        className={`px-3 py-1 rounded ${
          lang === "tr"
            ? "bg-blue-600 text-white"
            : "bg-gray-700 hover:bg-gray-600"
        }`}
      >
        TR
      </button>
    </div>
  );
}

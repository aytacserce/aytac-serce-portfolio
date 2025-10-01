"use client";
import React, { createContext, useContext, useState } from "react";

const en = require("./en.json");
const tr = require("./tr.json");

const translations = { en, tr };

// Remove TS types here
const I18nContext = createContext({
  lang: "tr",
  setLang: () => {},
  t: (path, vars = {}) => path,
});

export function I18nProvider({ children }) {
  const [lang, setLang] = useState("tr"); // default language

  const t = (path, vars = {}) => {
    const keys = path.split(".");
    let text = translations[lang];
    for (const key of keys) {
      text = text?.[key];
    }
    if (typeof text !== "string") return path;

    return text.replace(/\{\{(.*?)\}\}/g, (_, v) => vars[v.trim()] ?? "");
  };

  return (
    <I18nContext.Provider value={{ lang, setLang, t }}>
      {children}
    </I18nContext.Provider>
  );
}

export function useI18n() {
  return useContext(I18nContext);
}

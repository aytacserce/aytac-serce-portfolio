"use client";
import { useState } from "react";
import Navigation from "../navigation/Navigation";
import LanguageSwitcher from "./LanguageSwitcher";

export default function Sidebar() {
  const [sidebarOpen, setSidebarOpen] = useState(false);

  return (
    <>
      <button
        className="md:hidden absolute top-4 right-4 z-50 p-2 bg-gray-900 text-white rounded-lg"
        onClick={() => setSidebarOpen(!sidebarOpen)}
      >
        ☰
      </button>

      <aside
        className={`fixed inset-y-0 left-0 z-40 w-64 bg-gray-900 text-white flex flex-col items-center py-4 transform transition-transform duration-300
          ${
            sidebarOpen ? "translate-x-0" : "-translate-x-full"
          } md:translate-x-0 md:static md:flex`}
      >
        <img
          src="/aytacserce.jpeg"
          alt="Aytaç Serçe"
          className="h-56 w-44 rounded-lg mb-3 border-4 border-gray-700"
        />
        <p className="text-3xl mb-2">Aytaç Serçe</p>
        <p className="text-xl mb-3">Frontend Engineer</p>

        <Navigation />

        <div className="mt-3 text-center text-md space-y-2">
          <p>📞 +90 533 563 41 21</p>
          <p>📍 İstanbul, Turkey</p>
          <div className="flex flex-col items-center space-y-2 mt-2">
            <a
              href="https://github.com/aytacserce"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-gray-400"
            >
              🔗 GitHub
            </a>
            <a
              href="https://linkedin.com/in/aytacserce"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-gray-400"
            >
              🔗 LinkedIn
            </a>
          </div>
        </div>

        <div className="flex-1 mb-3" />

        <LanguageSwitcher />
      </aside>

      {sidebarOpen && (
        <div
          className="fixed inset-0 bg-black bg-opacity-50 z-30 md:hidden"
          onClick={() => setSidebarOpen(false)}
        />
      )}
    </>
  );
}

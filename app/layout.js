import "./globals.css";
import Navigation from "./navigation/Navigation";
import LanguageSwitcher from "./components/LanguageSwitcher";
import { I18nProvider } from "../app/src/i18n/i18n";

export const metadata = {
  title: "Aytaç Serçe | Portfolio",
  description: "Aytaç Serçe Portfolio",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className="flex flex-col h-screen">
        {" "}
        {/* full height screen */}
        <I18nProvider>
          <section className="flex flex-1 overflow-hidden">
            {/* overflow-hidden ensures only main scrolls */}

            {/* Sidebar */}
            <aside className="w-64 bg-gray-900 text-white flex flex-col items-center py-4">
              <img
                src="/aytacserce.jpeg"
                alt="Aytac Serce"
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

            {/* Main content */}
            <main className="flex-1 p-8 bg-gray-50 overflow-y-auto">
              {children}
            </main>
          </section>

          {/* Footer stays below */}
          <footer className="bg-gray-900 text-white text-center py-4">
            © {new Date().getFullYear()} Aytac Serce
          </footer>
        </I18nProvider>
      </body>
    </html>
  );
}

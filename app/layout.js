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
      <body className="flex flex-col min-h-screen">
        <I18nProvider>
          <section className="flex flex-1">
            <aside className="w-64 bg-gray-900 text-white flex flex-col items-center py-6">
              <img
                src="/aytacserce.jpeg"
                alt="Aytac Serce"
                className="h-64 w-54 rounded-lg mb-4 border-4 border-gray-700"
              />
              <p className="text-4xl mb-2">Aytaç Serçe</p>
              <p className="text-2xl mb-4">Frontend Engineer</p>

              <Navigation />

              <div className="flex-1" />

              <LanguageSwitcher />
            </aside>

            <main className="flex-1 p-8 bg-gray-50">{children}</main>
          </section>

          <footer className="bg-gray-900 text-white text-center py-4">
            © {new Date().getFullYear()} Aytac Serce
          </footer>
        </I18nProvider>
      </body>
    </html>
  );
}

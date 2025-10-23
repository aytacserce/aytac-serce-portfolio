import "./globals.css";
import { I18nProvider } from "../app/src/i18n/i18n";
import Sidebar from "./components/Sidebar";

export const metadata = {
  title: "Aytaç Serçe | Portfolio",
  description: "Aytaç Serçe Portfolio",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className="flex flex-col h-screen">
        <I18nProvider>
          <section className="flex flex-1 overflow-hidden relative">
            <Sidebar />
            <main className="flex-1 p-8 bg-gray-50 overflow-y-auto">
              {children}
            </main>
          </section>

          <footer className="bg-gray-900 text-white text-center py-4">
            © {new Date().getFullYear()} Aytaç Serçe
          </footer>
        </I18nProvider>
      </body>
    </html>
  );
}

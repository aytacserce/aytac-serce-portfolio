"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useI18n } from "../src/i18n/i18n";

const navItems = [
  { href: "/", label: "nav.about" },
  { href: "/career", label: "nav.career" },
  { href: "/education", label: "nav.education" },
  { href: "/certificates", label: "nav.certificates" },
  { href: "/projects", label: "nav.projects" },
];

export default function Navigation() {
  const pathname = usePathname();
  const { t } = useI18n();
  return (
    <ul className="flex flex-col w-full px-4 space-y-1">
      {navItems.map((item) => {
        const isActive = pathname === item.href;

        return (
          <li key={item.href}>
            <Link
              href={item.href}
              className={`block text-lg px-3 rounded-lg transition-colors ${
                isActive
                  ? "bg-gray-700 text-white font-semibold"
                  : "text-gray-300 hover:bg-gray-700 hover:text-white"
              }`}
            >
              {t(item.label)}
            </Link>
          </li>
        );
      })}
    </ul>
  );
}

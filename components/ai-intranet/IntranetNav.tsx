"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { Bot, BookOpen, Home } from "lucide-react";
import { intranetBase } from "@/lib/ai-intranet/format";

const items = [
  { label: "Home", href: intranetBase, icon: Home },
  {
    label: "Knowledge Library",
    href: `${intranetBase}/library`,
    icon: BookOpen,
  },
  { label: "AI Assistant", href: `${intranetBase}/assistant`, icon: Bot },
];

export default function IntranetNav() {
  const pathname = usePathname();
  return (
    <nav aria-label="Intranet">
      <ul className="flex flex-wrap items-center gap-1">
        {items.map(({ label, href, icon: Icon }) => {
          const active =
            href === intranetBase
              ? pathname === href
              : pathname.startsWith(href);
          return (
            <li key={href}>
              <Link
                href={href}
                aria-current={active ? "page" : undefined}
                className={`inline-flex items-center gap-2 rounded-lg px-3 py-2 text-sm font-medium transition-colors focus-ring ${
                  active
                    ? "bg-sky-400/15 text-sky-300"
                    : "text-slate-300 hover:bg-white/5 hover:text-white"
                }`}
              >
                <Icon aria-hidden="true" className="h-4 w-4" />
                {label}
              </Link>
            </li>
          );
        })}
      </ul>
    </nav>
  );
}

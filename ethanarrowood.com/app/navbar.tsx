"use client";

import { usePathname } from "next/navigation";
import Link from "next/link";
import clsx from "clsx";
import { CodeBracketIcon } from "@heroicons/react/20/solid";

export default function Navbar() {
  const pathname = usePathname();
  const routes = [
    {
      text: "home",
      href: "/",
    },
    {
      text: "work",
      href: "/work",
    },
  ];
  return (
    <header>
      <nav
        className="flex items-center justify-between py-8 text-md border-b-2 border-emerald-700"
        aria-label="Global"
      >
        <div className="flex flex-1">
          <div className="flex gap-x-8">
            {routes.map((route) => {
              const isActive = pathname === route.href ?? false;
              return (
                <Link
                  key={route.href}
                  href={route.href}
                  className={clsx(
                    "text-md",
                    "font-semibold",
                    isActive ? "text-emerald-700" : "text-gray-900",
                    isActive && "underline"
                  )}
                >
                  {route.text}
                </Link>
              );
            })}
          </div>
        </div>
        <div className="flex flex-end">
          <span className="text-2xl">
            <CodeBracketIcon className="w-5 h-5" />
          </span>
        </div>
      </nav>
    </header>
  );
}

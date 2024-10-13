"use client";
import React from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";

const routes = [
  {
    name: "Home",
    href: "/",
  },
  {
    name: "About",
    href: "/about",
  },
  {
    name: "Services",
    href: "/services",
  },
  {
    name: "Pages",
    href: "/pages",
  },
  {
    name: "Contact",
    href: "/contact",
  },
];

const AppRoutes = () => {
  const pathname = usePathname();
  return (
    <div className="flex items-center justify-center">
      {routes.map(({ name, href }) => (
        <Link
          href={href}
          key={name}
          className={`${
            pathname.startsWith(href)
              ? "opacity-100"
              : "opacity-40 hover:opacity-100"
          } px-4 transition-all md:text-base lg:text-lg lg:px-5`}
        >
          {name}
        </Link>
      ))}
    </div>
  );
};

export default AppRoutes;

"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
import clsx from "clsx";

const links = [
  { name: "Projects", href: "/projects" },
  { name: "Blog", href: "/blog-page" },
];

export default function NavLinks() {
  const pathname = usePathname();

  const isActive = (path: string) => {
    // Check for exact match for the Projects link
    if (path === "/projects") {
      return pathname === path;
    }
    // Check for Blog link (including subpaths like /blog/[slug])
    if (path === "/blog-page") {
      return pathname.startsWith("/blog");
    }
    return false;
  };

  return (
    <>
      {links.map((link) => (
        <Link
          key={link.name}
          href={link.href}
          className={clsx("text-2xl ", {
            "text-sky-300": isActive(link.href),
          })}
        >
          <p
            className={`md:m-4 m-1 md:text-3xl text-[1.1rem] hover:text-sky-300 mt-7`}
          >
            {link.name}
          </p>
        </Link>
      ))}
    </>
  );
}

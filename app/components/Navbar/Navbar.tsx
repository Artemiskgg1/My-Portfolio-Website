"use client";
import { useEffect, useState } from "react";
import Image from "next/image";
import NavLinks from "./nav-links";
import Link from "next/link";
import { motion } from "framer-motion";

export default function NavBar() {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const navbarVariants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { duration: 1, ease: "easeInOut" } },
  };

  return (
    <motion.div
      initial="hidden"
      animate="visible"
      variants={navbarVariants}
      className={`fixed h-[11.5rem] top-0 left-0 w-full z-50 transition-all ${
        isScrolled ? "bg-opacity-90 bg-black-100" : "bg-opacity-10"
      }`}
    >
      <div className="relative">
        <Link href="/">
          <div className="cursor-pointer">
            <Image
              src="/inner-logo.png"
              alt="Artemis Logo Inner"
              width={60}
              height={60}
              className="top-0 left-0 absolute ml-[5.2rem] mt-14 md:block hidden"
            />
            <Image
              src="/outer-logo.png"
              alt="Artemis Logo Inner"
              width={230}
              height={230}
              className="top-0 left-0 absolute md:block hidden hover:animate-spin-slower"
            />
          </div>
          <div className="cursor-pointer">
            <Image
              src="/inner-logo.png"
              alt="Artemis Logo Inner"
              width={55}
              height={55}
              className="top-0 left-0 absolute ml-16 mt-12 pl-2 md:hidden block"
            />
            <Image
              src="/outer-logo.png"
              alt="Artemis Logo Inner"
              width={190}
              height={190}
              className="top-0 left-0 absolute md:hidden block hover:animate-spin-slower"
            />
          </div>
        </Link>
        <div className="top-0 right-0 absolute grid grid-cols-2 md:gap-3 gap-1 md:m-10 m-6">
          <NavLinks />
        </div>
      </div>
    </motion.div>
  );
}

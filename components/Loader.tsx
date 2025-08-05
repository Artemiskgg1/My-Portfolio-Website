// components/Loader.tsx
"use client";
import Image from "next/image";
import { useEffect, useState } from "react";

export default function Loader() {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const timeout = setTimeout(() => setIsLoading(false), 2000); // wait 2 sec
    return () => clearTimeout(timeout);
  }, []);

  if (!isLoading) return null;

  return (
    <div className="fixed top-0 left-0 w-full h-screen bg-[#000319] z-[9999] flex items-center justify-center">
      <div className="relative w-[250px] h-[250px]">
        <Image
          src="/inner-logo.png"
          alt="Inner Logo"
          width={60}
          height={60}
          className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 z-20"
        />
        <Image
          src="/outer-logo.png"
          alt="Outer Logo"
          width={450}
          height={450}
          className="animate-spin-slower absolute top-1/2 left-1/2 mt-[-8rem] ml-[-7.7rem] transform -translate-x-1/2 -translate-y-1/2 z-10"
        />
      </div>
    </div>
  );
}

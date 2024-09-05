import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Navbar from "./components/Navbar/Navbar";
import { Spotlight } from "@/components/ui/spotlight";
import BottomNav from "./components/bottom-nav";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Abha Ghildiyal",
  description: "Personal Portfolio of Abha Ghildiyal",
  icons: [
    {
      url: "/artemis-logo.png",
      href: "/artemis-logo.png ",
    },
  ],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${inter.className} bg-black-100 text-zinc-200 pt-36`}
        style={{ overflowX: "hidden" }}
      >
        <div className="relative w-full h-full">
          {/* Background grid layer */}
          <div className="absolute inset-0 z-0 w-full bg-black-100 bg-grid-white/[0.03]">
            <div className="absolute pointer-events-none inset-0 flex items-center justify-center bg-black-100 [mask-image:radial-gradient(ellipse_at_center,transparent_20%,black)]" />
          </div>
          <div className="md:block hidden z-10">
            <Spotlight
              className="-top-40 -left-10 md:-left-32 md:-top-20 h-screen"
              fill="white"
            />
            <Spotlight
              className="top-10 left-full h-[80vh] w-[50vh]"
              fill="#9f5ea5"
            />
            <Spotlight
              className="top-28 left-80 h-[80vh] w-[50vh]"
              fill="#4b6382"
            />
          </div>

          {/* Main content */}
          <div className="relative z-20">
            <Navbar />
            <main>{children}</main>
            <BottomNav />
          </div>
        </div>
      </body>
    </html>
  );
}

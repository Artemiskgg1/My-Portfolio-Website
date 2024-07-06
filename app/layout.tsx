import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Navbar from "./components/Navbar/Navbar";
import { Spotlight } from "@/components/ui/spotlight";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${inter.className} bg-black-100 text-zinc-200 pb-20 pt-36`}
        style={{ overflowX: "hidden" }}
      >
        <div>
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
        <div className="h-screen w-full bg-black-100  bg-grid-white/[0.03]  flex items-center justify-center absolute top-0 left-0">
          <div className="absolute pointer-events-none inset-0 flex items-center justify-center bg-black-100  [mask-image:radial-gradient(ellipse_at_center,transparent_20%,black)]" />
        </div>
        <Navbar />
        <main>{children}</main>
      </body>
    </html>
  );
}

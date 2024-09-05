import LeftSection from "./blog-page/_components/left-section";

export default function BlogLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="bg-transparent h-screen flex w-full relative">
      {" "}
      {/* Reduced to z-10 */}
      <div className="flex items-center ml-10 mb-[12rem]">
        <LeftSection />
      </div>
      <div className="border border-slate-600 my-5 ml-5 mt-[5rem] md:block hidden" />
      {children}
    </div>
  );
}

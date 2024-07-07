import LeftSection from "./blog-page/_components/left-section";

export default function BlogLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="flex flex-col lg:flex-row items-stretch justify-center mt-[7rem]">
      <div className="w-full lg:w-1/4 p-5">
        <LeftSection />
      </div>
      <div className="flex-1 p-5 flex justify-center">{children}</div>
    </div>
  );
}

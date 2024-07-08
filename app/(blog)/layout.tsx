// import LeftSection from "./blog-page/_components/left-section";

import LeftSection from "./blog-page/_components/left-section";

// export default function BlogLayout({
//   children,
// }: {
//   children: React.ReactNode;
// }) {
//   return (
//     <div className="flex flex-col lg:flex-row items-stretch justify-center mt-[7rem]">
//       <div className="w-full lg:w-1/4 p-5">
//         <LeftSection />
//       </div>
//       <div className="flex-1 p-5 flex justify-center">{children}</div>
//     </div>
//   );
// }

export default function BlogLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="h-screen flex w-full bg-zinc-95">
      <div className="flex items-center ml-10">
        <LeftSection />
      </div>
      <div className="border z-30 border-neutral-700 my-5 ml-5 mt-[10rem] md:block hidden" />
      {children}
    </div>
  );
}

import Grid from "@/components/grid";
import Hero from "./components/Hero";

export default async function Home() {
  return (
    <main className=" flex justify-center items-center flex-col overflow-hidden mx-auto sm:px-10 px-5">
      <div className="max-w-7xl w-full">
        <Hero />
        <Grid />
      </div>
    </main>
  );
}

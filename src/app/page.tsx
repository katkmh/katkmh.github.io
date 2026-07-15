import { About } from "@/components/About";
import { Connect } from "@/components/Connect";
import { Experience } from "@/components/Experience";
import { Hero } from "@/components/Hero";
import { Outro } from "@/components/Outro";

export default function Home() {
  return (
    <div className="flex flex-col lg:flex-row bg-fixed lg:h-screen bg-radial-[at_25%_75%] from-blue-100 to-blue-100/0 to-60%">
      <nav className="lg:w-2/5">
        <Hero />
      </nav>
      <main className="flex-1 overflow-y-auto scroll-smooth scrollbar-thumb-slate-100 2xl:pl-24 2xl:pr-80 2xl:scroll-pt-60 grid gap-24 2xl:gap-28">
        <About />
        <Experience />
        <Connect />
        <Outro />
      </main>
    </div>
  );
}

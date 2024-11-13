"use client";
import Works from "@/components/Works";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Footer from "@/components/Footer";
import Navigate from "@/components/Navigate";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";
import { LenisProvider } from "./context/LenisContext";

gsap.registerPlugin(ScrollTrigger);

export default function Home() {
  return (
    <main>
      <LenisProvider>
        <Navigate />
        <Hero />
        <About />
        <Works />
        <div className="bg-black">
          <Footer />
        </div>
      </LenisProvider>
    </main>
  );
}

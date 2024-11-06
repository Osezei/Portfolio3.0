import Image from "next/image";
import Layout from "@/components/Layout";
import Works from "@/components/Works";
import Hero from "@/components/Hero";
import About from "@/components/About";

export default function Home() {
  return (
    <Layout>
      <Hero />

      <About />

      <Works />
    </Layout>
  );
}

import Image from "next/image";
import Layout from "@/components/Layout";
import Works from "@/components/Works";
import Hero from "@/components/Hero";

export default function Home() {
  return (
    <Layout>
      <Hero />
      <Works />
    </Layout>
  );
}

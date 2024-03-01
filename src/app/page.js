'use client';
import { Hero } from "@/components/Hero";
import { JobExp } from "@/components/JobExp";
import { AboutMe } from "@/components/AboutMe";


export default function Home() {

  return (
    <main className="flex flex-col justify-between py-20 px-96 bg-gradient-to-b from-black to-gray-900">
      <section className="container">
        <Hero/>
      </section>
      <section className="mt-40 container">
        <h1 className="mb-20 text-3xl font-semibold">Professional experience</h1>
        <JobExp/>
      </section>
      <section className="mt-40 container">
        <h1 className="mb-10 text-3xl font-semibold">About me</h1>
        <AboutMe/>
      </section>
    </main>
  );
}

'use client';
import { Card } from "@/components/card";
import { ItemSkill } from "@/components/itemSkill";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import { FiSend } from "react-icons/fi";
import { FaCopy, FaFilePdf } from "react-icons/fa6";
import { EMAIL, PROJECTS, SKILLS } from "./constants";
import { Project } from "@/components/project";
import { Hero } from "@/components/Hero";
import { JobExp } from "@/components/JobExp";
import { AboutMe } from "@/components/AboutMe";


export default function Home() {

  const header = () => (
    <header className="text-center justify-center">
      <h1 className="text-7xl mt-60">Cain S. Santiago López</h1>
      <h2 className="text-4xl mt-5">Full stack developer</h2>
      <h3 className="mt-5"> Developer with 7+ years of experience in the IT industry.</h3>
      <div className="flex flex-row justify-center">
      <input readOnly className="p-2 my-3 rounded w-60" type="email" value={EMAIL} id="emailValue"/>
      <button title="Copy to clipboard" onClick={() => navigator.clipboard.writeText(EMAIL)} className="ml-3"><FaCopy size="1.5em"/></button>
      <a className="my-auto ml-3" href={"mailto:" + EMAIL}><FiSend size="1.5em"/></a>
      </div>
      <div className="flex flex-row space-x-10 mt-5 justify-center">
        <a href="https://www.google.com" target="_blank" rel="noopener noreferrer"><FaGithub size="2em"/></a>
        <a href="https://www.google.com" target="_blank" rel="noopener noreferrer"><FaLinkedin size="2em"/></a>
        <a href="react_image.png" target="_blank"><FaFilePdf size="2em"/></a>
      </div>
    </header>
  );

  const about = () => (
    <section className="mt-60">
        <Card>
          <div className="flex flex-row space-x-10">
            <div  className="w-1/2 ">
              <h2 className="font-semibold text-2xl text-center">About me</h2>
              <p className="mt-6 text-xl ml-10">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.<br/> <br/> Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.
                Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
              </p>
            </div>
            <div  className="w-1/2">
              <h2 className="font-semibold text-2xl text-center">Main technical skills</h2>
              <div className="flex flex-wrap">
                {SKILLS.map(item =>
                  <ItemSkill key={item.label} icon={item.icon} label={item.label}/>
                )}
              </div>
              
            </div>
          </div>
        </Card>
      </section>
  );

  const projects = () => (
    <section className="mt-60">
      <h1 className="text-3xl font-semibold text-center">Projects</h1>    
        {PROJECTS.map(project =>
        <div className="hover:bg-slate-900" key={project.title}>
          <Project title={project.title} description={project.description}
          stack={project.stack} imageUrl={project.imageUrl}/>  
        </div>
        )}
    </section>
  );

  return (
    <main className="flex flex-col justify-between py-20 px-96 bg-gradient-to-b from-black to-gray-900">
      <section>
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


import { Card } from "@/components/card";
import { ItemSkill } from "@/components/itemSkill";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import { FaFilePdf } from "react-icons/fa6";
import { PROJECTS, SKILLS } from "./constants";
import { Project } from "@/components/project";


export default function Home() {

  const header = () => (
    <header className="text-center">
      <h1 className="text-7xl mt-60">Cain S. Santiago López</h1>
      <h2 className="text-4xl mt-5">Full stack developer</h2>
      <h3 className="mt-5"> Developer with 7+ years of experience in the IT industry.</h3>
      <div className="flex flex-row space-x-10 mt-5 item justify-center">
        <FaGithub size="2em"/>
        <FaLinkedin size="2em"/>
        <FaFilePdf size="2em"/>
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
      <div>
        {PROJECTS.map(project =>
          <Project key={project.title} title={project.title} description={project.description}
          stack={project.stack} imageUrl={project.imageUrl}/>  
        )}
      </div>
    </section>
  );

  return (
    <main className="flex flex-col justify-between p-24 bg-gradient-to-b from-black to-gray-800">
      {header()}
      {about()}
      {projects()}
    </main>
  );
}

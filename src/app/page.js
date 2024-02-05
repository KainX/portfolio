
import { Card } from "@/components/card";
import { ItemSkill } from "@/components/itemSkill";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import { FaFilePdf } from "react-icons/fa6";


export default function Home() {

  const header = () => (
    <header>
      <h1 className="text-7xl mt-60">Cain S. Santiago López</h1>
      <h2 className="text-4xl mt-5">Full stack developer</h2>
      <h3 className="mt-5"> Developer with 7+ years of experience in the IT industry.</h3>
      <div className="flex flex-row space-x-10 mt-5">
        <FaGithub size="2em"/>
        <FaLinkedin size="2em"/>
        <FaFilePdf size="2em"/>
      </div>
    </header>
  );

  const about = () => (
    <section className="mt-60">
        <Card>
          <div className="flex flex-row space-x-4">
            <div>
              <h2 className="font-semibold text-2xl">About me</h2>
              <p className="mt-6 text-xl">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.
                Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
              </p>
            </div>
            <div>
              <h2 className="font-semibold text-2xl">Skills</h2>
              <ItemSkill icon={FaGithub} label="Prueba"/>
            </div>
          </div>
        </Card>
      </section>
  );

  const projects = () => (
    <section>
      <header className="text-2xl mt-60 text-center">Projects</header>
    </section>
  );

  return (
    <main className="flex flex-col justify-between p-24">
      {header()}
      {about()}
      {projects()}
    </main>
  );
}

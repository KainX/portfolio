import Image from "next/image";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import { FaFilePdf } from "react-icons/fa6";

export const Hero = () =>
    <div>
        <Image className="rounded-full" alt="Hero image" src="/profile.jpeg" width={100} height={100}/>
        <h1>Cain Santiago López</h1>
        <h2>Full Stack Developer</h2>
        <p>
            Developer with 7+ years of experience in the IT industry.
        </p>
        <div className="flex flex-row">
            <a href="https://github.com/KainX" target="_blank" rel="noopener noreferrer"><FaGithub size="2em"/></a>
            <a href="https://www.linkedin.com/in/santiagolopez3" target="_blank" rel="noopener noreferrer"><FaLinkedin size="2em"/></a>
            <a href="react_image.png" target="_blank"><FaFilePdf size="2em"/></a>
        </div>
    </div>;

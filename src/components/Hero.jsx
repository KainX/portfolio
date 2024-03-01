import { EMAIL } from "@/app/constants";
import Image from "next/image";
import { FaCopy, FaGithub, FaLinkedin } from "react-icons/fa";
import { FaFilePdf } from "react-icons/fa6";
import { FiSend } from "react-icons/fi";

export const Hero = () =>
    <div>
        <Image className="rounded-full" alt="Hero image" src="/profile.jpeg" width={100} height={100}/>
        <h1 className="text-4xl font-bold text-white mt-4">Cain Santiago López</h1>
        <p className="mt-6 text-xl text-gray-300 [&>strong]:text-[#8876f9]">
            Developer with <strong>7+ years </strong>of experience in the IT industry.
        </p>
        <div className="flex flex-row">
            <input readOnly className="p-2 my-3 rounded w-60" type="email" value={EMAIL} id="emailValue"/>
            <button title="Copy to clipboard" onClick={() => navigator.clipboard.writeText(EMAIL)} className="ml-3"><FaCopy size="1.5em"/></button>
            <a className="my-auto ml-3" href={"mailto:" + EMAIL}><FiSend size="1.5em"/></a>
      </div>
        <div className="mt-6 flex flex-row justify-start space-x-5">
            <a href="https://github.com/KainX" target="_blank" rel="noopener noreferrer"><FaGithub size="2em"/></a>
            <a href="https://www.linkedin.com/in/santiagolopez3" target="_blank" rel="noopener noreferrer"><FaLinkedin size="2em"/></a>
            <a href="./Cain Santiago resume.pdf" target="_blank"><FaFilePdf size="2em"/></a>
        </div>
    </div>;

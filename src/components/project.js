import Image from "next/image";
import { Card } from "./card"

export const Project = ({title, description, stack, imageUrl}) =>{
    return(
    <Card>
        <header className="font-semibold text-2xl ml-10">{title}</header>
        <article className="flex flex-row mt-6 text-xl ml-10 space-x-20">
            <div className="w-1/2 flex-col">
                <p >{description}</p>
                <ul className="mt-10">
                    {stack.map(item => <li key={item.title} className="float-left mr-3 px-5 rounded-md bg-slate-950">{item}</li>)}
                </ul>
            </div>
            <div className="w-1/2 relative">
                <Image fill alt="Project image" src={imageUrl}/>
            </div>
        </article>
        
    </Card>
    );
}
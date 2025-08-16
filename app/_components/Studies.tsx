import { ArrowUpRight } from "lucide-react";
import Link from "next/link";

export type EtudesProps = {
    image: string,
    title: string,
    description: string,
    date: string,
    url: string
};

export const Etudes = (props: EtudesProps) => {
    return (
       <Link href={props.url} className="inline-flex gap-4 hover:bg-accent/50 transition-colors p-1 rounded max-w-md:mx-auto group">
            <img src={props.image} alt={props.title} className="w-10 h-10 object-contain"/>
            <div className="mr-auto w-full">                
                <p className="text-base font-semibold flex justify-between items-center">{props.title} <ArrowUpRight className="group-hover:translate-x-1 mr-2 group-hover:-translate-y-1 transition-transform" size={16}/></p>
                <p className="text-xs text-start text-muted-foreground italic">{props.date}</p>
                <p className="text-xs text-muted-foreground">{props.description}</p>
            </div>
       </Link>
    );
};
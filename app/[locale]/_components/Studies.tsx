import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { getScopedI18n } from "@/locales/server";

type StudiesKeys = "BTS.title" | "BTS.description" | "Bachelor.title" | "Bachelor.description" | "Master.title" | "Master.description";

export interface EtudesProps {
    image: string,
    titleKey: StudiesKeys,
    descriptionKey: StudiesKeys,
    date: string,
    url: string
};

export const Etudes = async (props: EtudesProps) => {
    const tEtudes = await getScopedI18n("Status.Etudes");
    return (
       <Link href={props.url} className="inline-flex gap-4 hover:bg-accent/50 transition-colors p-1 rounded max-w-md:mx-auto group">
            <img src={props.image} alt={tEtudes(props.titleKey)} className="w-10 h-10 object-contain"/>
            <div className="mr-auto w-full">                
                <p className="text-base font-semibold flex justify-between items-center">{tEtudes(props.titleKey)} <ArrowUpRight className="group-hover:translate-x-1 mr-2 group-hover:-translate-y-1 transition-transform" size={16}/></p>
                <p className="text-xs text-start text-muted-foreground italic">{props.date}</p>
                <p className="text-xs text-muted-foreground">{tEtudes(props.descriptionKey)}</p>
            </div>
       </Link>
    );
};
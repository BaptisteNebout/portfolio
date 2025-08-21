import { getScopedI18n } from "@/locales/server";
import Link from "next/link";

type ExperienceKeys = "SLD.title" | "SLD.role" | "SLD.description" | "Macompta.title" | "Macompta.role" | "Macompta.description";

export interface WorkProps {
    image: string;
    titleKey: ExperienceKeys;
    roleKey: ExperienceKeys;
    descriptionKey: ExperienceKeys;
    date: string;
    url: string;
};

export const Work = async (props: WorkProps) => {
    const tExp = await getScopedI18n("Status.Experiences");
    return (
       <Link href={props.url} className="inline-flex items-center gap-4 hover:bg-accent/50 transition-colors p-1 rounded">
            <img src={props.image} alt={tExp(props.titleKey)} className="w-20 h-20 object-contain rounded-md"/>
            <div className="mr-auto">                
                <p className="text-lg font-semibold">{tExp(props.titleKey)}</p>
                <p className="text-md font-bold text-muted-foreground">{tExp(props.roleKey)}</p>
                <p className="text-sm text-muted-foreground">{tExp(props.descriptionKey)}</p>
            </div>
            <div className="ml-auto">
                <p className="text-sm text-muted-foreground">{props.date}</p>
            </div>
       </Link>
    );
};

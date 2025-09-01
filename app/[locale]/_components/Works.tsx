import { getScopedI18n } from "@/locales/server";
import Link from "next/link";

type ExperienceKeys =   "SLD.title" | "SLD.role" | "SLD.description1" | "SLD.description2" | "SLD.description3" | "SLD.description4" | 
                        "Macompta.title" | "Macompta.role" | "Macompta.description1" | "Macompta.description2" | "Macompta.description3" | "Macompta.description4";

export interface WorkProps {
    image: string;
    titleKey: ExperienceKeys;
    roleKey: ExperienceKeys;
    description1: ExperienceKeys;
    description2: ExperienceKeys;
    description3: ExperienceKeys;
    description4: ExperienceKeys;
    date: string;
    url: string;
};

export const Work = async (props: WorkProps) => {
    const tExp = await getScopedI18n("Status.Experiences");
    return (
       <Link href={props.url} className="inline-flex items-center gap-4 hover:bg-accent/50 transition-colors p-1 rounded max-md:flex-col">
            <img src={props.image} alt={tExp(props.titleKey)} className="w-20 h-20 object-contain rounded-md"/>
            <div className="mr-auto">
                <p className="text-lg font-semibold">{tExp(props.titleKey)}</p>
                <p className="text-md font-bold text-muted-foreground">{tExp(props.roleKey)}</p>
                <ul className="list-disc ml-4 mt-1 flex flex-col gap-1">
                    <li className="text-sm text-muted-foreground">{tExp(props.description1)}</li>
                    <li className="text-sm text-muted-foreground">{tExp(props.description2)}</li>
                    <li className="text-sm text-muted-foreground">{tExp(props.description3)}</li>
                    <li className="text-sm text-muted-foreground">{tExp(props.description4)}</li>
                </ul>
            </div>
            <div className="ml-auto">
                <p className="text-sm text-muted-foreground">{props.date}</p>
            </div>
       </Link>
    );
};

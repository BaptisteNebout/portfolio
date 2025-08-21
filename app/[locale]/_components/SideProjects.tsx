import Link from "next/link";
import { ComponentType, SVGProps } from "react";
import { getScopedI18n } from "@/locales/server";

type ProjectKeys = "Firebase.title" | "Firebase.description" | "BotDiscord.title" | "BotDiscord.description" | "JavaSpringBoot.title" | "JavaSpringBoot.description";

export interface SideProjectProps {
    Logo: ComponentType<SVGProps<SVGSVGElement>>,
    titleKey: ProjectKeys,
    descriptionKey: ProjectKeys,
    url: string
};

export const SideProject = async (props: SideProjectProps) => {
    const tProj = await getScopedI18n("Status.ProjetPerso");
    return (
       <Link href={props.url} className="inline-flex items-center gap-4 hover:bg-accent/50 transition-colors p-1 rounded">
            <span className="bg-accent text-accent-foreground p-2 rounded-[5px]">
                <props.Logo className="w-6 h-6" />
            </span>
            <div>                
                <p className="text-lg font-semibold">{tProj(props.titleKey)}</p>
                <p className="text-sm text-muted-foreground">{tProj(props.descriptionKey)}</p>
            </div>
       </Link>
    );
};
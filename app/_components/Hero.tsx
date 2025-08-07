import { cn } from "@/lib/utils";
import { Section } from "./Section";
import { ComponentPropsWithoutRef } from "react";
import { JavaIcon } from "./icons/JavaIcon";
import { PHPIcon } from "./icons/PHPIcon";
import { JSIcon } from "./icons/JSIcon";
import { TSIcon } from "./icons/TSIcon";
import { SQLIcon } from "./icons/SQLIcon";
import { MongoIcon } from "./icons/MongoIcon";

const Code = ({ className, ...props }: ComponentPropsWithoutRef<"span">) => {
    return (
        <span className={cn("bg-accent/30 font-mono border border-accent hover:bg-accent/50 transition-colors px-1 py-0.5 text-primary rounded-xl", className)} {...props} />
    );
}


export const Hero = () => {
    return (
        <Section className="flex max-md:flex-col items-start gap-4">
            <div className="flex-[2] flex-col gap-2">
                <h2 className="font-caption text-5xl text-primary">Baptiste Nebout</h2>
                <h3 className="font-caption text-3xl text-muted-foreground font-bold">Développeur Logiciel</h3>
                <p className="text-muted-foreground text-base">Développeur fullstack curieux, je conçois des projets en 
                    <Code className="inline-flex items-center gap-1"> <JavaIcon size={12} className="text-foreground"/> Java</Code>, 
                    <Code className="inline-flex items-center gap-1"> <PHPIcon size={12} className="text-foreground"/> PHP</Code>, 
                    <Code className="inline-flex items-center gap-1"> <JSIcon size={12} className="text-foreground"/> JS</Code>/
                    <Code className="inline-flex items-center gap-1"> <TSIcon size={12} className="text-foreground"/> TS</Code>, avec intégration d’API et BDD 
                    <Code className="inline-flex items-center gap-1"> <SQLIcon size={12} className="text-foreground"/> MySQL</Code>/
                    <Code className="inline-flex items-center gap-1"> <MongoIcon size={12} className="text-foreground"/> MongoDB</Code>.</p>
            </div>
            <div className="flex-1 max-md:m-auto ml-auto">
                <img src="/PhotoProfil.jpg" className="w-full h-auto max-w-xs rounded-full max-md:w-56" alt="Moi" />
            </div>
        </Section>
    );
}
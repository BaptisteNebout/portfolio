import { Section } from "./Section";
import { JavaIcon } from "./icons/JavaIcon";
import { PHPIcon } from "./icons/PHPIcon";
import { JSIcon } from "./icons/JSIcon";
import { TSIcon } from "./icons/TSIcon";
import { SQLIcon } from "./icons/SQLIcon";
import { MongoIcon } from "./icons/MongoIcon";
import { Code } from "./Code";


export const Hero = () => {
    return (
        <Section className="flex max-md:flex-col items-start gap-4">
            <div className="flex-[3] flex-col gap-3">
                <h2 className="font-caption text-5xl text-primary">Baptiste Nebout</h2>
                <h3 className="font-caption text-3xl text-muted-foreground font-bold">Développeur Logiciel Fullstack</h3>
                <p className="text-muted-foreground text-base">Développeur fullstack curieux, je conçois des projets en 
                    <Code className="inline-flex items-center gap-1"> <JavaIcon size={12} className="text-foreground"/> Java</Code>, 
                    <Code className="inline-flex items-center gap-1"> <PHPIcon size={12} className="text-foreground"/> PHP</Code>, 
                    <Code className="inline-flex items-center gap-1"> <JSIcon size={12} className="text-foreground"/> JS</Code>/
                    <Code className="inline-flex items-center gap-1"> <TSIcon size={12} className="text-foreground"/> TS</Code>, avec intégration d’API et BDD 
                    <Code className="inline-flex items-center gap-1"> <SQLIcon size={12} className="text-foreground"/> MySQL</Code>/
                    <Code className="inline-flex items-center gap-1"> <MongoIcon size={12} className="text-foreground"/> MongoDB</Code>.</p>
            </div>
            <div className="flex-[2] max-md:m-auto">
                <img src="/PhotoProfil.jpg" className="w-full h-auto max-w-xs rounded-full max-md:w-56 mx-auto" alt="Moi" />
            </div>
        </Section>
    );
}
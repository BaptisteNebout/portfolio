import { Card } from "@/components/ui/card";
import { Section } from "./Section";
import { Code, LucideIcon } from "lucide-react";
import Link from "next/link";

export const Status = () => {
  return (
    <Section className="flex max-md:flex-col items-start gap-4">
        <div className="flex-[3] w-full">
            <Card className="p-4 flex-col gap-2 w-full border-secondary">
                <p className="text-muted-foreground text-lg">Mes expériences professionnelles</p>
                <div className="flex flex-col gap-4">
                    {Works.map((project, index) => (
                        <Work key={index} {...project} />
                    ))}
                </div>
            </Card>
        </div>
        <div className="flex-[2] gap-4 flex flex-col w-full">
            <Card className="p-4 flex-1 border-secondary">
                <p className="text-muted-foreground text-lg">Mes études</p>
                <div className="flex flex-col gap-4">
                    {Studies.map((project, index) => (
                        <Etudes key={index} {...project} />
                    ))}
                </div>
            </Card>
            <Card className="p-4 flex-1 border-secondary">
                <p className="text-muted-foreground text-lg">Mes projets perso</p>
                <div className="flex flex-col gap-4">
                    {SIDE_PROJECTS.map((project, index) => (
                        <SideProject key={index} {...project} />
                    ))}
                </div>
            </Card>
        </div>
    </Section>
  );
};

const Works: WorkProps[] = [
    {
        image: "Code",
        title: "Project 1",
        role: "dev",
        description: "Description for project 1 lorem ipsum dolor sit amet consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
        date: "2020-2024",
        url: "/"
    },
    {
        image: "Code",
        title: "Project 2",
        role: "dev",
        description: "Description for project 2 lorem ipsum dolor sit amet consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
        date: "2024",
        url: "/"
    }
]

type WorkProps = {
    image: string,
    title: string,
    role: string,
    description: string,
    date: string,
    url: string
};

const Work = (props: WorkProps) => {
    return (
       <Link href={props.url} className="inline-flex items-center gap-4 hover:bg-accent/50 transition-colors p-1 rounded">
            <img src={props.image} alt={props.title} className="w-10 h-10 object-contain rounded-md"/>
            <div>                
                <p className="text-lg font-semibold">{props.title}</p>
                <p className="text-sm text-muted-foreground">{props.role}</p>
                <p className="text-sm text-muted-foreground">{props.description}</p>
            </div>
            <div className="ml-auto">
                <p className="text-sm text-muted-foreground">{props.date}</p>
            </div>
       </Link>
    );
};

const Studies: EtudesProps[] = [
    {
        image: "https://www.info-jeunesse16.com/images/ImagesUpload/actus/3179-1696.jpg",
        title: "BTS",
        description: "services informatiques aux organisations, option B solutions logicielles et applications métiers",
        date: "2018-2021"
    },
    {
        image: "https://upload.wikimedia.org/wikipedia/fr/e/ef/Logo_cesi_2022.png",
        title: "Bachelor",
        description: "Responsable en Ingénierie Logicielle",
        date: "2021-2022"
    },
    {
        image: "https://upload.wikimedia.org/wikipedia/fr/e/ef/Logo_cesi_2022.png",
        title: "Master",
        description: "Manager en architecture et applications logicielles des SI",
        date: "2022-2024"
    }
]

type EtudesProps = {
    image: string,
    title: string,
    description: string,
    date: string,
};

const Etudes = (props: EtudesProps) => {
    return (
       <div className="inline-flex items-center gap-4 hover:bg-accent/50 transition-colors p-1 rounded">
            <img src={props.image} alt={props.title} className="w-10 object-contain rounded-md"/>
            <div className="mr-auto">                
                <p className="text-base font-semibold">{props.title}</p>
                <p className="text-xs text-muted-foreground">{props.description}</p>
            </div>
            <p className="text-xs text-end text-muted-foreground">{props.date}</p>
       </div>
    );
};

const SIDE_PROJECTS: SideProjectProps[] = [
    {
        Logo: Code,
        title: "Project 1",
        description: "Description for project 1 lorem ipsum dolor sit amet consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
        url: "/"
    },
    {
        Logo: Code,
        title: "Project 2",
        description: "Description for project 2 lorem ipsum dolor sit amet consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
        url: "/"
    }
]

type SideProjectProps = {
    Logo: LucideIcon,
    title: string,
    description: string,
    url: string
};

const SideProject = (props: SideProjectProps) => {
    return (
       <Link href={props.url} className="inline-flex items-center gap-4 hover:bg-accent/50 transition-colors p-1 rounded">
            <span className="bg-accent text-accent-foreground p-2 rounded-sm">
                <props.Logo size={16}/>
            </span>
            <div>                
                <p className="text-lg font-semibold">{props.title}</p>
                <p className="text-sm text-muted-foreground">{props.description}</p>
            </div>
       </Link>
    );
};

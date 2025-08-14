import { Card } from "@/components/ui/card";
import { Section } from "./Section";
import Link from "next/link";
import { DiscordIcon } from "./icons/DiscordIcon";
import { FirebaseIcon } from "./icons/FirebaseIcon";
import { SideProject, SideProjectProps } from "./SideProjects";
import { Etudes, EtudesProps } from "./Studies";
import { Work, WorkProps } from "./Works";

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
            <Card className="p-4 flex-1 flex-col border-secondary">
                <p className="text-muted-foreground text-lg">Mes études</p>
                <div className="flex flex-col gap-4">
                    {Studies.map((project, index) => (
                        <Etudes key={index} {...project} />
                    ))}
                </div>
            </Card>
            <Card className="p-4 flex-1 flex-col border-secondary">
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
        image: "https://studio-little-dreams.com/lovable-uploads/100b7eda-880a-49b3-9586-a0c7534024f8.png",
        title: "Studio Little Dreams",
        role: "Chef de projet et Développeur front",
        description: "Dans une structure de quatre employés en télétravail, j’ai contribué à divers projets web et CRM, de la correction de bugs à la refonte complète de sites. J’ai notamment co-développé un CRM en autonomie, en gérant la planification, le suivi des tâches (Wrike) et la coordination via daily et weekly meetings, renforçant ainsi mon sens de l’initiative.",
        date: "2020-2024",
        url: "https://studio-little-dreams.com/"
    },
    {
        image: "https://www.macompta.fr/build/assets/Header/images/logo-macompta.b105b4138f87b215c2f19396e5a4314c.png",
        title: "MaCompta.fr",
        role: "Développeur back",
        description: "Au sein d’une entreprise de 40 collaborateurs, j’ai intégré une équipe Agile de 6 personnes appliquant des processus rigoureux (daily, weekly, jalons), des développeurs front, un testeur, une scrum master et deux développeur back. J’ai co-travaillé avec mon maître d’apprentissage sur un projet stratégique de refonte applicative, en étroite collaboration avec les autres business units.",
        date: "2024",
        url: "https://www.macompta.fr/"
    }
]

const Studies: EtudesProps[] = [
    {
        image: "https://www.info-jeunesse16.com/images/ImagesUpload/actus/3179-1696.jpg",
        title: "BTS",
        description: "services informatiques aux organisations, option B solutions logicielles et applications métiers",
        date: "2018-2021",
        url: "https://lycee-elie-vinet.fr/btssio"
    },
    {
        image: "https://upload.wikimedia.org/wikipedia/fr/e/ef/Logo_cesi_2022.png",
        title: "Bachelor",
        description: "Responsable en Ingénierie Logicielle",
        date: "2021-2022",
        url: "https://pau.cesi.fr/fr/actualites/responsable-ingenierie-logiciels-devops/"
    },
    {
        image: "https://upload.wikimedia.org/wikipedia/fr/e/ef/Logo_cesi_2022.png",
        title: "Master",
        description: "Manager en architecture et applications logicielles des SI",
        date: "2022-2024",
        url: "https://www.cesi.fr/formation/manager-en-architecture-et-applications-logicielles-des-si-2357997/"
    }
]

const SIDE_PROJECTS: SideProjectProps[] = [
    {
        Logo: FirebaseIcon,
        title: "Firebase avec Angular",
        description: "Réalisation d'une application simple surtout axée sur la mise en place de l'authentification et la gestion des utilisateurs via Firebase, afin d'être utiliser sur un projet futur.",
        url: "https://github.com/BaptisteNebout/AngularFirebase"
    },
    {
        Logo: DiscordIcon,
        title: "Bot discord",
        description: "Création d'un bot Discord pour la récupération d'information automatisé sur un site spécifique.",
        url: "https://github.com/BaptisteNebout/mhBot"
    }
]
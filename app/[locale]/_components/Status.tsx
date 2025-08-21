import { Section } from "./Section";
import { Work, WorkProps } from "./Works";
import { JavaIcon } from "./icons/JavaIcon";
import { Card } from "@/components/ui/card";
import { Etudes, EtudesProps } from "./Studies";
import { DiscordIcon } from "./icons/DiscordIcon";
import { FirebaseIcon } from "./icons/FirebaseIcon";
import { getScopedI18n } from '../../../locales/server';
import { SideProject, SideProjectProps } from "./SideProjects";

export const Status = async () => {
    const tExp = await getScopedI18n('Status.Experiences')
    const tProj = await getScopedI18n('Status.ProjetPerso')
    const tEtudes = await getScopedI18n('Status.Etudes')
    return (
        <Section className="grid grid-cols-3 gap-4 max-md:flex max-md:flex-col">
            <Card className="col-span-2 p-4 flex-col gap-2 w-full border-secondary">
                <p className="text-muted-foreground text-lg">{tExp('title')}</p>
                <div className="flex flex-col gap-4">
                    {Works.map((project, index) => (
                        <Work key={index} {...project} />
                    ))}
                </div>
            </Card>

            <Card className="col-span-1 p-4 flex-1 flex-col border-secondary">
                <p className="text-muted-foreground text-lg">{tProj('title')}</p>
                <div className="flex flex-col gap-4">
                    {SIDE_PROJECTS.map((project, index) => (
                        <SideProject key={index} {...project} />
                    ))}
                </div>
            </Card>

            <Card className="col-span-3 p-4 flex-1 flex-col border-secondary">
                <p className="text-muted-foreground text-lg">{tEtudes('title')}</p>
                <div className="grid grid-cols-3 gap-4 max-md:grid-cols-1">
                    {Studies.map((project, index) => (
                        <div key={index} className="flex flex-col">
                            <Etudes {...project} />
                        </div>
                    ))}
                </div>
            </Card>
        </Section>
    );
};

const Works: WorkProps[] = [
    {
        image: "https://studio-little-dreams.com/lovable-uploads/100b7eda-880a-49b3-9586-a0c7534024f8.png",
        titleKey: 'SLD.title',
        roleKey: 'SLD.role',
        descriptionKey: 'SLD.description',
        date: "2020-2024",
        url: "https://studio-little-dreams.com/"
    },
    {
        image: "https://www.macompta.fr/build/assets/Header/images/logo-macompta.b105b4138f87b215c2f19396e5a4314c.png",
        titleKey: "Macompta.title",
        roleKey: "Macompta.role",
        descriptionKey: "Macompta.description",
        date: "2024",
        url: "https://www.macompta.fr/"
    }
]

const Studies: EtudesProps[] = [
    {
        image: "https://www.info-jeunesse16.com/images/ImagesUpload/actus/3179-1696.jpg",
        titleKey: 'BTS.title',
        descriptionKey: 'BTS.description',
        date: "2018-2021",
        url: "https://lycee-elie-vinet.fr/btssio"
    },
    {
        image: "https://upload.wikimedia.org/wikipedia/fr/e/ef/Logo_cesi_2022.png",
        titleKey: 'Bachelor.title',
        descriptionKey: 'Bachelor.description',
        date: "2021-2022",
        url: "https://pau.cesi.fr/fr/actualites/responsable-ingenierie-logiciels-devops/"
    },
    {
        image: "https://upload.wikimedia.org/wikipedia/fr/e/ef/Logo_cesi_2022.png",
        titleKey: 'Master.title',
        descriptionKey: 'Master.description',
        date: "2022-2024",
        url: "https://www.cesi.fr/formation/manager-en-architecture-et-applications-logicielles-des-si-2357997/"
    }
]

const SIDE_PROJECTS: SideProjectProps[] = [
    {
        Logo: FirebaseIcon,
        titleKey: 'Firebase.title',
        descriptionKey: 'Firebase.description',
        url: "https://github.com/BaptisteNebout/AngularFirebase"
    },
    {
        Logo: DiscordIcon,
        titleKey: 'BotDiscord.title',
        descriptionKey: 'BotDiscord.description',
        url: "https://github.com/BaptisteNebout/mhBot"
    },
    {
        Logo: JavaIcon,
        titleKey: 'JavaSpringBoot.title',
        descriptionKey: 'JavaSpringBoot.description',
        url: "https://github.com/BaptisteNebout"
    }
]
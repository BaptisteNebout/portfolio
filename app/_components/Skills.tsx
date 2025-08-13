import { Badge } from "@/components/ui/badge";
import { Section } from "./Section";
import { AngularLogo } from "./icons/AngularLogo";
import { JavaLogo } from "./icons/JavaLogo";
import { SQLLogo } from "./icons/SQLLogo";
import { Code } from "./Code";

export const Skills = () => {
  return (
    <Section className="flex flex-col items-start gap-4">
      <Badge className="rounded-[5px]" variant={"outline"}>Skills</Badge>
      <h2 className="pb-2 text-3xl font-semibold tracking-tight first:mt-0">
        j'ai pu traviller sur...
      </h2>
      <div className="flex max-md:flex-col gap-4">
         <div className="flex flex-col gap-2 flex-1">
            <AngularLogo size={42} />
            <h3 className="text-2xl font-semibold tracking-tight">Front-end</h3>
            <p className="text-muted-foreground text-sm">Création d’interfaces modernes et réactives avec <Code>Angular</Code>, <Code>Vue</Code> et <Code>SCSS</Code>, sur des projets personnels, académiques et professionnels.</p>
          </div>
          <div className="flex flex-col gap-2 flex-1">
            <JavaLogo size={42} />
            <h3 className="text-2xl font-semibold tracking-tight">Back-end</h3>
            <p className="text-muted-foreground text-sm">Développement d’applications en <Code>Java</Code> avec <Code>Spring Boot</Code> et <Code>PHP</Code>, avec une approche orientée performance et évolutivité, et des connexions à des API tiers.</p>
          </div>
          <div className="flex flex-col gap-2 flex-1">
            <SQLLogo size={42} />
            <h3 className="text-2xl font-semibold tracking-tight">Base de données</h3>
            <p className="text-muted-foreground text-sm">Gestion de données avec <Code>MySQL</Code> et <Code>MongoDB</Code>, pour des solutions fiables et adaptées aux besoins des projets.</p>
          </div>
      </div>
    </Section>
  );
};

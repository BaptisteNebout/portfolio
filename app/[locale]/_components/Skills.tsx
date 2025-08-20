import { Code } from "./Code";
import { Section } from "./Section";
import { SQLLogo } from "./icons/SQLLogo";
import { JavaLogo } from "./icons/JavaLogo";
import { JiraIcon } from "./icons/JiraIcon";
import { Badge } from "@/components/ui/badge";
import { DockerIcon } from "./icons/DockerIcon";
import { AngularLogo } from "./icons/AngularLogo";
import { getScopedI18n } from '../../../locales/server';

export const Skills = async () => {
    const scopedT = await getScopedI18n('Skills')
    const tFront = await getScopedI18n('Skills.FrontEnd')
    const tBack = await getScopedI18n('Skills.BackEnd')
    const tDB = await getScopedI18n('Skills.BDD')
    const tDeploy = await getScopedI18n('Skills.Deploiement')
    const tManage = await getScopedI18n('Skills.GestionDeProjet') as any
    return (
    <Section className="flex flex-col items-start gap-4">
      <Badge className="rounded-[5px]" variant={"outline"}>{scopedT('badge')}</Badge>
      <h2 className="pb-2 text-3xl font-semibold tracking-tight first:mt-0">
        {scopedT('title')}
      </h2>
      <div className="grid gap-10">
        <div className="flex max-md:flex-col gap-4">
          <div className="flex flex-col gap-2 flex-1">
              <AngularLogo size={42} />
              <h3 className="text-2xl font-semibold tracking-tight">{tFront('title')}</h3>
              <p className="text-muted-foreground text-sm">{tFront('description1')}<Code>Angular</Code>, <Code>Vue</Code> {tFront('and')} <Code>SCSS</Code>{tFront('description2')}</p>
            </div>
            <div className="flex flex-col gap-2 flex-1">
              <JavaLogo size={42} />
              <h3 className="text-2xl font-semibold tracking-tight">{tBack('title')}</h3>
              <p className="text-muted-foreground text-sm">{tBack('description1')}<Code>Java</Code> {tBack('with')} <Code>Spring Boot</Code> {tBack('and')} <Code>PHP</Code>{tBack('description2')}</p>
            </div>
            <div className="flex flex-col gap-2 flex-1">
              <SQLLogo size={42} />
              <h3 className="text-2xl font-semibold tracking-tight">{tDB('title')}</h3>
              <p className="text-muted-foreground text-sm">{tDB('description1')}<Code>MySQL</Code> {tDB('and')} <Code>MongoDB</Code>{tDB('description2')}</p>
            </div>
        </div>
        <div className="flex max-md:flex-col gap-20 md:m-auto ">
          <div className="flex flex-col gap-2 flex-1">
              <DockerIcon size={42} />
              <h3 className="text-2xl font-semibold tracking-tight">{tDeploy('title')}</h3>
              <p className="text-muted-foreground text-sm">{tDeploy('description1')}<Code>Jenkins</Code> {tDeploy('and')} <Code>Docker</Code>{tDeploy('description2')}</p>
            </div>
            <div className="flex flex-col gap-2 flex-1">
              <JiraIcon size={42} />
              <h3 className="text-2xl font-semibold tracking-tight">{tManage('title')}</h3>
              <p className="text-muted-foreground text-sm">{tManage('description1')} <u>{tManage('planning')}</u> {tManage('description2')} <u>{tManage('budget')}</u> {tManage('description3')}<Code>Jira</Code>{tManage('description4')}</p>
            </div>
        </div>
      </div>
    </Section>
  );
};

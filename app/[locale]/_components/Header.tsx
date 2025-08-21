import { buttonVariants } from "@/components/ui/button";
import { GithubIcon } from "./icons/GithubIcon";
import { cn } from "@/lib/utils";
import Link from "next/link";
import { Section } from "./Section";
import { LinkedinIcon } from "./icons/LinkedinIcon";
import { GmailIcon } from "./icons/GmailIcon";
import { LocaleSelect } from "./LocaleSelect";

export const Header = () => {
    return (
        <header className="top-0 py-4">
            <Section className="flex items-baseline">
                <h1 className="text-lg font-bold text-primary">Baptiste NEBOUT</h1>
                <div className="flex-1"/>
                <ul className="flex items-center gap-2">
                    <Link href="https://github.com/baptistenebout" className={cn(buttonVariants({ variant: "outlineIcon", size: "icon" }), " h-6 w-6 p-0 rounded-[7px] ")}>
                        <GithubIcon size={12} className="text-foreground"/>
                    </Link>
                    <Link href="https://www.linkedin.com/in/bnebout" className={cn(buttonVariants({ variant: "outlineIcon", size: "icon" }), " h-6 w-6 p-0 rounded-[7px] ")}>
                        <LinkedinIcon size={12} className="text-foreground"/>
                    </Link>
                    <Link href="mailto:baptiste16300@gmail.com" className={cn(buttonVariants({ variant: "outlineIcon", size: "icon" }), " h-6 w-6 p-0 rounded-[7px] ")}>
                        <GmailIcon size={12} className="text-foreground"/>
                    </Link>
                    <LocaleSelect />
                </ul>
            </Section>
        </header>
    );
}
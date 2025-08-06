import { buttonVariants } from "@/components/ui/button";
import { GithubIcon } from "./icons/GithubIcon";
import { cn } from "@/lib/utils";
import Link from "next/link";
import { Section } from "./Section";
import { LinkedinIcon } from "./icons/LinkedinIcon";

export const Header = () => {
    return (
        <header className="sticky top-0 py-4">
            <Section className="flex items-baseline">
                <h1 className="text-lg font-bold text-primary">baptiste-nebout.fr</h1>
                <div className="flex-1"/>
                <ul className="flex items-center gap-2">
                    <Link href="https://github.com/baptistenebout" className={cn(buttonVariants({ variant: "outline" }), "h-6 w-6 p-0 ")}>
                        <GithubIcon size={12} className="text-foreground"/>
                    </Link>
                    <Link href="https://www.linkedin.com/in/bnebout" className={cn(buttonVariants({ variant: "outline" }), "h-6 w-6 p-0 ")}>
                        <LinkedinIcon size={12} className="text-foreground"/>
                    </Link>
                </ul>
            </Section>
        </header>
    );
}
import { Section } from "./Section";

export const Footer = () => {
    return (
        <footer className="bg-card">
            <Section className="py-8 flex max-md:flex-col flex-row gap-10">
                <p className="text-muted-foreground text-sm">© 2025 Baptiste Nebout</p>
                <p className="text-muted-foreground text-sm">lien vers mon cv</p>
                <p className="text-muted-foreground text-sm">lien vers ma lettre de motivation</p>
            </Section>
        </footer>
    );
};
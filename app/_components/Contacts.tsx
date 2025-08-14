import { Badge } from "@/components/ui/badge";
import { Contact } from "./Contact";
import { Section } from "./Section";

export const Contacts = () => {
  return (
    <Section className="flex flex-col items-start gap-4">
        <Badge variant="outline">Me contacter</Badge>
        <h2 className="pb-2 text-3xl font-semibold tracking-tight first:mt-0">Je serais ravi d'échanger avec vous</h2>
        <div className="max-md:flex-col grid grid-cols-3 gap-4 w-full">
            <Contact 
                name="Baptiste Nebout" 
                description="Linkedin" 
                url="https://www.linkedin.com/in/bnebout" 
                image="/PhotoProfil.jpg" 
                mediumImage="https://upload.wikimedia.org/wikipedia/commons/thumb/c/ca/LinkedIn_logo_initials.png/500px-LinkedIn_logo_initials.png"
            />
            <Contact 
                name="Téléphone portable" 
                description="07 83 53 66 88" 
                url="/" 
                image="/PhotoProfil.jpg" 
                mediumImage="https://images.vexels.com/media/users/3/205069/isolated/preview/f207045d96c258fed664305f0ac2c5bd-telephone-handset-blue-icon.png?w=360"
            />
            <Contact 
                name="Email" 
                description="baptiste16300@gmail.com" 
                url="mailto:baptiste16300@gmail.com" 
                image="/PhotoProfil.jpg" 
                mediumImage="https://static.vecteezy.com/system/resources/previews/022/613/021/non_2x/google-mail-gmail-icon-logo-symbol-free-png.png"
            />
        </div>
    </Section>
  );
};
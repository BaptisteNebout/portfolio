"use client";
import { Contact } from "./Contact";
import { Section } from "./Section";
import { Badge } from "@/components/ui/badge";
import { useScopedI18n } from '../../../locales/client';

export const Contacts = () => {
  const scopedT = useScopedI18n('Contact');

  return (
    <Section className="flex flex-col items-start gap-4">
        <Badge variant="outline">{scopedT('badge')}</Badge>
        <h2 className="pb-2 text-3xl font-semibold tracking-tight first:mt-0">{scopedT('title')}</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 w-full">
            <Contact 
                nameKey='linkedin' 
                description="Linkedin" 
                url="https://www.linkedin.com/in/bnebout" 
                image="/PhotoProfil.jpg" 
                mediumImage="https://upload.wikimedia.org/wikipedia/commons/thumb/c/ca/LinkedIn_logo_initials.png/500px-LinkedIn_logo_initials.png"
                type="link"
                toCopy="https://www.linkedin.com/in/bnebout"
            />
            <Contact 
                nameKey='phone'
                description="07 83 53 66 88" 
                url="/" 
                image="/PhotoProfil.jpg" 
                mediumImage="https://images.vexels.com/media/users/3/205069/isolated/preview/f207045d96c258fed664305f0ac2c5bd-telephone-handset-blue-icon.png?w=360"
                type="copy"
                toCopy="07 83 53 66 88"
            />
            <Contact 
                nameKey='mail'
                description="baptiste16300@gmail.com" 
                url="" 
                image="/PhotoProfil.jpg" 
                mediumImage="https://static.vecteezy.com/system/resources/previews/022/613/021/non_2x/google-mail-gmail-icon-logo-symbol-free-png.png"
                type="copy"
                toCopy="baptiste16300@gmail.com"
            />
        </div>
    </Section>
  );
};
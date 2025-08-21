import Link from "next/link";
import { useState } from "react";
import { Card } from "@/components/ui/card";
import { ArrowUpRight, Copy } from "lucide-react";
import { useScopedI18n } from '../../../locales/client';

type contactKey = "linkedin" | "phone" | "mail";

export interface ContactProps {
    image: string,
    mediumImage: string,
    nameKey: contactKey,
    description: string,
    url: string,
    type: string,
    toCopy: string,
};

export const Contact = (props: ContactProps) => {
    const scopedT = useScopedI18n('Contact')
    const [copied, setCopied] = useState(false);

    const handleCopy = () => {
        navigator.clipboard.writeText(props.toCopy)
            .then(() => {
            setCopied(true);
            setTimeout(() => setCopied(false), 2000);
        })
            .catch(err => {
            console.error("Erreur lors de la copie :", err);
        });
    };
    if (props.type === "link") {
        return (
            <Link href={props.url}>
                <Card className="p-2 pt-3 pb-3 bg-accent/10 flex w-full items-center gap-4 hover:bg-accent/30 transition-colors group">
                    <div className="relative">
                        <img src={props.image} alt={scopedT(props.nameKey)} className="w-10 h-10 rounded-full object-contain"/>
                        <img src={props.mediumImage} alt={scopedT(props.nameKey)} className="w-4 h-4 absolute -bottom-1 -right-1 rounded-full object-contain"/>
                    </div>
                    <div className="mr-auto">                
                        <p className="text-base font-semibold whitespace-nowrap">{scopedT(props.nameKey)}</p>
                        <p className="text-xs text-muted-foreground">{props.description}</p>
                    </div>
                    
                    <ArrowUpRight className="group-hover:translate-x-2 mr-2 group-hover:-translate-y-2 transition-transform" size={16}/>
                </Card>
            </Link>
        );
    }

    if (props.type === "copy") {
        return (
            <button onClick={handleCopy} >
                <Card className="p-2 pt-3 pb-3 bg-accent/10 flex w-full items-center gap-4 hover:bg-accent/30 transition-colors">
                    <div className="relative">
                        <img src={props.image} alt={scopedT(props.nameKey)} className="w-10 h-10 rounded-full object-contain"/>
                        <img src={props.mediumImage} alt={scopedT(props.nameKey)} className="w-4 h-4 absolute -bottom-1 -right-1 rounded-full object-contain"/>
                    </div>
                    <div className="mr-auto flex items-start flex-col">                
                        <p className="text-base font-semibold whitespace-nowrap">{scopedT(props.nameKey)}</p>
                        <p className="text-xs text-muted-foreground">{props.description}</p>
                    </div>
                    
                        {copied ? (
                            <span className="text-xs text-green-500">{scopedT('copie')}</span>
                        ) : (
                            <Copy className="mr-2" size={16} />
                        )}
                </Card>
            </button>
        );
    }

};
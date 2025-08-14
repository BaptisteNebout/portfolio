import { Card } from "@/components/ui/card";
import { ArrowUpRight } from "lucide-react";
import Link from "next/link";

export type ContactProps = {
    image: string,
    mediumImage: string,
    name: string,
    description: string,
    url: string
};

export const Contact = (props: ContactProps) => {
    return (
       <Link href={props.url}>
            <Card className="p-2 pt-3 pb-3 bg-accent/10 flex w-full items-center gap-4 hover:bg-accent/30 transition-colors group">
                <div className="relative">
                    <img src={props.image} alt={props.name} className="w-10 h-10 rounded-full object-contain"/>
                    <img src={props.mediumImage} alt={props.name} className="w-4 h-4 absolute -bottom-1 -right-1 rounded-full object-contain"/>
                </div>
                <div className="mr-auto">                
                    <p className="text-base font-semibold">{props.name}</p>
                    <p className="text-xs text-muted-foreground">{props.description}</p>
                </div>
                <ArrowUpRight className="group-hover:translate-x-2 mr-2 group-hover:-translate-y-2 transition-transform" size={16}/>
            </Card>
       </Link>
    );
};
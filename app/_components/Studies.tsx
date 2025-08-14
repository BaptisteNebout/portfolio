import Link from "next/link";

export type EtudesProps = {
    image: string,
    title: string,
    description: string,
    date: string,
    url: string
};

export const Etudes = (props: EtudesProps) => {
    return (
       <Link href={props.url} className="inline-flex items-center gap-4 hover:bg-accent/50 transition-colors p-1 rounded">
            <img src={props.image} alt={props.title} className="w-10 object-contain rounded-md"/>
            <div className="mr-auto">                
                <p className="text-base font-semibold">{props.title}</p>
                <p className="text-xs text-muted-foreground">{props.description}</p>
            </div>
            <p className="text-xs text-end text-muted-foreground">{props.date}</p>
       </Link>
    );
};
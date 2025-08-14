import Link from "next/link";

export type WorkProps = {
    image: string,
    title: string,
    role: string,
    description: string,
    date: string,
    url: string
};

export const Work = (props: WorkProps) => {
    return (
       <Link href={props.url} className="inline-flex items-center gap-4 hover:bg-accent/50 transition-colors p-1 rounded">
            <img src={props.image} alt={props.title} className="w-20 h-20 object-contain rounded-md"/>
            <div className="mr-auto">                
                <p className="text-lg font-semibold">{props.title}</p>
                <p className="text-md font-bold text-muted-foreground">{props.role}</p>
                <p className="text-sm text-muted-foreground">{props.description}</p>
            </div>
            <div className="ml-auto">
                <p className="text-sm text-muted-foreground">{props.date}</p>
            </div>
       </Link>
    );
};

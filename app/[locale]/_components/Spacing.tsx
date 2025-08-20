import { cn } from "@/lib/utils";

export type SpacingProps = {
    size?: "sm" | "md" | "lg";
}

export const Spacing = ({ size = "md" }: SpacingProps) => {
    let height = "";

    if (size === "sm") height = "h-8 lg:h-16";
    if (size === "md") height = "h-16 lg:h-24";
    if (size === "lg") height = "h-24 lg:h-32";

    return (
        <div className={cn(height)} />
    );
};
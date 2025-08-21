"use client"

import { Button } from "@/components/ui/button";
import { useChangeLocale, useCurrentLocale } from "@/locales/client";

type LocaleSelectProps = React.ButtonHTMLAttributes<HTMLButtonElement>;

export const LocaleSelect = ({ className, ...props }: LocaleSelectProps) => {
    const locale = useCurrentLocale();
    const changeLocale = useChangeLocale();
    const isFrench = locale === "fr"
    return (
        <Button
            variant="outlineIcon"
            size="icon" 
            onClick={() => changeLocale(isFrench ? "en" : "fr")}
            className= "h-6 w-6 p-0 rounded-[7px]"
            aria-label={isFrench ? "Switch to English" : "Passer en Français"}
            {...props}
            >
            <img
                src={isFrench ? "/fr.svg" : "/en.svg"}
                alt={isFrench ? "🇬🇧" : "🇫🇷"}
                className="h-5 w-5"
            />
        </Button>
    );
}
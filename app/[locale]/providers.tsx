"use client"

import { I18nProviderClient } from "@/locales/client";
import { ThemeProvider } from "next-themes";
import { PropsWithChildren } from "react";

export function Providers({
  children,
  locale,
}: PropsWithChildren<{ locale: string }>) {
  return <ThemeProvider attribute="class" defaultTheme="system" enableSystem><I18nProviderClient locale={locale}>{children}</I18nProviderClient></ThemeProvider>;
}

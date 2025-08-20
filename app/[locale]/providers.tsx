"use client"

import { I18nProviderClient } from "@/locales/client";
import { PropsWithChildren } from "react";

export function Providers({
  children,
  locale,
}: PropsWithChildren<{ locale: string }>) {
  return <I18nProviderClient locale={locale}>{children}</I18nProviderClient>;
}

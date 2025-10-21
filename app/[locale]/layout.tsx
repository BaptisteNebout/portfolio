import "./globals.css";
import { cn } from "@/lib/utils";
import type { Metadata } from "next";
import { Providers } from "./providers";
import { GeistSans } from 'geist/font/sans';
import { GeistMono } from 'geist/font/mono';
import { Anek_Telugu} from "next/font/google";

const AnekTelugu = Anek_Telugu({subsets: ["latin"], variable: "--font-caption"});

export const metadata: Metadata = {
  title: "Baptiste Nebout . Développeur Logiciel Fullstack",
  description: "Développeur logiciel passionné par la création d'applications, avec une expertise en Front-end et back-end.",
};

export default async function RootLayout({
  children,
  params,
}: Readonly<{
  children: React.ReactNode;
  params: Promise<{ locale: string }>;
}>) {
  const { locale } = await params;
  return (
    <html lang="fr" className="h-full" suppressHydrationWarning>
      <body className={cn(GeistSans.variable, GeistMono.variable, AnekTelugu.variable, "font-sans h-full bg-background light:bg-background text-foreground")}><Providers  locale={locale}>{children}</Providers ></body>
    </html>
  );
}

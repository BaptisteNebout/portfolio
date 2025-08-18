import type { Metadata } from "next";
import { Anek_Telugu} from "next/font/google";
import "./globals.css";
import { GeistSans } from 'geist/font/sans';
import { GeistMono } from 'geist/font/mono';
import { cn } from "@/lib/utils";

const AnekTelugu = Anek_Telugu({subsets: ["latin"], variable: "--font-caption"});

export const metadata: Metadata = {
  title: "Baptiste Nebout . Développeur Logiciel",
  description: "Développeur logiciel passionné par la création d'applications, avec une expertise en Front-end et back-end.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="fr" className="h-full">
      <body className={cn(GeistSans.variable, GeistMono.variable, AnekTelugu.variable, "font-sans h-full bg-background text-foreground")}> {children} </body>
    </html>
  );
}

import type { Metadata, Viewport } from "next";
import localFont from "next/font/local";
import { Shell } from "@/components/Shell";
import { siteUrl } from "@/content/seo";
import "./globals.css";

const archivo = localFont({
  // Latin subset covers Portuguese; latin-ext is left out to keep the preload small.
  src: [{ path: "../fonts/archivo-latin-wdth-normal.woff2", style: "normal" }],
  weight: "100 900",
  declarations: [{ prop: "font-stretch", value: "62% 125%" }],
  variable: "--font-archivo",
  display: "swap",
});

const mono = localFont({
  src: [{ path: "../fonts/jetbrains-mono-latin-wght-normal.woff2", style: "normal" }],
  weight: "100 800",
  variable: "--font-mono",
  display: "swap",
});

const description =
  "Eros Amancio, desenvolvedor em Recife. Crio sites para pequenos negócios e profissionais liberais, do visual ao que roda por trás.";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: "Eros Amancio · Sites que além de bonitos, funcionam",
    template: "%s · Eros Amancio",
  },
  description,
  openGraph: {
    type: "website",
    locale: "pt_BR",
    siteName: "Eros Amancio",
    title: "Sites que além de bonitos, funcionam",
    description,
  },
  alternates: { canonical: "/" },
};

export const viewport: Viewport = {
  themeColor: "#14161c",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="pt-BR" className={`${archivo.variable} ${mono.variable}`}>
      <body>
        <a className="skip" href="#conteudo">
          Pular para o conteúdo
        </a>
        <Shell>{children}</Shell>
      </body>
    </html>
  );
}

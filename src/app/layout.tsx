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
  src: [
    {
      path: "../fonts/jetbrains-mono-latin-wght-normal.woff2",
      style: "normal",
    },
  ],
  weight: "100 800",
  variable: "--font-mono",
  display: "swap",
});

const description =
  "Portfólio de Eros Amancio, estudante de Ciência da Computação na CESAR School e estagiário na Sociiz: projetos em React, Python, Java e C, do frontend ao backend.";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: "Eros Amancio · Desenvolvedor",
    template: "%s · Eros Amancio",
  },
  description,
  openGraph: {
    type: "website",
    locale: "pt_BR",
    siteName: "Eros Amancio",
    title: "Eros Amancio · Desenvolvedor",
    description,
  },
  alternates: { canonical: "/" },
};

export const viewport: Viewport = {
  themeColor: "#141417",
};

const introScript = `try{var d=document.documentElement,p=location.pathname==="/"&&!sessionStorage.getItem("intro")&&!matchMedia("(prefers-reduced-motion: reduce)").matches;d.dataset.intro=p?"play":"done"}catch(e){document.documentElement.dataset.intro="done"}`;

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="pt-BR" className={`${archivo.variable} ${mono.variable}`} suppressHydrationWarning>
      <head>
        {/* Decides before first paint whether the opening sequence plays: home page, once per session, no reduced motion. */}
        <script dangerouslySetInnerHTML={{ __html: introScript }} />
      </head>
      <body>
        <a className="skip" href="#conteudo">
          Pular para o conteúdo
        </a>
        <Shell>{children}</Shell>
      </body>
    </html>
  );
}

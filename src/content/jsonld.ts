import { contact } from "./site";
import { siteUrl } from "./seo";

export const personJsonLd = {
  "@context": "https://schema.org",
  "@type": "Person",
  name: "Eros Amancio Nascimento",
  url: siteUrl,
  image: `${siteUrl}/images/eros.jpg`,
  jobTitle: "Estagiário de Banco de Dados",
  worksFor: { "@type": "Organization", name: "Sociiz" },
  knowsLanguage: ["pt-BR", "en"],
  address: {
    "@type": "PostalAddress",
    addressLocality: "Recife",
    addressRegion: "PE",
    addressCountry: "BR",
  },
  alumniOf: { "@type": "CollegeOrUniversity", name: "CESAR School" },
  email: `mailto:${contact.email}`,
  sameAs: [contact.github, contact.linkedin],
};

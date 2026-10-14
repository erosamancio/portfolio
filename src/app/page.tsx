import Link from "next/link";
import { ArrowUpRight, Mail } from "lucide-react";
import { GitHubIcon, LinkedInIcon, WhatsAppIcon } from "@/components/BrandIcons";
import { SectionMotion } from "@/motion/SectionMotion";
import { ProfileIntro } from "@/components/ProfileIntro";
import { Projects } from "@/components/Projects";
import { CopyButton } from "@/components/CopyButton";
import { ContactPanel, SiteSnippet, StackPanel } from "@/components/CodePanels";
import panels from "@/components/CodeSections.module.css";
import { contact, experience, whatsappUrl } from "@/content/site";
import { personJsonLd } from "@/content/jsonld";
import styles from "./page.module.css";

function H2({ id, children }: { id: string; children: React.ReactNode }) {
  return (
    <h2 id={id} className={styles.h2} data-m="title">
      <span className="hash" aria-hidden="true" data-hash="">
        #
      </span>
      <span data-title-text="">{children}</span>
    </h2>
  );
}

const contactRows = [
  { key: "E-mail", label: contact.email, href: `mailto:${contact.email}`, icon: <Mail aria-hidden="true" /> },
  {
    key: "LinkedIn",
    label: "linkedin.com/in/erosamancio",
    href: contact.linkedin,
    icon: <LinkedInIcon className={styles.iconLinkedin} />,
  },
  {
    key: "GitHub",
    label: "github.com/erosamancio",
    href: contact.github,
    icon: <GitHubIcon className={styles.iconGithub} />,
  },
  {
    key: "WhatsApp",
    label: contact.whatsappDisplay,
    href: whatsappUrl,
    icon: <WhatsAppIcon className={styles.iconWhatsapp} />,
  },
];

export default function Home() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(personJsonLd) }} />
      <SectionMotion />
      <ProfileIntro />
      <Projects />

      <section id="experiencia" className={`${styles.section} ${styles.alt}`} aria-labelledby="experiencia-title">
        <div className={`wrap ${styles.split}`}>
          <H2 id="experiencia-title">Experiência</H2>
          <div className={styles.timeline}>
            <article className={styles.role}>
              <header className={styles.roleHead}>
                <h3 className={styles.h3}>Sociiz</h3>
                <p className={styles.meta}>Estagiário de Banco de Dados · Recife, PE</p>
              </header>
              <ul className={styles.items} data-m="timeline">
                {experience.map((e) => (
                  <li key={e.name}>
                    <h4 className={styles.h4}>
                      {e.slug ? <Link href={`/trabalhos/${e.slug}`}>{e.name}</Link> : e.name}
                    </h4>
                    <p>{e.text}</p>
                  </li>
                ))}
              </ul>
            </article>
            <article className={styles.role}>
              <header className={styles.roleHead}>
                <h3 className={styles.h3}>CESAR School</h3>
                <p className={styles.meta}>Ciência da Computação · em andamento, 4º período</p>
              </header>
            </article>
          </div>
        </div>
      </section>

      <section id="stack" className={styles.section} aria-labelledby="stack-title" data-only="code">
        <div className={`wrap ${styles.split}`}>
          <div className={styles.lead}>
            <H2 id="stack-title">Tecnologias</H2>
            <p className={styles.soft}>
              O que já usei em projeto, no estágio ou na faculdade. Falo português nativo e inglês fluente, inclusive
              para ler documentação e conversar sobre trabalho.
            </p>
          </div>
          <StackPanel />
        </div>
      </section>

      <section id="este-site" className={styles.section} aria-labelledby="este-site-title" data-only="code">
        <div className={`wrap ${panels.site}`}>
          <div className={styles.lead}>
            <H2 id="este-site-title">Este site</H2>
            <p className={styles.soft}>
              Fiz este portfólio do zero, sem template. O arquivo destacado no explorador muda conforme a seção que você
              está lendo, e o trecho ao lado é o código que faz isso, lido do próprio projeto.
            </p>
            <ul className={panels.proofs}>
              <li>Carrega rápido: as páginas já saem prontas.</li>
              <li>Navegação completa pelo teclado.</li>
              <li>
                <a href={`${contact.github}/portfolio`} target="_blank" rel="noopener">
                  Código aberto no GitHub <ArrowUpRight aria-hidden="true" />
                </a>
              </li>
            </ul>
          </div>
          <SiteSnippet />
        </div>
      </section>

      <section id="contato" className={styles.contact} aria-labelledby="contato-title">
        <div className={`wrap ${styles.contactInner}`}>
          <div className={styles.lead}>
            <h2 id="contato-title" className={styles.contactTitle} data-m="title">
              <span data-title-text="">Vamos conversar?</span>
            </h2>
            <p className={styles.soft}>
              Se for sobre uma vaga ou um projeto, ou só para trocar ideia, escreva por onde preferir. Eu respondo.
            </p>
            <div className={styles.contactActions}>
              <a className={styles.primary} href={`mailto:${contact.email}`}>
                <Mail aria-hidden="true" /> Enviar e-mail
              </a>
              <a className={styles.whatsapp} href={whatsappUrl} target="_blank" rel="noopener">
                <WhatsAppIcon /> Chamar no WhatsApp
              </a>
              <CopyButton value={contact.email} className={styles.copy} />
            </div>
          </div>
          <ul className={styles.contactList} data-only="preview">
            {contactRows.map((r) => (
              <li key={r.key}>
                <span className={styles.contactKey}>
                  {r.icon} {r.key}
                </span>
                <a
                  className={styles.contactLink}
                  href={r.href}
                  {...(r.href.startsWith("http") ? { target: "_blank", rel: "noopener" } : {})}
                >
                  {r.label}
                </a>
              </li>
            ))}
          </ul>
          <ContactPanel
            rows={contactRows.map((r) => ({
              key: r.key.toLowerCase().replace("-", ""),
              label: r.label,
              href: r.href,
            }))}
          />
        </div>
        <p className={`wrap ${styles.colophon}`} data-only="preview">
          Fiz este site do zero, sem template.{" "}
          <a href={`${contact.github}/portfolio`} target="_blank" rel="noopener">
            O código está aberto no GitHub <ArrowUpRight aria-hidden="true" />
          </a>
        </p>
      </section>
    </>
  );
}

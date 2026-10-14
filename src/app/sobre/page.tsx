import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { ArrowUpRight, Mail } from "lucide-react";
import { GitHubIcon, LinkedInIcon, WhatsAppIcon } from "@/components/BrandIcons";
import { Disclosure } from "@/components/Disclosure";
import { TechLine } from "@/components/TechLine";
import { contact, experience, knownTechColor, projects, skills, whatsappUrl } from "@/content/site";
import styles from "./sobre.module.css";

export const metadata: Metadata = {
  title: "Sobre e experiência",
  description:
    "Eros Amancio: estudante de Ciência da Computação na CESAR School e estagiário na Sociiz, com React, Python, Java e integrações.",
  alternates: { canonical: "/sobre" },
};

export default function SobrePage() {
  return (
    <div className={styles.page}>
      <header className={`wrap ${styles.intro}`}>
        <div className={styles.introText}>
          <h1 className={styles.title}>
            <span className="hash" aria-hidden="true">
              #
            </span>
            Eros Amancio
          </h1>
          <p className={styles.lead}>
            Estudo Ciência da Computação na CESAR School, no 4º período, e faço estágio na Sociiz, em Recife. Trabalho
            nas duas pontas de um sistema: as telas que as pessoas usam e a parte que roda por trás delas, em Python,
            Java e React.
          </p>
          <ul className={styles.links}>
            <li>
              <a href={contact.github} target="_blank" rel="noopener">
                <GitHubIcon /> GitHub
              </a>
            </li>
            <li>
              <a href={contact.linkedin} target="_blank" rel="noopener">
                <LinkedInIcon /> LinkedIn <ArrowUpRight aria-hidden="true" />
              </a>
            </li>
            <li>
              <a href={whatsappUrl} target="_blank" rel="noopener">
                <WhatsAppIcon /> WhatsApp
              </a>
            </li>
            <li>
              <a href={`mailto:${contact.email}`}>{contact.email}</a>
            </li>
          </ul>
        </div>
        <div className={styles.portrait}>
          <Image src="/images/eros.jpg" width={800} height={800} alt="Retrato de Eros Amancio" sizes="20rem" priority />
        </div>
      </header>

      <section className={`wrap ${styles.section}`} aria-labelledby="exp">
        <h2 id="exp" className={styles.h2}>
          <span className="hash" aria-hidden="true">
            ##
          </span>
          Experiência
        </h2>
        <div className={styles.role}>
          <h3 className={styles.h3}>Sociiz</h3>
          <p className={styles.meta}>Estagiário de Banco de Dados · Recife, PE</p>
          <p>
            Entrei como estagiário de banco de dados e hoje trabalho em várias frentes da empresa, do backend à
            interface.
          </p>
          <ul className={styles.items}>
            {experience.map((e) => (
              <li key={e.name}>
                <h4 className={styles.h4}>{e.slug ? <Link href={`/trabalhos/${e.slug}`}>{e.name}</Link> : e.name}</h4>
                <p>{e.text}</p>
                {e.tech && <TechLine items={e.tech} />}
                {e.detail && (
                  <Disclosure label="Ver detalhes">
                    <p>{e.detail}</p>
                  </Disclosure>
                )}
              </li>
            ))}
          </ul>
        </div>
      </section>

      <section className={`wrap ${styles.section}`} aria-labelledby="form">
        <h2 id="form" className={styles.h2}>
          <span className="hash" aria-hidden="true">
            ##
          </span>
          Formação
        </h2>
        <div className={styles.role}>
          <h3 className={styles.h3}>CESAR School</h3>
          <p className={styles.meta}>Ciência da Computação · em andamento, 4º período</p>
          <p>
            Disciplinas até aqui: algoritmos, estruturas de dados, orientação a objetos, banco de dados, redes,
            infraestrutura de software e hardware, sistemas distribuídos e concorrência.
          </p>
        </div>
      </section>

      <section className={`wrap ${styles.section}`} aria-labelledby="proj">
        <h2 id="proj" className={styles.h2}>
          <span className="hash" aria-hidden="true">
            ##
          </span>
          Projetos
        </h2>
        <ul className={styles.projectList}>
          {projects.map((p) => (
            <li key={p.slug}>
              <Link href={`/trabalhos/${p.slug}`}>{p.name}</Link>
              <span className={styles.projectMeta}>{p.context}</span>
            </li>
          ))}
        </ul>
      </section>

      <section className={`wrap ${styles.section}`} aria-labelledby="tec">
        <h2 id="tec" className={styles.h2}>
          <span className="hash" aria-hidden="true">
            ##
          </span>
          Tecnologias
        </h2>
        <dl className={styles.skills}>
          {skills.map((s) => (
            <div key={s.group}>
              <dt>{s.label}</dt>
              <dd>
                {s.items.map((item, i) => (
                  <span key={item}>
                    <span style={{ color: knownTechColor(item) }}>{item}</span>
                    {i < s.items.length - 1 && ", "}
                  </span>
                ))}
              </dd>
            </div>
          ))}
          <div>
            <dt>Idiomas</dt>
            <dd>Português nativo, inglês fluente</dd>
          </div>
        </dl>
      </section>

      <section className={`wrap ${styles.section}`} aria-labelledby="int">
        <h2 id="int" className={styles.h2}>
          <span className="hash" aria-hidden="true">
            ##
          </span>
          Interesses
        </h2>
        <p className={styles.plain}>
          Quero seguir em backend, full stack, banco de dados e segurança da informação. Minha base para segurança é o
          que já uso no dia a dia: redes, protocolos, autenticação por token, TLS/SSL e comunicação entre sistemas.
        </p>
      </section>

      <section className={`wrap ${styles.section}`} aria-labelledby="site">
        <h2 id="site" className={styles.h2}>
          <span className="hash" aria-hidden="true">
            ##
          </span>
          Este site
        </h2>
        <p className={styles.plain}>
          Fiz este portfólio do zero, sem template. O arquivo destacado no explorador muda conforme a seção que você
          está lendo. As páginas já saem prontas, então o site carrega rápido, e dá para navegar tudo pelo teclado.
        </p>
        <p className={styles.siteLink}>
          <a href={`${contact.github}/portfolio`} target="_blank" rel="noopener">
            O código está aberto no GitHub <ArrowUpRight aria-hidden="true" />
          </a>
        </p>
      </section>

      <section className={styles.cta}>
        <div className={`wrap ${styles.ctaInner}`}>
          <p className={styles.ctaText}>Quer conversar sobre uma vaga ou um projeto?</p>
          <div className={styles.ctas}>
            <a className={styles.mailCta} href={`mailto:${contact.email}`}>
              <Mail aria-hidden="true" /> Enviar e-mail
            </a>
            <a className={styles.whatsapp} href={whatsappUrl} target="_blank" rel="noopener">
              <WhatsAppIcon /> Chamar no WhatsApp
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}

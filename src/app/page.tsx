import Image from "next/image";
import Link from "next/link";
import { ArrowRight, ArrowUpRight, Braces, FileCode, Mail } from "lucide-react";
import { WhatsAppIcon } from "@/components/BrandIcons";
import { SectionMotion } from "@/motion/SectionMotion";
import { Showcase } from "@/components/Showcase";
import { CopyButton } from "@/components/CopyButton";
import { contact, experience, skills, whatsappUrl } from "@/content/site";
import { excerpt } from "@/content/source";
import { personJsonLd } from "@/content/jsonld";
import code from "@/components/code.module.css";
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
  { key: "email", label: contact.email, href: `mailto:${contact.email}` },
  {
    key: "linkedin",
    label: "linkedin.com/in/erosamancio",
    href: contact.linkedin,
  },
  { key: "github", label: "github.com/erosamancio", href: contact.github },
  { key: "whatsapp", label: contact.whatsappDisplay, href: whatsappUrl },
];

export default function Home() {
  const hook = excerpt("components/Shell.tsx", "useActiveSection");

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(personJsonLd) }} />
      <SectionMotion />
      <Showcase>
        <section
          id="sobre"
          className={`${styles.section} ${styles.alt} ${styles.aboutSection}`}
          aria-labelledby="sobre-title"
          data-m="about"
        >
          <p className={styles.signature} aria-hidden="true" data-sig="">
            <span className={code.tg}>{"<"}</span>
            <span className={code.ty}>Sobre</span> <span className={code.nu}>foto</span>=
            <span className={code.st}>“eros.jpg”</span> <span className={code.tg}>{"/>"}</span>
          </p>
          <div className={`wrap ${styles.about}`}>
            <div className={styles.portrait} data-about="">
              <Image
                src="/images/eros.jpg"
                width={800}
                height={800}
                alt="Retrato de Eros Amancio, de barba e camiseta preta, à noite com luzes ao fundo"
                sizes="(min-width: 64rem) 20rem, 70vw"
              />
            </div>
            <div className={styles.aboutText} data-about="">
              <H2 id="sobre-title">Sobre</H2>
              <p className={styles.big}>Do banco de dados à interface, passando pela API que liga os dois.</p>
              <p className={styles.soft}>
                Entrei na Sociiz como estagiário de banco de dados e fui parar na interface da Sociiz Meet, no serviço
                que autentica cada participante e no pipeline de OCR. Meus interesses estão em backend, full stack e
                segurança da informação, que conversa com o que já faço em redes, autenticação por token e TLS.
              </p>
              <Link href="/sobre" className={styles.more}>
                Experiência e formação completas <ArrowRight aria-hidden="true" />
              </Link>
            </div>
          </div>
        </section>
      </Showcase>

      <section id="experiencia" className={`${styles.section} ${styles.alt}`} aria-labelledby="experiencia-title">
        <div className={`wrap ${styles.split}`}>
          <H2 id="experiencia-title">Experiência</H2>
          <div className={styles.timeline}>
            <article className={styles.role}>
              <header className={styles.roleHead}>
                <h3 className={styles.h3}>Sociiz</h3>
                <p className={styles.meta}>Estagiário de Banco de Dados · Recife, PE</p>
              </header>
              <p className={styles.soft}>
                Um estágio que foi além do banco de dados, com backend, frontend, processamento de documentos e
                comunicação em tempo real.
              </p>
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
              <p className={styles.soft}>
                Algoritmos, estruturas de dados, orientação a objetos, banco de dados, redes, infraestrutura de software
                e hardware, sistemas distribuídos e concorrência.
              </p>
            </article>
          </div>
        </div>
      </section>

      <section id="stack" className={styles.section} aria-labelledby="stack-title">
        <div className={`wrap ${styles.split}`}>
          <div className={styles.lead}>
            <H2 id="stack-title">Tecnologias</H2>
            <p className={styles.soft}>
              O que já usei em projeto, no estágio ou na faculdade. Português nativo e inglês fluente, inclusive para
              documentação e conversa técnica.
            </p>
          </div>
          <figure className={`${code.panel} ${styles.json}`}>
            <figcaption className={code.head}>
              <Braces aria-hidden="true" /> stack.json
            </figcaption>
            <div className={code.body}>
              <p className={code.row} aria-hidden="true">
                <span className={code.ln}>1</span>
                <span className={code.text}>{"{"}</span>
              </p>
              <ul className={styles.skillList} data-m="rows">
                {skills.map((s, i) => (
                  <li key={s.group} className={code.row}>
                    <span className={code.ln} aria-hidden="true">
                      {i + 2}
                    </span>
                    <span className={code.text}>
                      {"  "}
                      <span className={code.ty} data-tok="">
                        <span aria-hidden="true">“</span>
                        {s.group}
                        <span aria-hidden="true">”</span>
                      </span>
                      <span aria-hidden="true">: [</span>
                      <span className="sr-only">: </span>
                      <span>
                        {s.items.map((item, j) => (
                          <span key={item}>
                            <span className={code.st} data-tok="">
                              “{item}”
                            </span>
                            {j < s.items.length - 1 && <span aria-hidden="true">, </span>}
                          </span>
                        ))}
                      </span>
                      <span aria-hidden="true">]{i < skills.length - 1 ? "," : ""}</span>
                    </span>
                  </li>
                ))}
              </ul>
              <p className={code.row} aria-hidden="true">
                <span className={code.ln}>{skills.length + 2}</span>
                <span className={code.text}>{"}"}</span>
              </p>
            </div>
          </figure>
        </div>
      </section>

      <section id="este-site" className={styles.section} aria-labelledby="este-site-title">
        <div className={`wrap ${styles.site}`}>
          <div className={styles.lead}>
            <H2 id="este-site-title">Este site</H2>
            <p className={styles.soft}>
              Desenhei e programei este portfólio do zero, em Next.js e TypeScript, sem template. O arquivo destacado no
              explorador acompanha a seção que você está lendo. É este hook, lido do código-fonte durante a build, então
              o que aparece aqui é o que roda.
            </p>
            <ul className={styles.proofs}>
              <li>Páginas estáticas, geradas antes do acesso.</li>
              <li>Navegação completa pelo teclado.</li>
              <li>
                <a href={`${contact.github}/portfolio`} target="_blank" rel="noopener">
                  Código aberto no GitHub <ArrowUpRight aria-hidden="true" />
                </a>
              </li>
            </ul>
          </div>
          <figure className={`${code.panel} ${styles.snippet}`}>
            <figcaption className={code.head}>
              <FileCode aria-hidden="true" /> {hook.file}
            </figcaption>
            <pre className={`${code.body} ${styles.scroll}`} tabIndex={0} aria-label={`Trecho de ${hook.file}`}>
              <code data-m="reading">
                {hook.lines.map((line, i) => (
                  <span key={i} className={code.row}>
                    <span className={code.ln} aria-hidden="true">
                      {hook.start + i}
                    </span>
                    <span className={`${code.text} ${code.keep}`}>
                      {line.map(([kind, text], j) =>
                        kind ? (
                          <span key={j} className={code[kind]}>
                            {text}
                          </span>
                        ) : (
                          text
                        ),
                      )}
                    </span>
                  </span>
                ))}
              </code>
            </pre>
          </figure>
        </div>
      </section>

      <section id="contato" className={styles.contact} aria-labelledby="contato-title">
        <div className={`wrap ${styles.contactInner}`}>
          <div className={styles.lead}>
            <h2 id="contato-title" className={styles.contactTitle} data-m="title">
              <span data-title-text="">Vamos conversar?</span>
            </h2>
            <p className={styles.soft}>Para vagas, projetos ou uma troca de ideia. Respondo por qualquer um destes.</p>
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
          <div className={`${code.panel} ${styles.contactPanel}`}>
            <p className={code.head} aria-hidden="true">
              <FileCode /> contato.ts
            </p>
            <div className={code.body} data-m="terminal">
              <p className={styles.prompt} aria-hidden="true" data-prompt="">
                <span>~/portfolio</span> $ npm run contato
              </p>
              <p className={code.row} aria-hidden="true">
                <span className={code.ln}>1</span>
                <span className={code.text}>
                  <span className={code.kw}>export const</span> contato = {"{"}
                </span>
              </p>
              <ul className={styles.contactList}>
                {contactRows.map((r, i) => (
                  <li key={r.key} className={code.row}>
                    <span className={code.ln} aria-hidden="true">
                      {i + 2}
                    </span>
                    <span className={code.text}>
                      {"  "}
                      <span className={code.ty}>{r.key}</span>
                      <span aria-hidden="true">: </span>
                      <a
                        className={styles.contactLink}
                        href={r.href}
                        {...(r.href.startsWith("http") ? { target: "_blank", rel: "noopener" } : {})}
                      >
                        <span aria-hidden="true">“</span>
                        {r.label}
                        <span aria-hidden="true">”</span>
                      </a>
                      <span aria-hidden="true">,</span>
                    </span>
                  </li>
                ))}
              </ul>
              <p className={code.row} aria-hidden="true">
                <span className={code.ln}>{contactRows.length + 2}</span>
                <span className={code.text}>{"};"}</span>
              </p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

import Image from "next/image";
import Link from "next/link";
import { ArrowRight, ArrowUpRight, Mail } from "lucide-react";
import { Hero } from "@/components/Hero";
import { WhatsAppIcon, GitHubIcon } from "@/components/BrandIcons";
import { contact, faq, projects, services, steps, whatsappLink } from "@/content/site";
import { personJsonLd } from "@/content/jsonld";
import styles from "./page.module.css";

// The real function behind the hero's WhatsApp button (src/content/site.ts), tokenized for display.
const snippet: [string | null, string][][] = [
  [["tk", "export function "], ["fn", "whatsappLink"], [null, "(message: "], ["ty", "string"], [null, ") {"]],
  [[null, "  "], ["tk", "const "], [null, "phone = contact.whatsappNumber;"]],
  [[null, "  "], ["tk", "const "], [null, "text = "], ["fn", "encodeURIComponent"], [null, "(message);"]],
  [
    [null, "  "],
    ["tk", "return "],
    ["st", "`https://wa.me/${"],
    [null, "phone"],
    ["st", "}?text=${"],
    [null, "text"],
    ["st", "}`"],
    [null, ";"],
  ],
  [[null, "}"]],
];

const stack = ["React", "JavaScript", "Python", "FastAPI", "Flask", "Django", "Java", "Spring Boot", "SQL"];

export default function Home() {
  const offered = services.filter((s) => s.summary);
  const unsure = services.find((s) => s.id === "naosei")!;
  const web = projects.filter((p) => p.isWebsite);
  const games = projects.filter((p) => !p.isWebsite);

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(personJsonLd) }} />
      <Hero />

      <div className={styles.stackBar}>
        <div className={`wrap ${styles.stackInner}`}>
          <p className={styles.stackLabel}>Trabalho com</p>
          <ul className={styles.stackList}>
            {stack.map((s) => (
              <li key={s}>{s}</li>
            ))}
          </ul>
        </div>
      </div>

      <section id="servicos" className={styles.section} aria-labelledby="servicos-title">
        <div className="wrap">
          <h2 id="servicos-title" className={styles.h2}>
            Três jeitos de colocar seu negócio na internet
          </h2>
          <ul className={styles.serviceList}>
            {offered.map((s) => (
              <li key={s.id} className={styles.service}>
                <h3 className={styles.serviceName}>{s.name}</h3>
                <p className={styles.serviceSummary}>{s.summary}</p>
                <div>
                  <p className={styles.includesLabel}>Você recebe</p>
                  <ul className={styles.includes}>
                    {s.includes!.map((item) => (
                      <li key={item}>{item}</li>
                    ))}
                  </ul>
                </div>
              </li>
            ))}
          </ul>
          <p className={styles.unsure}>
            Não sabe qual é o seu caso?{" "}
            <a href={whatsappLink(unsure.message)} target="_blank" rel="noopener">
              Me conta o que você precisa
            </a>{" "}
            e eu te ajudo a decidir. Domínio, hospedagem e manutenção também entram na conversa, com custo combinado.
          </p>
        </div>
      </section>

      <section id="trabalhos" className={`${styles.section} ${styles.alt}`} aria-labelledby="trabalhos-title">
        <div className="wrap">
          <h2 id="trabalhos-title" className={styles.h2}>
            O que eu já construí
          </h2>

          <div className={styles.webList}>
            {web.map((p) => (
              <article key={p.slug} className={styles.work}>
                <Link href={`/trabalhos/${p.slug}`} className={styles.shot} tabIndex={-1} aria-hidden="true">
                  <Image
                    src={p.image.src}
                    width={p.image.width}
                    height={p.image.height}
                    alt=""
                    sizes="(min-width: 64rem) 56vw, 100vw"
                  />
                </Link>
                <div className={styles.workText}>
                  <h3 className={styles.h3}>
                    <Link href={`/trabalhos/${p.slug}`}>{p.name}</Link>
                  </h3>
                  <p className={styles.meta}>
                    {p.context} · {p.role}
                  </p>
                  <p>{p.summary}</p>
                  <ul className={styles.tags} aria-label="Tecnologias">
                    {p.stack.map((t) => (
                      <li key={t}>{t}</li>
                    ))}
                  </ul>
                  <Link href={`/trabalhos/${p.slug}`} className={styles.more}>
                    Ver estudo de caso <ArrowRight aria-hidden="true" />
                  </Link>
                </div>
              </article>
            ))}
          </div>

          <h3 className={styles.offWeb}>Fora da web</h3>
          <div className={styles.gameList}>
            {games.map((p) => (
              <article key={p.slug} className={styles.game}>
                <Link href={`/trabalhos/${p.slug}`} className={styles.shot} tabIndex={-1} aria-hidden="true">
                  <Image
                    src={p.image.src}
                    width={p.image.width}
                    height={p.image.height}
                    alt=""
                    sizes="(min-width: 64rem) 36vw, 100vw"
                  />
                </Link>
                <h4 className={styles.h4}>
                  <Link href={`/trabalhos/${p.slug}`}>{p.name}</Link>
                </h4>
                <p className={styles.meta}>
                  {p.context} · {p.stack.join(" e ")}
                </p>
                <p className={styles.gameSummary}>{p.summary}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section id="este-site" className={styles.dark} aria-labelledby="este-site-title">
        <div className={`wrap ${styles.darkGrid}`}>
          <div className={styles.darkText}>
            <h2 id="este-site-title" className={styles.h2}>
              Este site é a amostra
            </h2>
            <p className={styles.lead}>
              Tudo aqui foi desenhado e programado por mim, do zero. O seletor no topo da página, por exemplo, é só isto:
              você escolhe o serviço e o link do WhatsApp já sai com a mensagem certa.
            </p>
            <ul className={styles.proofs}>
              <li>Next.js e TypeScript, sem template.</li>
              <li>Páginas geradas antes do acesso, para abrir rápido no celular.</li>
              <li>Dá para navegar por tudo só com o teclado.</li>
              <li>
                <a href={`${contact.github}/portfolio`} target="_blank" rel="noopener">
                  Código aberto no GitHub <ArrowUpRight aria-hidden="true" />
                </a>
              </li>
            </ul>
          </div>
          <figure className={styles.code}>
            <figcaption className={styles.codeFile}>src/content/site.ts</figcaption>
            <pre>
              <code>
                {snippet.map((line, i) => (
                  <span key={i} className={styles.line}>
                    {line.map(([kind, text], j) =>
                      kind ? (
                        <span key={j} className={styles[kind]}>
                          {text}
                        </span>
                      ) : (
                        text
                      ),
                    )}
                  </span>
                ))}
              </code>
            </pre>
          </figure>
        </div>
      </section>

      <section id="processo" className={styles.section} aria-labelledby="processo-title">
        <div className="wrap">
          <h2 id="processo-title" className={styles.h2}>
            Do primeiro “oi” ao site no ar
          </h2>
          <ol className={styles.steps}>
            {steps.map((s, i) => (
              <li key={s.name} className={styles.step}>
                <span className={styles.stepNumber} aria-hidden="true">
                  {String(i + 1).padStart(2, "0")}
                </span>
                <h3 className={styles.stepName}>{s.name}</h3>
                <p>{s.text}</p>
              </li>
            ))}
          </ol>
        </div>
      </section>

      <section id="sobre" className={`${styles.section} ${styles.alt}`} aria-labelledby="sobre-title">
        <div className={`wrap ${styles.aboutGrid}`}>
          <div className={styles.portrait}>
            <Image
              src="/images/eros.jpg"
              width={800}
              height={800}
              alt="Retrato de Eros Amancio, de barba e camiseta preta, à noite com luzes ao fundo"
              sizes="(min-width: 64rem) 26rem, 80vw"
            />
          </div>
          <div className={styles.aboutText}>
            <h2 id="sobre-title" className={styles.h2}>
              Quem faz o seu site
            </h2>
            <p className={styles.lead}>
              Sou o Eros Amancio, estudante de Ciência da Computação na CESAR School, em Recife.
            </p>
            <p>
              Hoje estagio na Sociiz, onde trabalho com backend em Python (FastAPI, Flask e Django), processamento de
              documentos com OCR e uma plataforma própria de videoconferência em React. Gosto de construir coisas que as
              pessoas usam de verdade, e é isso que eu levo para cada site.
            </p>
            <ul className={styles.aboutLinks}>
              <li>
                <Link href="/sobre">
                  Experiência completa <ArrowRight aria-hidden="true" />
                </Link>
              </li>
              <li>
                <a href={contact.github} target="_blank" rel="noopener">
                  <GitHubIcon /> GitHub
                </a>
              </li>
              <li>
                <a href={contact.linkedin} target="_blank" rel="noopener">
                  LinkedIn <ArrowUpRight aria-hidden="true" />
                </a>
              </li>
            </ul>
          </div>
        </div>
      </section>

      <section id="perguntas" className={styles.section} aria-labelledby="perguntas-title">
        <div className={`wrap ${styles.faqGrid}`}>
          <h2 id="perguntas-title" className={styles.h2}>
            Perguntas frequentes
          </h2>
          <div className={styles.faqList}>
            {faq.map((f) => (
              <details key={f.q} className={styles.faqItem}>
                <summary>
                  {f.q}
                  <span className={styles.faqIcon} aria-hidden="true" />
                </summary>
                <p>{f.a}</p>
              </details>
            ))}
          </div>
        </div>
      </section>

      <section id="contato" className={styles.contact} aria-labelledby="contato-title">
        <div className={`wrap ${styles.contactInner}`}>
          <h2 id="contato-title" className={styles.contactTitle}>
            Vamos fazer o site do seu negócio?
          </h2>
          <p className={styles.contactLead}>Me chama no WhatsApp e me conta o que você precisa. Eu mesmo respondo.</p>
          <div className={styles.contactActions}>
            <a className={styles.contactWhats} href={whatsappLink(unsure.message)} target="_blank" rel="noopener">
              <WhatsAppIcon /> Chamar no WhatsApp
            </a>
            <p className={styles.contactAlt}>
              {contact.whatsappDisplay}
              <span className={styles.sep} aria-hidden="true">·</span>
              <a href={`mailto:${contact.email}`}>
                <Mail aria-hidden="true" /> {contact.email}
              </a>
            </p>
          </div>
        </div>
      </section>
    </>
  );
}

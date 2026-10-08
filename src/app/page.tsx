import Image from "next/image";
import Link from "next/link";
import { ArrowRight, Mail } from "lucide-react";
import { Hero } from "@/components/Hero";
import { WhatsAppIcon, GitHubIcon } from "@/components/BrandIcons";
import { MiniPanel } from "@/components/tiles/MiniPanel";
import { Tile } from "@/components/tiles/Tile";
import { contact, faq, projects, services, steps, whatsappLink } from "@/content/site";
import { personJsonLd } from "@/content/jsonld";
import styles from "./page.module.css";

export default function Home() {
  const offered = services.filter((s) => s.summary);
  const unsure = services.find((s) => s.id === "naosei")!;
  const web = projects.filter((p) => p.isWebsite);
  const games = projects.filter((p) => !p.isWebsite);

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(personJsonLd) }} />
      <Hero />

      <section id="servicos" className={styles.services} aria-labelledby="servicos-title">
        <div className="wrap">
          <h2 id="servicos-title" className={styles.h2}>
            Três jeitos de colocar seu negócio na internet
          </h2>
          <ul className={styles.serviceList}>
            {offered.map((s) => (
              <li key={s.id} className={styles.service}>
                <MiniPanel pattern={s.pattern} size={3} className={styles.servicePanel} />
                <div className={styles.serviceText}>
                  <h3 className={styles.h3}>{s.name}</h3>
                  <p>{s.summary}</p>
                </div>
                <div className={styles.serviceIncludes}>
                  <p className={styles.includesLabel}>Você recebe</p>
                  <ul>
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

      <section id="trabalhos" className={styles.works} aria-labelledby="trabalhos-title">
        <div className="wrap">
          <h2 id="trabalhos-title" className={styles.h2}>
            O que eu já construí
          </h2>

          <div className={styles.webList}>
            {web.map((p, i) => (
              <article key={p.slug} className={styles.work} data-flip={i % 2 === 1}>
                <Link href={`/trabalhos/${p.slug}`} className={styles.workImage} tabIndex={-1} aria-hidden="true">
                  <Image
                    src={p.image.src}
                    width={p.image.width}
                    height={p.image.height}
                    alt=""
                    sizes="(min-width: 64rem) 58vw, 100vw"
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
                  <p className={styles.stack}>{p.stack.join(" · ")}</p>
                  <Link href={`/trabalhos/${p.slug}`} className={styles.more}>
                    Ver estudo de caso <ArrowRight aria-hidden="true" />
                  </Link>
                </div>
              </article>
            ))}
          </div>

          <h3 className={styles.offWeb}>Fora da web, o mesmo capricho</h3>
          <div className={styles.gameList}>
            {games.map((p) => (
              <article key={p.slug} className={styles.game}>
                <Link href={`/trabalhos/${p.slug}`} className={styles.workImage} tabIndex={-1} aria-hidden="true">
                  <Image
                    src={p.image.src}
                    width={p.image.width}
                    height={p.image.height}
                    alt=""
                    sizes="(min-width: 64rem) 38vw, 100vw"
                  />
                </Link>
                <h4 className={styles.h4}>
                  <Link href={`/trabalhos/${p.slug}`}>{p.name}</Link>
                </h4>
                <p className={styles.meta}>
                  {p.context} · {p.stack.join(" e ")}
                </p>
                <p>{p.summary}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section id="este-site" className={styles.thisSite} aria-labelledby="este-site-title">
        <div className={`wrap ${styles.thisSiteGrid}`}>
          <div className={styles.thisSiteText}>
            <h2 id="este-site-title" className={styles.h2}>
              Este site é a amostra
            </h2>
            <p className={styles.lead}>
              Tudo o que você vê aqui foi desenhado e programado por mim. Todos os padrões da página saem de uma única
              peça, girada de jeitos diferentes. É assim que eu construo interfaces: peças pequenas e bem feitas que se
              combinam.
            </p>
            <ul className={styles.proofs}>
              <li>Feito do zero com Next.js e TypeScript, sem template.</li>
              <li>Páginas geradas antes do acesso, para abrir rápido no celular.</li>
              <li>Dá para navegar por tudo só com o teclado.</li>
              <li>Quem prefere menos movimento no celular ou computador vê os azulejos parados.</li>
              <li>
                <a href={`${contact.github}/portfolio`} target="_blank" rel="noopener">
                  O código está aberto no GitHub
                </a>
              </li>
            </ul>
          </div>
          <figure className={styles.anatomy}>
            <Tile turns={0} className={styles.bigTile} />
            <ul className={styles.anatomyList}>
              {offered.concat(unsure).map((s) => (
                <li key={s.id}>
                  <MiniPanel pattern={s.pattern} />
                  <span>{s.name}</span>
                </li>
              ))}
            </ul>
            <figcaption>Uma peça, quatro padrões. Cada serviço da abertura tem o seu.</figcaption>
          </figure>
        </div>
      </section>

      <section id="processo" className={styles.process} aria-labelledby="processo-title">
        <div className="wrap">
          <h2 id="processo-title" className={styles.h2}>
            Do primeiro “oi” ao site no ar
          </h2>
          <ol className={styles.steps}>
            {steps.map((s, i) => (
              <li key={s.name} className={styles.step}>
                {i < steps.length - 1 ? (
                  <Tile turns={i} className={styles.stepTile} />
                ) : (
                  <MiniPanel pattern="rosetas" className={styles.stepTile} />
                )}
                <h3 className={styles.stepName}>
                  <span className={styles.stepNumber}>{i + 1}.</span> {s.name}
                </h3>
                <p>{s.text}</p>
              </li>
            ))}
          </ol>
        </div>
      </section>

      <section id="sobre" className={styles.about} aria-labelledby="sobre-title">
        <div className={`wrap ${styles.aboutGrid}`}>
          <div className={styles.portrait}>
            <Image
              src="/images/eros.jpg"
              width={800}
              height={800}
              alt="Retrato de Eros Amancio, de barba e camiseta preta, à noite com luzes ao fundo"
              sizes="(min-width: 64rem) 28rem, 80vw"
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
                  LinkedIn
                </a>
              </li>
            </ul>
          </div>
        </div>
      </section>

      <section id="perguntas" className={styles.faq} aria-labelledby="perguntas-title">
        <div className={`wrap ${styles.faqGrid}`}>
          <h2 id="perguntas-title" className={styles.h2}>
            Perguntas frequentes
          </h2>
          <div className={styles.faqList}>
            {faq.map((f) => (
              <details key={f.q} className={styles.faqItem}>
                <summary>
                  {f.q}
                  <Tile turns={0} className={styles.faqTile} />
                </summary>
                <p>{f.a}</p>
              </details>
            ))}
          </div>
        </div>
      </section>

      <section id="contato" className={styles.contact} aria-labelledby="contato-title">
        <div className={styles.contactBand} aria-hidden="true">
          {Array.from({ length: 24 }, (_, i) => (
            <Tile key={i} turns={[2, 3][i % 2]} />
          ))}
        </div>
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
              <span aria-hidden="true"> · </span>
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

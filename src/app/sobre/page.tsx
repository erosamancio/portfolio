import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { GitHubIcon, WhatsAppIcon } from "@/components/BrandIcons";
import { contact, defaultMessage, projects, whatsappLink } from "@/content/site";
import styles from "./sobre.module.css";

export const metadata: Metadata = {
  title: "Sobre e experiência",
  description:
    "Eros Amancio: estudante de Ciência da Computação na CESAR School e estagiário na Sociiz, com React, Python, Java e integrações.",
  alternates: { canonical: "/sobre" },
};

const sociiz = [
  {
    name: "Sociiz Meet",
    text: "Interface de videoconferência em React 19 e Vite com LiveKit: lobby com prévia de câmera e microfone, sala com chat em tempo real, compartilhamento de tela, painel de participantes, mão levantada, indicador de sinal, convite por link, estados de conexão e tela de pós-reunião, tudo com a identidade visual da Sociiz. No backend, um serviço em Flask gera os tokens de acesso às salas com as permissões de cada participante.",
  },
  {
    name: "Pipeline de OCR",
    text: "Rotinas em Python para extrair dados de documentos e PDFs com PaddleOCR, OpenCV, NumPy e PDF2Image, expostas por FastAPI, com uso de Label Studio para anotação e integração com armazenamento em nuvem.",
  },
  {
    name: "Backend e integrações",
    text: "Manutenção de aplicações em Django e configuração de e-mail corporativo com SMTP, IMAP e POP3, incluindo TLS/SSL e diagnóstico de falhas de autenticação.",
  },
];

const skills = [
  { group: "Linguagens", items: "Python, JavaScript, Java, C, SQL" },
  { group: "Frontend", items: "React, Vite, CSS responsivo" },
  { group: "Backend", items: "FastAPI, Flask, Django, Spring Boot, APIs REST" },
  { group: "Tempo real e dados", items: "LiveKit, WebRTC (integração), WebSockets, OpenCV, PaddleOCR" },
  { group: "Ferramentas", items: "Git, GitHub, VS Code, IntelliJ IDEA" },
];

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
            Estudante de Ciência da Computação na CESAR School, no 4º período, e estagiário na Sociiz, em Recife. Trabalho
            com frontend em React, backend em Python e Java e com as integrações que ligam um ao outro.
          </p>
          <ul className={styles.links}>
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
            Um estágio que foi além do banco de dados, com participação em backend, frontend, processamento de documentos
            e comunicação em tempo real.
          </p>
          <ul className={styles.items}>
            {sociiz.map((s) => (
              <li key={s.name}>
                <strong>{s.name}.</strong> {s.text}
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
            Algoritmos, estruturas de dados, orientação a objetos, banco de dados, redes, infraestrutura de software e
            hardware, sistemas distribuídos e concorrência.
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
              <span>
                {p.context} · {p.role} · {p.stack.join(", ")}
              </span>
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
              <dt>{s.group}</dt>
              <dd>{s.items}</dd>
            </div>
          ))}
          <div>
            <dt>Idiomas</dt>
            <dd>Português nativo, inglês fluente</dd>
          </div>
        </dl>
      </section>

      <section className={styles.cta}>
        <div className={`wrap ${styles.ctaInner}`}>
          <p className={styles.ctaText}>Quer conversar sobre um site ou sobre uma vaga?</p>
          <a className={styles.whats} href={whatsappLink(defaultMessage)} target="_blank" rel="noopener">
            <WhatsAppIcon /> Chamar no WhatsApp
          </a>
        </div>
      </section>
    </div>
  );
}

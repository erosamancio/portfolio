import Image from "next/image";
import Link from "next/link";
import { ArrowDown, ArrowRight } from "lucide-react";
import { GitHubIcon, LinkedInIcon, WhatsAppIcon } from "./BrandIcons";
import { contact, whatsappUrl } from "@/content/site";
import { CodeProfile } from "./CodeProfile";
import styles from "./ProfileIntro.module.css";

/** The top of the home page: who Eros is, in plain words, with the portrait and the ways to reach him. */
export function ProfileIntro() {
  return (
    <section id="sobre" className={styles.intro} aria-labelledby="sobre-title">
      <div className={`wrap ${styles.inner}`}>
        <div className={styles.portrait} data-i="text" data-only="preview">
          <Image
            src="/images/eros.jpg"
            width={800}
            height={800}
            alt="Retrato de Eros Amancio, de barba e camiseta preta, à noite com luzes ao fundo"
            sizes="(min-width: 64rem) 14rem, 8rem"
            priority
          />
        </div>
        <div className={styles.text}>
          <h1 id="sobre-title" className={styles.title} data-i="name">
            <span className={styles.first}>Eros</span>{" "}
            <span className={styles.last}>
              Amancio
              <span className={styles.caret} aria-hidden="true" />
            </span>
          </h1>
          <p className={styles.role} data-i="text">
            Desenvolvedor · Recife, PE
          </p>
          <p className={styles.lede} data-i="text">
            Estudo Ciência da Computação na CESAR School, no 4º período, e faço estágio na Sociiz. Trabalho nas duas
            pontas de um sistema: as telas que as pessoas usam e a parte que roda por trás delas, em Python, Java e
            React.
          </p>
          <p className={styles.body} data-i="text">
            Entrei na Sociiz como estagiário de banco de dados e hoje trabalho em várias frentes da empresa. Construí a
            interface de videoconferência, desenvolvi as rotinas que leem documentos e PDFs automaticamente e criei
            vários endpoints da API principal. Quero seguir em backend, full stack e segurança da informação.
          </p>
          <div className={styles.actions} data-i="actions">
            <a className={styles.primary} href="#trabalhos">
              Ver projetos <ArrowDown aria-hidden="true" />
            </a>
            <a className={styles.secondary} href={contact.github} target="_blank" rel="noopener">
              <GitHubIcon className={styles.iconGithub} /> GitHub
            </a>
            <a className={styles.secondary} href={contact.linkedin} target="_blank" rel="noopener">
              <LinkedInIcon className={styles.iconLinkedin} /> LinkedIn
            </a>
            <a className={styles.secondary} href={whatsappUrl} target="_blank" rel="noopener">
              <WhatsAppIcon className={styles.iconWhatsapp} /> WhatsApp
            </a>
          </div>
          <Link href="/sobre" className={styles.more} data-i="actions">
            Experiência e formação completas <ArrowRight aria-hidden="true" />
          </Link>
        </div>
        <CodeProfile />
      </div>
    </section>
  );
}

"use client";

import { useState } from "react";
import { ArrowDown, Check, FileCode } from "lucide-react";
import { WhatsAppIcon } from "./BrandIcons";
import { defaultMessage, services, whatsappLink, type ServiceId } from "@/content/site";
import code from "./code.module.css";
import styles from "./Hero.module.css";

export function Hero() {
  const [selected, setSelected] = useState<ServiceId | null>(null);
  const service = services.find((s) => s.id === selected);
  const message = service?.message ?? defaultMessage;

  return (
    <section className={styles.hero} aria-labelledby="hero-title">
      <div className={`wrap ${styles.inner}`}>
        <div className={styles.intro}>
          <h1 id="hero-title" className={styles.title}>
            Sites que além de bonitos, <span className={styles.word}>funcionam.</span>
            <span className={styles.caret} aria-hidden="true" />
          </h1>
          <p className={styles.lede}>
            Eu sou o Eros, desenvolvedor em Recife. Crio o site do seu negócio do visual ao que roda por trás:
            formulário que chega no seu e-mail, integração com o que você já usa, sistema quando precisa.
          </p>
          <a className={styles.secondary} href="#trabalhos">
            Ver trabalhos e experiência <ArrowDown aria-hidden="true" />
          </a>
        </div>

        <div className={`${code.panel} ${styles.composer}`}>
          <p className={code.head} aria-hidden="true">
            <FileCode /> contato.ts
          </p>
          <div className={code.body}>
            <p className={code.row} aria-hidden="true">
              <span className={code.ln}>1</span>
              <span className={`${code.text} ${code.cm}`}>{"// O que você precisa?"}</span>
            </p>
            <fieldset className={code.row}>
              <legend className="sr-only">O que você precisa?</legend>
              <span className={code.ln} aria-hidden="true">
                2
              </span>
              <div className={styles.choices}>
                <span className={styles.decl} aria-hidden="true">
                  <span className={code.kw}>const</span> servico =
                </span>
                {services.map((s) => (
                  <label key={s.id} className={styles.choice}>
                    <input
                      type="radio"
                      name="servico"
                      value={s.id}
                      checked={selected === s.id}
                      onChange={() => setSelected(s.id)}
                    />
                    <span className={styles.radio} aria-hidden="true">
                      <Check />
                    </span>
                    {s.name}
                  </label>
                ))}
              </div>
            </fieldset>
            <p className={code.row} aria-hidden="true">
              <span className={code.ln}>3</span>
            </p>
            <p className={code.row}>
              <span className={code.ln} aria-hidden="true">
                4
              </span>
              <span className={`${code.text} ${code.cm}`}>
                {"// Mensagem que você vai me enviar:"}
              </span>
            </p>
            <p className={code.row}>
              <span className={code.ln} aria-hidden="true">
                5
              </span>
              <span className={code.text}>
                <span aria-hidden="true">
                  <span className={code.kw}>const</span> mensagem ={" "}
                </span>
                <span className={code.st} aria-live="polite">
                  “{message}”
                </span>
                <span aria-hidden="true">;</span>
              </span>
            </p>
          </div>
          <div className={styles.run}>
            <a className={styles.send} href={whatsappLink(message)} target="_blank" rel="noopener">
              <WhatsAppIcon className={styles.sendIcon} />
              Enviar no WhatsApp
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}

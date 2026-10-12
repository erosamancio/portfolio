"use client";

import { useState } from "react";
import { ArrowDown, Check } from "lucide-react";
import { WhatsAppIcon } from "./BrandIcons";
import { defaultMessage, services, whatsappLink, type ServiceId } from "@/content/site";
import styles from "./Hero.module.css";

export function Hero() {
  const [selected, setSelected] = useState<ServiceId | null>(null);
  const service = services.find((s) => s.id === selected);
  const message = service?.message ?? defaultMessage;

  return (
    <section className={styles.hero} aria-labelledby="hero-title">
      <div className={`wrap ${styles.inner}`}>
        <h1 id="hero-title" className={styles.title}>
          Sites que além de bonitos, <span className="mark">funcionam.</span>
        </h1>
        <p className={styles.lede}>
          Eu sou o Eros, desenvolvedor em Recife. Crio o site do seu negócio do visual ao que roda por trás: formulário
          que chega no seu e-mail, integração com o que você já usa, sistema quando precisa.
        </p>

        <div className={styles.composer}>
          <fieldset className={styles.choices}>
            <legend className={styles.legend}>O que você precisa?</legend>
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
          </fieldset>

          <div className={styles.preview}>
            <p className={styles.previewLabel} id="preview-label">
              Mensagem que vai para o WhatsApp
            </p>
            <p className={styles.bubble} aria-labelledby="preview-label" aria-live="polite">
              {message}
            </p>
            <a className={styles.send} href={whatsappLink(message)} target="_blank" rel="noopener">
              <WhatsAppIcon className={styles.sendIcon} />
              Enviar no WhatsApp
            </a>
          </div>
        </div>

        <a className={styles.secondary} href="#trabalhos">
          Ver trabalhos e experiência <ArrowDown aria-hidden="true" />
        </a>
      </div>
    </section>
  );
}

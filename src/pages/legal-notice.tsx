import React from "react";
import Layout from "@theme/Layout";
import styles from "./legal-notice.module.css";

const LegalNotice: React.FC = () => {
  return (
    <Layout title="Impressum & Datenschutz">
      <main className={styles.container}>
        <a href="/DevSecOps-Portfolio" className={styles.backLink}>
          ← Back to portfolio
        </a>

        <h1>Impressum</h1>

        <h2>Angaben gemäß § 5 TMG</h2>
        <p>
          Benjamin Tietz
          <br />
          Wiehagener Str.58
          <br />
          42499 Hückeswagen
          <br />
          Deutschland
        </p>

        <h2>Kontakt</h2>
        <p>E-Mail: felix.wallke@example.com</p>

        <h2>Verantwortlich für den Inhalt nach § 55 Abs. 2 RStV</h2>
        <p>
          Benjamin Tietz
          <br />
          Wiehagener Str.58
          <br />
          42499 Hückeswagen
        </p>

        <hr />

        <h1>Datenschutzerklärung</h1>

        <h2>1. Allgemeine Hinweise</h2>
        <p>
          Der Schutz Ihrer persönlichen Daten ist mir ein besonderes Anliegen.
          Diese Website kann grundsätzlich ohne Angabe personenbezogener Daten
          genutzt werden.
        </p>

        <h2>2. Verantwortlicher</h2>
        <p>
          Verantwortlicher im Sinne der Datenschutz-Grundverordnung (DSGVO) ist:
        </p>
        <p>
          Benjamin Tietz
          <br />
          E-Mail: mail@benjamin-tietz.com
        </p>

        <h2>3. Erhebung und Speicherung personenbezogener Daten</h2>
        <p>
          Beim Besuch dieser Website werden durch den Hosting-Anbieter
          automatisch Informationen in sogenannten Server-Logfiles erhoben und
          gespeichert:
        </p>

        <ul>
          <li>IP-Adresse</li>
          <li>Datum und Uhrzeit der Anfrage</li>
          <li>Browsertyp und -version</li>
          <li>Betriebssystem</li>
        </ul>

        <h2>7. Aktualität</h2>
        <p>Stand: {new Date().toLocaleDateString("de-DE")}</p>
      </main>
    </Layout>
  );
};

export default LegalNotice;

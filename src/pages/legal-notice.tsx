import React from "react";
import Layout from "@theme/Layout";

const LegalNotice: React.FC = () => {
  return (
    <Layout title="Impressum & Datenschutz">
      <main
        style={{
          padding: "80px 24px",
          maxWidth: "900px",
          margin: "0 auto",
        }}
      >
        <a
          href="/DevSecOps-Portfolio"
          style={{
            display: "inline-flex",
            alignItems: "center",
            gap: "8px",
            marginBottom: "40px",
            padding: "8px 16px",
            borderRadius: "6px",
            background: "#4a6fdc",
            color: "#fff",
            textDecoration: "none",
            fontWeight: 500,
          }}
        >
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
          gespeichert. Dies sind:
        </p>
        <ul>
          <li>IP-Adresse</li>
          <li>Datum und Uhrzeit der Anfrage</li>
          <li>Browsertyp und -version</li>
          <li>Betriebssystem</li>
        </ul>
        <p>
          Diese Daten sind technisch erforderlich, um die Website korrekt
          auszuliefern, und werden nicht mit anderen Datenquellen
          zusammengeführt.
        </p>

        <h2>4. Kontaktaufnahme per E-Mail</h2>
        <p>
          Wenn Sie mich per E-Mail kontaktieren, werden Ihre Angaben zwecks
          Bearbeitung der Anfrage gespeichert. Diese Daten gebe ich nicht ohne
          Ihre Einwilligung weiter.
        </p>

        <h2>5. Cookies & Tracking</h2>
        <p>
          Diese Website verwendet keine Cookies, kein Tracking und keine
          Analyse-Tools.
        </p>

        <h2>6. Ihre Rechte</h2>
        <p>
          Sie haben jederzeit das Recht auf Auskunft über Ihre gespeicherten
          personenbezogenen Daten, deren Herkunft und Empfänger sowie den Zweck
          der Datenverarbeitung. Außerdem haben Sie ein Recht auf Berichtigung,
          Sperrung oder Löschung dieser Daten.
        </p>

        <h2>7. Aktualität und Änderung dieser Datenschutzerklärung</h2>
        <p>
          Diese Datenschutzerklärung ist aktuell gültig und hat den Stand
          {` ${new Date().toLocaleDateString("de-DE")}`}.
        </p>
      </main>
    </Layout>
  );
};

export default LegalNotice;

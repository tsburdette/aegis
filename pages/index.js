import Head from "next/head";
import Image from "next/image";
import DamageTable from "./components/DamageTable";
import MitigationTable from "./components/MitigationTable";
import styles from "../styles/Home.module.css";
import damageTimeline from "./timelines/damage.json";
import mitigationTimeline from "./timelines/mitigation.json";

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Aegis Timeline Builder</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <div className={styles.row}>
          <div className={styles.column}>
            <DamageTable data={damageTimeline}></DamageTable>
          </div>
          <div className={styles.column}>
            <MitigationTable data={mitigationTimeline}></MitigationTable>
          </div>
        </div>
      </main>

      <footer className={styles.footer}>
        <span>I'm so fuckin' stinky</span>
      </footer>
    </div>
  );
}

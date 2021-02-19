import Head from "next/head";

import styles from "./layout.module.scss";

const Layout = ({ children, title }) => {
  return (
    <>
      <Head>
        <link rel="icon" href="/favicon.ico" />
        <link rel="preconnect" href="https://fonts.gstatic.com" />
        <link
          href="https://fonts.googleapis.com/css2?family=Lato:wght@400;700&family=Quicksand:wght@400;700&display=swap"
          rel="stylesheet"
        />
        <title>{title} - Piotr Medyński</title>
      </Head>

      <div className={styles.container}>{children}</div>
      <div className={styles.footer}>
        <div>Kontakt: medynski@outlook.com</div>
        <div>Wszytskie prawa zastrzeżone @ 2021</div>
      </div>
    </>
  );
};

export default Layout;

import Head from 'next/head';
import styles from '../styles/Home.module.css';
import Header from '../components/Header';
import Hero from '../components/Hero';
import Footer from '../components/Footer';
import Projects from '../components/Projects';
import Contact from '../components/Contact';
import About from '../components/About';
import React from 'react';

export default function Home() {
  const router = 'home';

  return (
    <div className={styles.container}>
      <Head>
        <title>
          Jess Spaude ← Web Developer at Colony Digital, • Next.js • React.js •
          Wordpress • PHP • MySql • Cloud Computing • Digital Ocean • DevOps
        </title>
        <meta
          name="description"
          content="Jess is a web developer at Colony Digital. He has experience in next.js, react.js, wordpress, php, mysql, cloud computing (digitalocean) and devops"
        />
        <meta name="theme-color" content="#ffffff" />

        <meta name="og:type" content="website" />
        <meta
          name="og:title"
          content="
          Jess Spaude ← Web Developer, • Next.js • React.js • Wordpress • PHP • MySql • Cloud Computing • Digital Ocean • DevOps"
        />
        <meta
          name="keywords"
          content="jess,jss,jspaude,jessspaude,jessspaude,spaude,web developer,devops"
        />
        <meta name="og:url" content="https://syam.me" />
        <meta
          name="og:description"
          content="
          Jess Spaude ← Web Developer at Colony Digital, • Next.js • React.js • Wordpress • PHP • MySql • Cloud Computing • Digital Ocean • DevOps"
        />
        <meta name="og:image" content="/assets/images/jess.png" />

        <link rel="icon" href="/favicon.ico" />

        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link
          rel="preconnect"
          href="https://fonts.gstatic.com"
          crossOrigin="true"
        />
        <link
          href="https://fonts.googleapis.com/css2?family=Open+Sans&family=Raleway&display=swap"
          rel="stylesheet"
        />
      </Head>
      <main className={'page__' + router}>
        <Header />
        <Hero />
        <Projects />
        <About />
        <Contact />
        <Footer />
      </main>
    </div>
  );
}

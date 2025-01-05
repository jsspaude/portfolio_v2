import Head from 'next/head';
import styles from './Home.module.scss';
import Header from '../components/Header/Header';
import Hero from '../components/Hero/Hero';
import Footer from '../components/Footer/Footer';
import Projects from '../components/Projects/Projects';
import Experience from '../components/Experience/Experience';
import React from 'react';

export default function Home() {
  const router = 'home';

  return (
    <div className={styles.container}>
      <Head>
        <title>
          Jess Spaude ← Full Stack Web Services, • Next.js • Vue • React •
          Wordpress • PHP • MySql • Cloud Computing • Digital Ocean • DevOps
        </title>
        <meta
          name="description"
          content="Jess offers full stack web services. They have experience in next.js, React, wordpress, php, mysql, cloud computing (digitalocean) and devops"
        />
        <meta name="theme-color" content="#ffffff" />

        <meta name="og:type" content="website" />
        <meta
          name="og:title"
          content="
          Jess Spaude ← Full Stack Web Services, • Next.js • React • Wordpress • PHP • MySql • Cloud Computing • Digital Ocean • DevOps"
        />
        <meta
          name="keywords"
          content="jess,jss,jspaude,jessspaude,jessspaude,spaude,web developer,devops"
        />
        <meta name="og:url" content="https://syam.me" />
        <meta
          name="og:description"
          content="
           Jess Spaude ← Full Stack Web Services, • Next.js • Vue • React •
          Wordpress • PHP • MySql • Cloud Computing • Digital Ocean • DevOps"
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
          href="https://fonts.googleapis.com/css2?family=Open+Sans&family=Raleway:wght@400;700&display=swap"
          rel="stylesheet"
        />
      </Head>
      <main className={'page__' + router}>
        {/* Welcome to my portfolio. */}
        {/* This project was built using Next.js and designed used Adobe Illustrator */}
        {/* If you wish to see the code please check out the repo at https://github.com/jsspaude/portfolio_v2 */}
        <Header />
        <Hero />
        <Projects />
        <Experience />
        <Footer />
      </main>
    </div>
  );
}

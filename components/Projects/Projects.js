import styles from './Projects.module.scss';
import { useEffect } from 'react';
import Image from 'next/image';

export default function Projects() {
  const projects = [
    {
      title: 'The One Group Agency',
      content:
        'Fully custom wordpress theme and cms. \n LAMP Stack - Digital Ocean',
      url: 'https://theog.co',
      domain: 'theog.co',
      img: 'theog.co.png',
      company: 'The One Group Agency',
    },
    {
      title: 'Indigineous Sport Gallery',
      content:
        'Next.js front-end coupled with \n a headless WordPress cms. - Digital Ocean',
      url: 'https://indigenoussportgallery.com',
      domain: 'indigenoussportgallery.com',
      img: 'indigenoussportgallery.jpg',
      company: 'bowerhouse',
    },
    {
      title: 'bowerhouse.ca',
      content:
        'Next.js front-end coupled with \n a headless WordPress cms. - Digital Ocean',
      url: 'https://bowerhouse.ca',
      domain: 'bowerhouse.ca',
      img: 'bowerhouse.jpg',
      company: 'bowerhouse',
    },
    {
      title: 'Aragon',
      content:
        'Fully custom wordpress theme and cms. \n LAMP Stack - Digital Ocean',
      url: 'https://aragon.ca',
      domain: 'Aragon.ca',
      img: 'aragon.jpg',
      company: 'Colony Digital',
    },
    {
      title: 'Timber House by Aragon',
      content:
        'Next.js front-end coupled with \n a headless WordPress cms. - Digital Ocean',
      url: 'https://timberhousebyaragon.ca',
      domain: 'timberhousebyaragon.ca',
      img: 'timberhousebyaragon.jpg',
      company: 'bowerhouse',
    },
    {
      title: 'TAG Whistler',
      content:
        'Fully custom wordpress theme and cms. \n LEMP Stack - Digital Ocean',
      url: 'https://tagwhistler.com',
      domain: 'TagWhistler.com',
      img: 'tagwhistler.jpg',
      company: 'Colony Digital',
    },
    {
      title: 'Platinum ProClaim Restoration',
      content:
        'Fully custom wordpress theme and cms. \n LEMP Stack - Digital Ocean',
      url: 'https://ppcr.ca',
      domain: 'ppcr.ca',
      img: 'ppcr.ca.png',
      company: 'Colony Digital',
    },
    {
      title: 'Westbank',
      content:
        'Maintenance, updates, and server management for all projects \n Next.js - Wordpress - Digital Ocean - Media Temple',
      url: 'https://westbankcorp.com',
      domain: 'Westbankcorp.com',
      img: 'westbank.jpg',
      company: 'Colony Digital',
    },
    {
      title: 'Sweatalus Mock Draft',
      content: 'Progressive web app and database  \n React - Firebase - Vercel',
      url: 'https://sweatalus-mock-draft.netlify.app/',
      domain: 'Sweatalus Mock Draft',
      img: 'sweatalus.jpg',
      company: 'jspaude.ca',
    },
    {
      title: 'Marine Landing',
      content:
        'Fully custom wordpress theme and cms. \n LEMP Stack - Digital Ocean',
      url: 'https://marinelanding.ca',
      domain: 'MarineLanding.ca',
      img: 'marinelanding.jpg',
      company: 'Colony Digital',
    },
    {
      title: 'JOEY Restaurants',
      content:
        'Updating and maintaing legacy code stack that uses a hybrid of laravel, react, and craft cms',
      url: 'https://joeyrestaurants.com',
      domain: 'JOEYRestaurants.ca',
      img: 'joeyrestaurants.jpg',
      company: 'Colony Digital',
    },
    {
      title: 'jspaude.ca',
      content: 'A Next.js project \n React - Next.js - Digital Ocean',
      url: 'https://jspaude.ca/',
      domain: 'jspaude.ca',
      img: 'jspaude.jpg',
      company: 'jspaude.ca',
    },
    {
      title: 'Home In BC',
      content:
        'Fully custom wordpress theme and cms. \n LEMP Stack - Digital Ocean',
      url: 'https://homeinbc.ca',
      domain: 'HomeInBC.ca',
      img: 'homeinbc.jpg',
      company: 'Colony Digital',
    },
    {
      title: 'FishRite',
      content:
        'Fully custom wordpress theme and cms. \n LEMP Stack - Digital Ocean',
      url: 'https://fishrite.ca',
      domain: 'FishRite.ca',
      img: 'fishrite.jpg',
      company: 'Colony Digital',
    },
    {
      title: 'MoveHelpers',
      content:
        'Full site build using Elementor and the Salient WordPress theme',
      url: 'https://movehelpers.ca',
      domain: 'MoveHelpers.ca',
      img: 'movehelpers.jpg',
      company: 'Vancouver Websites',
    },
  ];

  const viewMore = () => {
    const trigger = document.querySelector("[data-trigger='view_more']");
    const projects = document.querySelectorAll("[data-content='project']");
    trigger.addEventListener('click', () => {
      trigger.style.display = 'none';
      projects.forEach((project) => {
        project.classList.remove(styles.hidden);
        project.classList.add(styles.grow);
      });
    });
  };

  useEffect(() => {
    viewMore();
  });

  return (
    <section className={styles.projects} id="projects">
      <h3>Portfolio</h3>

      <div className={styles.container}>
        <ul className={styles.projects__container}>
          {projects.map((item, index) => {
            const display = index > 3 ? styles.hidden : '';
            return (
              <li
                className={`${styles.projects__item} ${display}`}
                key={`project-${index}`}
                data-content="project"
              >
                <a
                  href={`${item.url}`}
                  target="_blank"
                  className="projects__link"
                >
                  <div className={styles.projects__title}>
                    <h4>{item.title}</h4>
                  </div>
                  <div className={styles.projects__img}>
                    <Image
                      layout="fill"
                      objectFit="contain"
                      src={`/assets/images/projects/${item.img}`}
                    />
                  </div>
                  <div className={styles.projects__content}>
                    <p>{item.content}</p>
                    <p className={styles.company}>A {item.company} project</p>
                    <span
                      href={`${item.url}`}
                      target="_blank"
                      className="projects__link"
                    >
                      {item.domain} &rarr;
                    </span>
                  </div>
                </a>
              </li>
            );
          })}
        </ul>
      </div>

      <div className={styles.projects__more}>
        <button data-trigger="view_more">View More</button>
      </div>
    </section>
  );
}

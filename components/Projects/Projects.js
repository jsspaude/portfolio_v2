import { Card, Col, Row } from 'react-bootstrap';
import styles from './Projects.module.scss';
import { useEffect } from 'react';

export default function Projects() {
  const projects = [
    {
      title: 'Aragon',
      content:
        'Fully custom wordpress theme and cms. \n LEMP Stack - Digital Ocean',
      url: 'https://aragon.ca',
      domain: 'Aragon.ca',
      img: 'aragon.png',
      company: 'Colony Digital',
    },
    {
      title: 'TAG Whistler',
      content:
        'Fully custom wordpress theme and cms. \n LEMP Stack - Digital Ocean',
      url: 'https://tagwhistler.com',
      domain: 'TagWhistler.com',
      img: 'tagwhistler.png',
      company: 'Colony Digital',
    },
    {
      title: 'Sweatalus Mock Draft',
      content: 'Progressive web app and database  \n React - Firebase - Vercel',
      url: 'https://sweatalus-mock-draft.netlify.app/',
      domain: 'Sweatalus Mock Draft',
      img: 'sweatalus.png',
      company: 'jspaude.ca',
    },
    {
      title: 'Marine Landing',
      content:
        'Fully custom wordpress theme and cms. \n LEMP Stack - Digital Ocean',
      url: 'https://marinelanding.ca',
      domain: 'MarineLanding.ca',
      img: 'marinelanding.png',
      company: 'Colony Digital',
    },
    {
      title: 'jspaude.ca',
      content: 'A Next.js project \n React - Next.js - Digital Ocean',
      url: 'https://jspaude.ca/',
      domain: 'jspaude.ca',
      img: 'sweatalus.png',
      company: 'jspaude.ca',
    },
    {
      title: 'Home In BC',
      content:
        'Fully custom wordpress theme and cms. \n LEMP Stack - Digital Ocean',
      url: 'https://homeinbc.ca',
      domain: 'HomeInBC.ca',
      img: 'homeinbc.png',
      company: 'Colony Digital',
    },
    {
      title: 'FishRite',
      content:
        'Fully custom wordpress theme and cms. \n LEMP Stack - Digital Ocean',
      url: 'https://fishrite.ca',
      domain: 'FishRite.ca',
      img: 'fishrite.png',
      company: 'Colony Digital',
    },
  ];

  const viewMore = () => {
    const trigger = document.querySelector("[data-trigger='view_more']");
    const projects = document.querySelectorAll("[data-content='project']");
    console.log(trigger);
    trigger.addEventListener('click', () => {
      trigger.classList.add('hidden');
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
    <section className={styles.projects}>
      <h3>Projects</h3>

      <div className={styles.projects__container}>
        {projects.map((item, index) => {
          const display = index > 2 ? styles.hidden : '';
          return (
            <div
              className={`${styles.projects__item} ${display}`}
              key={`project-${index}`}
              data-content="project"
            >
              <div className={styles.projects__title}>
                <h4>{item.title}</h4>
              </div>
              <div className={styles.projects__img}>
                <img src={`/assets/images/projects/${item.img}`} />
              </div>
              <div className={styles.projects__content}>
                <p>{item.content}</p>
                <p className={styles.company}>A {item.company} project</p>
                <a
                  href={`${item.url}`}
                  target="_blank"
                  className="projects__link"
                >
                  {item.domain} &rarr;
                </a>
              </div>
            </div>
          );
        })}
      </div>

      <div className={styles.projects__more}>
        <a data-trigger="view_more" href="#0">
          View More
        </a>
      </div>
    </section>
  );
}

import { Card, Col, Row } from 'react-bootstrap';
import styles from './Experience.module.scss';
import { useEffect } from 'react';

export default function Experience() {
  const experience = [
    {
      name: 'Colony Digital',
      years: 3,
      title: 'Web Developer',
      duties:
        'In charge of full stack development for our clients. \n • Built and managed full scale projects using a wordpress LEMP stack or next.js. \n • Built and managed cloud servers. \n • Built and managed internal development documentation. \n • On boarded and mentored newer developers.',
      url: 'https://colonydigital.ca',
      domain: 'ColonyDigital.ca',
    },
    {
      name: 'Vancouver Websites',
      years: 1,
      title: 'Freelance Developer',
      duties:
        'In charge of building and maintaining projects using wordpress and the visual composer plugin.',
      url: 'https://vancouverwebsites.ca/',
      domain: 'VancouverWebsites.ca',
    },
    {
      name: 'BCIT',
      years: 2,
      title: 'Student',
      duties: 'Graduate of the New Media and Web Development intensive program',
      url: 'https://www.bcit.ca/programs/new-media-design-and-web-development-diploma-full-time-6525dipma/',
      domain: 'BCIT - New Media Design and Web Development',
    },
    {
      name: 'Hospitality Managment',
      years: 12,
      duties:
        'Management experience and training in companies such as: Hotel Le Germain, Wentworth Hospitality, Hoppy Inc, Pizzeria UNO Corporation',
    },
  ];

  const technologies = [
    {
      name: 'React',
      image: '',
      url: '',
    },
  ];

  return (
    <section className={styles.experience}>
      <h3>Experience</h3>

      <div className={styles.container}>
        <ul className={styles.experience__container}>
          {experience.map((item, index) => {
            const display = index > 2 ? styles.hidden : '';
            const years = item.years > 1 ? 'years' : 'year';
            return (
              <li
                className={`${styles.experience__item} ${display}`}
                key={`project-${index}`}
                data-content="project"
              >
                <div className={styles.experience__title}>
                  <h5>
                    {item.name} -{' '}
                    <span>
                      {item.years} {years}
                    </span>
                  </h5>
                </div>
                <div className={styles.experience__content}>
                  <p>{item.duties}</p>
                  {item.domain && (
                    <a
                      href={`${item.url}`}
                      target="_blank"
                      className="Experience__link"
                    >
                      {item.domain} &rarr;
                    </a>
                  )}
                </div>
              </li>
            );
          })}
        </ul>
      </div>
    </section>
  );
}

import styles from './Experience.module.scss';
import { useEffect } from 'react';

export default function Experience() {
  const companies = [
    {
      name: 'Colony Digital',
      years: 3,
      title: 'Web Developer',
      duties:
        'In charge of full stack development for our clients. \n • Built and managed full scale experiences using a wordpress LEMP stack or next.js. \n • Built and managed cloud servers. \n • Built and managed internal development documentation. \n • On boarded and mentored newer developers.',
      url: 'https://colonydigital.ca',
      domain: 'ColonyDigital.ca',
    },
    {
      name: 'Vancouver Websites',
      years: 1,
      title: 'Freelance Developer',
      duties:
        'In charge of building and maintaining experiences using wordpress and the visual composer plugin.',
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
      image: '/assets/svg/experience/react.svg',
      url: 'https://reactjs.org/',
      type: 'framework',
    },
    {
      name: 'Laravel',
      image: '/assets/svg/experience/laravel.svg',
      url: 'https://laravel.com/',
      type: 'framework',
    },
    {
      name: 'Next.js',
      image: '/assets/svg/experience/nextjs.svg',
      url: 'https://nextjs.org/',
      type: 'framework',
    },
    {
      name: 'Javascript (es6)',
      image: '/assets/svg/experience/js.svg',
      url: 'https://www.javascript.com/',
      type: 'language',
    },
    {
      name: 'PHP',
      image: '/assets/svg/experience/php.svg',
      url: 'https://www.php.net/',
      type: 'language',
    },
    {
      name: 'HTML5',
      image: '/assets/svg/experience/html5.svg',
      url: 'https://html.com/html5/',
      type: 'language',
    },
    {
      name: 'CSS',
      image: '/assets/svg/experience/css.svg',
      url: 'https://developer.mozilla.org/en-US/docs/Web/CSS',
      type: 'language',
    },
    {
      name: 'MySQL',
      image: '/assets/svg/experience/mysql.svg',
      url: 'https://www.mysql.com/',
      type: 'database',
    },
    {
      name: 'PostgreSQL',
      image: '/assets/svg/experience/postgresql.svg',
      url: 'https://www.postgresql.org/',
      type: 'database',
    },
    {
      name: 'Firebase',
      image: '/assets/svg/experience/firebase.svg',
      url: 'https://firebase.google.com/',
      type: 'database',
    },
    {
      name: 'SQL',
      image: '/assets/svg/experience/sql.svg',
      url: 'https://en.wikipedia.org/wiki/SQL',
      type: 'language',
    },
    {
      name: 'WordPress',
      image: '/assets/svg/experience/wordpress.svg',
      url: 'https://wordpress.org/',
      type: 'cms',
    },
    {
      name: 'Craft',
      image: '/assets/svg/experience/craftcms.svg',
      url: 'https://craftcms.com/',
      type: 'cms',
    },
    {
      name: 'Contentful',
      image: '/assets/svg/experience/contentful.svg',
      url: 'https://www.contentful.com/',
      type: 'cms',
    },
    {
      name: 'MailChimp',
      image: '/assets/svg/experience/mailchimp.svg',
      url: 'https://mailchimp.com/en-ca/',
      type: 'cms',
    },
    {
      name: 'Klaviyo',
      image: '/assets/svg/experience/klaviyo.svg',
      url: 'https://www.klaviyo.com/',
      type: 'cms',
    },
    {
      name: 'Salesforce',
      image: '/assets/svg/experience/salesforce.svg',
      url: 'https://www.salesforce.com/ca/',
      type: 'cms',
    },
    {
      name: 'NGINX',
      image: '/assets/svg/experience/nginx.svg',
      url: 'https://www.nginx.com/',
      type: 'backend',
    },
    {
      name: 'Apache',
      image: '/assets/svg/experience/apache.svg',
      url: 'https://www.apache.org/',
      type: 'backend',
    },
    {
      name: 'Digial Ocean',
      image: '/assets/svg/experience/digitalocean.svg',
      url: 'https://www.digitalocean.com/',
      type: 'backend',
    },
    {
      name: 'Docker',
      image: '/assets/svg/experience/docker.svg',
      url: 'https://www.docker.com/',
      type: 'environment',
    },
    {
      name: 'Node.js',
      image: '/assets/svg/experience/nodejs.svg',
      url: 'https://nodejs.org/en/',
      type: 'environment',
    },
    {
      name: 'Visual Studio',
      image: '/assets/svg/experience/visual_studio.svg',
      url: 'https://visualstudio.microsoft.com/',
      type: 'environment',
    },
  ];

  const technologiesMapped = technologies.reduce(function (r, a) {
    r[a.type] = r[a.type] || [];
    r[a.type].push(a);
    return r;
  }, Object.create(null));

  const technologiesTypes = Object.keys(technologiesMapped);

  const viewMore = () => {
    const trigger = document.querySelector("[data-trigger='view_more_tech']");
    const technologies = document.querySelectorAll(
      "[data-content='technology']"
    );
    console.log(trigger);
    trigger.addEventListener('click', () => {
      trigger.style.display = 'none';
      technologies.forEach((technology) => {
        technology.classList.remove(styles.hidden);
        technology.classList.add(styles.grow);
      });
    });
  };

  useEffect(() => {
    viewMore();
  });

  return (
    <section id="experience" className={styles.experience}>
      <h3>Experience:</h3>

      {/* <div className={styles.experience__nav}>
        {technologiesTypes.map((type, key) => {
          return <p key={key}>{type}</p>;
        })}
      </div> */}

      <div className={styles.container}>
        <div className={styles.experience__companies}>
          <br />
          <br />
          <h4>Professional:</h4>
          <ul className={styles.experience__companies__container}>
            {companies.map((item, index) => {
              const years = item.years > 1 ? 'years' : 'year';
              return (
                <li
                  className={`${styles.experience__companies__item}`}
                  key={`experience-${index}`}
                  data-content="experience"
                >
                  <div className={styles.experience__companies__title}>
                    <h5>
                      {item.name} -{' '}
                      <span>
                        {item.years} {years}
                      </span>
                    </h5>
                  </div>
                  <div className={styles.experience__companies__content}>
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
        <div className={styles.experience__tech}>
          <br />
          <br />
          <h4>Tech</h4>
          <ul className={styles.experience__tech__container}>
            {technologies.map((item, index) => {
              const display = index > 9 ? styles.hidden : '';
              return (
                <li
                  className={`${styles.experience__tech__item} ${display}`}
                  key={`experience-${index}`}
                  data-content="technology"
                  data-type={item.type}
                >
                  {item.url && (
                    <a
                      href={`${item.url}`}
                      target="_blank"
                      className="Experience__link"
                    >
                      <div className={styles.experience__tech__content}>
                        <img src={item.image} alt={`${item.name} Logo`} />
                      </div>
                      <div className={styles.experience__tech__title}>
                        <h5>{item.name}</h5>
                        <p>({item.type})</p>
                      </div>
                    </a>
                  )}
                </li>
              );
            })}
          </ul>
          <div className={styles.experience__more}>
            <a data-trigger="view_more_tech" href="javascript:void(0)">
              View More
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}

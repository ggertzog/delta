import React from 'react';
import styles from './styles.module.scss';
import { LogoIcon } from '@/shared/assets/icons/logo';
import { Link } from 'react-router-dom';

//Mock data for links
const mockData = [
  {
    // link: '#about',
    text: 'О проекте',
  },
  {
    // link: '#info',
    text: 'Как это работает',
  },
  {
    // link: '#advantages',
    text: 'Преимущества',
  },
  {
    // link: '#',
    text: 'Поддержка',
  },
  {
    // link: '#',
    text: 'Контакты',
  },
];

/**
 * Renders the footer component with a logo and a list of links.
 *
 * @return {JSX.Element} The rendered footer component.
 */
export const Footer: React.FC = (): JSX.Element => {
  // const scrollTo = (elementId: string) => {
  //   const element = document.getElementById(elementId.slice(1));
  //   if (element) {
  //     element.scrollIntoView({ behavior: 'smooth' });
  //     history.pushState({}, '', elementId);
  //   }
  // };

  return (
    <footer className={styles.footer}>
      <div className={styles.container}>
        <LogoIcon className={styles.logo} />
        <div className={styles.tabs}>
          {mockData.map((item) => (
            <Link
              to="/about"
              key={item.text}
              // onClick={(e) => {
              //   e.preventDefault();
              //   scrollTo(item.link);
              // }}
            >
              {item.text}
            </Link>
          ))}
        </div>
      </div>
    </footer>
  );
};

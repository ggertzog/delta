import React from 'react';
import { Link } from 'react-router-dom';
import styles from './styles.module.scss';
import { LogoIcon } from '@/shared/assets/icons';
import { ProfileHeaderIcon } from '@/shared/assets/icons/profile-header';
import { EnterExit } from './enter-exit';

/**
 * Renders the header component of the application.
 *
 * @return {JSX.Element} The rendered header component.
 */
export const Header: React.FC = (): JSX.Element => {
  return (
    <header className={styles.header}>
      <div className={styles.container}>
        <Link to={'/'}>
          <LogoIcon className={styles.header__logo} />
        </Link>
        <nav className={styles.nav}>
          <ul className={styles.nav__list}>
            <li>
              <Link className={styles.nav__link} to="/profile">
                <ProfileHeaderIcon className={styles.nav__icon} />
                <span className={styles.nav__text}>Личный кабинет</span>
              </Link>
            </li>
            <li>
              <EnterExit isLoggedIn onClickHandler={() => {}} />
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
};

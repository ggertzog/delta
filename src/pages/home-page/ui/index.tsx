import React from 'react';
import styles from './styles.module.scss';
import { Header } from '@/widgets/header';
import { SearchPanel } from '@/widgets/search-panel';
import { Footer } from '@/widgets/footer';

/**
 * Renders the HomePage component which includes the Header, SearchPanel, and Footer components.
 *
 * @return {JSX.Element} The rendered HomePage component.
 */
export const HomePage = () => {
  return (
    <>
      <Header />
      <main className={styles.main}>
        <SearchPanel />
      </main>
      <Footer />
    </>
  );
};

import React from 'react';
import styles from './styles.module.scss';
import { mockId } from '@/shared/ui/about-frame/mock-data.ts';
import { AboutInfo } from '@/shared/ui/about-frame/about-info';

/**
 * Renders an AboutFrame component.
 *
 * @return {JSX.Element} The rendered AboutFrame component.
 */
export const AboutFrame: React.FC = () => {
  return (
    <main className={styles.main}>
      {mockId.map((item) => (
        <AboutInfo
          key={item.id}
          link={item.link}
          title={item.title}
          description={item.description}
          addDescription={item.addDescription}
        />
      ))}
    </main>
  );
};

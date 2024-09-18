import React from 'react';
import { ZagolovokPodpis } from '@/shared/ui/zagolovok-podpis';
import { Footer } from '@/widgets/footer';
import { Header } from '@/widgets/header';
import { EditProfile } from '@/features/edit-profile';
import styles from './styles.module.scss';

/**
 * Renders the profile page.
 *
 * @return {ReactElement} The rendered profile page.
 */
export const ProfilePage: React.FC = () => {
  // TODO: заменить на запрос к entity профиля
  const profileName = 'Анна';

  return (
    <div className={styles.container}>
      <Header />
      <main className={styles.main}>
        <ZagolovokPodpis
          title="Личный кабинет"
          subtitle={`Здравствуйте, ${profileName}!`}
        />
        <EditProfile />
      </main>
      <Footer />
    </div>
  );
};

import React from 'react';
import styles from './styles.module.scss';

/**
 * Renders the ListHeader component which displays
 * the title and information for the best price
 * for all items in the user's cart.
 *
 * @return {JSX.Element} The ListHeader component.
 */
export const ListHeader: React.FC = (): JSX.Element => {
  return (
    <section className={styles.container}>
      <h4 className={styles.title}>
        Лучшая цена на все товары в вашей корзине:
      </h4>
      <p className={styles.info}>
        Рекомендуем перепроверять наличие препаратов в аптеках по телефону
      </p>
    </section>
  );
};

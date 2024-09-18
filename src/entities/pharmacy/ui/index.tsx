import React from 'react';
import { cardFieldTitles } from '../utils';
import styles from './styles.module.scss';

interface IPharmacyCard {
  photo: string;
  name: string;
  address: string;
  phone: string;
  workTime: string;
  productsPrice: number;
}

/**
 * Renders a pharmacy card component with the provided data.
 *
 * @param {IPharmacyCard} props - The props object containing the following properties:
 *   - photo: string - The URL of the pharmacy's logo.
 *   - name: string - The name of the pharmacy.
 *   - address: string - The address of the pharmacy.
 *   - phone: string - The phone number of the pharmacy.
 *   - workTime: string - The working hours of the pharmacy.
 *   - productsPrice: number - The price of the products in the pharmacy.
 * @return {React.ReactElement} The rendered pharmacy card component.
 */
export const PharmacyCard: React.FC<IPharmacyCard> = ({
  photo,
  name,
  address,
  phone,
  workTime,
  productsPrice,
}) => {
  return (
    <article className={styles.card}>
      <img className={styles.photo} src={photo} alt="Логотип аптеки" />
      <div className={styles.container}>
        <p className={styles.name}>{name}</p>
        <div className={styles.info}>
          <p>
            <span className={styles.title}>{cardFieldTitles.address}</span>
            &nbsp;
            <span className={styles.value}>{address}</span>
          </p>
          <p>
            <span className={styles.title}>{cardFieldTitles.phone}</span>
            &nbsp;
            <span className={styles.value}>{phone}</span>
          </p>
          <p>
            <span className={styles.title}>{cardFieldTitles.workTime}</span>
            &nbsp;
            <span className={styles.value}>{workTime}</span>
          </p>
        </div>
      </div>
      <p className={styles.price}>{productsPrice}&nbsp;&#8381;</p>
    </article>
  );
};

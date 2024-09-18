import React from 'react';
import { PharmacyCard } from '@/entities/pharmacy';
import { TPharmacy } from '@/entities/pharmacy/model';
import styles from './styles.module.scss';

interface IListProps {
  data: Array<TPharmacy>;
}

/**
 * Renders a list of pharmacies as a list of PharmacyCard components.
 *
 * @param {IListProps} props - The props object containing the data array of pharmacies.
 * @return {JSX.Element} The rendered list of pharmacies.
 */
export const List: React.FC<IListProps> = ({
  data,
}: IListProps): JSX.Element => {
  return (
    <ul className={styles.list}>
      {data.map((pharmacy) => (
        <li key={pharmacy.id}>
          <PharmacyCard {...pharmacy} />
        </li>
      ))}
    </ul>
  );
};

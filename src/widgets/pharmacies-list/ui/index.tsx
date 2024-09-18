import React from 'react';
import { ListHeader } from './list-header';
import { List } from './list';
import { MoreResult } from '@/shared/ui/more-result';
//TODO: убрать после добавления стора для pharmacy
import { pharmacies } from '@/entities/pharmacy/model';
import styles from './styles.module.scss';

/**
 * Renders a list of pharmacies with the ability to add more.
 *
 * @return {JSX.Element} The JSX element representing the list of pharmacies.
 */
export const PharmaciesList: React.FC = (): JSX.Element => {
  //TODO: implement the addition of new pharmacies to the list
  const onMoreResultClick = () => {};

  return (
    <article className={styles.container}>
      <ListHeader />
      <List data={pharmacies} />
      <MoreResult text="Еще 25 аптек" onClickHandler={onMoreResultClick} />
    </article>
  );
};

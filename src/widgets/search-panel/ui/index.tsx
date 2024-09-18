import React, { useState } from 'react';
import styles from './styles.module.scss';
import { Button } from '@/shared/ui/button';
import { UnderlinedButton } from '@/shared/ui/underlined-button';
import { SearchForm } from '@/features/search-form';

/**
 * Renders a search panel component.
 *
 * @return {JSX.Element} The search panel component.
 */
export const SearchPanel: React.FC = (): JSX.Element => {
  const [type, setType] = useState(false);

  const toggleType = () => {
    setType((prev) => !prev);
  };

  return (
    <div className={styles['search-panel']}>
      <div className={styles.container}>
        <div className={styles['category-box']}>
          <Button theme="category" size="category">
            Продукты
          </Button>
          <Button theme="category" size="category">
            Медикаменты
          </Button>
          <Button theme="category" size="category">
            Стройтовары
          </Button>
        </div>
        <div className={styles['quantity-box']}>
          <UnderlinedButton
            onClick={toggleType}
            type={type ? 'active' : 'passive'}
          >
            Я ищу один товар
          </UnderlinedButton>
          <UnderlinedButton
            onClick={toggleType}
            type={!type ? 'active' : 'passive'}
          >
            Я ищу несколько товаров
          </UnderlinedButton>
        </div>
        <SearchForm />
      </div>
    </div>
  );
};

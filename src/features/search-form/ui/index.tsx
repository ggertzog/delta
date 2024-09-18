import React, {
  ChangeEvent,
  useCallback,
  useEffect,
  useMemo,
  useState,
} from 'react';

import styles from './styles.module.scss';
import classNames from 'classnames/bind';

import { SearchIcon } from '@/shared/assets/icons';
import { Button } from '@/shared/ui/button';
import { DropdownSearch } from '@/shared/ui/dropdown-search';
import { SearchLink } from '@/shared/ui/search-link';
import { Spinner } from '@/shared/ui/spinner';

import { getMatchedParts } from '../utils/getMatchedParts';
import { filterData } from '../utils/filterData';
import { content } from '../model/mock-data';

const cx = classNames.bind(styles);

/**
 * Renders a search form component that allows users to search for items.
 *
 * @return {ReactElement} The rendered search form component.
 */
export const SearchForm: React.FC = () => {
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const [inputValue, setInputValue] = useState<string>('');
  const [loading, setLoading] = useState<boolean>(true);

  useEffect(() => {
    // Simulated data loading
    setLoading(true);
    const timer = setTimeout(() => {
      setLoading(false);
    }, 1000);

    return () => clearTimeout(timer);
  }, [isOpen]);

  const closeForm = () => {
    setIsOpen(false);
  };

  const openForm = () => {
    setIsOpen(true);
  };

  /**
   * Updates the input value and opens or closes the form based on the length of the input value.
   *
   * @param {ChangeEvent<HTMLInputElement>} e - The event object representing the change in the input element.
   */
  const handleChangeInput = (e: ChangeEvent<HTMLInputElement>) => {
    setInputValue(e.target.value);
    if (e.target.value.length >= 2) {
      openForm();
    } else {
      closeForm();
    }
  };

  /**
   * Sets the input value to the full name of the provided item and navigates to the results page.
   *
   * @param {Object} item - The item object containing the full name.
   * @param {string} item.fullname - The full name of the item.
   */
  const goToResultsPage = (item: { fullname: string }) => {
    // add the logic of going to the page when clicking on the link
    setInputValue(item.fullname);
  };

  const filteredData = useMemo(() => {
    if (inputValue.length < 2) return [];
    return filterData({ inputValue, content });
  }, [inputValue]);

  const renderContent = useCallback(() => {
    return loading ? (
      <div className={styles['loading-box']}>
        <Spinner />
      </div>
    ) : filteredData.length > 0 ? (
      <div>
        {filteredData.map((item) => {
          const { beforeMatch, matchText, afterMatch } = getMatchedParts({
            fullname: item.fullname,
            inputValue,
          });
          return (
            <SearchLink
              key={item.id}
              link={item.link}
              beforeMatch={beforeMatch}
              matchText={matchText}
              afterMatch={afterMatch}
              onClick={() => goToResultsPage(item)}
            />
          );
        })}
      </div>
    ) : null;
  }, [filteredData, inputValue, loading]);

  const data = useMemo(() => renderContent(), [renderContent]);

  return (
    <>
      <form className={cx('form', { form_opened: isOpen })}>
        <div className={styles['form-container']}>
          <div className={styles['form-box']}>
            <SearchIcon />
            <input
              className={styles.input}
              placeholder="Поиск"
              onChange={handleChangeInput}
              value={inputValue}
            />
          </div>
          <Button theme="blue" size="default">
            Искать
          </Button>
        </div>
        <DropdownSearch isOpen={isOpen} content={data} />
      </form>
      {isOpen && <div className={styles.overlay} onClick={closeForm}></div>}
    </>
  );
};

import React from 'react';
import styles from './styles.module.scss';
import { Link } from 'react-router-dom';

interface ISearchLink {
  link: string;
  beforeMatch: string;
  matchText: string;
  afterMatch: string;
  onClick: () => void;
}

/**
 * Renders a search link component.
 *
 * @param {ISearchLink} props - The props for the search link component.
 * @param {string} props.link - The link to navigate to.
 * @param {string} props.beforeMatch - The text before the matched text.
 * @param {string} props.matchText - The matched text.
 * @param {string} props.afterMatch - The text after the matched text.
 * @param {() => void} props.onClick - The click event handler.
 * @return {ReactElement} The rendered search link component.
 */

export const SearchLink: React.FC<ISearchLink> = (props) => {
  const { link, beforeMatch, matchText, afterMatch, onClick } = props;

  return (
    <Link to={link} className={styles.link} onClick={onClick}>
      <p className={styles['normal-text']}>
        {beforeMatch}
        <strong className={styles['bold-text']}>{matchText}</strong>
        {afterMatch}
      </p>
    </Link>
  );
};

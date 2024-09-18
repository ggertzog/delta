import React from 'react';
import styles from './styles.module.scss';
import classNames from 'classnames/bind';

const cx = classNames.bind(styles);

interface IDropdownSearch {
  readonly isOpen: boolean;
  readonly content?: JSX.Element | JSX.Element[] | null;
}

/**
 * Renders a dropdown search component with the given props.
 *
 * @param {boolean} isOpen - Indicates whether the dropdown is open or not.
 * @param {JSX.Element | JSX.Element[] | null} content - The content to be displayed in the dropdown.
 * @return {ReactElement} The rendered dropdown search component.
 */

export const DropdownSearch: React.FC<IDropdownSearch> = ({
  isOpen,
  content,
}) => {
  return (
    <div className={styles.dropdown}>
      <div className={cx('wrapper', { wrapper_open: isOpen })}>
        <div className={styles.content}>{content}</div>
      </div>
    </div>
  );
};

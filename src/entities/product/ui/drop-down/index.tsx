import React from 'react';
import styles from './styles.module.scss';
import classNames from 'classnames/bind';
import { StrelkaIcon } from '@/shared/assets/icons/strelka';

const cx = classNames.bind(styles);

export interface IDropDown {
  title: string;
  content: string;
}

/**
 * Renders a dropdown component with a title and content.
 *
 * @param {IDropDown} props - The props object containing the title and content.
 * @return {JSX.Element} The rendered dropdown component.
 * title - sring - the title of the dropdown
 * content - string - the content of the dropdown
 */
export const DropDown: React.FC<IDropDown> = ({ title, content }) => {
  const [isOpen, setIsOpen] = React.useState(false);

  function toggleIsOpen() {
    setIsOpen((prevIsOpen) => !prevIsOpen);
  }

  return (
    <li className={styles['drop-down']}>
      <div className={styles.wrapper}>
        <h3 className={styles.title}>{title}</h3>
        <button
          type="button"
          className={cx('button', isOpen && 'button_opened')}
          onClick={toggleIsOpen}
        >
          <StrelkaIcon />
        </button>
      </div>

      <pre className={cx('content', !isOpen && 'content_hidden')}>
        {content}
      </pre>
    </li>
  );
};

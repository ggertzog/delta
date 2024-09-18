import React, { FC } from 'react';
import styles from './styles.module.scss';
import classNames from 'classnames/bind';

const cx = classNames.bind(styles);

interface IPopup {
  readonly children: React.ReactElement;
  readonly isOpen: boolean;
  // For close popup with overlay
  readonly setIsOpen: React.Dispatch<React.SetStateAction<boolean>>;
}

/**
 * Renders a popup component.
 *
 * @param {IPopup} props - The props object containing the following properties:
 *   - `children` (React.ReactElement): The content to be rendered inside the popup.
 *   - `isOpen` (boolean): A boolean indicating whether the popup is open or closed.
 *   - `setIsOpen` (React.Dispatch<React.SetStateAction<boolean>>): A function to update the `isOpen` state.
 * @return {React.ReactElement} The rendered popup component.
 */

export const Popup: FC<IPopup> = ({ children, isOpen, setIsOpen }) => {
  const closePopup = () => {
    setIsOpen(false);
  };

  return (
    <div className={cx('popup', { popup_opened: isOpen })}>
      <div className={styles.overlay} onClick={closePopup}></div>
      <div className={styles.container}>{children}</div>
    </div>
  );
};

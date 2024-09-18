import React from 'react';
import styles from './styles.module.scss';
import { EnterHeaderIcon, ExitIcon } from '@/shared/assets/icons';

interface IEnterExitProps {
  isLoggedIn: boolean;
  onClickHandler: () => void;
}

/**
 * Renders a button component that displays either an exit or enter icon and
 * text based on the value of the `isLoggedIn` prop.
 *
 * @param {IEnterExitProps} props - The props object containing the isLoggedIn prop.
 * @param {boolean} props.isLoggedIn - A boolean indicating whether the user is logged in or not.
 * @param {() => void} props.onClickHandler - A function to be called when the button is clicked.
 * @return {JSX.Element} A button component with an icon and text based on the value of `isLoggedIn`.
 */
export const EnterExit: React.FC<IEnterExitProps> = ({
  isLoggedIn,
  onClickHandler,
}: IEnterExitProps): JSX.Element => {
  return (
    <button type="button" className={styles.container} onClick={onClickHandler}>
      {isLoggedIn ? (
        <ExitIcon className={styles.svg} />
      ) : (
        <EnterHeaderIcon className={styles.svg} />
      )}
      <span className={styles.text}>{isLoggedIn ? 'Выход' : 'Вход'}</span>
    </button>
  );
};

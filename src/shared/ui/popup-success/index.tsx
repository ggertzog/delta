import React from 'react';
import { SuccessPopupIcon } from '@/shared/assets/icons/success-popup';
import styles from './styles.module.scss';

interface IPopupSuccessProps {
  text: string;
}

/**
 * Renders a success popup component with the provided text.
 *
 * @param {IPopupSuccessProps} props - The props object containing the text to display.
 * @return {ReactElement} The rendered success popup component.
 */

export const PopupSuccess: React.FC<IPopupSuccessProps> = ({ text }) => {
  return (
    <div className={styles.container}>
      <SuccessPopupIcon />
      <p className={styles.text}>{text}</p>
    </div>
  );
};

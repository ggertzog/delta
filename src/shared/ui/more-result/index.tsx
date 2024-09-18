import React from 'react';
import styles from './styles.module.scss';
import { ArrowForwardIcon } from '@/shared/assets/icons/arrow-forward';

interface IMoreResultProps {
  text: string;
  onClickHandler: () => void;
}

/**
 * Renders a "More Result" component.
 *
 * @param {IMoreResultProps} props - The props for the component.
 * @param {string} props.text - The text to display in the component.
 * @param {() => void} props.onClickHandler - The click event handler for the component.
 * @return {ReactElement} The rendered "More Result" component.
 */

export const MoreResult: React.FC<IMoreResultProps> = ({
  text,
  onClickHandler,
}) => {
  return (
    <button type="button" className={styles.container} onClick={onClickHandler}>
      <span className={styles.text}>{text}</span>
      <ArrowForwardIcon className={styles.svg} />
    </button>
  );
};

import styles from './styles.module.scss';
import React from 'react';

interface IVerificationHeaderProps {
  length: number;
}

/**
 * Renders the verification header component.
 *
 * @param {IVerificationHeaderProps} props - The component props.
 * @param {number} props.length - The number of digits sent to the email.
 * @return {JSX.Element} The rendered verification header component.
 */
export const VerificationHeader = ({ length }: IVerificationHeaderProps) => {
  return (
    <div className={styles.top}>
      <h3>Верификация</h3>
      <p>На указанный вами Email</p>
      <p>были высланы {length} цифры,</p>
      <p>введите этот код для верификации</p>
    </div>
  );
};

import React, { useState } from 'react';
import styles from './styles.module.scss';
import { ZagolovokPodpis } from '@/shared/ui/zagolovok-podpis';
import { Popup } from '@/shared/ui/popup';
import { Button } from '@/shared/ui/button';
import { Input } from '@/shared/ui/input';

interface IForgotPasswordProps {
  isOpen: boolean;
  onOpen: () => void;
}

/**
 * Renders a ForgotPassword component.
 *
 * @param {Object} props - The component props.
 * @param {boolean} props.isOpen - Indicates whether the popup is open.
 * @param {Function} props.onOpen - The function to handle the popup open event.
 * @return {JSX.Element} The rendered ForgotPassword component.
 */
export const ForgotPassword: React.FC<IForgotPasswordProps> = ({
  isOpen,
  onOpen,
}) => {
  const [email, setEmail] = useState('');

  /**
   * Updates the email state with the value from the input element.
   *
   * @param {React.ChangeEvent<HTMLInputElement>} e - The event object containing the input element.
   */
  const handleChangeEmail = (e: React.ChangeEvent<HTMLInputElement>) => {
    setEmail(e.target.value);
  };

  const handleResetPassword = () => {
    // Handling the password reset event
  };

  return (
    <Popup isOpen={isOpen} setIsOpen={onOpen}>
      <div className={styles.password__container}>
        <ZagolovokPodpis
          title="Забыли пароль?"
          subtitle={
            <>
              Введите свой Email адрес,
              <br />
              чтобы получить код для смены пароля
            </>
          }
        />
        <div className={styles.input__container}>
          <h3 className={styles.input__title}>Email адрес</h3>
          <Input
            type="email"
            placeholder="anna_ana@gmail.com"
            value={email}
            onChange={handleChangeEmail}
          />
        </div>
        <div className={styles.button__container}>
          <Button theme="blue" size="large" onClick={handleResetPassword}>
            Сбросить пароль
          </Button>
        </div>
      </div>
    </Popup>
  );
};

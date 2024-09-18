import React, { useState } from 'react';
import styles from './styles.module.scss';
import { ZagolovokPodpis } from '@/shared/ui/zagolovok-podpis';
import { UnderlinedButton } from '@/shared/ui/underlined-button';
import { ForgotPassword } from '../forgot-password';
import { Popup } from '@/shared/ui/popup';
import { LoginForm } from './login';
import { RegistrationForm } from './registration';

interface IEnterFormProps {
  isOpen: boolean;
  onOpen: () => void;
}

/**
 * Renders an enter form component with a popup for login or registration.
 *
 * @param {IEnterFormProps} props - The props object containing isOpen and onOpen functions.
 * @return {ReactElement} The rendered enter form component.
 */
export const EnterForm: React.FC<IEnterFormProps> = ({ isOpen, onOpen }) => {
  const [isForgotPasswordOpen, setIsForgotPasswordOpen] = useState(false);
  const [isEnter, setIsEnter] = useState(true);

  /**
   * Handles the click event when the "Forgot Password" button is clicked.
   *
   * This function sets the state variable `isForgotPasswordOpen` to `true`
   * and calls the `onOpen` function.
   */
  const handleForgotPasswordClick = () => {
    setIsForgotPasswordOpen(true);
    onOpen();
  };

  /**
   * Closes the forgot password popup by setting the state variable `isForgotPasswordOpen` to `false`.
   */
  const closeForgotPassword = () => {
    setIsForgotPasswordOpen(false);
  };

  return (
    <>
      <Popup isOpen={isOpen} setIsOpen={onOpen}>
        <>
          <ZagolovokPodpis
            title={isEnter ? 'Вход' : 'Регистрация'}
            subtitle="Добро пожаловать!"
          />
          <div className={styles.enter}>
            <UnderlinedButton
              type={isEnter ? 'active' : 'passive'}
              onClick={() => setIsEnter(true)}
            >
              Войти
            </UnderlinedButton>
            <UnderlinedButton
              type={!isEnter ? 'active' : 'passive'}
              onClick={() => setIsEnter(false)}
            >
              Зарегистрироваться
            </UnderlinedButton>
          </div>
          {isEnter ? (
            <LoginForm
              isOpen={isOpen}
              onOpen={onOpen}
              handleForgotPasswordClick={handleForgotPasswordClick}
            />
          ) : (
            <RegistrationForm />
          )}
        </>
      </Popup>
      {isForgotPasswordOpen && (
        <ForgotPassword isOpen={true} onOpen={closeForgotPassword} />
      )}
    </>
  );
};

import React, { useState, useEffect } from 'react';
import styles from './styles.module.scss';
import { Button } from '@/shared/ui/button';
import { Input } from '@/shared/ui/input';
import { RememberMe } from '@/shared/ui/remember-me';

interface ILoginFormProps {
  isOpen: boolean;
  onOpen: () => void;
  handleForgotPasswordClick: () => void;
}

/**
 * Renders a login form component.
 *
 * @param {Object} props - The component props.
 * @param {boolean} props.isOpen - Indicates whether the form is open.
 * @param {Function} props.handleForgotPasswordClick - The function to handle the forgot password click event.
 * @return {JSX.Element} The rendered login form component.
 */
export const LoginForm: React.FC<ILoginFormProps> = ({
  isOpen,
  handleForgotPasswordClick,
}) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [passwordError, setPasswordError] = useState<string>('');
  const [isButtonDisabled, setIsButtonDisabled] = useState(true);

  useEffect(() => {
    setIsButtonDisabled(!(email && password));
  }, [email, password]);

  useEffect(() => {
    if (!isOpen) {
      setEmail('');
      setPassword('');
      setPasswordError('');
    }
  }, [isOpen]);

  const handleChangeEmail = (e: React.ChangeEvent<HTMLInputElement>) => {
    setEmail(e.target.value);
  };
  const handleChangePassword = (e: React.ChangeEvent<HTMLInputElement>) => {
    setPassword(e.target.value);
    setPasswordError('');
  };

  const handleLogin = () => {
    // Authorization logic
    // Password verification
    // Logic of successful login
  };

  return (
    <>
      <div className={styles.input__container}>
        <h3 className={styles.input__title}>Email адрес</h3>
        <Input
          type="email"
          placeholder="hello@example.com"
          value={email}
          onChange={handleChangeEmail}
        />
      </div>
      <div className={styles.input__container}>
        <div className={styles.password__title}>
          <h3 className={styles.input__title}>Пароль</h3>
          <span
            className={styles.forgot__password}
            onClick={handleForgotPasswordClick}
          >
            Забыли пароль?
          </span>
        </div>
        <Input
          type="password"
          placeholder="**************"
          value={password}
          onChange={handleChangePassword}
        />
      </div>
      {passwordError && (
        <p className={styles.password__error}>{passwordError}</p>
      )}
      <div className={styles.rememberme__container}>
        <RememberMe />
      </div>
      <div className={styles.button__сontainer}>
        <Button
          theme="blue"
          size="large"
          onClick={handleLogin}
          disabled={isButtonDisabled}
        >
          Войти
        </Button>
      </div>
    </>
  );
};

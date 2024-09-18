import React, { useState, useEffect } from 'react';
import styles from './styles.module.scss';
import { Input } from '@/shared/ui/input';
import { Button } from '@/shared/ui/button';

/**
 * Renders a registration form with input fields for name, email, and password,
 * and a button to submit the form. The button is disabled until all input fields
 * are filled. When the button is clicked, the form data is sent to the server
 * for registration.
 *
 * @return {JSX.Element} The registration form component.
 */
export const RegistrationForm = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [isButtonDisabled, setIsButtonDisabled] = useState(true);

  useEffect(() => {
    setIsButtonDisabled(!(name && email && password));
  }, [name, email, password]);

  //sending data to the server for registration
  const handleRegistration = () => {};

  return (
    <>
      <div className={styles.inputs__container}>
        <h3 className={styles.input__title}>Имя</h3>
        <Input
          placeholder="Имя"
          type="text"
          onChange={(e) => setName(e.target.value)}
        />
        <h3 className={styles.input__title}>Email адрес</h3>
        <Input
          placeholder="hello@example.com"
          type="email"
          onChange={(e) => setEmail(e.target.value)}
        />
        <h3 className={styles.input__title}>Пароль</h3>
        <Input
          placeholder="************"
          type="password"
          onChange={(e) => setPassword(e.target.value)}
        />
        <p className={styles.license}>
          <span>Нажимая Зарегистрироваться, вы принимаете условия </span>
          <a href="#">Лецинзионного соглашения</a>
        </p>
      </div>
      <div className={styles.button__container}>
        <Button
          theme="blue"
          size="large"
          disabled={isButtonDisabled}
          onClick={handleRegistration}
        >
          Зарегистрироваться
        </Button>
      </div>
    </>
  );
};

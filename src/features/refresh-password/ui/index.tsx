import React, { useState } from 'react';
import styles from './styles.module.scss';
import { Popup } from '@/shared/ui/popup';
import { ZagolovokPodpis } from '@/shared/ui/zagolovok-podpis';
import { RememberMe } from '@/shared/ui/remember-me';
import { Button } from '@/shared/ui/button';
import { Input } from '@/shared/ui/input';

interface IRefreshPassword {
  isOpen: boolean;
  onOpen: () => void;
}

/**
 * Renders a popup component for refreshing the password.
 *
 * @param {IRefreshPassword} props - The props object containing the following properties:
 *   - isOpen: A boolean indicating whether the popup is open or not.
 *   - onOpen: A function to be called when the popup is opened.
 * @return {JSX.Element} The rendered popup component.
 */
export const RefreshPassword = ({ isOpen, onOpen }: IRefreshPassword) => {
  const [password, setPassword] = useState<string>('');
  const [passwordConfirmation, setPasswordConfirmation] = useState<string>('');

  const handleRefreshPassword = () => {
    // Function is responsible for implementing the logic to update the password
  };

  return (
    <Popup isOpen={isOpen} setIsOpen={onOpen}>
      <>
        <ZagolovokPodpis
          title="Обновить пароль"
          subtitle={
            <>
              Введите новый пароль дважды,
              <br />
              чтобы установить его
            </>
          }
        />
        <form className={styles.content}>
          <p className={styles.label}>Введите новый пароль</p>
          <Input
            type="password"
            placeholder="************"
            value={password || ''}
            onChange={(e) => setPassword(e.target.value)}
          />
          <p className={styles.label}>Подтвердите новый пароль</p>
          <Input
            type="password"
            placeholder="************"
            value={passwordConfirmation || ''}
            onChange={(e) => setPasswordConfirmation(e.target.value)}
          />
        </form>
        <div className={styles.checked}>
          <RememberMe />
        </div>
        <Button
          theme="blue"
          size="large"
          type="submit"
          onClick={handleRefreshPassword}
        >
          Обновить пароль
        </Button>
      </>
    </Popup>
  );
};

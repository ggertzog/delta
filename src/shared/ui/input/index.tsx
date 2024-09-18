import React, { useState } from 'react';
import styles from './styles.module.scss';
import classNames from 'classnames';
import { EyeIcon, EyeOffIcon } from '@/shared/assets/icons';

interface IInputProps extends React.InputHTMLAttributes<HTMLInputElement> {
  type: 'text' | 'email' | 'password' | 'tel';
  errorMessage?: string; // Добавляем опциональное свойство для сообщения об ошибке
}

/**
 * Renders an input field with optional error message and password visibility toggle.
 *
 * @param {IInputProps} props - The props for the Input component.
 * @param {string} props.type - The type of the input field.
 * @param {string} [props.errorMessage] - The error message to display.
 * @param {React.InputHTMLAttributes<HTMLInputElement>} props - The rest of the props are spread onto the input element.
 * @return {JSX.Element} The rendered Input component.
 */

export const Input = ({ type, errorMessage, ...props }: IInputProps) => {
  const [inputType, setInputType] = useState<
    'text' | 'email' | 'password' | 'tel'
  >(type);
  const [active, setActive] = useState<boolean>(true);

  const cx = classNames.bind(styles);
  const toggleInputType = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    setActive(!active);
    setInputType(active ? 'text' : type);
  };

  return (
    <label className={styles.label}>
      <input
        className={cx(styles.input, { [styles.invalid]: errorMessage })}
        type={inputType}
        {...props}
      />
      {/* Отображение предоставленного сообщения об ошибке, если оно есть */}
      {errorMessage && <p className={styles.errormsg}>{errorMessage}</p>}
      {type === 'password' && (
        <button className={styles.showpassword} onClick={toggleInputType}>
          {active ? <EyeIcon /> : <EyeOffIcon />}
        </button>
      )}
    </label>
  );
};

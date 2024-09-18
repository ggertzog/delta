import React, { FC } from 'react';
import cn from 'classnames/bind';
import styles from './styles.module.scss';

interface IButton {
  /** Button text */
  readonly children: string;
  /** Button theme */
  readonly theme?:
    | 'blue'
    | 'transparent'
    | 'black'
    | 'transparent_blue'
    | 'category';
  /** Button size */
  readonly size?: 'default' | 'large' | 'fat' | 'category' | 'add_to_cart';
  /** Button disable modifier */
  readonly disabled?: boolean;
  /** Button pressed modifier */
  readonly pressed?: boolean;

  /** The function is executed when the button is pressed */
  readonly onClick?: () => void;
  type?: 'button' | 'submit' | 'reset';
}

/**
 * Renders a button component with customizable theme, size, and state.
 *
 * @param {React.ReactNode} children - The content of the button.
 * @param {string} [theme='blue'] - The theme of the button. Defaults to 'blue'.
 * @param {boolean} [disabled=false] - Whether the button is disabled. Defaults to false.
 * @param {boolean} [pressed] - Whether the button is pressed.
 * @param {string} [size] - The size of the button.
 * @param {() => void} onClick - The click event handler for the button.
 * @param {string} [type='button'] - The type of the button. Defaults to 'button'.
 * @return {React.ReactElement} The rendered button component.
 */

export const Button: FC<IButton> = ({
  children,
  theme = 'blue',
  disabled = false,
  pressed,
  size,
  onClick,
  type = 'button',
}) => {
  const btnClassName = cn.bind(styles);

  return (
    <button
      type={type}
      onClick={onClick}
      disabled={disabled}
      className={btnClassName(
        'button',
        `button_theme_${theme}`,
        `button_${size}`,
        disabled && `button_disabled_${theme}`,
        pressed && `button_pressed_${theme}`,
      )}
    >
      {children}
    </button>
  );
};

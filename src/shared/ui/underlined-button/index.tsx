import React, { FC } from 'react';
import styles from './styles.module.scss';
import classNames from 'classnames/bind';

interface IUnderlinedButton {
  readonly children: string;
  readonly type: 'active' | 'passive';
  readonly onClick?: () => void;
}

/**
 * Renders an underlined button component with customizable type and click event handler.
 *
 * @param {React.ReactNode} children - The content to be displayed inside the button.
 * @param {'passive' | 'active'} [type='passive'] - The type of the button. Can be either 'passive' or 'active'.
 * @param {() => void} [onClick] - The click event handler for the button.
 * @return {React.ReactElement} The rendered underlined button component.
 */

export const UnderlinedButton: FC<IUnderlinedButton> = ({
  children,
  type = 'passive',
  onClick,
}) => {
  const cx = classNames.bind(styles);

  return (
    <button
      type="button"
      className={cx('button', `button_type_${type}`)}
      onClick={onClick}
    >
      {children}
    </button>
  );
};

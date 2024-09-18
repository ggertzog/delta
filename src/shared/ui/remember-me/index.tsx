import React, { useState } from 'react';
import classNames from 'classnames/bind';
import styles from './styles.module.scss';
import { CheckedIcon } from '@/shared/assets/icons/checked-icon.tsx';

const cx = classNames.bind(styles);

/**
 * Renders a custom checkbox component for remembering the user.
 *
 * @return {React.FC} The RememberMe component.
 */

export const RememberMe: React.FC = () => {
  const [isChecked, setIsChecked] = useState(false);

  const handleCheckboxChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setIsChecked(event.target.checked);
  };

  return (
    <label className={styles.label}>
      Запомнить меня
      <input
        type="checkbox"
        checked={isChecked}
        onChange={handleCheckboxChange}
      />
      <span className={cx('check', { 'check-active': isChecked })}>
        <CheckedIcon className={styles.svg} />
      </span>
    </label>
  );
};

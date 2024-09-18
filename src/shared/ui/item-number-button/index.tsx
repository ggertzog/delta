import React from 'react';

import classNames from 'classnames/bind';
import styles from './styles.module.scss';

const cx = classNames.bind(styles);

interface ItemNumberButtonProps {
  onIncrement: () => void;
  onDecrement: () => void;
  count: number;
}

/**
 * Renders a component that displays a number button with increment and decrement functionality.
 *
 * @param {Object} props - The component props.
 * @param {Function} props.onIncrement - The function to be called when the increment button is clicked.
 * @param {Function} props.onDecrement - The function to be called when the decrement button is clicked.
 * @param {number} props.count - The current count value displayed on the button.
 * @return {JSX.Element} The rendered component.
 */

export const ItemNumberButton = ({
  onIncrement,
  onDecrement,
  count,
}: ItemNumberButtonProps) => {
  return (
    <div className={styles.wrapper}>
      <button onClick={onDecrement} type="button" className={styles.btn} />
      <span className={styles.count}>{count}</span>
      <button
        onClick={onIncrement}
        type="button"
        className={cx('btn', 'btn_inc')}
      />
    </div>
  );
};

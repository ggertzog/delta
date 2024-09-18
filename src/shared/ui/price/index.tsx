import React from 'react';
import styles from './styles.module.scss';

interface IPrice {
  children: React.ReactNode;
}

/**
 * Renders a price component with the given children.
 *
 * @param {React.ReactNode} children - The content to be rendered inside the price component.
 * @return {React.ReactElement} The rendered price component.
 */

export const Price: React.FC<IPrice> = ({ children }) => {
  return <p className={styles.price}>{children}</p>;
};

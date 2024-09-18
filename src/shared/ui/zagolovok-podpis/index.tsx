import React from 'react';
import styles from './styles.module.scss';

interface IZagolovokPodpisProps {
  title: string;
  subtitle: string | React.ReactNode;
}

/**
 * Renders a component that displays a title and subtitle in a container.
 *
 * @param {IZagolovokPodpisProps} props - The component props.
 * @param {string} props.title - The title to be displayed.
 * @param {string} props.subtitle - The subtitle to be displayed.
 * @return {React.ReactElement} The rendered component.
 */

export const ZagolovokPodpis: React.FC<IZagolovokPodpisProps> = ({
  title,
  subtitle,
}) => {
  return (
    <div className={styles.container}>
      <h2 className={styles.title}>{title}</h2>
      <p className={styles.subtitle}>{subtitle}</p>
    </div>
  );
};

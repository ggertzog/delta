import styles from '../styles.module.scss';
import React from 'react';

interface IAboutFrameProps {
  link: string;
  title: string;
  description: string;
  addDescription?: string;
}

/**
 * Renders an AboutInfo component with the given props.
 *
 * @param {IAboutFrameProps} props - The props object containing the following properties:
 *   - link: The link for the AboutInfo component.
 *   - title: The title of the AboutInfo component.
 *   - description: The description of the AboutInfo component.
 *   - addDescription: An additional description for the AboutInfo component (optional).
 * @return {JSX.Element} The rendered AboutInfo component.
 */
export const AboutInfo = ({
  link,
  title,
  description,
  addDescription,
}: IAboutFrameProps) => {
  return (
    <div className={styles.container}>
      <div className={styles.content}>
        <h2 className={styles.title} id={link}>
          {title}
        </h2>
        <p className={styles.subtitle}>{description}</p>
        <p className={styles.subtitle}>{addDescription}</p>
      </div>
    </div>
  );
};

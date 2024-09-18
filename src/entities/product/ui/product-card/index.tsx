import React from 'react';
import styles from './styles.module.scss';
import photo from '../../assets/medicament_foto_medium.png';
import { Price } from '@/shared/ui/price';

type TInfoDetail = {
  title: string;
  text: string;
};

interface IProductCard {
  name: string;
  quantity: string;
  infoDetails: TInfoDetail[];
  productId: number;
  button: React.ReactNode;
}

/**
 * Renders a product card component.
 *
 * @param {IProductCard} props - The props object containing the following properties:
 *   - name: The name of the product.
 *   - quantity: The quantity of the product.
 *   - infoDetails: An array of objects containing the details of the product.
 *   - button: The button component to be rendered.
 * @return {ReactElement} The rendered product card component.
 */
export const ProductCard: React.FC<IProductCard> = ({
  name,
  quantity,
  infoDetails,
  /* productId, */
  button,
}) => {
  return (
    <li className={styles.product}>
      <img src={photo} alt="Изображение товара" />

      {/* After connecting the router, it is planned to use Link */}
      {/* <Link to={`/opened-card/${productId}`} className={styles.info}> */}
      <div className={styles.info}>
        <div className={styles['top-container']}>
          <h3 className={styles.name}>
            {name}
            <br />
            <span className={styles.quantity}>{quantity}</span>
          </h3>
        </div>

        <div className={styles['bottom-container']}>
          {infoDetails.map((detail, index) => (
            <p key={index} className={styles.text}>
              <span className={styles.detail}>{detail.title}: </span>
              {detail.text}
            </p>
          ))}
        </div>
      </div>
      {/* </Link> */}

      <div className={styles['side-container']}>
        <Price>от 216 ₽</Price>
        {button}
      </div>
    </li>
  );
};

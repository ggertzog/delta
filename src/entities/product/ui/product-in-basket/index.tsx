import React, { useCallback, useState } from 'react';
import styles from './styles.module.scss';
import photo from '../../assets/medicament_foto_small.png';
import { ItemNumberButton } from '@/shared/ui/item-number-button';

interface ProductInBasketProps {
  name: string;
  quantity: string;
}

/**
 * Renders a product in the basket with its name, quantity, and a counter to adjust the quantity.
 *
 * @param {ProductInBasketProps} props - The component props.
 * @param {string} props.name - The name of the product.
 * @param {number} props.quantity - The quantity of the product.
 * @return {ReactElement} The rendered component.
 */
export const ProductInBasket: React.FC<ProductInBasketProps> = ({
  name,
  quantity,
}) => {
  const [count, setCount] = useState<number>(1);

  const handleIncrement = useCallback(
    () => setCount((prevCount) => prevCount + 1),
    [],
  );

  const handleDecrement = useCallback(
    () => setCount((prevCount) => Math.max(1, prevCount - 1)),
    [],
  );

  return (
    <figure className={styles.container}>
      <img className={styles.image} src={photo} alt="Изображение товара" />
      <figcaption className={styles.figcaption}>
        <h2 className={styles.heading}>{name}</h2>
        <span className={styles.quantity}>{quantity}</span>
      </figcaption>
      <ItemNumberButton
        onIncrement={handleIncrement}
        onDecrement={handleDecrement}
        count={count}
      />
    </figure>
  );
};

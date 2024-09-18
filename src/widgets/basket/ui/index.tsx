import React from 'react';
import styles from './styles.module.scss';
import classNames from 'classnames';
import { ZagolovokPodpis } from '@/shared/ui/zagolovok-podpis';
import { Button } from '@/shared/ui/button';
import { ProductInBasket } from '@/entities/product/ui/product-in-basket';

// Depending on the desired basket display, need to pass the size.
// The default value is size:small
interface BasketProps {
  products: {
    name: string;
    quantity: string;
  }[];
  size: 'small' | 'large';
}

/**
 * Renders a basket component with a list of products and an optional "Find the best price" button.
 *
 * @param {BasketProps} props - The props object containing the list of products and the size of the basket.
 * @param {Array<{ name: string; quantity: string; }>} props.products - The list of products to display in the basket.
 * @param {'small' | 'large'} [props.size='small'] - The size of the basket.
 * @returns {JSX.Element} - The rendered basket component.
 */
export const Basket: React.FC<BasketProps> = ({
  products,
  size = 'small',
}: BasketProps): JSX.Element => {
  const renderBasketContent = () => {
    if (products.length === 0) {
      return (
        <ZagolovokPodpis title="Корзина" subtitle="Ваша корзина пока пуста" />
      );
    } else {
      return (
        <>
          <ZagolovokPodpis title="Корзина" subtitle="" />
          <div
            className={classNames(styles.basket__product, {
              [styles.basket__product_large]: size === 'large',
            })}
          >
            {products.map((product, index) => (
              <ProductInBasket
                key={index}
                name={product.name}
                quantity={product.quantity}
              />
            ))}
          </div>
        </>
      );
    }
  };

  return (
    <div
      className={classNames(styles.basket, {
        [styles.basket_large]: size === 'large',
      })}
    >
      {renderBasketContent()}
      {size === 'small' && (
        <Button
          theme="black"
          size="fat"
          disabled={products.length <= 1}
          pressed={false}
        >
          Найти лучшую цену
        </Button>
      )}
    </div>
  );
};

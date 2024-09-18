import React from 'react';
import styles from './styles.module.scss';
import { ProductCard } from '@/entities/product';
import { ShowBestPrice, AddToCart } from '@/features/product';
import { products } from '@/entities/product/model/mock-data';

/**
 * Renders a list of product cards with the option to add them
 * to the cart or show the best price.
 *
 * @return {JSX.Element} The rendered product card list component.
 */
export const ProductCardList = (): JSX.Element => {
  const isSingleProductSearh = true;
  // TODO: need to create such a state at a higher level (in the App or Home)
  // and pass it to this component as a prop

  return (
    <ul className={styles.list}>
      {products.map(({ name, quantity, infoDetails, id }) => (
        <ProductCard
          key={id}
          name={name}
          quantity={quantity}
          infoDetails={infoDetails}
          productId={id}
          button={
            isSingleProductSearh ? (
              <ShowBestPrice
                text="Показать аптеку"
                size="default"
                theme="transparent_blue"
                productId={id}
              />
            ) : (
              <AddToCart productId={id} />
            )
          }
        />
      ))}
    </ul>
  );
};

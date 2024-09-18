import React from 'react';
import { Button } from '@/shared/ui/button';

interface IProductId {
  productId: number;
}

/**
 * Renders a button component that allows the user to add a product to their cart.
 *
 * @param {IProductId} props - An object containing the productId of the product to be added to the cart.
 * @return {ReactElement} A button component with the text "Товар в корзине" if the product is already in the cart,
 *                        otherwise the text "Добавить в корзину". The button is disabled if the product is already
 *                        in the cart, and clicking the button logs a message to the console with the productId.
 */
export const AddToCart: React.FC<IProductId> = ({ productId }) => {
  const isProductAlreadyInCart = true;

  const buttonText = isProductAlreadyInCart
    ? 'Товар в\u00A0корзине'
    : 'Добавить в\u00A0корзину';

  function onClick() {
    console.log(`add to cart product with ${productId} id`);
  }

  return (
    <Button
      size="add_to_cart"
      theme="transparent_blue"
      disabled={isProductAlreadyInCart}
      onClick={onClick}
    >
      {buttonText}
    </Button>
  );
};

import React from 'react';
import { Button } from '@/shared/ui/button';

interface IShowBestPrice {
  text: string;
  size: 'default' | 'fat';
  theme: 'black' | 'transparent_blue';
  productId: number;
}

/**
 * Renders a button component that displays the best price for a product.
 *
 * @param {IShowBestPrice} props - The properties for the ShowBestPrice component.
 * @param {string} props.text - The text to display on the button.
 * @param {'default' | 'fat'} props.size - The size of the button.
 * @param {'black' | 'transparent_blue'} props.theme - The theme of the button.
 * @param {number} props.productId - The ID of the product.
 * @return {ReactElement} The rendered button component.
 */
export const ShowBestPrice: React.FC<IShowBestPrice> = ({
  text,
  size,
  theme,
  productId,
}) => {
  function onClick() {
    console.log(`show best price for ${productId}`);
  }

  return (
    <Button size={size} theme={theme} onClick={onClick}>
      {text}
    </Button>
  );
};

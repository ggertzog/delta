import React from 'react';
import styles from './styles.module.scss';
import photo from '@/entities/product/assets/medicament_foto_large.png';
import { products } from '@/entities/product/model/mock-data';
import { DropDown } from '@/entities/product/ui/drop-down';
import { ShowBestPrice } from '@/features/product';

// TODO: should pass the ProductID to params
interface IOpenedCard {
  productId: number;
}

/**
 * Renders an opened card component for a specific product.
 *
 * @param {IOpenedCard} props - The component props.
 * @param {number} props.productId - The ID of the product to display.
 * @return {JSX.Element} The rendered opened card component.
 */
export const OpenedCard: React.FC<IOpenedCard> = ({
  productId,
}: IOpenedCard): JSX.Element => {
  const product = products.find((p) => p.id === productId);
  /* TODO: добавить логику на случай отсутствия продукта */
  const { name, quantity, infoDetails, instruction } = product!;

  return (
    <section className={styles['product']}>
      <div className={styles['heading-container']}>
        <h3 className={styles.name}>
          {name} <span className={styles.quantity}>{quantity}</span>
        </h3>
      </div>

      <img src={photo} alt="Изображение товара" />

      <div className={styles['left-container']}>
        <ul className={styles['details-list']}>
          {infoDetails.map((detail, index) => (
            <li key={index} className={styles.text}>
              <span className={styles.detail}>{detail.title}: </span>
              <br />
              {detail.text}
            </li>
          ))}
        </ul>
        <ShowBestPrice
          text="Показать лучшую цену"
          size="fat"
          theme="black"
          productId={productId}
        />
      </div>

      <div className={styles['drop-down-container']}>
        <h3 className={styles['instruction-title']}>{instruction.title}</h3>

        <ul className={styles['drop-down-list']}>
          {instruction.items.map((item, index) => (
            <DropDown key={index} title={item.title} content={item.content} />
          ))}
        </ul>
      </div>
    </section>
  );
};

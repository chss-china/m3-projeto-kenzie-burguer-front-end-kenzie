import { MdDelete } from 'react-icons/md';

import { StyledCartProductCard } from './style';
import { StyledTitle } from '../../../../styles/typography';
import { useContext, useEffect } from 'react';
import {
  iProducts,
  ProductsContext,
} from '../../../../providers/ProductsContexts';
interface teste {
  product: iProducts;
}
const CartProductCard = ({ product }: teste) => {
  const { removeItems } = useContext(ProductsContext);
  return (
    <StyledCartProductCard>
      <div className='imageBox'>
        <img src={product.img} alt='Hamburguer' />
      </div>
      <div className='contentBox'>
        <StyledTitle tag='h3' $fontSize='three'>
          {product.name}
        </StyledTitle>
        <button type='button' aria-label='Remover'>
          <MdDelete size={24} onClick={() => removeItems(product.id)} />
        </button>
      </div>
    </StyledCartProductCard>
  );
};

export default CartProductCard;

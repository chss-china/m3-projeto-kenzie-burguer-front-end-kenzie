import { useContext } from 'react';
import { ProductsContext } from '../../providers/ProductsContexts';
import ProductCard from './ProductCard';
import { StyledProductList } from './style';

const ProductList = () => {
  const { Products, FilterListProducts } = useContext(ProductsContext);

  return (
    <StyledProductList>
      {FilterListProducts.map((MyProduct, index) => {
        return (
          <ProductCard
            Products={Products}
            MyProduct={MyProduct}
            key={MyProduct.id}
          />
        );
      })}
    </StyledProductList>
  );
};

export default ProductList;

import { StyledShopPage } from './style';
import CartModal from '../../components/CartModal';
import Header from '../../components/Header';
import ProductList from '../../components/ProductList';

import { StyledContainer } from '../../styles/grid';
import { useContext } from 'react';
import { ProductsContext } from '../../providers/ProductsContexts';

const ShopPage = () => {
  const { openModal, setOpenModal } = useContext(ProductsContext);
  return (
    <>
      <StyledShopPage>
        {<CartModal isOpen={openModal} />}
        <Header myIsopen={openModal} />
        <main>
          <StyledContainer containerWidth={1300}>
            <ProductList />
          </StyledContainer>
        </main>
      </StyledShopPage>
    </>
  );
};
export default ShopPage;

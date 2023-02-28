import { StyledProductCard } from './style';
import { StyledButton } from '../../../styles/button';
import { StyledParagraph, StyledTitle } from '../../../styles/typography';
import { useContext, useEffect } from 'react';
import { ProductsContext } from '../../contexts/ProductsContexts';
import { number } from 'yup';
import { ToastContainer, toast } from 'react-toastify';

interface iProducts {
  category: string;
  id: number;
  img: string;
  name: string;
  price: number;
}
interface IProductsProps {
  Products: iProducts[];
  MyProduct: iProducts;
  key: number;
}
interface Iitem {
  item: number;
}

const ProductCard = ({ Products, MyProduct, key }: IProductsProps) => {
  const {
    openModal,
    setOpenModal,
    SetProducts,
    productSelect,
    setProductSelect,
  } = useContext(ProductsContext);
  function OpenModal(MyProduct: iProducts) {
    setOpenModal(true);

    let productsStorage: iProducts[] =
      JSON.parse(localStorage.getItem('@itemscartHamb2')!) || [];

    console.log(productsStorage);
    let filterStorage = productsStorage.filter(
      (element) => element.id === MyProduct.id
    );

    let duplicateElement = productSelect.includes(MyProduct);
    let duplicateElementStorage = productsStorage.includes(MyProduct);
    console.log(duplicateElementStorage);
    if (duplicateElement === false && filterStorage.length === 0) {
      setProductSelect([...productSelect, MyProduct]);
      toast.success('item adicionado ao carrinho');
    } else {
      toast.error('Esse item já foi adicionado ao carrinho');
    }
  }
  useEffect(() => {
    localStorage.setItem('@itemscartHamb2', JSON.stringify(productSelect));
  }, [productSelect]);

  console.log(productSelect);

  return (
    <StyledProductCard>
      <div className='imageBox'>
        <img src={MyProduct.img} alt='Hamburguer' />
      </div>
      <div className='content'>
        <StyledTitle tag='h3' $fontSize='three'>
          {MyProduct.name}
        </StyledTitle>
        <StyledParagraph className='category'>
          {MyProduct.category}
        </StyledParagraph>
        <StyledParagraph className='price'>R${MyProduct.price}</StyledParagraph>
        <StyledButton
          $buttonSize='medium'
          $buttonStyle='green'
          onClick={() => OpenModal(MyProduct)}
          key={MyProduct.id}
        >
          Adicionar
        </StyledButton>
      </div>
    </StyledProductCard>
  );
};

export default ProductCard;

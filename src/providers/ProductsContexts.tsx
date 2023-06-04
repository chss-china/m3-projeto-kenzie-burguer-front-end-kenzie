import { createContext, useContext, useEffect, useState } from 'react';
import { Api } from '../services/api';
import { UserContext } from './UsersContexts';

interface iChildrenProps {
  children: React.ReactNode;
}
export interface iProducts {
  category: string;
  id: number;
  img: string;
  name: string;
  price: number;
}
interface IValuePropsProducts {
  functionGetProducts: () => void;
  Products: iProducts[];
  openModal: boolean;
  setOpenModal: React.Dispatch<React.SetStateAction<boolean>>;
  SetProducts: React.Dispatch<React.SetStateAction<iProducts[]>>;
  productSelect: iProducts[];
  setProductSelect: React.Dispatch<React.SetStateAction<iProducts[]>>;
  filteredProducts: string;
  setFilteredProducts: React.Dispatch<React.SetStateAction<string>>;
  setSearch: React.Dispatch<React.SetStateAction<string>>;
  removeItems: (myItemId: number) => void;
  search: string;
  FilterListProducts: iProducts[];
}
interface iLoginUser {
  id: string;
  name: string;
  email: string;
}

export const ProductsContext = createContext({} as IValuePropsProducts);
export const ProductsProvider = ({ children }: iChildrenProps) => {
  const { useLogin } = useContext(UserContext);
  const CartLocalStorage = localStorage.getItem('@itemscartHamb2');
  const [filteredProducts, setFilteredProducts] = useState('');
  const [search, setSearch] = useState('');
  const [productSelect, setProductSelect] = useState(
    CartLocalStorage ? JSON.parse(CartLocalStorage) : ([] as iProducts[])
  );
  const [openModal, setOpenModal] = useState(false);
  const [Products, SetProducts] = useState([] as iProducts[]);

  let token = localStorage.getItem('@TokenUserHam');
  const functionGetProducts = async () => {
    try {
      const response = await Api.get('/products', {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });
      const FilterApi = response.data.filter((eachItem: any) => eachItem.name);
      SetProducts(FilterApi);
    } catch (error) {
      console.log(error);
    }
  };
  useEffect(() => {
    functionGetProducts();
  }, [useLogin]);

  function removeItems(myItemId: number) {
    const filterList = productSelect.filter(
      (item: iProducts) => item.id !== myItemId
    );
    setProductSelect(filterList);
  }
  

  const FilterListProducts = Products.filter((product) => {
    console.log(product);
    return search === ''
      ? true
      : product.name.toLowerCase().includes(search.toLowerCase()) ||
          product.category.toLowerCase().includes(search.toLowerCase());
  });

  return (
    <ProductsContext.Provider
      value={{
        functionGetProducts,
        Products,
        openModal,
        setOpenModal,
        SetProducts,
        productSelect,
        setProductSelect,
        filteredProducts,
        setFilteredProducts,
        setSearch,
        removeItems,
        search,
        FilterListProducts,
      }}
    >
      {children}
    </ProductsContext.Provider>
  );
};

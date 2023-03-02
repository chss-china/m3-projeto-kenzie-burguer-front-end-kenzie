import { MdSearch } from 'react-icons/md';
import { StyledSearchForm } from './style';
import { StyledButton } from '../../../styles/button';
import { useContext } from 'react';
import { ProductsContext } from '../../../providers/ProductsContexts';

const SearchForm = () => {
  const { filteredProducts, setFilteredProducts, setSearch, search, Products } =
    useContext(ProductsContext);
  const submit = (event: any) => {
    event.preventDefault();
    setSearch(filteredProducts);
    setFilteredProducts('');
  };

  return (
    <StyledSearchForm onSubmit={submit}>
      <input
        type='text'
        placeholder='Digitar pesquisa'
        value={filteredProducts}
        onChange={(event) => setFilteredProducts(event.target.value)}
      />
      <StyledButton type='submit' $buttonSize='medium' $buttonStyle='green'>
        <MdSearch />
      </StyledButton>
    </StyledSearchForm>
  );
};

export default SearchForm;

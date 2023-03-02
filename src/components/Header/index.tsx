import { MdShoppingCart, MdLogout } from 'react-icons/md';

import SearchForm from './SearchForm';
import { StyledHeader } from './style';
import LogoKenzieBurguer from '../../assets/LogoKenzieBurguer.svg';

import { StyledContainer } from '../../styles/grid';
import { Link } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';
import { useContext, useState } from 'react';
import { ProductsContext } from '../../providers/ProductsContexts';
interface Iisopen {
  myIsopen: boolean;
}

const Header = ({ myIsopen }: Iisopen) => {
  const navigate = useNavigate();
  const { openModal, setOpenModal } = useContext(ProductsContext);

  function navigateLogin() {
    localStorage.getItem('@TokenUserHam');
    localStorage.removeItem('@TokenUserHam');
    navigate('/');
  }

  return (
    <StyledHeader>
      <StyledContainer containerWidth={1300}>
        <div className='flexGrid'>
          <img
            src={LogoKenzieBurguer}
            alt='Kenzie Burguer Logo'
            className='logo'
          />
          <nav className='nav' role='navigation'>
            <SearchForm />
            <div className='buttons'>
              <button
                type='button'
                onClick={() => {
                  setOpenModal(true);
                }}
              >
                <MdShoppingCart size={28} />
              </button>
              <button type='button' onClick={navigateLogin}>
                <MdLogout size={28} />
              </button>
            </div>
          </nav>
        </div>
      </StyledContainer>
    </StyledHeader>
  );
};

export default Header;

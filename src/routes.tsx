import { Routes, Route } from 'react-router-dom';
import { AuthLogin } from './components/authLogin';
import { AuthToken } from './components/authLogin/authToken';
import LoginPage from './pages/LoginPage';
import RegisterPage from './pages/RegisterPage';
import ShopPage from './pages/ShopPage';

const Router = () => {
  return (
    <Routes>
      <Route element={<AuthLogin />}>
        <Route path='/' element={<LoginPage />} />
        <Route path='/register' element={<RegisterPage />} />
        <Route path='*' element={<LoginPage />} />
      </Route>
      <Route element={<AuthToken />}>
        <Route path='/shop' element={<ShopPage />} />
      </Route>
    </Routes>
  );
};

export default Router;

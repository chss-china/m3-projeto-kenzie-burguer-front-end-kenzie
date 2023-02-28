import { createContext, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Api } from '../../services/api';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
interface IValueProps {
  FunctionRegister: (data: IregisterForm) => void;
  FunctionLogin: (data: ILoginForm) => void;
  useLogin: iLoginUser;
}
export const UserContext = createContext({} as IValueProps);
interface iRegisterChildrenProps {
  children: React.ReactNode;
}

interface IregisterForm {
  name: string;
  email: string;
  password: string;
}

interface ILoginForm {
  email: string;
  password: string;
}
interface iLoginUser {
  id: string;
  name: string;
  email: string;
}

export const UserProvider = ({ children }: iRegisterChildrenProps) => {
  const navigate = useNavigate();
  const [useLogin, setUserLogin] = useState({} as iLoginUser);
  const FunctionRegister = async (data: IregisterForm) => {
    try {
      const Response = await Api.post('/users', data);
      toast.success('Usuario criado com sucesso');
      setTimeout(() => {
        navigate('/');
      }, 3000);
    } catch (error: any) {
      toast.error('Email já existe');
    }
  };
  const FunctionLogin = async (data: ILoginForm) => {
    try {
      const Response = await Api.post('/login', data);
      setTimeout(() => {
        navigate('/shop');
      }, 3000);
      let token = localStorage.setItem(
        '@TokenUserHam',
        Response.data.accessToken
      );
      setUserLogin(Response.data.user);
    } catch (error: any) {
      toast.error('Usuario não encontrado');
    }
  };

  return (
    <>
      <UserContext.Provider
        value={{ FunctionRegister, FunctionLogin, useLogin }}
      >
        {children}
      </UserContext.Provider>
    </>
  );
};

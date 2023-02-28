import { StyledButton } from '../../../styles/button';
import { StyledForm } from '../../../styles/form';
import Input from '../Input';
import { SubmitHandler, useForm, UseFormRegister } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from 'yup';
import { useContext } from 'react';
import { UserContext } from '../../contexts/UsersContexts';

const formSchemaLogin = yup.object().shape({
  email: yup.string().required('Email obrigatorio').email('Email invalido'),
  password: yup
    .string()
    .required('Senha obrigatoria')
    .matches(
      /(?=^.{6,255}$)((?=.*\d)(?=.*[A-Z])(?=.*[a-z])|(?=.*\d)(?=.*[^A-Za-z0-9])(?=.*[a-z])|(?=.*[^A-Za-z0-9])(?=.*[A-Z])(?=.*[a-z])|(?=.*\d)(?=.*[A-Z])(?=.*[^A-Za-z0-9]))^.*/,
      'Senha invalida'
    ),
});
interface ILoginForm {
  email: string;
  password: string;
}

const LoginForm = () => {
  const { FunctionLogin } = useContext(UserContext);
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<ILoginForm>({
    resolver: yupResolver(formSchemaLogin),
  });

  return (
    <StyledForm onSubmit={handleSubmit(FunctionLogin)}>
      <Input
        label='Email'
        errors={errors.email?.message}
        register={register('email')}
      />
      <Input
        label='Senha'
        errors={errors.password?.message}
        register={register('password')}
      />
      <StyledButton $buttonSize='default' $buttonStyle='green' type='submit'>
        Entrar
      </StyledButton>
    </StyledForm>
  );
};

export default LoginForm;

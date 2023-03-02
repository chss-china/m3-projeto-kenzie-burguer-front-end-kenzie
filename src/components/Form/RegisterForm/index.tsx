/* eslint-disable import/order */
import Input from '../Input';
import { StyledButton } from '../../../styles/button';
import { StyledForm } from '../../../styles/form';
// eslint-disable-next-line import/order, @typescript-eslint/no-unused-vars
import { SubmitHandler, useForm, UseFormRegister } from 'react-hook-form';
// eslint-disable-next-line import/order
import { yupResolver } from '@hookform/resolvers/yup';
// eslint-disable-next-line import/newline-after-import
import * as yup from 'yup';
import { useContext } from 'react';
import { UserContext } from '../../../providers/UsersContexts';
const FormSchemaRegister = yup.object().shape({
  name: yup.string().required('Nome Obrigatório'),
  email: yup.string().required('Email obrigatorio').email('Email invalido'),
  password: yup
    .string()
    .required('Senha obrigatoria')
    .matches(
      /(?=^.{6,255}$)((?=.*\d)(?=.*[A-Z])(?=.*[a-z])|(?=.*\d)(?=.*[^A-Za-z0-9])(?=.*[a-z])|(?=.*[^A-Za-z0-9])(?=.*[A-Z])(?=.*[a-z])|(?=.*\d)(?=.*[A-Z])(?=.*[^A-Za-z0-9]))^.*/,
      'Senha no minimo 6 caracteres, e com uma letra maiuscula'
    ),
});
interface IregisterLoginForm {
  name: string;
  email: string;
  password: string;
}

const RegisterForm = () => {
  const { FunctionRegister } = useContext(UserContext);
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<IregisterLoginForm>({
    resolver: yupResolver(FormSchemaRegister),
  });

  return (
    <StyledForm onSubmit={handleSubmit(FunctionRegister)}>
      <Input
        label='Nome'
        errors={errors.name?.message}
        register={register('name')}
        type='text'
      />
      <Input
        label='Email'
        errors={errors.email?.message}
        register={register('email')}
        type='email'
      />
      <Input
        label='Senha'
        errors={errors.password?.message}
        register={register('password')}
        type='password'
      />
      <StyledButton $buttonSize='default' $buttonStyle='gray' type='submit'>
        Cadastrar
      </StyledButton>
    </StyledForm>
  );
};

export default RegisterForm;

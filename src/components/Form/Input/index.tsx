/* eslint-disable import/order */
/* eslint-disable import/no-extraneous-dependencies */
/* eslint-disable @typescript-eslint/no-unused-vars */
import { StyledTextField } from '../../../styles/form';
import { StyledParagraph } from '../../../styles/typography';
import { SubmitHandler, useForm, UseFormRegisterReturn } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from 'yup';

interface IregisterLoginForm {
  name: string;
  email: string;
  password: string;
}
interface IpropsInput {
  register: UseFormRegisterReturn<string>;
  errors?: any;
  label: string;
  type: string;
}
const Input = ({ register, errors, label, type }: IpropsInput) => {
  return (
    <fieldset>
      <StyledTextField label={label} type={type} {...register} />
      <StyledParagraph fontColor='red'>{errors}</StyledParagraph>
    </fieldset>
  );
};

export default Input;

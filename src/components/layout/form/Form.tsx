import React, { FC } from 'react';
import { FormStyled } from './FormStyled';

const Form: FC = (props) => {
  const { children } = props;
  return <FormStyled component="form">{children}</FormStyled>;
};

export default Form;

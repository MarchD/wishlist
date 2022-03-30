import React, { FC } from 'react';
import { FormProps } from 'src/models/forms';
import { FormStyled } from './FormStyled';

const Form: FC<FormProps> = (props) => {
  const { children, onSubmit } = props;
  return (
    <FormStyled component="form" onSubmit={onSubmit}>
      {children}
    </FormStyled>
  );
};

export default Form;

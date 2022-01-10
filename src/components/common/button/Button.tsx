import React, { FC } from 'react';
import { ButtonProps, Button as ButtonMaterial } from '@mui/material';

import classNames from 'classnames';
import styles from './Button.module.scss';

const Button: FC<ButtonProps> = (props) => {
  const { children, variant = 'text', ...otherProps } = props;
  return (
    <ButtonMaterial
      {...otherProps}
      variant={variant}
      className={classNames(styles.button, styles[variant])}
    >
      {children}
    </ButtonMaterial>
  );
};

export default Button;

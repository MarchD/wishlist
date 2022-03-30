import React, { FC } from 'react';
import { Link } from 'react-router-dom';
import { LogoProps } from '@Models/logo';
import { Routes } from '@Models/routes';
import { logo } from '@Assets';
import { LogoStyled } from './LogoStyled';

const Logo: FC<LogoProps> = (props) => {
  const { size, link = false } = props;

  return (
    <LogoStyled>
      {link ? (
        <Link to={Routes.MAIN_PAGE}>
          <img src={logo} alt="Wishlist" width={size} />
        </Link>
      ) : (
        <img src={logo} alt="Wishlist" width={size} />
      )}
    </LogoStyled>
  );
};

export default Logo;

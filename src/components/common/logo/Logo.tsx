import React, { FC } from 'react';
import { Link } from 'react-router-dom';
import { LogoProps } from 'src/models/logo';
import { Routes } from 'src/models/routes';
import { logo } from 'src/assets';
import styles from './Logo.module.scss';

const Logo: FC<LogoProps> = ({ size, link = false }) => {
  return (
    <div className={styles.logo}>
      {link ? (
        <Link to={Routes.MAIN_PAGE}>
          <img src={logo} alt="Wishlist" width={size} />
        </Link>
      ) : (
        <img src={logo} alt="Wishlist" width={size} />
      )}
    </div>
  );
};

export default Logo;

import React, { FC } from 'react'
import {Link} from 'react-router-dom'
import { Routes } from '../../../models/routes'
import { LogoProps } from 'src/models/logo'
import { logo } from '../../../assets'
import { LogoStyled } from './LogoStyled';

const Logo: FC<LogoProps> = ({size, link = false}) => {
    return (
        <LogoStyled>
            {link ? (
                <Link to={Routes.MAIN_PAGE}>
                    <img src={logo} alt="Wishlist" width={size}/>
                </Link>
            ) : <img src={logo} alt="Wishlist" width={size}/>}
        </LogoStyled>
    )
}

export default Logo

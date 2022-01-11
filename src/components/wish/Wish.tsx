import React, { FC } from 'react';
import { CardMedia, Typography } from '@mui/material';
import { useTranslation } from 'react-i18next';
import { Wish as WishProps } from '../../models/wish';
import { CardStyled, ContentStyled, TitleStyled } from './WishStyled';

const Wish: FC<WishProps> = (props) => {
  const { price, title, image } = props;
  const { t } = useTranslation('common');

  return (
    // @ts-ignore
    <CardStyled component="button">
      <CardMedia component="img" src={image} />
      <ContentStyled>
        <TitleStyled variant="body2">{title}</TitleStyled>
        <Typography variant="body2" sx={{ whiteSpace: 'nowrap' }}>
          {price} {t('uah')}
        </Typography>
      </ContentStyled>
    </CardStyled>
  );
};

export default Wish;

import React, { FC } from 'react';
import { CardMedia, Typography } from '@mui/material';
import { useTranslation } from 'react-i18next';
import { WishProps } from '@Models/wish';
import { CardStyled, ContentStyled, TitleStyled } from './WishStyled';

const Wish: FC<WishProps> = (props) => {
  const { price, title, image, onClick, id } = props;
  const { t } = useTranslation('common');

  const handleClickBtn = () => {
    onClick && onClick(id);
  };

  return (
    <CardStyled component="button" onClick={handleClickBtn}>
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

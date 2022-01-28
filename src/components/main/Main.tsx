import React, { useCallback } from 'react';
import { useTranslation } from 'react-i18next';
import { Typography } from '@mui/material';
import { useNavigate } from 'react-router-dom';
import Container from '../layout/container/Container';
import Logo from '../common/logo/Logo';
import { LogoSizes } from '../../models/logo';
import Button from '../common/button/Button';
import AnimationFrame from '../common/animation/AnimationFrame';
import { animations } from '../../mocked-data/animations';
import { CardStyled, ContentStyled, SliderStyled } from './MainStyled';

function Main() {
  const { t } = useTranslation('common');
  const history = useNavigate();

  const toLoginPage = useCallback(() => {
    history('/login');
  }, [history]);

  return (
    <Container size="md">
      <CardStyled>
        <ContentStyled>
          <Typography fontSize={40} fontWeight={600} component="h1">
            {t('mainTitle')}
            <br />
            <Logo size={LogoSizes.LARGE} />
          </Typography>

          <Button variant="contained" onClick={toLoginPage}>
            {t('create')}
          </Button>
        </ContentStyled>

        <SliderStyled interval={2000} indicators={false} navButtonsAlwaysInvisible>
          {animations.map(({ data, id }) => (
            <AnimationFrame data={data} key={id} height="50vh" />
          ))}
        </SliderStyled>
      </CardStyled>
    </Container>
  );
}

export default Main;

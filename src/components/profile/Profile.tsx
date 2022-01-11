import React from 'react';
import { useTranslation } from 'react-i18next';
import CardWrapper from '../layout/card-wrapper/CardWrapper';
import Input from '../input/Input';
import Container from '../layout/container/Container';
import Avatar from '../common/avatar/Avatar';
import { ButtonStyled, FormStyled, InputsStyled } from './ProfileStyled';

function Profile() {
  const { t } = useTranslation('common');

  return (
    <Container size="md">
      <CardWrapper title={t('profile')}>
        <Avatar />
        <FormStyled component="form">
          <InputsStyled>
            <Input label="Email" />
            <Input label="Password" type="password" />
          </InputsStyled>

          <Input label="Email" />
          <Input label="Password" type="password" />
          <ButtonStyled variant="contained">{t('save')}</ButtonStyled>
        </FormStyled>
      </CardWrapper>
    </Container>
  );
}

export default Profile;

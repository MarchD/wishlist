import React from 'react';
import { useTranslation } from 'react-i18next';
import CardWrapper from '@Components/layout/card-wrapper/CardWrapper';
import Input from '@Components/common/input/Input';
import Container from '@Components/layout/container/Container';
import Avatar from '@Components/common/avatar/Avatar';
import { ButtonStyled, FormStyled, InputsStyled } from './ProfileStyled';

function Profile() {
  const { t } = useTranslation('common');

  return (
    <Container size="md">
      <CardWrapper title={t('profile')}>
        <Avatar />
        <FormStyled component="form">
          <InputsStyled>
            <Input label={t('name')} />
            <Input label={t('lastname')} />
          </InputsStyled>

          <Input label="Email" type="email" />
          <Input label="Password" type="password" />
          <ButtonStyled variant="contained">{t('save')}</ButtonStyled>
        </FormStyled>
      </CardWrapper>
    </Container>
  );
}

export default Profile;

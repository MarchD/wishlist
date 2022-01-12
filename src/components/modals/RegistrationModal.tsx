import React from 'react';
import { CardActions } from '@mui/material';
import { useTranslation } from 'react-i18next';
import Input from '../common/input/Input';
import Button from '../common/button/Button';
import Form from '../layout/form/Form';

const RegistrationModal = () => {
  const { t } = useTranslation('common');

  return (
    <Form>
      <Input label="Email" />
      <Input label={t('password')} />
      <Input label={t('repeatPassword')} type="password" />
      <CardActions sx={{ justifyContent: 'center' }}>
        <Button variant="contained">{t('signUp')}</Button>
      </CardActions>
    </Form>
  );
};

export default RegistrationModal;

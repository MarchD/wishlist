import React from 'react';
import { CardActions } from '@mui/material';
import { useTranslation } from 'react-i18next';
import { Controller } from 'react-hook-form';
import { useFormWithSchema } from '@Hooks/useYupValidationResolver';
import { registrationSchema } from '@src/shemas';
import Input from '../common/input/Input';
import Button from '../common/button/Button';
import Form from '../layout/form/Form';

const RegistrationModal = () => {
  const { t } = useTranslation('common');
  const { handleSubmit, control } = useFormWithSchema(registrationSchema);

  return (
    <Form onSubmit={handleSubmit((data) => console.log(data, 'data'))}>
      <Controller
        name="email"
        control={control}
        render={({ field: { onChange, value }, fieldState: { error } }) => {
          return (
            <Input
              label="Email"
              onChange={onChange}
              value={value}
              helperText={error?.message}
              type="email"
            />
          );
        }}
        rules={{ required: true }}
      />

      <Controller
        name="password"
        control={control}
        render={({ field: { onChange, value }, fieldState: { error } }) => {
          return (
            <Input
              label={t('password')}
              onChange={onChange}
              value={value}
              helperText={error?.message}
              type="password"
            />
          );
        }}
        rules={{ required: true }}
      />

      <Controller
        name="passwordConfirmation"
        control={control}
        render={({ field: { onChange, value }, fieldState: { error } }) => {
          return (
            <Input
              label={t('repeatPassword')}
              onChange={onChange}
              value={value}
              helperText={error?.message}
              type="password"
            />
          );
        }}
        rules={{ required: true }}
      />
      {/* <Input label="Email" /> */}
      {/* <Input label={t('password')} /> */}
      {/* <Input label={t('repeatPassword')} type="password" /> */}
      <CardActions sx={{ justifyContent: 'center' }}>
        <Button variant="contained" type="submit">
          {t('signUp')}
        </Button>
      </CardActions>
    </Form>
  );
};

export default RegistrationModal;

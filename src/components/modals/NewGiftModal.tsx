import React from 'react';
import { CardActions } from '@mui/material';
import { useTranslation } from 'react-i18next';
import { Controller } from 'react-hook-form';
import Input from '../common/input/Input';
import Button from '../common/button/Button';
import Form from '../layout/form/Form';
import { useFormWithSchema } from '../../hooks/useYupValidationResolver';
import { newGiftSchema } from '../../shemas';
import File from '../common/file/File';

const NewGiftModal = () => {
  const { t } = useTranslation('common');
  const { handleSubmit, control } = useFormWithSchema(newGiftSchema);

  return (
    <Form onSubmit={handleSubmit((data) => console.log(data, 'file'))}>
      <Controller
        name="image"
        control={control}
        render={({ field: { onChange, value }, fieldState: { error } }) => {
          return <File onChange={onChange} value={value} helperText={error?.message} />;
        }}
        rules={{ required: true }}
      />

      <Controller
        name="title"
        control={control}
        render={({ field: { onChange, value }, fieldState: { error } }) => {
          return (
            <Input
              label={t('title')}
              onChange={onChange}
              value={value}
              helperText={error?.message}
              type="text"
            />
          );
        }}
        rules={{ required: true }}
      />

      <Controller
        name="link"
        control={control}
        render={({ field: { onChange, value }, fieldState: { error } }) => {
          return (
            <Input
              label={t('link')}
              onChange={onChange}
              value={value}
              helperText={error?.message}
              type="text"
            />
          );
        }}
        rules={{ required: true }}
      />

      <Controller
        name="price"
        control={control}
        render={({ field: { onChange, value }, fieldState: { error } }) => {
          return (
            <Input
              label={t('price')}
              onChange={onChange}
              value={value}
              helperText={error?.message}
              type="number"
            />
          );
        }}
        rules={{ required: true }}
      />

      <CardActions sx={{ justifyContent: 'center' }}>
        <Button variant="contained" type="submit">
          {t('add')}
        </Button>
      </CardActions>
    </Form>
  );
};

export default NewGiftModal;

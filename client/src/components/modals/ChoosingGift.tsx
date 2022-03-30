import React from 'react';
import { CardActions, Typography } from '@mui/material';
import { useTranslation } from 'react-i18next';
import { Controller } from 'react-hook-form';
import { useSelector } from 'react-redux';
import { useFormWithSchema } from '@Hooks/useYupValidationResolver';
import { getChosenGift } from '@Rtk/features/choose-gift';
import { wishes } from '@src/mocked-data/wishes';
import { choosingGiftSchema } from '@src/shemas';
import Input from '../common/input/Input';
import Button from '../common/button/Button';
import Form from '../layout/form/Form';

const ChoosingGift = () => {
  const { t } = useTranslation('common');
  const { handleSubmit, control } = useFormWithSchema(choosingGiftSchema);
  const id = useSelector(getChosenGift);
  const currentWish = wishes
    .find((wishList) => wishList.list.some((wish) => wish.id === id))
    ?.list.find((wish) => wish.id === id);

  if (!currentWish) {
    return null;
  }

  return (
    <Form onSubmit={handleSubmit((data) => console.log(data, 'file'))}>
      <Typography variant="body2">{currentWish.title}</Typography>
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
              type="text"
            />
          );
        }}
        rules={{ required: true }}
      />

      <CardActions sx={{ justifyContent: 'center' }}>
        <Button variant="contained" type="submit">
          {t('choose')}
        </Button>
      </CardActions>
    </Form>
  );
};

export default ChoosingGift;

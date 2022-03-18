import React from 'react';
import { useTranslation } from 'react-i18next';
import Container from '../../components/layout/container/Container';

function NotFound() {
  const { t } = useTranslation('common');

  return <Container size="lg">{t('pageNotFound')}</Container>;
}

export default NotFound;

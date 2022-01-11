import React from 'react';
import { useTranslation } from 'react-i18next';
import Container from '../layout/container/Container';

function PageNotFound() {
  const { t } = useTranslation('common');

  return <Container size="lg">{t('pageNotFound')}</Container>;
}

export default PageNotFound;

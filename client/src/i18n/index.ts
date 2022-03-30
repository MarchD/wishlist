import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import commonRu from './locales/ru/common';
import { DEFAULT_LOCALE } from '../models/locales';

export const resources = {
  ru: {
    common: commonRu,
  },
} as const;

i18n.use(initReactI18next).init({
  lng: 'ru',
  fallbackLng: DEFAULT_LOCALE,
  resources,
  returnObjects: true,
});

export default i18n;

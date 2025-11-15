import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import { I18nManager } from 'react-native';

import en from './locales/en.json';
import he from './locales/he.json';
import ru from './locales/ru.json';

const resources = {
  en: { translation: en },
  he: { translation: he },
  ru: { translation: ru },
};

i18n
  .use(initReactI18next)
  .init({
    compatibilityJSON: 'v3',
    resources,
    lng: 'en',
    fallbackLng: 'en',
    interpolation: {
      escapeValue: false,
    },
  });

export const changeLanguage = async (lang: string) => {
  await i18n.changeLanguage(lang);
  
  const isRTL = lang === 'he';
  if (I18nManager.isRTL !== isRTL) {
    I18nManager.forceRTL(isRTL);
  }
};

export default i18n;


// src/i18n.js

import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import enTranslations from './Locals/En.json';
import frTranslations from './Locals/Fr.json';

// Configuration de i18next
i18n
  .use(initReactI18next) // passe i18n down dans l'arbre React
  .init({
    resources: {
      en: {
        translation: enTranslations
      },
      fr: {
        translation: frTranslations
      }
    },
    lng: 'en', // langue par défaut
    fallbackLng: 'en', // langue par défaut en cas d'absence de traduction

    interpolation: {
      escapeValue: false // react déjà fait l'échappement
    }
  });

export default i18n;

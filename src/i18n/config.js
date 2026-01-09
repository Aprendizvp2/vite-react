import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import LanguageDetector from 'i18next-browser-languagedetector';

// Importar traducciones
import es from '../locales/es.json';
import en from '../locales/en.json';
import pt from '../locales/pt.json';

i18n
  .use(LanguageDetector)
  .use(initReactI18next)
  .init({
    resources: {
      es: {
        translation: es
      },
      en: {
        translation: en
      },
      pt: {
        translation: pt
      }
    },
    fallbackLng: 'es', // Cambié esto a 'es' ya que es tu idioma principal
    // Quita el lng: 'es' para que no fuerce siempre español
    interpolation: {
      escapeValue: false
    },
    detection: {
      order: ['localStorage', 'navigator', 'htmlTag'],
      caches: ['localStorage'],
      
      // Opciones clave para que funcione mejor:
      lookupLocalStorage: 'i18nextLng',
      lookupFromPathIndex: 0,
      lookupFromSubdomainIndex: 0,
      
      // Opcional: cachear por 7 días
      cookieMinutes: 10080,
      
      // Solo detectar estos idiomas
      checkWhitelist: true
    },
    // Esto ayuda con el loading
    initImmediate: false
  });

export default i18n;
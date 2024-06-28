// i18n.ts
import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import 'intl-pluralrules';
import { resources } from './resources';

i18n
    .use(initReactI18next)
    .init({
        resources,
        lng: 'en',
        fallbackLng: 'en',

        interpolation: {
            escapeValue: false,
        },
        compatibilityJSON: 'v3',
    });


export default i18n;

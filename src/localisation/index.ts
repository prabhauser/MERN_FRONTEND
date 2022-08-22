import i18n from 'i18next';
import LanguageDetector from 'i18next-browser-languagedetector';
import { initReactI18next } from 'react-i18next';

i18n.use(LanguageDetector)
    .use(initReactI18next)
    .init({
        resources: {
            en: {
                translations: {
                    Introduction: 'Introduction'
                }
            },
            tamil: {
                translations: {
                    Introduction: 'முன்னுரை'
                }
            },
            filipino: {
                translations: {
                    Introduction: 'panimulâ'
                }
            }
        },
        fallbackLng: 'en',
        // have a common namespace used around the full app
        ns: ['translations'],
        defaultNS: 'translations',
        keySeparator: false, // we use content as keys
        interpolation: {
            escapeValue: false, // not needed for react!!
            formatSeparator: ','
        }

        // react: {
        //     wait: false
        // }
    });

export default i18n;

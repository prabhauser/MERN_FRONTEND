# Localisation setup

## Installation of required npm packages

Install both react-i18next and i18next ,i18next-browser-languagedetector packages:

```
npm install react-i18next i18next i18next-browser-languagedetector --save
```

## Configure i18next

I18next is the core of the i18n functionality while react-i18next extends and glues it to react.
Create a new file i18n.js beside your index.js containing following content:

```js
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
        },

        react: {
            wait: false
        }
    });

export default i18n;
```

## i18n provider configuration

wrap the app in I18next Provider with the configuration loaded from i18n.js

```js
import React from 'react';
import ReactDOM from 'react-dom';
import { I18nextProvider } from 'react-i18next';
import './index.css';
import App from './app';
import i18n from './localisation';
import reportWebVitals from './reportWebVitals';

ReactDOM.render(
    <React.StrictMode>
        <I18nextProvider i18n={i18n}>
            <App />
        </I18nextProvider>
    </React.StrictMode>,
    document.getElementById('root')
);
```

## Implementation in functional components

Now we can start using the i18next language translations in our functional components by using "withTranslation" component from "react-i18next" package.

example:

```js
import React, { useState } from 'react';
import { withTranslation, Trans } from 'react-i18next';
interface localeTestProps {
    t: any;
    i18n: any;
}
const LocaleTest = (props: localeTestProps) => {
    const [language, setLanguage] = useState('English');
    const { t, i18n } = props;
    const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setLanguage(event?.target.value);
        i18n.changeLanguage(event?.target.value);
    };

    return (
        <div>
            <h1>Please select your Language</h1>
            <input type="radio" name="language" value="tamil" onChange={handleChange} /> <label>Tamil</label>
            <br />
              <input type="radio" name="language" value="en" checked onChange={handleChange} /> <label>English</label>
            <br />
              <input type="radio" name="language" value="filipino" onChange={handleChange} /> <label>Filipino</label>
            <div>
                <h1>
                    <Trans>{t('Introduction')}</Trans>
                </h1>
            </div>
        </div>
    );
};
export default withTranslation()(LocaleTest);
```

[Ref Docs](https://codesandbox.io/s/j3yk7jkzk5?file=/src/app.js:6764-6773)

import 'react-app-polyfill/ie11';
import 'react-app-polyfill/stable';
import { render } from 'react-dom';
import configureAppStore from './app/store/index';
import { Provider } from 'react-redux';
import { I18nextProvider } from 'react-i18next';
import { PersistGate } from 'redux-persist/integration/react';
import { persistStore } from 'redux-persist';
import App from './app';
import i18n from './localisation';
import './index.scss';

const initialState = {};
const store = configureAppStore(initialState);
const persistor = persistStore(store);

render(
    <Provider store={store}>
        <PersistGate loading={null} persistor={persistor}>
            <I18nextProvider i18n={i18n}>
                <App />
            </I18nextProvider>
        </PersistGate>
    </Provider>,
    document.getElementById('root')
);
if (module.hot) {
    module.hot.accept();
}

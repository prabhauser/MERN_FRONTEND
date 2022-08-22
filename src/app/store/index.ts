import { configureStore } from '@reduxjs/toolkit';
import createSagaMiddleware from 'redux-saga';
import { persistReducer } from 'redux-persist';
//import storage from 'redux-persist/lib/storage';
import createReducer from './reducers';
import rootSaga from './rootSaga';
import createTransform from 'redux-persist/es/createTransform';
import localforage from 'localforage';

const whitelistTransform = createTransform(null, (inboundState: any, key) => {
    if (key === 'awsSlice') {
        const newState = {
            masterlocations: inboundState?.masterlocations,
            masterCategories: inboundState?.masterCategories,
            periods: inboundState?.periods,
            keyIds: inboundState?.keyIds
        };
        return newState;
    }
    return null;
});

const persistConfig = {
    key: 'root',
    version: 1,
    storage: localforage,
    transforms: [whitelistTransform]
};

const persistedReducer = persistReducer(persistConfig, createReducer());

export default function configureAppStore(initialState = {}) {
    const sagaMiddleware = createSagaMiddleware({});
    const middlewares = [sagaMiddleware];
    const store = configureStore({
        reducer: persistedReducer,
        preloadedState: initialState,
        middleware: (getDefaultMiddleware) => [
            ...getDefaultMiddleware({
                thunk: false,
                serializableCheck: false
            }),
            ...middlewares
        ]
    });
    sagaMiddleware.run(rootSaga);

    if (module.hot) {
        module.hot.accept('./reducers', () => store.replaceReducer(persistedReducer));
    }
    return store;
}

import { setToLocalStorage, getFromLocalStorage } from '../storage/storageUtility';

export const setJWTToken = (token: string): void => {
    setToLocalStorage('token', token);
};

export const getJWTToken = (): string => {
    return getFromLocalStorage('token');
};

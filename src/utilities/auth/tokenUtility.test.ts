import { setJWTToken, getJWTToken } from './tokenUtility';
import { getFromLocalStorage } from '../storage/storageUtility';

describe('utilities  function', () => {
    describe('utilities  function test', () => {
        it('should set an item in local storage', () => {
            expect(setJWTToken('test')).toBeUndefined();
            expect(getFromLocalStorage('token')).toBe('test');
        });
        it('should return null for non existing items', () => {
            expect(getFromLocalStorage('test')).toBeNull(); // null
        });
        it('should return null for non existing items', () => {
            const value = getJWTToken();
            expect(getFromLocalStorage('token')).toBe(value); // null
        });
    });
});

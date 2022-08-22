import { setToLocalStorage, getFromLocalStorage, removeLocalStorage } from './storageUtility';

describe('utilities  function', () => {
    describe('utilities  function test', () => {
        it('should set an item in local storage', () => {
            expect(setToLocalStorage('token', 'test')).toBeUndefined();
            expect(getFromLocalStorage('token')).toBe('test');
        });
        it('should return null for non existing items', () => {
            expect(getFromLocalStorage('test')).toBeNull(); // null
        });
        it('should set and remove Item', () => {
            expect(setToLocalStorage('item', 'value')).toBeUndefined();
            expect(removeLocalStorage('item')).toBeUndefined(); // undefined
            expect(getFromLocalStorage('item')).toBeNull(); // null
        });
    });
});

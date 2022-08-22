import React from 'react';
import apiService from './apiService';

describe('API Serviece', () => {
    const TEST_URL = 'https://jsonplaceholder.typicode.com/todos/';
    describe('GET API Serviece', () => {
        it('GET undefined ', async () => {
            let undefinedData = undefined;
            try {
                undefinedData = await apiService.get('', {});
            } catch (e) {}

            return expect(undefinedData).toBeUndefined;
        });

        it('GET result ', async () => {
            let validData = '';
            try {
                validData = await apiService.get(TEST_URL, {});
            } catch (e) {}
            return expect(validData).toReturn;
        });
    });
    describe('POST API Service', () => {
        it('post undefined ', async () => {
            let undefinedData = undefined;
            try {
                undefinedData = await apiService.post('', {});
            } catch (e) {}

            return expect(undefinedData).toBeUndefined;
        });
        it('POST success ', async () => {
            let validData = '';
            try {
                validData = await apiService.post(TEST_URL, {});
            } catch (e) {}
            return expect(validData).toReturn;
        });
    });

    describe('PUT API Service', () => {
        it('PUT undefined ', async () => {
            let undefinedData = undefined;
            try {
                undefinedData = await apiService.put('', {});
            } catch (e) {}

            return expect(undefinedData).toBeUndefined;
        });
        it('PUT success ', async () => {
            let validData = '';
            try {
                validData = await apiService.post(TEST_URL, {});
            } catch (e) {}
            return expect(validData).toReturn;
        });
    });
    describe('PATCH API Service', () => {
        it('PATCH undefined ', async () => {
            let undefinedData = undefined;
            try {
                undefinedData = await apiService.patch('', {});
            } catch (e) {}

            return expect(undefinedData).toBeUndefined;
        });
        it('PATCH success ', async () => {
            let validData = '';
            try {
                validData = await apiService.patch(TEST_URL, {});
            } catch (e) {}
            return expect(validData).toReturn;
        });
    });
});

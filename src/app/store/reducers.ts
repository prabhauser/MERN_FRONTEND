import { combineReducers } from '@reduxjs/toolkit';
import { reducer as awsSlice } from './aws/awsSlice';

export default function createReducer() {
    return combineReducers({
        awsSlice: awsSlice
    });
}

import { createSelector } from '@reduxjs/toolkit';

export const selectAws = (state: { awsSlice: any }) => state.awsSlice || {};
export const awsSelector = () => createSelector(selectAws, (awsState) => awsState);

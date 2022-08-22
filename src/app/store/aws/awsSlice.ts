import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { STORE_KEYS } from '../../constants/awsActions';

const getModifiedResponse = (currentAction: any) => {
    let finalState = {};
    const { error, other, token, storeKey, ...newAction } = currentAction;
    if (
        currentAction?.storeKey === STORE_KEYS.MASTER_LOCATIONSDATA ||
        currentAction?.storeKey === STORE_KEYS.MASTER_CATEGORIESDATA
    ) {
        const data = resolveMasterLocations(newAction);
        finalState = {
            [currentAction?.storeKey]: data
        };
    } else {
        finalState = {
            [currentAction?.storeKey]: newAction
        };
    }

    return finalState;
};

const updateIdentifiers = (state: any, payload: any) => {
    const storeKey = payload?.storeKey;
    let newData = state?.[storeKey];
    newData = { ...newData, ...payload?.uniqueScreenIdentifier };
    return {
        [storeKey]: newData
    };
};

const resolveMasterLocations = (action: any) => {
    const data = action.data.reduce((acc: any, obj: any) => {
        const key = obj['category'];
        if (!acc[key]) {
            acc[key] = [];
        }
        acc[key].push(obj);
        return acc;
    }, {});
    return data;
};

const awsSlice = createSlice({
    name: 'awsSlice',
    initialState: {},
    reducers: {
        loadStart: (state) => {
            return { ...state, isLoading: true, err: null };
        },
        apiSuccess: (state, action: PayloadAction<any>) => {
            return {
                ...state,
                ...getModifiedResponse(action?.payload),
                isLoading: false,
                err: null
            };
        },
        apiFailed: (state, action: PayloadAction<any>) => {
            return {
                ...state,
                isLoading: false,
                err: action.payload,
                response: {}
            };
        },
        resetAWS: () => {
            return {};
        },
        resetAWSErr: (state) => {
            return { ...state, isLoading: false, err: null };
        },
        updateScreenIdentifiers: (state, action: PayloadAction<any>) => {
            return {
                ...state,
                ...updateIdentifiers(state, action?.payload),
                isLoading: false,
                err: null
            };
        },
        executeAWSAction: (state, action: PayloadAction<any>) => {}
    }
});

export const { loadStart, apiSuccess, apiFailed, resetAWS, resetAWSErr, executeAWSAction, updateScreenIdentifiers } =
    awsSlice.actions;
export const { reducer } = awsSlice;

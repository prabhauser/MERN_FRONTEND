import { call, put, takeLatest } from 'redux-saga/effects';
import { loadStart, apiSuccess, apiFailed, executeAWSAction } from './awsSlice';
import { GET_AWS_APIURL } from '../../constants/apiConstants';
import ApiService from '../../../services/api/apiService';

const fetchData = async (payload: any) => {
    try {
        const API_URL = GET_AWS_APIURL(payload?.payload?.screenCode, payload?.payload?.actionCode);

        const response = await ApiService.post(API_URL, payload?.payload?.reqObj);

        //const responseObj = await response.json();
        return response;
    } catch (err) {
        return { APIerror: err };
    }
};

export function* executeAWS(bundle: any): any {
    yield put(loadStart());
    try {
        let response = yield call(fetchData, bundle.payload);
        for (const [key] of Object.entries(response)) {
            if (key === 'APIerror') {
                yield put(apiFailed(response?.APIerror));
                return;
            }
        }

        if (response?.data) {
            response['storeKey'] = bundle?.payload?.storeKey;
            response = { ...response, ...bundle?.payload?.uniqueScreenIdentifier };
            yield put(apiSuccess(response));
        } else {
            yield put(apiFailed(response?.error?.exception));
        }
    } catch (error) {
        yield put(apiFailed(error));
    }
}

export default function* AWSSaga() {
    yield takeLatest(executeAWSAction.type, executeAWS);
}

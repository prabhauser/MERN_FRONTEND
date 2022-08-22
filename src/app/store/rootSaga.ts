import { fork, all } from 'redux-saga/effects';
import awsSaga from './aws/awsSaga';

function* rootSaga() {
    // yield fork(loansSaga); // saga1 can also yield [ fork(actionOne), fork(actionTwo) ]
    yield all([awsSaga()]);
}

export default rootSaga;

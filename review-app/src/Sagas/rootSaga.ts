import { all } from 'redux-saga/effects';
import signInSaga from '../container/Login/Login.saga'

export default function* rootSaga() {
    yield all([
        signInSaga()

    ]);
}
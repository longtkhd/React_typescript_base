import { takeLatest, call, put, delay } from 'redux-saga/effects';
import axios from 'axios';
import { login, loginSucceed, loginFaild } from './Login.action';
import * as types from './Login.constant';
import { LOGIN_API } from '../../urlConfig';

export function* loginSaga(action: any) {
    try {
        const data = yield call(axios.request, {
            url: LOGIN_API,
            method: 'POST',
            data: {
                email: action.data.username,
                password: action.data.password,
            }
        })

        if (data) {
            console.log(data);
            localStorage.setItem('token', data.data.token);
            // localStorage.setItem('isAuthenticated', true);
            yield put(loginSucceed(data.data.token));
        }
    } catch (error) { }
}

export default function* signInSaga() {
    // See example in containers/HomePage/saga.js
    yield takeLatest(types.LOGIN, loginSaga);
}


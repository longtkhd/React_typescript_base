import * as types from './Login.constant'

export function login(email: string, password: string) {
    return {
        type: types.LOGIN,
        data: {
            email,
            password,
        },
    };
}
export function loginSucceed(data: any) {
    return {
        type: types.LOGIN_SUCCESSED,
        data,
    };
}

export function loginFaild(data: any) {
    return {
        type: types.LOGIN_FAILED,
        data,
    };
}
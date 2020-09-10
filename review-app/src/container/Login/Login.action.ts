import * as types from './Login.constant'

export interface LoginData {
    username: string;
    password: string;

}

export const login = (data: LoginData) => {
    return {
        type: types.LOGIN,
        payload: data
    };
}
export const loginSucceed = (data: any) => {
    return {
        type: types.LOGIN_SUCCESSED,
        data,
    };
}

export const loginFaild = (data: any) => {
    return {
        type: types.LOGIN_FAILED,
        data,
    };
}
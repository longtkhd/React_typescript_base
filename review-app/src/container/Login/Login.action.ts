import * as types from './Login.constant'

// export interface LoginData {
//     username: string;
//     password: string;

// }

export const loginRequest = (username: string, password: string) => {
    return {
        type: types.LOGIN,
        data: {
            username,
            password,
        },
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
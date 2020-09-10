import * as types from './Login.constant'
import produce from 'immer'

const initialState = {
    loading: false,
    account: null,
    password: null
}

export const loginReducer = (state = initialState, action: any) =>
    produce(state, draft => {
        switch (action.type) {
            case types.LOGIN:
                draft.loading = true;
                draft.account = action.data.account;
                draft.password = action.data.password;
                break
            case types.LOGIN_SUCCESSED:
                draft.loading = false
                break
            case types.LOGIN_FAILED:
                draft.loading = false
                break
            default:
                return state
        }
    })
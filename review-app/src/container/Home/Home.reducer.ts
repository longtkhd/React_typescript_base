import * as types from './Home.constant'
import { LOGIN_SUCCESSED } from '../Login/Login.constant'
import produce from 'immer'

const initialState = {
    isAuthenticated: false,
}

export const homeReducer = (state = initialState, action: any) =>
    produce(state, draft => {
        switch (action.type) {
            case types.LOGOUT:
                localStorage.removeItem('token')
                draft.isAuthenticated = false
                break
            case LOGIN_SUCCESSED:
                draft.isAuthenticated = true
                break


            default:
                return state
        }
    })
import * as types from './Profile.constant'
import produce from 'immer'
// import { type } from 'os';

const initialState = {
    users: {},
    loading: false,
    error: false,
    success: false,

}

export const profileReducer = (state = initialState, action: any) =>
    produce(state, draft => {
        switch (action.type) {
            case types.GET_PROFILE:
                draft.loading = true;
                draft.success = false;
                draft.error = false;
                break;
            case types.GET_PROFILE_SUCCESSED:
                draft.loading = false;
                draft.success = true;
                draft.error = false;
                draft.users = action.data;
                break;
            case types.GET_PROFILE_FAILED:
                draft.loading = false;
                draft.success = false;
                draft.error = true;
                break;

            default:
                return state
        }
    })
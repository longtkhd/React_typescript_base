import * as types from './Profile.constant'


export const getUserById = (id: string) => ({
    type: types.GET_PROFILE,
    id
})

export const getUserByIdSuccessed = (data: any) => ({
    type: types.GET_PROFILE_SUCCESSED,
    data
})

export const getUserByIdFailed = (error: any) => ({
    type: types.GET_PROFILE_FAILED,
    error
})

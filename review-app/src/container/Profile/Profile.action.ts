import * as types from './Profile.constant'


export const getUserById = () => ({
    type: types.GET_PROFILE,

})

export const getUserByIdSuccessed = (data: any) => ({
    type: types.GET_PROFILE_SUCCESSED,
    data
})

export const getUserByIdFailed = (error: any) => ({
    type: types.GET_PROFILE_FAILED,
    error
})

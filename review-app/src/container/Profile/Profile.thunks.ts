
import * as actions from './Profile.action'
import axios from 'axios'
import { BASE_URL } from '../../urlConfig'



export const getProfile = () => (dispatch: any) => {
    dispatch(actions.getUserById)
    return axios.get(`${BASE_URL}/user/profile/2018604774`).then(
        user => dispatch(actions.getUserByIdSuccessed(user)),
        err => dispatch(actions.getUserByIdFailed(err))
    );
}

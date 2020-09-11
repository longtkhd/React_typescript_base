import { combineReducers } from 'redux';
import { loginReducer } from '../container/Login/Login.reducer'
import { homeReducer } from '../container/Home/Home.reducer'
import { profileReducer } from '../container/Profile/Profile.reducer'


export default combineReducers({

    login: loginReducer,
    home: homeReducer,
    profile: profileReducer

})
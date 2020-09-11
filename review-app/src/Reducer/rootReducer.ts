import { combineReducers } from 'redux';
import { loginReducer } from '../container/Login/Login.reducer'
import { homeReducer } from '../container/Home/Home.reducer'


export default combineReducers({

    login: loginReducer,
    home: homeReducer,

})
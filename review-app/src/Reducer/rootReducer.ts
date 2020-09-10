import { combineReducers } from 'redux';
import { loginReducer } from '../container/Login/Login.reducer'


export default combineReducers({

    login: loginReducer,

})
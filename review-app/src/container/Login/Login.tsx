import React, { useState, useEffect, FormEvent } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css'
import { connect, useDispatch } from 'react-redux';
import { compose } from 'redux';


import { loginRequest } from './Login.action'

interface Props {
    onLogin(payload: ReqLogin): Promise<ReqLogin>
}


const LoginPage: React.FC = (props) => {
    const dispatch = useDispatch();

    const [userName, setUsername] = useState('');
    const [password, setPassword] = useState('');

    const handleUsername = (event: React.ChangeEvent<HTMLInputElement>) => {
        setUsername(event.target.value)
    }
    const handlePassword = (event: React.ChangeEvent<HTMLInputElement>) => {
        setPassword(event.target.value)
    }

    const submit = (event: FormEvent) => {
        event.preventDefault();
        dispatch(loginRequest(userName, password));


    }




    return (
        <div className="container">
            <div className="min-vh-100 row">
                <div className="col-md-6 m-auto">
                    <form className="p-5 rounded-sm shadow text-center" onSubmit={submit}>
                        Login
                        <p className="text-muted">Please enter your login and password!</p>
                        <input
                            type="text"
                            placeholder="Username"

                            onChange={handleUsername}
                            className="form-control form-control-lg mb-4"
                        />
                        <input
                            type="password"
                            placeholder="Password"
                            onChange={handlePassword}
                            className="form-control form-control-lg mb-4"
                        />
                        {/* {error && (
                            <div className="mb-3 text-danger text-xl-center">{error}</div>
                        )} */}
                        <button type="submit" className="btn btn-block btn-info btn-lg">
                            Login
            </button>
                    </form>
                </div>
            </div>
        </div>
    )

}

// const dispatchProps = {
//     onLogin: loginRequest,
// };

const mapState = (state: any) => ({
    LoginPage: state.login
})




export default connect(
    mapState
    // dispatchProps
)(LoginPage);



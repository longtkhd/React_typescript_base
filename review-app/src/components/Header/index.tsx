import React, { FormEvent } from 'react';
import { useDispatch } from 'react-redux';
interface Props {
    logout: any
}

const Header = (props: Props) => {
    const { logout } = props;
    const dispatch = useDispatch();


    const submit = (event: FormEvent) => {
        event.preventDefault();
        dispatch(logout())


    }

    return (
        <nav className="navbar navbar-expand-lg navbar-light bg-light">
            <a className="navbar-brand text-info" href="#">HOME</a>
            <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon" />
            </button>
            <div className="collapse navbar-collapse" id="navbarSupportedContent">
                <ul className="navbar-nav mr-auto">
                    <li className="nav-item active">
                        <a className="nav-link" href="#">About <span className="sr-only">(current)</span></a>
                    </li>
                    <li className="nav-item active">
                        <a className="nav-link" href="#">Contact <span className="sr-only">(current)</span></a>
                    </li>
                    {/* <li className="nav-item">
                        <a className="nav-link" href="#">something</a>
                    </li> */}

                </ul>
                <form className="form-inline my-2 my-lg-0" onSubmit={submit}>
                    {/* <input className="form-control mr-sm-2" type="search" placeholder="Search" aria-label="Search" /> */}
                    <button className="btn btn-outline-danger my-2 my-sm-0" type="submit">Đăng xuất</button>
                </form>
            </div>
        </nav>



    );
}

export default Header;

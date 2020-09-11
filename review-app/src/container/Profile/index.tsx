import React, { useEffect } from 'react';
import { connect, useDispatch } from 'react-redux'
import { getProfile } from './Profile.thunks'
import { BASE_URL } from '../../urlConfig'
import anh from '../../logo.svg'
import './profile.css';
// interface Props {
//     match: any
// }
const Profile = (props: any) => {
    const dispatch = useDispatch();
    const users = props.Profile.data;
    console.log(props.Profile.data)
    // const id = props.match.params.id;

    useEffect(() => {
        dispatch(getProfile());



    }, []);

    return (
        // <div><h1 style={{ marginTop: "2%", fontSize: "2rem" }}>{users ? users.position : null}</h1></div>
        <div>
            <div className="wrapper">
                <section className="wrapper-header">
                    {/* <img src={logo} alt="" style={{ width: "100px" }} /> */}
                    <span className="Path">Home / Profile</span>
                </section>
                <section className="wrapper-content">
                    <div className="wrapper-content_Infor">
                        <div className="content_Infor-overview">
                            <h1 style={{ marginTop: "2%", fontSize: "2rem" }}>{users ? users.position : null}</h1>
                            <div className="content_Infor-img">


                                {/* src={`${BASE_URL}/avatar/${users.avatar}`} */}
                                <img src={anh} alt="" height="140px" style={{ marginTop: "20px" }} />


                            </div><br />
                            <h3 style={{ textAlign: "center", fontSize: "30px", lineHeight: "2" }}>{users ? users.fullName : null}</h3>
                            <h5 style={{ color: "gray" }}>{users ? users.bio : null}</h5>
                        </div>
                        <div className="content_Infor-details">
                            <div className="Infor-details_left">
                                <ul>
                                    {/* <li><i class="fas fa-phone-alt"></i> Số điện thoại: <span>{user ? user.phone : null}</span></li> */}
                                    <li> Email: <span>{users ? users.email : null}</span></li>
                                    {/* <li><i class="fas fa-birthday-cake"></i> Ngày sinh: <span>{user ? new Date(user.dob).toLocaleDateString('en-GB') : null}</span></li> */}
                                    <li> Khoa: <span>  {users ? users.faculty : null}</span></li>
                                </ul>
                            </div>

                            <div className="Infor-details_right">
                                <ul>

                                    <li> Lớp: <span>  {users ? users.class : null}</span></li>
                                    <li> Khóa: <span>{users ? users.schoolYear : null}</span></li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </section>

            </div>


        </div>
    );
}

const mapState = (state: any) => ({
    Profile: state.profile.users,

})


export default connect(
    mapState
    // dispatchProps
)(Profile);


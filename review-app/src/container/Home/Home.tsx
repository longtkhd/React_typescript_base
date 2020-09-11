import React from 'react';
import Header from '../../components/Header/'
import { logout } from './Home.action'
import Profile from '../Profile'

const Home = () => {
    return (
        <div>
            <Header logout={logout} />
            <Profile />
        </div>
    );
}

export default Home;

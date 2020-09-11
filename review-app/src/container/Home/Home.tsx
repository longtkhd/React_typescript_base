import React from 'react';
import Header from '../../components/Header/'
import { logout } from './Home.action'

const Home = () => {
    return (
        <div>
            <Header logout={logout} />
        </div>
    );
}

export default Home;

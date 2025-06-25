import React from 'react';
import Navber from '../Navber';
import { Outlet } from 'react-router';
import Footer from '../Footer';

const AuthLayout = () => {
    return (
        <div className='flex bg-gradient-to-r from-blue-200 to-blue-500 q min-h-screen flex-col justify-between'>
            <header>
                <Navber></Navber>
            </header>
            <main>
                <Outlet></Outlet>
            </main>
            <footer>
                <Footer></Footer>
            </footer>
            
        </div>
    );
};

export default AuthLayout;
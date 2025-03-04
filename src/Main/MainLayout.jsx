import React from 'react';
import { Outlet } from 'react-router-dom';
import Footer from '../Home/Footer/Footer';
import Navbar from '../Home/Navbar/Navbar';

const MainLayout = () => {
    return (
        <div className=''>
            <nav>
                <Navbar/>
            </nav>
            <main className='min-h-[calc(100vh-64px)]'>
                <Outlet/>
            </main>
            <footer>
<Footer/>
            </footer>
        </div>
    );
};

export default MainLayout;
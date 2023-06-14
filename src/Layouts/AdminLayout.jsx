import React from 'react';
import Header from '../Components/Shared/Header/Header';
import { Outlet } from 'react-router-dom';
import Footer from '../Components/Shared/Footer/Footer';

const AdminLayout = () => {
    return (
        <div className='flex flex-col'>
            <div className='grid grid-cols-12'>
                <div className='col-span-2 bg-white'>
                    <Header></Header>
                </div>
                <div className='col-span-10 bg-black'>
                    <Outlet></Outlet>
                </div>
            </div>
            <div>
                <Footer></Footer>
            </div>
        </div>
    );
};

export default AdminLayout;
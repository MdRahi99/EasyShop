import React, { useContext } from 'react';
import Header from '../Components/Shared/Header/Header';
import { Outlet } from 'react-router-dom';
import Footer from '../Components/Shared/Footer/Footer';
import { AuthContext } from '../Contexts/AuthProvider/AuthProvider';
import AdminLogin from '../Components/AdminLogin/AdminLogin';

const AdminLayout = () => {
    const { isLoggedIn } = useContext(AuthContext);
    return (
        <div className='flex flex-col'>
            {
                isLoggedIn == 'true' ?
                    <div className='grid grid-cols-12'>
                        <div className='col-span-2 bg-white'>
                            <Header></Header>
                        </div>
                        <div className='col-span-10 bg-black'>
                            <Outlet></Outlet>
                        </div>
                    </div>
                :
                <AdminLogin></AdminLogin>
            }
            <div>
                <Footer></Footer>
            </div>
        </div>
    );
};

export default AdminLayout;
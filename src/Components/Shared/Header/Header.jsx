import React, { useContext } from 'react';
import { AuthContext } from '../../../Contexts/AuthProvider/AuthProvider';
import { Link } from 'react-router-dom';

const Header = () => {

    const { user, logOut } = useContext(AuthContext);

    return (
        <div className='flex flex-col gap-4 p-4'>
            <div className='border-b-4 border-double font-sans font-bold border-slate-900 p-2'>
                <h1 className='text-xl'>{user.uname}</h1>
                <h1 className="text-md">{user.email}</h1>
                <h1 className="text-md">{user.phone}</h1>
            </div>
            <Link className='font-serif text-md rounded-md hover:bg-white hover:text-slate-900 hover:border-x-2 hover:border-slate-900 text-center bg-slate-900 text-white p-2' to='/'>
                Dashboard
            </Link>
            <Link className='font-serif text-md rounded-md hover:bg-white hover:text-slate-900 hover:border-x-2 hover:border-slate-900 text-center bg-slate-900 text-white p-2' to='/all-products'>
                All Products
            </Link>
            <Link className='font-serif text-md rounded-md hover:bg-white hover:text-slate-900 hover:border-x-2 hover:border-slate-900 text-center bg-slate-900 text-white p-2' to='/all-customers'>
                All Customers
            </Link>
            <Link className='p-2 bg-slate-900 text-center hover:bg-white hover:text-slate-900 hover:border-x-2 hover:border-slate-900 font-sans text-white rounded'>
                <button onClick={logOut}>Logout</button>
            </Link>
        </div>
    );
};

export default Header;
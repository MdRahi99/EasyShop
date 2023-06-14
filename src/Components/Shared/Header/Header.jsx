import React, { useContext } from 'react';
import { AuthContext } from '../../../Contexts/AuthProvider/AuthProvider';
import { Link } from 'react-router-dom';

const Header = () => {

    const { user, logOut } = useContext(AuthContext);

    return (
        <div className='flex flex-col gap-4 p-4'>
            <div className='border-y-4 font-sans font-bold border-slate-900 p-2'>
                <h1>{user.uname}</h1>
                <h1>Email: {user.email}</h1>
                <h1>Contact Info: {user.phone}</h1>
            </div>
            <Link className='p-2 bg-slate-900 text-center hover:bg-white hover:text-slate-900 hover:border-x-2 hover:border-slate-900 font-sans text-white rounded'>
                <button onClick={logOut}>Logout</button>
            </Link>
        </div>
    );
};

export default Header;
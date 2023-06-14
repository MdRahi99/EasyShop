import React from 'react';
import img from "../../Assets/admin login.jpg";
import { Link } from 'react-router-dom';

const AdminLogin = () => {
    return (
        <div className='bg-slate-300 p-2'>
            <div className="card w-full lg:w-2/4 h-full mx-auto my-20 shadow-xl">
                <figure className='relative'>
                    <img className='w-full opacity-70' src={img} />
                </figure>
                <div className='absolute top-2 left-2 lg:top-24 lg:left-24'>
                    <div className="card-body shadow-md shadow-slate-900 py-10 px-4 lg:p-16 items-center justify-center">
                        <div className='bg-slate-900 w-full lg:w-3/4 p-4 mb-6 rounded-l-2xl rounded-b-2xl'>
                            <h1 className='text-center text-white text-xl lg:text-2xl font-mono uppercase'>EasyShop Admin Login</h1>
                        </div>
                        <div className='card-actions gap-4 w-full lg:w-3/4'>
                            <input type="text" placeholder="Enter your phone number" className="input bg-slate-800 text-white font-serif h-12 rounded-l-2xl rounded-b-2xl w-full max-w-full" />
                            <input type="password" placeholder="Enter your password" className="input bg-slate-800 text-white font-serif h-12 rounded-l-2xl rounded-b-2xl w-full max-w-full" />
                        </div>
                        <Link className="w-full lg:w-3/4 px-4 py-2 mt-2 text-center text-xl font-sans rounded-xl bg-slate-800 text-white hover:bg-white hover:text-black">
                            <button>Login</button>
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default AdminLogin;
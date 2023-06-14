import React from 'react';
import img from "../../Assets/admin login.jpg";
import { Link } from 'react-router-dom';

const AdminRegister = () => {

    const handleSubmit = (event) => {
        event.preventDefault();
        const form = event.target;
        const uname = form.name.value;
        const email = form.email.value;
        const phone = form.phone.value;
        const password = form.password.value;

        fetch("http://localhost:5000/register",{
            method:"POST",
            headers:{
                "Content-Type":"application/json"
            },
            body:JSON.stringify({
                uname,
                email,
                phone,
                password
            })
        })
        .then((res) => {res.json()})
        .then((data) => data)
        form.reset();
    };
    return (
        <div>
            <section className="bg-gray-50 min-h-screen flex items-center justify-center">
                <div className="bg-gray-100 flex rounded-2xl shadow-lg max-w-6xl p-5 items-center">
                    <div className="md:w-2/4 px-8 md:px-16">
                        <h2 className="font-bold text-2xl text-[#002D74]">EasyShop Admin Register</h2>
                        <div>
                            <span></span>
                        </div>
                        <p className="text-xs my-4 text-[#002D74]">
                            Register here as a Admin
                        </p>

                        <form onSubmit={handleSubmit} className="flex flex-col gap-4">
                            <div className="relative">
                                <input
                                    className="p-2 rounded-xl border w-full"
                                    type="text"
                                    name="name"
                                    placeholder="Name"
                                />
                            </div>
                            <div className="relative">
                                <input
                                    className="p-2 rounded-xl border w-full"
                                    type="email"
                                    name="email"
                                    placeholder="Email"
                                />
                            </div>
                            <div className="relative">
                                <input
                                    className="p-2 rounded-xl border w-full"
                                    type="text"
                                    name="phone"
                                    placeholder="Phone"
                                />
                            </div>
                            <div className="relative">
                                <input
                                    className="p-2 rounded-xl border w-full"
                                    type="password"
                                    name="password"
                                    placeholder="Password"
                                />
                            </div>
                            <button className="bg-[#002D74] rounded-xl text-white py-2 hover:scale-105 duration-300">
                                Sign Up
                            </button>
                        </form>

                        <div className="mt-6 grid grid-cols-3 items-center text-gray-400">
                            <hr className="border-gray-400" />
                            <p className="text-center text-sm">OR</p>
                            <hr className="border-gray-400" />
                        </div>

                        <div className="mt-3 text-xs flex justify-between items-center text-[#002D74]">
                            <p>Have an account?</p>
                            <Link
                                to="/login"
                                className="py-2 px-5 bg-white border rounded-xl hover:scale-110 duration-300"
                            >
                                Login
                            </Link>
                        </div>
                    </div>

                    <div className="md:block hidden w-2/4">
                        <img className="rounded-2xl" src={img} alt="login" />
                    </div>
                </div>
            </section>
        </div>
    );
};

export default AdminRegister;
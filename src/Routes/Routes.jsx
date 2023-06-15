import React from 'react';
import { createBrowserRouter } from "react-router-dom";
import AdminLayout from '../Layouts/AdminLayout';
import ErrorPage from '../Components/ErrorPage/ErrorPage';
import AdminLogin from '../Components/AdminLogin/AdminLogin';
import AdminDashboard from '../Components/AdminDashboard/AdminDashboard';
import AdminRegister from '../Components/AdminRegister/AdminRegister';
import AllProducts from '../Components/AdminDashboard/AllProducts/AllProducts';
import AllCustomers from '../Components/AdminDashboard/AllCustomers/AllCustomers';

const router = createBrowserRouter([
    {
        path: "/login",
        element: <AdminLogin></AdminLogin>
    },
    {
        path: "/register",
        element: <AdminRegister></AdminRegister>
    },
    {
        path: "/",
        element: <AdminLayout></AdminLayout>,
        children: [
            {
                path: "/",
                element: <AdminDashboard></AdminDashboard>
            },
            {
                path: "/all-products",
                loader: async() => await fetch('http://localhost:5000/all-products'),
                element: <AllProducts></AllProducts>
            },
            {
                path: "/all-customers",
                element: <AllCustomers></AllCustomers>
            },
        ]
    },
    {
        path: "*",
        element: <ErrorPage></ErrorPage>
    }
]);

export default router;
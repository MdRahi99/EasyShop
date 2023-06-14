import React from 'react';
import { createBrowserRouter } from "react-router-dom";
import AdminLayout from '../Layouts/AdminLayout';
import ErrorPage from '../Components/ErrorPage/ErrorPage';
import AdminLogin from '../Components/AdminLogin/AdminLogin';
import AdminDashboard from '../Components/AdminDashboard/AdminDashboard';

const router = createBrowserRouter([
    {
        path: "/login",
        element: <AdminLogin></AdminLogin>
    },
    {
        path: "/",
        element: <AdminLayout></AdminLayout>,
        children: [
            {
                path: "/",
                element: <AdminDashboard></AdminDashboard>
            }
        ]
    },
    {
        path: "*",
        element: <ErrorPage></ErrorPage>
    }
]);

export default router;
import React, {useState , useEffect} from 'react'
import { Outlet, Link, useNavigate} from 'react-router-dom'
import {getUserDetails} from '../../api/apis.js';


const Dashboard = () => {
    const navigate = useNavigate();
    console.log("Dashboard Component Rendered");

    useEffect(() => {
        const fetchUserDetails = async () => {
            try {
                const token = localStorage.getItem('token');
                const user = await getUserDetails(token);
                console.log("User Details in Dashboard:", user);
                if(user.role !== 'admin'){
                    navigate('/');
                }
            } catch (error) {
                console.error("Error fetching user details:", error);
            }
        };

        fetchUserDetails();
    }, []);

  return (
    <div>
      <h1>Dashboard Page</h1>
      <ol>
        <li><Link to="/admin/user-listing">Manage Users</Link></li>
        <li><Link to="/admin/order-tracking">Manage Orders</Link></li>
        <li><Link to="/admin/create-product">Manage Products</Link></li>
      </ol>
      

      <Outlet />
    </div>
  )
}

export default Dashboard

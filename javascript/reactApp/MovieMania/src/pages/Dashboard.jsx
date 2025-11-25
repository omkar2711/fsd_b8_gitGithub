import React from 'react'
import { Outlet , Link } from 'react-router-dom'

const Dashboard = () => {
  return (
    <div>
        <h1>Dashboard Page</h1>

        <nav>
            <Link to='profile'> Profile</Link>
            <Link to='settings'> Settings</Link>
        </nav>

       
        <hr />

        {/* to render the child components of Dashboard */}
        <Outlet />
    </div>
  )
}

export default Dashboard

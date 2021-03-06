
import React from 'react'
import DashboardNavs from '../components/DashboardNavs'

const Dashboard = () => {
    return (
        <div>
            <div className="container-fluid bg-secondary p-5 text-center">
                <h1>Dashboard</h1>
            </div>
            <div className="container-fluid p-4">
                <DashboardNavs />
            </div>
            <div className="container">
                <p>Show all the bookings and browse hotels</p>
            </div>
        </div>
    )
}

export default Dashboard

import React from 'react'
import DashboardNavs from "../components/DashboardNavs"

const DashboardSeller = () => {
    return (
        <div>
            <div className="container-fluid bg-secondary p-5 text-center">
                <h1>Dashboard Seller</h1>
            </div>

            <div className="container-fluid p-4">
                <DashboardNavs />
            </div>

            <div className="container">
                <p>Show all hotel sellers</p>
            </div>
        </div>
    )
}

export default DashboardSeller

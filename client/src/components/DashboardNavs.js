import React from 'react'
import {Link} from 'react-router-dom'

const DashboardNavs = () => {
    const active = window.location.pathname;
    //console.log(active)
    return (
        <ul className="nav nav-tabs">
            <li className="nav-item">
                <Link className={`nav-link ${active === "/dashboard" && "active"}`} to="/dashboard" >Your bookings</Link>
            </li>
            <li className="nav-items">
                <Link className={`nav-link ${active === "/dashboard/seller" && "active"}`} to="/dashboard/seller">Your hotel</Link>
            </li>
        </ul>
    )
}

export default DashboardNavs

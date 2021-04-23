import React from 'react'
import {Link} from 'react-router-dom'
import {useSelector, useDispatch} from 'react-redux'
import {useHistory} from 'react-router-dom';

const TopNav = () => {
    const dispatch = useDispatch();
    const {auth} = useSelector((state)=> ({...state}))
    const history = useHistory();

   const logOut=()=> {
       dispatch({
           type: "LOGOUT",
           payload: null
       })
       window.localStorage.removeItem("auth");
       history.push("/login")
   }

    

    return (
        <div className='nav bg-light d-flex justify-content-between'>

            {auth !== null && (
                <a onClick={logOut} className="nav-link pointer" to="/login">Logout</a>
            )}

            {auth === null && (
                <>
                    <Link className="nav-link" to="/login">Login</Link>
                    <Link className="nav-link" to="/register">Register</Link>
                </>
            )}
            <Link className="nav-link" to="/">Home </Link>
            
        </div>
    )
}

export default TopNav

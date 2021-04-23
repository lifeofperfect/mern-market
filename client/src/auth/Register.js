import React, { useState } from 'react'
import RegisterForm from '../components/RegisterForm'
import axios from 'axios';

//toastify
import {toast} from 'react-toastify'
import { registerAction } from '../actions/auth';


const Register = ({history}) => {
    const [name, setName] = useState('')
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')

    //console.log("history", history)
    //console.log(process.env.REACT_APP_API);

    const handleSubmit= async (e)=> {
        e.preventDefault();
        try{
            const res = await registerAction({
                name,
                email,
                password
            })
            console.log(`REGISTER USER ${res}`)
            history.push(`/login`)
            toast.success("Registeration succesfull return to login")
            
        }catch(err){
            console.log(`error USER ===> ${err}`)

            if(err.response.status === 400)
                toast.error(err.response.data)
            
        }
    }

    

    return (
        <div>
            <div className="container-fluid bg-secondary text-center p-5">
                <h1>Register</h1>
            </div>

            
            <div className="container">
                <div className="row">
                    <div className="col-md-6 offset-md-3">
                        <RegisterForm 
                            handleSubmit={handleSubmit}
                            name={name}
                            setName={setName}
                            email={email}
                            setEmail = {setEmail}
                            password={password}
                            setPassword = {setPassword}
                        />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Register

import axios from 'axios';

export const registerAction = async (user) => 
    await axios.post(`${process.env.REACT_APP_API}/register`, user);

export const loginAction = async (user)=> 
    await axios.post(`${process.env.REACT_APP_API}/login`, user);
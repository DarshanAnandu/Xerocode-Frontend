import axios from 'axios';
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { ToastContainer, toast } from 'react-toastify';

function Login({ firstName, lastName }) {
    const [loginData, setLoginData] = useState({
        email: "",
        password: "",
    });
    const headers = {
        "Content-Type": "application/json",
    };
    const [isLoading, setIsLoading] = useState(false);
    const navigate = useNavigate();

    const submitHandler = async (e) => {
        e.preventDefault();
        if (loginData.email === '') {
            toast.error("Email is required");
        } else if (loginData.password === '') {
            toast.error("Password is required");
        } else {
            try {
                setIsLoading(true);
                const response = await axios.post("https://xerocodee-e5rc.onrender.com/auth/login", { credentials: loginData }, { headers });
                setIsLoading(false);
                if (response.status === 200) {
                    toast.success("Login successful");
                    navigate(`/home/${response.data.user._id}`);
                } else {
                    toast.error("Login failed");
                }
            } catch (error) {
                setIsLoading(false);
                if (error.response) {
                    toast.error(error.response.data.message);
                } else {
                    toast.error("An error occurred");
                }
            }
        }
    };

    return (
        <div className='flex flex-col w-full h-full py-2 px-12'>
            <div className='text-center text-black text-3xl font-bold'>Welcome {firstName} {lastName}</div>
            <div className='flex justify-center items-center'>
                <div className='w-[150px] border border-slate-400 border-opacity-40'></div>
                <div className='w-[152px] h-[21px] text-center text-slate-950 text-opacity-50 text-sm font-bold capitalize leading-[21px]'>Login To Your Account</div>
                <div className='w-[150px] h-[0px] border border-slate-400 border-opacity-40'></div>
            </div>
            <form className='flex flex-col gap-5 justify-center items-center h-full pt-28' onSubmit={submitHandler}>
                <input
                    className='w-full py-1 text-gray-500 bg-white rounded-lg border outline-none px-4'
                    placeholder='Email-id'
                    type='email'
                    name='email'
                    value={loginData.email}
                    onChange={(e) => setLoginData(prevData => ({ ...prevData, email: e.target.value }))}
                />
                <input
                    className='w-full py-1 text-gray-500 bg-white rounded-lg border outline-none px-4'
                    placeholder='Password'
                    type='password'
                    name='password'
                    value={loginData.password}
                    onChange={(e) => setLoginData(prevData => ({ ...prevData, password: e.target.value }))}
                />
                <button
                    className='w-full py-1 bg-blue-600 rounded-lg border border-stone-300 text-white'
                    disabled={isLoading}
                >
                    {isLoading ? 'Logging in...' : 'Login'}
                </button>
            </form>
            <ToastContainer />
        </div>
    );
}

export default Login;

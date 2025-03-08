import React, { useState } from 'react'
import { successToast, errorToast } from '../functions/toastify'
import { toast } from "react-toastify";
const Login = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [loading, setLoading] = useState(false);
    
    
    const loginHandler = (e) => {
      
        e.preventDefault(); // Prevent form from reloading the page

        try {
            
            if (!email || !password) {
              
                errorToast('Please fill all the fields');
                return;
            }

            else{
                setLoading(true);
            console.log("Login button clicked");

            // Simulate login process
            setTimeout(() => {
                setLoading(false);
                successToast("You are logged in");
            }, 1000);
            }

        } catch (error) {
            console.log(error);
        }
    };

    return (
        <>
            <form onSubmit={loginHandler}>
                <div className="container mx-auto p-8 flex">
                    <div className="max-w-md w-full mx-auto">
                        <h1 className="text-4xl text-center mb-12 font-thin">Company</h1>
                        <div className="bg-white rounded-lg overflow-hidden shadow-2xl">
                            <div className="p-8">
                                <div className="mb-5">
                                    <label htmlFor="email" className="block mb-2 text-sm font-medium text-gray-600">Email</label>
                                    <input 
                                        value={email} 
                                        onChange={(e) => setEmail(e.target.value)} 
                                        type="text" 
                                        name="email" 
                                        className="block w-full p-3 rounded bg-gray-200 border border-transparent focus:outline-none" 
                                    />
                                </div>
                                <div className="mb-5">
                                    <label htmlFor="password" className="block mb-2 text-sm font-medium text-gray-600">Password</label>
                                    <input 
                                        value={password} 
                                        onChange={(e) => setPassword(e.target.value)} 
                                        type="password" 
                                        name="password" 
                                        className="block w-full p-3 rounded bg-gray-200 border border-transparent focus:outline-none" 
                                    />
                                </div>
                                <button 
                                    type="submit" 
                                    className="w-full p-3 mt-4 bg-indigo-600 text-white rounded shadow"
                                    
                                >
                                Login
                                </button>
                            </div>
                            <div className="flex justify-between p-8 text-sm border-t border-gray-300 bg-gray-100">
                                <a href="#" className="font-medium text-indigo-500">Create account</a>
                                <a href="#" className="text-gray-600">Forgot password?</a>
                            </div>
                        </div>
                    </div>
                </div>
            </form>
        </>
    );
};

export default Login;

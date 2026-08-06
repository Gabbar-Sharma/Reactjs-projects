import React from 'react'
import { useState } from 'react';
function Form() {
    const [state, setState] = useState({})
 console.log(state)
    const handleChange = (e) => {
        let { name, value } = e.target;
        setState({...state, [name]: value});
    
    }
    const submitData = (e) => {
        e.preventDefault()



    }
    return (
        <div className="min-h-screen flex items-center justify-center bg-gray-100">
            <form onSubmit={submitData} className="bg-white p-6 rounded-lg shadow-md w-80">
                <h2 className="text-2xl font-bold mb-5 text-center">
                    Sign Up
                </h2>
                <div className="mb-4">
                    <label className="block mb-1">Name</label>
                    <input
                        required
                        name="name"
                        type="text"
                        onChange={handleChange}
                        placeholder="Enter your name"
                        className="w-full border px-3 py-2 rounded"
                    />
                </div>
                <div className="mb-4">
                    <label className="block mb-1">Email </label>
                    <input
                        required
                        name="email"
                        type="email"
                        onChange={handleChange}
                        placeholder="Enter your email"
                        className="w-full border px-3 py-2 rounded"
                    />
                </div>

                <div className="mb-5">
                    <label className="block mb-1">Password</label>
                    <input
                        required
                        name="password"
                        type="password"
                        onChange={handleChange}
                        placeholder="Enter your password"
                        className="w-full border px-3 py-2 rounded"
                    />
                </div>
                <button
                    type="submit"
                    className="w-full bg-blue-500 text-white py-2 rounded">
                    Submit
                </button>
            </form>
        </div>
    );
}

export default Form;

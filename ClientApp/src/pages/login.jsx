import React from "react";


export default function Login(){
    return(
        <div className="w-full h-full flex justify-center items-center flex-col">
            <div className="w-8/10 md:w-3/10">
                <div className="flex justify-center items-center mb-1rem">
                    <h1 className="text-3xl"><strong>Login</strong></h1>
                </div>
                <div className="flex flex-col">
                    <label className="mb-1/2rem" for="email">Email Address:</label>
                    <input className="p-1/2rem login-input mb-1rem pr-2rem border rounded-md" type="email" id="email" placeholder="Email"/>
                    <label className="mb-1/2rem" for="password">Password:</label>
                    <input className="p-1/2rem login-input border rounded-md" type="password" id="password" placeholder="Password"/>
                    <a href="/" className="text-mainBlack bg-pastelBlue mt-1rem p-1rem rounded-md flex justify-center items-center ">Login</a>
                    <a href = "/signup" className = "text-mainBlack mt-1rem p-1rem flex justify-center items-center">Create an Account?</a>
                </div>
            </div>
        </div>
    )
};


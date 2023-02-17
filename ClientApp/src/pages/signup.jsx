import React from "react";
import { useState } from "react";

export default function Signup(){
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    return(
        <div className="w-full h-full flex justify-center items-center flex-col">
            <div className="w-2/10">
                <div className="flex justify-center items-center mb-1rem">
                    <h1 className="text-3xl"><strong>Sign-Up</strong></h1>
                </div>
                <div className="flex flex-col">
                    <label className="mb-1/2rem" for="email">Email Address:</label>
                    <input onChange={(e) => {setEmail(e.target.value)}} className="p-1/2rem login-input mb-1rem pr-2rem border rounded-md" type="email" id="email" placeholder="Email"/>
                    <label className="mb-1/2rem" for="password">Password:</label>
                    <input onChange = {(e) => {setPassword(e.target.value)}} className="p-1/2rem login-input border rounded-md" type="password" id="password" placeholder="Password"/>
                    <a href="/" className="text-mainBlack bg-pastelBlue mt-1rem p-1rem rounded-md flex justify-center items-center ">Create Account</a>
                    <a href = "/login" className = "text-mainBlack mt-1rem p-1rem flex justify-center items-center">Already have an Account?</a>
                </div>
            </div>
        </div>
    )
};


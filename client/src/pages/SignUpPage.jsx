import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUser, faEnvelope, faLock } from "@fortawesome/free-solid-svg-icons";

export default function SignUpPage({ onNavigate }) {
const [name, setName] = useState("");
const [email, setEmail] = useState("");
const [password, setPassword] = useState("");
const [confirmPassword, setConfirmPassword] = useState("");
const [error, setError] = useState("");

const handleSignUp = (e) => {
    e.preventDefault();
    setError("");

    if (!name || !email || !password || !confirmPassword) {
    setError("All fields are required");
    return;
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
    setError("Please enter a valid email address");
    return;
    }

    if (password.length < 6) {
    setError("Password must be at least 6 characters");
    return;
    }

    if (password !== confirmPassword) {
    setError("Passwords do not match");
    return;
    }

    console.log("Sign Up Success:", { name, email, password });
};
return (
    <div className="flex min-h-screen items-center justify-center bg-[#030712] px-4 py-12">
    <form
        onSubmit={handleSignUp}
        className="mx-auto flex flex-col gap-4 rounded-xl bg-[#1E293B99] border border-[#60A5FA33] w-[90%] md:w-[470px] px-6 py-6"
    >
        <h2 className="text-white text-xl font-bold text-center mb-2">Create Account</h2>

        {error && (
        <div className="bg-red-500/10 border border-red-500 text-red-400 text-sm p-3 rounded-xl text-center">
            {error}
        </div>
        )}

        <div className="flex flex-col gap-2">
        <label className="text-[#ffffff] font-semibold text-[13px]">Full Name</label>
        <div className="w-full gap-2 flex items-center border border-[#94A3B840] bg-[#03071299] rounded-xl px-4 py-[12px]">
            <span><FontAwesomeIcon icon={faUser} className="w-4 h-4 text-[#7C8AA5]" /></span>
            <input 
            type="text" 
            value={name}
            onChange={(e) => setName(e.target.value)}
            className="w-full bg-transparent outline-none font-normal text-[15px] text-white" 
            placeholder="Your Name" 
            />
        </div>
        </div>

        <div className="flex flex-col gap-2">
        <label className="text-[#ffffff] font-semibold text-[13px]">Email</label>
        <div className="w-full gap-2 flex items-center border border-[#94A3B840] bg-[#03071299] rounded-xl px-4 py-[12px]">
            <span><FontAwesomeIcon icon={faEnvelope} className="w-4 h-4 text-[#7C8AA5]" /></span>
            <input 
            type="text" 
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="w-full bg-transparent outline-none font-normal text-[15px] text-white" 
            placeholder="you@company.dev" 
            />
        </div>
        </div>

        <div className="flex flex-col gap-2">
        <label className="text-[#ffffff] font-semibold text-[13px]">Password</label>
        <div className="flex items-center gap-2 px-4 w-full border border-[#94A3B840] bg-[#03071299] rounded-xl py-[12px]">
            <span><FontAwesomeIcon icon={faLock} className="w-4 h-4 text-[#7C8AA5]" /></span>
            <input 
            type="password" 
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            className="w-full bg-transparent outline-none font-normal text-[15px] text-white" 
            placeholder="At least 6 characters" 
            />
        </div>
        </div>

        <div className="flex flex-col gap-2">
        <label className="text-[#ffffff] font-semibold text-[13px]">Confirm Password</label>
        <div className="flex items-center gap-2 px-4 w-full border border-[#94A3B840] bg-[#03071299] rounded-xl py-[12px]">
            <span><FontAwesomeIcon icon={faLock} className="w-4 h-4 text-[#7C8AA5]" /></span>
            <input 
            type="password" 
            value={confirmPassword}
            onChange={(e) => setConfirmPassword(e.target.value)}
            className="w-full bg-transparent outline-none font-normal text-[15px] text-white" 
            placeholder="Confirm your password" 
            />
        </div>
        </div>

        <button
        type="submit"
        className="group flex h-[49px] w-full items-center justify-center gap-2 rounded-xl border border-[#60A5FA] bg-[#2563EB] px-6 text-[15px] font-bold text-[#FFFFFF] transition-all duration-300 hover:bg-white hover:text-[#2563EB] cursor-pointer mt-2"
        >
        <span>Create Account</span>
        </button>

        <div className="text-center mt-3 text-sm text-[#98a7c7]">
        Already have an account?{" "}
        <button
            type="button"
            onClick={() => onNavigate && onNavigate('auth')}
            className="text-[#60A5FA] font-semibold hover:underline cursor-pointer"
        >
            Sign in
        </button>
        </div>
    </form>
    </div>
);
}
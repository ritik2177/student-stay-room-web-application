'use client';

import { useState } from 'react';
import { useRouter } from 'next/navigation';
import CircularProgress from "@mui/material/CircularProgress";
import toast from 'react-hot-toast';

export default function RegisterPage({ handleClose }: { handleClose: () => void }) {
    const [form, setForm] = useState({ username: '', email: '', password: '', mobilenumber: '' });
    const [loading, setLoading] = useState(false);

    const router = useRouter();

    const handleRegister = async () => {
        setLoading(true);
        const res = await fetch('/api/auth/register', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(form),
        });
        setLoading(false);

        if (res.ok) {
            handleClose();
            router.push('/');
            toast.success('Registration successful');
        } else {
            const data = await res.json();
            toast.error(data.message);
        }
    };

    return (
        <div className="h-auto flex items-center justify-center">
            <div className="w-full max-w-sm bg-[#f5f5f5] px-8 pt-8 pb-4 space-y-4 rounded-xl">

                <div className="absolute top-4 left-4 flex items-center gap-2 ">
          <img src="/image/logo.png" className="w-8 h-8" alt="logo" />
          <p className="text-black text-lg font-semibold">StayNest</p>
        </div>

        <div className="pt-4" />
                <h2 className="text-2xl font-semibold text-center text-purple-800">Register</h2>

                <div>
                    <input
                        className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring border-purple-300 focus:ring-purple-600"
                        placeholder="Username"
                        minLength={6}
                        maxLength={10}
                        onChange={(e) => setForm({ ...form, username: e.target.value })}
                    />
                    <p className="text-sm text-purple-900 mt-1">Enter unique username</p>
                </div>

                <div>
                    <input
                        className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring border-purple-300 focus:ring-purple-600"
                        placeholder="Email"
                        type="email"
                        onChange={(e) => setForm({ ...form, email: e.target.value })}
                    />
                    <p className="text-sm text-purple-900 mt-1">Enter unique email</p>
                </div>

                <div>
                    <input
                        className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring border-purple-300 focus:ring-purple-600"
                        placeholder="Password"
                        type="password"
                        onChange={(e) => setForm({ ...form, password: e.target.value })}
                    />
                    <p className="text-sm text-purple-900 mt-1">Enter strong password</p>
                </div>

                <div>
                    <input
                        className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring border-purple-300 focus:ring-purple-600"
                        placeholder="Mobile Number"
                        type="tel"
                        onChange={(e) => setForm({ ...form, mobilenumber: e.target.value })}
                    />
                    <p className="text-sm text-purple-900 mt-1">Enter valid mobile number</p>
                </div>

                <button
                    onClick={handleRegister}
                    disabled={loading}
                    className={`w-full py-2 px-4 flex justify-center items-center gap-2 ${
                        loading ? "bg-purple-400" : "bg-purple-600 hover:bg-purple-700"
                    } text-white font-semibold rounded-md transition duration-200`}
                >
                    {loading ? (
                        <>
                            <CircularProgress size={20} color="inherit" />
                            Register...
                        </>
                    ) : (
                        "Register"
                    )}
                </button>
            </div>
        </div>
    );
}
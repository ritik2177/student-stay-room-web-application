"use client";
import { signIn } from "next-auth/react";
import { useRouter } from "next/navigation";
import { useState } from "react";
import toast from "react-hot-toast";
import React from "react";
import CircularProgress from "@mui/material/CircularProgress";

export default function Login({ handleClose }: { handleClose: () => void }) {
  const [form, setForm] = useState({ email: "", password: "" });
  const [loading, setLoading] = useState(false);

  const router = useRouter();

  const handleLogin = async () => {
    setLoading(true);
    const res = await signIn("credentials", {
      ...form,
      redirect: false,
    });
    setLoading(false);

    if (res?.ok) {
      handleClose();
      router.push("/dashboard");
      toast.success("Login successful");
    } else {
      toast.error("Login failed");
    }
  };

  return (
    <div className="h-auto flex items-center justify-center">
      <div className="w-full max-w-sm bg-[#f5f5f5] px-8 pt-6 pb-4 space-y-6 rounded-xl relative">
        
        {/* Logo and Company Name (Top-Left) */}
        <div className="absolute top-4 left-4 flex items-center gap-2 ">
          <img src="/image/logo.png" className="w-8 h-8" alt="logo" />
          <p className="text-black text-lg font-semibold">StayNest</p>
        </div>

        {/* Add spacing to prevent overlapping with logo */}
        <div className="pt-4" />

        <h2 className="text-2xl font-bold text-center text-purple-800">Login</h2>

        <input
          name="email"
          placeholder="Email or Username"
          className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 border-purple-300 focus:ring-purple-600"
          onChange={(e) => setForm({ ...form, email: e.target.value })}
        />

        <input
          type="password"
          name="password"
          autoComplete="off"
          placeholder="Password"
          className="w-full px-4 py-2 border border-purple-300 rounded-md focus:outline-none focus:ring-2 focus:ring-purple-600"
          onChange={(e) => setForm({ ...form, password: e.target.value })}
        />

        <button
          onClick={handleLogin}
          disabled={loading}
          className={`w-full py-2 px-4 flex justify-center items-center gap-2 ${
            loading ? "bg-purple-400" : "bg-purple-600 hover:bg-purple-700"
          } text-white font-semibold rounded-md transition duration-200`}
        >
          {loading ? (
            <>
              <CircularProgress size={20} color="inherit" />
              Logging in...
            </>
          ) : (
            "Login"
          )}
        </button>
      </div>
    </div>
  );
}

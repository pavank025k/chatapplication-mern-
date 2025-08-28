import React, { useState } from "react";
import { useAuthStore } from "../store/useAuthStore";
import { Lock, Eye, EyeOff, Loader2, Mail, MessageSquare } from "lucide-react";
import { Link } from "react-router-dom";

const LoginPage = () => {
  const [showPassword, setShowPassword] = useState(false);
  const [formData, setFormData] = useState({ email: "", password: "" });
  const { login, isLoggingIn } = useAuthStore();

  const handleSubmit = async (e) => {
    e.preventDefault();
    login(formData);
  };

  return (
    <div className="h-screen flex justify-center items-center bg-gradient-to-r from-purple-200 via-pink-100 to-yellow-100 p-6">
      {/* Form Card */}
      <div className="w-full max-w-md bg-white shadow-2xl rounded-3xl p-10 space-y-8">
        {/* Logo */}
        <div className="text-center mb-6">
          <div className="flex flex-col items-center gap-3">
            <div className="p-4 rounded-2xl bg-gradient-to-tr from-purple-100 to-pink-100 flex items-center justify-center shadow-md">
              <MessageSquare className="size-6 text-purple-600" />
            </div>
            <h1 className="text-3xl font-bold text-gray-800 mt-2">Welcome Back</h1>
            <p className="text-gray-500">Sign in to your account</p>
          </div>
        </div>

        {/* Form */}
        <form onSubmit={handleSubmit} className="space-y-5">
          <div className="form-control relative">
            <label className="label font-medium text-gray-700">Email</label>
            <div className="relative">
              <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                <Mail className="size-5 text-gray-400" />
              </div>
              <input
                type="email"
                className="input input-bordered w-full pl-10 py-3 rounded-xl border-gray-300 focus:ring-2 focus:ring-purple-400 focus:border-transparent transition"
                placeholder="you@example.com"
                value={formData.email}
                onChange={(e) => setFormData({ ...formData, email: e.target.value })}
              />
            </div>
          </div>

          <div className="form-control relative">
            <label className="label font-medium text-gray-700">Password</label>
            <div className="relative">
              <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                <Lock className="size-5 text-gray-400" />
              </div>
              <input
                type={showPassword ? "text" : "password"}
                className="input input-bordered w-full pl-10 py-3 rounded-xl border-gray-300 focus:ring-2 focus:ring-purple-400 focus:border-transparent transition"
                placeholder="••••••••"
                value={formData.password}
                onChange={(e) => setFormData({ ...formData, password: e.target.value })}
              />
              <button
                type="button"
                className="absolute inset-y-0 right-0 pr-3 flex items-center"
                onClick={() => setShowPassword(!showPassword)}
              >
                {showPassword ? <EyeOff className="size-5 text-gray-400" /> : <Eye className="size-5 text-gray-400" />}
              </button>
            </div>
          </div>

          <button
            type="submit"
            className="btn w-full bg-gradient-to-r from-purple-500 to-pink-500 text-white font-semibold py-3 rounded-xl shadow-lg hover:scale-105 transform transition duration-300 flex justify-center items-center gap-2 disabled:opacity-50"
            disabled={isLoggingIn}
          >
            {isLoggingIn ? (
              <>
                <Loader2 className="size-5 animate-spin" /> Loading...
              </>
            ) : (
              "Sign in"
            )}
          </button>
        </form>

        <div className="text-center">
          <p className="text-gray-500">
            Don't have an account?{" "}
            <Link to="/signup" className="text-purple-600 font-semibold hover:underline">
              Create account
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
};

export default LoginPage;



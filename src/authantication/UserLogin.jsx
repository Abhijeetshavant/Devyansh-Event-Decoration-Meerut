import { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { Eye, EyeOff, Lock, Mail } from "lucide-react";

export default function UserLogin() {
  const navigate = useNavigate();

  const [showPassword, setShowPassword] = useState(false);
  const [successMsg, setSuccessMsg] = useState("");
  const [error, setError] = useState("");

  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError("");
    setSuccessMsg("");

    try {
      const res = await axios.post(
        "http://localhost:3000/api/auth/user/login",
        formData,
        {
          headers: { "Content-Type": "application/json" },
          withCredentials: true,
        },
      );

      setSuccessMsg(res.data.message);

      setTimeout(() => {
        navigate("/");
      }, 2000);
    } catch (err) {
      setError(err.response?.data?.message || "Login failed");
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-purple-600 via-pink-500 to-orange-400 px-4">
      <div className="w-full max-w-md bg-white rounded-2xl shadow-2xl p-8">
        {/* Title */}
        <div className="text-center mb-6">
          <h1 className="text-3xl font-bold text-gray-800">Event User Login</h1>
          <p className="text-gray-500 mt-2 text-sm">
            Login to book events, DJ & decoration services
          </p>
        </div>

        {/* Messages */}
        {error && (
          <p className="text-red-600 bg-red-100 border border-red-300 px-3 py-2 rounded-lg text-center mb-4">
            {error}
          </p>
        )}

        {successMsg && (
          <p className="text-green-600 bg-green-100 border border-green-300 px-3 py-2 rounded-lg text-center mb-4">
            {successMsg}
          </p>
        )}

        {/* Form */}
        <form onSubmit={handleSubmit} className="space-y-5">
          {/* Email */}
          <div>
            <label className="text-sm text-gray-600">Email</label>
            <div className="flex items-center border rounded-xl px-3 mt-1 focus-within:ring-2 focus-within:ring-purple-500">
              <Mail size={18} className="text-gray-400" />
              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                required
                placeholder="Enter your email"
                className="w-full p-3 outline-none"
              />
            </div>
          </div>

          {/* Password */}
          <div>
            <label className="text-sm text-gray-600">Password</label>
            <div className="flex items-center border rounded-xl px-3 mt-1 focus-within:ring-2 focus-within:ring-purple-500">
              <Lock size={18} className="text-gray-400" />
              <input
                type={showPassword ? "text" : "password"}
                name="password"
                value={formData.password}
                onChange={handleChange}
                required
                placeholder="Enter password"
                className="w-full p-3 outline-none"
              />
              <button
                type="button"
                onClick={() => setShowPassword(!showPassword)}
                className="text-gray-400"
              >
                {showPassword ? <EyeOff size={18} /> : <Eye size={18} />}
              </button>
            </div>
          </div>

          {/* Forgot */}
          <div className="text-right">
            <a href="#" className="text-sm text-purple-600 hover:underline">
              Forgot password?
            </a>
          </div>

          {/* Login Button */}
          <button
            type="submit"
            className="w-full bg-gradient-to-r from-purple-600 to-pink-500 text-white py-3 rounded-xl font-semibold hover:opacity-90 transition"
          >
            Login
          </button>
        </form>

        {/* Register */}
        <div className="my-6 text-center text-gray-400 text-sm">New here?</div>

        <a
          href="/user/register"
          className="block text-center border border-purple-600 text-purple-600 py-3 rounded-xl font-semibold hover:bg-purple-50 transition"
        >
          Create New Account
        </a>
      </div>
    </div>
  );
}

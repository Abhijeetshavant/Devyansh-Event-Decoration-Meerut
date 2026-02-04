import { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { Mail, Lock, User, Shield } from "lucide-react";

const AdminRegister = () => {
  const navigate = useNavigate();

  const [successMsg, setSuccessMsg] = useState("");
  const [error, setError] = useState("");

  const [admin, setAdmin] = useState({
    name: "",
    email: "",
    password: "",
    role: "admin",
  });

  const handleChange = (e) => {
    setAdmin({ ...admin, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError("");
    setSuccessMsg("");

    try {
      const res = await axios.post(
        "http://localhost:3000/api/auth/admin/register",
        admin,
        {
          headers: { "Content-Type": "application/json" },
          withCredentials: true,
        },
      );

      setSuccessMsg(res.data.message || "Admin registered successfully");

      setTimeout(() => {
        navigate("/admin/login");
      }, 2000);
    } catch (err) {
      setError(err.response?.data?.message || "Admin registration failed");
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-indigo-700 via-blue-600 to-sky-500 px-4">
      <div className="w-full max-w-md bg-white rounded-2xl shadow-2xl p-8">
        {/* Title */}
        <div className="text-center mb-6">
          <div className="flex justify-center mb-2">
            <Shield className="text-indigo-600" size={36} />
          </div>
          <h1 className="text-3xl font-bold text-gray-800">
            Create Admin Account
          </h1>
          <p className="text-gray-500 mt-2 text-sm">
            Register a new admin to manage the platform
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
          {/* Name */}
          <div>
            <label className="text-sm text-gray-600">Admin Name</label>
            <div className="flex items-center border rounded-xl px-3 mt-1 focus-within:ring-2 focus-within:ring-indigo-500">
              <User size={18} className="text-gray-400" />
              <input
                type="text"
                name="name"
                value={admin.name}
                onChange={handleChange}
                required
                placeholder="Enter admin name"
                className="w-full p-3 outline-none"
              />
            </div>
          </div>

          {/* Email */}
          <div>
            <label className="text-sm text-gray-600">Admin Email</label>
            <div className="flex items-center border rounded-xl px-3 mt-1 focus-within:ring-2 focus-within:ring-indigo-500">
              <Mail size={18} className="text-gray-400" />
              <input
                type="email"
                name="email"
                value={admin.email}
                onChange={handleChange}
                required
                placeholder="Enter admin email"
                className="w-full p-3 outline-none"
              />
            </div>
          </div>

          {/* Password */}
          <div>
            <label className="text-sm text-gray-600">Password</label>
            <div className="flex items-center border rounded-xl px-3 mt-1 focus-within:ring-2 focus-within:ring-indigo-500">
              <Lock size={18} className="text-gray-400" />
              <input
                type="password"
                name="password"
                value={admin.password}
                onChange={handleChange}
                required
                placeholder="Create a password"
                className="w-full p-3 outline-none"
              />
            </div>
          </div>

          {/* Role */}
          <div>
            <label className="text-sm text-gray-600">Role</label>
            <select
              name="role"
              value={admin.role}
              onChange={handleChange}
              className="w-full border rounded-xl px-3 py-3 focus:ring-2 focus:ring-indigo-500 outline-none"
            >
              <option value="admin">Admin</option>
              <option value="superadmin">Super Admin</option>
            </select>
          </div>

          {/* Register Button */}
          <button
            type="submit"
            className="w-full bg-gradient-to-r from-indigo-600 to-blue-500 text-white py-3 rounded-xl font-semibold hover:opacity-90 transition"
          >
            Register Admin
          </button>
        </form>

        {/* Divider */}
        <div className="my-6 text-center text-gray-400 text-sm">
          Already an admin?
        </div>

        {/* Login */}
        <a
          href="/admin/login"
          className="block text-center border border-indigo-600 text-indigo-600 py-3 rounded-xl font-semibold hover:bg-indigo-50 transition"
        >
          Login Here
        </a>
      </div>
    </div>
  );
};

export default AdminRegister;

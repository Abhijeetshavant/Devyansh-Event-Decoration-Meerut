import { useState } from "react";
import { Eye, EyeOff, Lock, Mail, Shield } from "lucide-react";

const AdminLogin = () => {
  const [showPassword, setShowPassword] = useState(false);
  const [error, setError] = useState("");
  const [successMsg, setSuccessMsg] = useState("");

  const [data, setData] = useState({
    email: "",
    password: "",
  });

  const handleChange = (e) =>
    setData({ ...data, [e.target.name]: e.target.value });

  const handleSubmit = (e) => {
    e.preventDefault();
    setError("");
    setSuccessMsg("");

    console.log("Admin Login:", data);
    setSuccessMsg("Admin logged in successfully");
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-indigo-700 via-blue-600 to-sky-500 px-4">
      <div className="w-full max-w-md bg-white rounded-2xl shadow-2xl p-8">
        {/* Title */}
        <div className="text-center mb-6">
          <div className="flex justify-center mb-2">
            <Shield className="text-indigo-600" size={36} />
          </div>
          <h1 className="text-3xl font-bold text-gray-800">Admin Login</h1>
          <p className="text-gray-500 mt-2 text-sm">
            Secure access to admin dashboard
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
            <label className="text-sm text-gray-600">Admin Email</label>
            <div className="flex items-center border rounded-xl px-3 mt-1 focus-within:ring-2 focus-within:ring-indigo-500">
              <Mail size={18} className="text-gray-400" />
              <input
                type="email"
                name="email"
                value={data.email}
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
                type={showPassword ? "text" : "password"}
                name="password"
                value={data.password}
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

          {/* Login Button */}
          <button
            type="submit"
            className="w-full bg-gradient-to-r from-indigo-600 to-blue-500 text-white py-3 rounded-xl font-semibold hover:opacity-90 transition"
          >
            Login as Admin
          </button>
        </form>

        {/* Divider */}
        <div className="my-6 text-center text-gray-400 text-sm">
          New admin here?
        </div>

        {/* Create Admin Account */}
        <a
          href="/admin/register"
          className="block text-center border border-indigo-600 text-indigo-600 py-3 rounded-xl font-semibold hover:bg-indigo-50 transition"
        >
          Create New Admin Account
        </a>
      </div>
    </div>
  );
};

export default AdminLogin;

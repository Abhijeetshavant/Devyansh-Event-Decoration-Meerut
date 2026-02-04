import { Link } from "react-router-dom";
import {
  FaUserCircle,
  FaSignOutAlt,
  FaShoppingBag,
  FaLock,
} from "react-icons/fa";

const Account = () => {
  // 🔐 TEMP: later replace with auth context / redux
  const isLoggedIn = true;
  const user = {
    name: "Abhijeet",
    email: "abhijeet@gmail.com",
  };

  return (
    <div className="min-h-screen bg-gray-100 flex justify-center p-4">
      <div className="w-full max-w-4xl bg-white rounded-lg shadow p-6">
        {/* Header */}
        <div className="flex items-center gap-4 border-b pb-4">
          <FaUserCircle className="text-5xl text-gray-600" />
          <div>
            <h2 className="text-xl font-semibold">
              {isLoggedIn ? user.name : "Guest User"}
            </h2>
            <p className="text-gray-500 text-sm">
              {isLoggedIn ? user.email : "Please login to continue"}
            </p>
          </div>
        </div>

        {/* Content */}
        <div className="grid md:grid-cols-2 gap-6 mt-6">
          {/* Orders */}
          <Link
            to="/user/orders"
            className="flex items-center gap-4 p-4 border rounded hover:bg-gray-50"
          >
            <FaShoppingBag className="text-2xl text-blue-600" />
            <div>
              <h3 className="font-medium">My Orders</h3>
              <p className="text-sm text-gray-500">
                View your booking & purchase history
              </p>
            </div>
          </Link>

          {/* Security */}
          <Link
            to="/account/security"
            className="flex items-center gap-4 p-4 border rounded hover:bg-gray-50"
          >
            <FaLock className="text-2xl text-green-600" />
            <div>
              <h3 className="font-medium">Account Security</h3>
              <p className="text-sm text-gray-500">
                Change password & manage security
              </p>
            </div>
          </Link>
        </div>

        {/* Login / Logout */}
        <div className="mt-8 border-t pt-6 text-center">
          {isLoggedIn ? (
            <button className="flex items-center justify-center gap-2 text-red-600 hover:text-red-700 font-medium">
              <FaSignOutAlt />
              Logout
            </button>
          ) : (
            <Link
              to="/login"
              className="inline-block bg-black text-white px-6 py-2 rounded hover:bg-gray-800"
            >
              Login to Account
            </Link>
          )}
        </div>
      </div>
    </div>
  );
};

export default Account;

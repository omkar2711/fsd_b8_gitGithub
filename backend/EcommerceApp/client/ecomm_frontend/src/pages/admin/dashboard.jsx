import { useState, useEffect } from 'react';
import { Outlet, Link, useNavigate } from 'react-router-dom';
import { getUserDetails } from '../../api/apis.js';
import Header from '../../components/Header';
import Footer from '../../components/Footer';

export default function Dashboard() {
  const navigate = useNavigate();
  const [user, setUser] = useState(null);
  const [activeTab, setActiveTab] = useState('overview');

  useEffect(() => {
    const fetchUserDetails = async () => {
      try {
        const token = localStorage.getItem('token');
        const userData = await getUserDetails(token);
        if (userData?.role !== 'admin') {
          navigate('/');
        } else {
          setUser(userData);
        }
      } catch (error) {
        console.error('Error fetching user details:', error);
        navigate('/login');
      }
    };

    fetchUserDetails();
  }, [navigate]);

  return (
    <div className="min-h-screen flex flex-col">
      <Header />

      <div className="flex-grow flex bg-gray-100">
        {/* Sidebar */}
        <div className="w-64 bg-gray-900 text-white p-6">
          <h2 className="text-2xl font-bold mb-8">Admin Panel</h2>

          <nav className="space-y-4">
            <button
              onClick={() => setActiveTab('overview')}
              className={`w-full text-left px-4 py-2 rounded-lg transition ${
                activeTab === 'overview'
                  ? 'bg-gray-700'
                  : 'hover:bg-gray-800'
              }`}
            >
              Overview
            </button>
            <Link
              to="/admin/user-listing"
              onClick={() => setActiveTab('users')}
              className={`block w-full text-left px-4 py-2 rounded-lg transition ${
                activeTab === 'users'
                  ? 'bg-gray-700'
                  : 'hover:bg-gray-800'
              }`}
            >
              Manage Users
            </Link>
            <Link
              to="/admin/order-tracking"
              onClick={() => setActiveTab('orders')}
              className={`block w-full text-left px-4 py-2 rounded-lg transition ${
                activeTab === 'orders'
                  ? 'bg-gray-700'
                  : 'hover:bg-gray-800'
              }`}
            >
              Manage Orders
            </Link>
            <Link
              to="/admin/create-product"
              onClick={() => setActiveTab('products')}
              className={`block w-full text-left px-4 py-2 rounded-lg transition ${
                activeTab === 'products'
                  ? 'bg-gray-700'
                  : 'hover:bg-gray-800'
              }`}
            >
              Manage Products
            </Link>
          </nav>

          {user && (
            <div className="mt-8 pt-8 border-t border-gray-700">
              <p className="text-sm text-gray-400">Logged in as:</p>
              <p className="font-semibold text-white">{user.firstName} {user.lastName}</p>
              <p className="text-xs text-gray-400">({user.role})</p>
            </div>
          )}
        </div>

        {/* Main Content */}
        <div className="flex-grow p-8">
          {activeTab === 'overview' && (
            <div>
              <h1 className="text-4xl font-bold mb-8">Dashboard Overview</h1>
{/* 
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
                <div className="bg-white rounded-lg p-6 shadow">
                  <p className="text-gray-600 text-sm">Total Users</p>
                  <p className="text-4xl font-bold text-gray-900 mt-2">0</p>
                </div>
                <div className="bg-white rounded-lg p-6 shadow">
                  <p className="text-gray-600 text-sm">Total Orders</p>
                  <p className="text-4xl font-bold text-gray-900 mt-2">0</p>
                </div>
                <div className="bg-white rounded-lg p-6 shadow">
                  <p className="text-gray-600 text-sm">Total Products</p>
                  <p className="text-4xl font-bold text-gray-900 mt-2">0</p>
                </div>
              </div> */}

              <div className="bg-white rounded-lg p-6 shadow">
                <h2 className="text-2xl font-bold mb-4">Quick Actions</h2>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                  <Link
                    to="/admin/create-product"
                    className="bg-blue-600 text-white px-6 py-3 rounded-lg font-semibold hover:bg-blue-700 text-center"
                  >
                    Add New Product
                  </Link>
                  <Link
                    to="/admin/user-listing"
                    className="bg-green-600 text-white px-6 py-3 rounded-lg font-semibold hover:bg-green-700 text-center"
                  >
                    View All Users
                  </Link>
                  <Link
                    to="/admin/order-tracking"
                    className="bg-purple-600 text-white px-6 py-3 rounded-lg font-semibold hover:bg-purple-700 text-center"
                  >
                    View All Orders
                  </Link>
                </div>
              </div>
            </div>
          )}

          <Outlet context={{ setActiveTab }} />
        </div>
      </div>

      <Footer />
    </div>
  );
}

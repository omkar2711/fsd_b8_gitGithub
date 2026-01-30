import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { getUserOrders, getUserDetails } from '../api/apis';
import Header from '../components/Header';
import Footer from '../components/Footer';

export default function Profile() {
  const navigate = useNavigate();
  const [user, setUser] = useState(null);
  const [orders, setOrders] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const token = localStorage.getItem('token');
    if (!token) {
      navigate('/login');
      return;
    }

    const fetchUserData = async () => {
      const userData = await getUserDetails(token);
      setUser(userData);

      const ordersData = await getUserOrders(token);
      setOrders(ordersData || []);

      setLoading(false);
    };

    fetchUserData();
  }, [navigate]);

  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <p className="text-gray-500">Loading profile...</p>
      </div>
    );
  }

  return (
    <div className="min-h-screen flex flex-col">
      <Header />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 flex-grow w-full">
        <h1 className="text-4xl font-bold mb-8">My Profile</h1>

        {user && (
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
            {/* User Info */}
            <div className="md:col-span-1 bg-gray-50 rounded-lg p-6">
              <h2 className="text-2xl font-bold mb-4">Account Information</h2>
              <div className="space-y-4">
                <div>
                  <label className="text-sm text-gray-600">Name</label>
                  <p className="font-semibold">{user.firstName} {user.lastName}</p>
                </div>
                <div>
                  <label className="text-sm text-gray-600">Email</label>
                  <p className="font-semibold">{user.email}</p>
                </div>
                <div>
                  <label className="text-sm text-gray-600">Phone</label>
                  <p className="font-semibold">{user.phone || 'Not set'}</p>
                </div>
                <div>
                  <label className="text-sm text-gray-600">Role</label>
                  <p className="font-semibold capitalize">{user.role}</p>
                </div>
                {user.address?.street && (
                  <div>
                    <label className="text-sm text-gray-600">Address</label>
                    <p className="font-semibold">
                      {user.address.street}, {user.address.city}, {user.address.state} {user.address.zipCode}
                    </p>
                  </div>
                )}
              </div>
            </div>

            {/* Order Stats */}
            <div className="md:col-span-2">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-8">
                <div className="bg-blue-50 rounded-lg p-6">
                  <p className="text-gray-600 text-sm">Total Orders</p>
                  <p className="text-3xl font-bold text-blue-600">{orders.length}</p>
                </div>
                <div className="bg-green-50 rounded-lg p-6">
                  <p className="text-gray-600 text-sm">Total Spent</p>
                  <p className="text-3xl font-bold text-green-600">
                    ₹{orders.reduce((total, order) => total + order.totalPrice, 0)}
                  </p>
                </div>
              </div>

              {/* Recent Orders */}
              <div>
                <h3 className="text-2xl font-bold mb-4">Order Status</h3>
                <div className="space-y-3">
                  {orders.length > 0 ? (
                    orders.map(order => (
                      <div key={order._id} className="border border-gray-200 rounded-lg p-4">
                        <div className="flex justify-between items-start mb-2">
                          <div>
                            <p className="font-semibold">Order #{order._id.slice(-8)}</p>
                            <p className="text-sm text-gray-600">
                              {new Date(order.createdAt).toLocaleDateString()}
                            </p>
                          </div>
                          <div className="text-right">
                            <p className="font-semibold">₹{order.totalPrice}</p>
                            <span
                              className={`text-xs px-3 py-1 rounded-full font-semibold ${
                                order.status === 'delivered'
                                  ? 'bg-green-100 text-green-800'
                                  : order.status === 'pending'
                                  ? 'bg-yellow-100 text-yellow-800'
                                  : 'bg-blue-100 text-blue-800'
                              }`}
                            >
                              {order.status.charAt(0).toUpperCase() + order.status.slice(1)}
                            </span>
                          </div>
                        </div>
                        <div className="text-sm text-gray-600">
                          <p>{order.products.length} item(s)</p>
                          {order.isPaid && <p className="text-green-600 font-semibold">Paid</p>}
                        </div>
                      </div>
                    ))
                  ) : (
                    <p className="text-gray-500">No orders yet</p>
                  )}
                </div>
              </div>
            </div>
          </div>
        )}
      </div>

      <Footer />
    </div>
  );
}

import { Routes, Route } from 'react-router-dom'; 
import Home from './pages/Home.jsx';
import LoginPage from './pages/auth/loginPage.jsx';
import RegisterPage from './pages/auth/registerPage.jsx';
import Dashboard from './pages/admin/dashboard.jsx';
import CreateProduct from './pages/admin/CreateProduct.jsx';
import OrderTracking from './pages/admin/OrderTracking.jsx';
import ProductDescription from './pages/ProductDescription.jsx';
import UserListing from './pages/admin/UserListing.jsx';
import ProductPage from './pages/ProductPage.jsx';
import Cart from './pages/Cart.jsx';
import Profile from './pages/Profile.jsx';

function App() {
  return (
    <Routes>
      <Route path='/' element={<Home />} />
      <Route path='/register' element={<RegisterPage />} />
      <Route path='/login' element={<LoginPage />} />
      <Route path='/product' element={<ProductPage />} />
      <Route path='/product/:productId' element={<ProductDescription />} />
      <Route path='/cart' element={<Cart />} />
      <Route path='/profile' element={<Profile />} />

      {/* Admin nested routes */}
      <Route path='admin' element={<Dashboard />}>
        <Route path='create-product' element={<CreateProduct />} />
        <Route path='order-tracking' element={<OrderTracking />} />
        <Route path='user-listing' element={<UserListing />} />
      </Route>
    </Routes>
  );
}

export default App;

import { BrowserRouter, Routes, Route } from 'react-router';
import LoginPage from './LoginPage';
import ForgotPasswordPage from './ForgotPasswordPage';
import RegisterPage from './RegisterPage';
import VerifyAccountPage from './VerifyAccountPage';
import ProductsPage from './ProductsPage';
import ResetPasswordPage from './ResetPasswordPage';
import axios from 'axios';
import './App.css'

function App() {

  const token = localStorage.getItem('token');
  if (token) {
    axios.defaults.headers.common['Authorization'] = `Bearer ${token}`;
  }

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<LoginPage />} />
        <Route path="/forgot-password" element={<ForgotPasswordPage />} />
        <Route path="/register" element={<RegisterPage />} />
        <Route path="/verify-account/:token" element={<VerifyAccountPage />} />
        <Route path="/products" element={<ProductsPage />} />
        <Route path="/reset-password" element={<ResetPasswordPage />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App

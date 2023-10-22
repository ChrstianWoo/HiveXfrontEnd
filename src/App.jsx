import React from 'react';
import './App.css';
import { useEffect, useState } from 'react';
import { BrowserRouter as Router, Route, Routes, Navigate } from 'react-router-dom';
import { LoginPage } from './pages/LoginPage';
import { ForgotPasswordPage} from './pages/ForgotPasswordPage';
import { LogOutPage } from './pages/LogOutPage';
import { RegisterPage } from './pages/RegisterPage';
import { MyWalletPage } from './pages/MyWalletPage';
import { MyPointsPage } from "./pages/MyPointsPage";
import { VenueRegister } from './pages/VenueRegister';
import { VenueDashboard } from './pages/VenueDashboard';

const ProtectedRoute = ({ isLoggedIn, redirectPath = '/login', children }) => {
  console.log(isLoggedIn);
  if (!isLoggedIn || isLoggedIn === 'false') {
    return <Navigate to={redirectPath} replace />;
  }

  return children;
};

function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(localStorage.getItem('isLoggedIn'));

  useEffect(() => {
    if (localStorage.getItem('isLoggedIn') === null) {
      localStorage.setItem('isLoggedIn', false);
      setIsLoggedIn(false);
    } else {
      localStorage.setItem('isLoggedIn', isLoggedIn);
      setIsLoggedIn(localStorage.getItem('isLoggedIn'));
    }
  }, [isLoggedIn]);

  const handleLogin = () => {
    setIsLoggedIn(true);
  };

  const handleLogout = () => {
    setIsLoggedIn(false);
  };

  return (
    <Routes>
      <Route
          path="/"
          element={
            <ProtectedRoute isLoggedIn={isLoggedIn}>
              <MyWalletPage handleLogout={handleLogout} />
            </ProtectedRoute>
          }
        />
      <Route path="/login" element={<LoginPage handleLogin={handleLogin} />} />
      <Route path="/" element={<MyWalletPage />} />
      <Route path="/forgot-pass" element={<ForgotPasswordPage />} />
      <Route path="/logout" element={<LogOutPage />} />
      <Route path="/register" element={<RegisterPage />} />
      <Route path="/venue-dashboard" element={<VenueDashboard />} />
      <Route path="/venue-register" element={<VenueRegister />} />
      <Route path="/my-points" element={<MyPointsPage />} />
    </Routes>
  );
}

export default App;
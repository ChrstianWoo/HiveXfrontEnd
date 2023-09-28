import React from 'react';
import './App.css';
import { useEffect, useState } from 'react';
import { BrowserRouter as Router, Route, Routes, Navigate } from 'react-router-dom';
import { LoginPage } from './pages/LoginPage';
import { DashboardPage } from './pages/DashboardPage';
import { ForgotPasswordPage} from './pages/ForgotPasswordPage';
import { LogOutPage } from './pages/LogOutPage';
import { RegisterPage } from './pages/RegisterPage';

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
              <DashboardPage handleLogout={handleLogout} />
            </ProtectedRoute>
          }
        />
       <Route path="/login" element={<LoginPage handleLogin={handleLogin} />} />
      <Route path="/login" element={<LoginPage />} />
      <Route path="/dashboard" element={<DashboardPage />} />
      <Route path="/forgot-password" element={<ForgotPasswordPage />} />
      <Route path="/logout" element={<LogOutPage />} />
      <Route path="/register" element={<RegisterPage />} />
    </Routes>
  );
}

export default App;
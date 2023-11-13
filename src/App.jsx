import React from 'react';
import './App.css';
import { useEffect, useState } from 'react';
import { BrowserRouter as Router, Route, Routes, Navigate } from 'react-router-dom';
import { LoginPage } from './pages/LoginPage';
import { ForgotPasswordPage} from './pages/ForgotPasswordPage';
import { VenueEmailRegistration } from './pages/VenueEmailRegistrationPage';
import { LogOutPage } from './pages/LogOutPage';
import { RegisterPage } from './pages/RegisterPage';
import { MyWalletPage } from './pages/MyWalletPage';
import { MyPointsPage } from "./pages/MyPointsPage";
import { ProfilePage } from "./pages/ProfilePage";
import { VenueRegister } from './pages/VenueRegister';
import { VenueDashboard } from './pages/VenueDashboard';
import { MyVenuePage } from './pages/MyVenuePage';
import { DealsApprovingPage } from './pages/DealsApprovingPage';
import { RunningDealsPage } from './pages/RunningDealsPage';
import { BrokerDashboard } from './pages/BrokerDashboard';
import { MyDealsPage } from './pages/MyDealsPage';
import { AnalyticsPage } from './pages/analyticsPage';
import { VenueBrokerPage } from './pages/VenueBrokerPage';
import { InvVenuePage } from './pages/InvVenuePage';
import { DealsApprovedLivePage } from './pages/DealsApprovedLivePage';
import { RunningDealsPaused } from './pages/RunningDealsPaused';
import { BrokeDealPage } from './pages/BrokeDealPage';
import { BrokerProfilePage } from './pages/BrokerProfilePage';
import AndiamoPage from './pages/AndiamoPage';
import GingerAndSpicePage from './pages/GingerAndSpicePage';
import ShanghaiDumplingPage from './pages/ShanghaiDumplingPage';
import VenueCouponAccept from './pages/Venuecouponaccept';

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
      <Route path="/venue-email-register" element={<VenueEmailRegistration />} />
      <Route path="/logout" element={<LogOutPage />} />
      <Route path="/register" element={<RegisterPage />} />
      <Route path="/venue-dashboard" element={<VenueDashboard />} />
      <Route path="/venue-register" element={<VenueRegister />} />
      <Route path="/profile-page" element={<ProfilePage />} />
      <Route path="/my-points" element={<MyPointsPage />} />
      <Route path="/my-venue" element={<MyVenuePage />} />
      <Route path="/deals-approving" element={<DealsApprovingPage />} />
      <Route path="/go-live" element={<DealsApprovedLivePage />} />
      <Route path="/running-deals" element={<RunningDealsPage />} />
      <Route path="/broker-dashboard" element={<BrokerDashboard />} />
      <Route path="/pause-deal" element={<RunningDealsPaused />} />
      <Route path="/my-deals" element={<MyDealsPage />} />
      <Route path="/analytics" element={<AnalyticsPage />} />
      <Route path="/venue" element={<VenueBrokerPage />} />
      <Route path="/inv-venue" element={<InvVenuePage />} />
      <Route path="/broke-deal" element={<BrokeDealPage/>} />
      <Route path="/broker-profile-page" element ={<BrokerProfilePage/>} />
      <Route path="/deals/Andiamo" element={<AndiamoPage />} />
      <Route path="/deals/ginger-and-spice" element={<GingerAndSpicePage />} />
      <Route path="/deals/shanghai-dumpling" element={<ShanghaiDumplingPage />} />
      <Route path="/coupon-accept" element={<VenueCouponAccept />} />
    </Routes>
  );
}

export default App;
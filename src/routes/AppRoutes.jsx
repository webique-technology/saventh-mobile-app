import { Routes, Route, Navigate } from "react-router-dom";
import AuthLayout from "../layouts/AuthLayout";

// Pages
import Welcome from "../pages/welcome/Welcome";
import Splash from "../pages/onboarding/Splash";
import CreateAccount from "../pages/onboarding/CreateAccount";
import VerifyOtp from "../pages/onboarding/VerifyOtp";
import PanVerification from "../pages/onboarding/PanVerification";
import PersonalDetails from "../pages/onboarding/PersonalDetails";
import AddressDetails from "../pages/onboarding/AddressDetails";
import BankDetails from "../pages/onboarding/BankDetails";
import Done from "../pages/onboarding/Done";

import SignIn from "../pages/auth/SignIn";
import ForgotPassword from "../pages/auth/ForgotPassword";
import ResetPassword from "../pages/auth/ResetPassword";

import Dashboard from "../pages/app/Dashboard";

export default function AppRoutes() {
  return (
    <Routes>
      <Route path="/" element={<Welcome />} />

      <Route element={<AuthLayout />}>
        <Route path="/splash" element={<Splash />} />

        {/* Onboarding */}
        <Route path="/create-account" element={<CreateAccount />} />
        <Route path="/verify-otp" element={<VerifyOtp />} />
        <Route path="/pan-verification" element={<PanVerification />} />
        <Route path="/personal-details" element={<PersonalDetails />} />
        <Route path="/address-details" element={<AddressDetails />} />
        <Route path="/bank-details" element={<BankDetails />} />
        <Route path="/done" element={<Done />} />

        {/* Auth */}
        <Route path="/sign-in" element={<SignIn />} />
        <Route path="/forgot-password" element={<ForgotPassword />} />
        <Route path="/reset-password" element={<ResetPassword />} />
      </Route>

      {/* App */}
      <Route path="/dashboard" element={<Dashboard />} />

      <Route path="*" element={<Navigate to="/splash" replace />} />
    </Routes>
  );
}

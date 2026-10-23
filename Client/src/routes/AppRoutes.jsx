import React from "react";
import { Route, Routes } from "react-router-dom";
import Login from "../components/Login.jsx";
import Register from "../components/Register.jsx";
import ProtectedRoute from "../components/ProtectedRoute";
import Layout from "../pages/Layout.jsx";
import Profile from "../pages/Profile.jsx";
import LeadsCustomers from "../components/LeadsCustomers.jsx";
import LeadId from "../components/leadId.jsx";

const AppRoutes = () => {
  return (
    <Routes>
      <Route path="/login" element={<Login />} />
      <Route path="/register" element={<Register />} />

      <Route element={<ProtectedRoute />}>
        <Route path="/" element={<Layout />} />
        <Route path="/profile" element={<Profile />} />
        <Route path="/leads/:id" element={<LeadId />} />
      </Route>
    </Routes>
  );
};

export default AppRoutes;
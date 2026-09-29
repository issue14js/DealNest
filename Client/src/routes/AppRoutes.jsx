import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Login from '../components/Login.jsx'
import Register from '../components/Register.jsx'
import ProtectedRoute from '../components/ProtectedRoute'
import Home from '../pages/Home.jsx'
import Dashboard from '../pages/Dashboard.jsx'
import Profile from '../pages/Profile.jsx'

const AppRoutes = () => {
  return (
    <Routes>
      <Route path='/login' element={<Login/>}/>
      <Route path='/register' element={<Register/>} />
      <Route element={<ProtectedRoute/>}>
      <Route path='/' element={<Dashboard/>}/>
      <Route path='/profile' element={<Profile/>}/>
      <Route path='/dashboard' element={<Dashboard/>} />
      </Route>
    </Routes>
  )
}

export default AppRoutes
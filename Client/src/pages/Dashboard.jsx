import React from 'react'
import { useAuth } from '../hooks/useAuth'
import Navbar from '../components/Navbar'

const Dashboard = () => {
    const {user} = useAuth()
  return (
    <div className="h-screen w-full">
      <Navbar/>
    </div>
  )
}

export default Dashboard
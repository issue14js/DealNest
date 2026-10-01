import React from 'react'
import { useAuth } from '../hooks/useAuth'
import Navbar from '../components/Navbar'
import Sidebar from '../components/Sidebar'
import LeadsCustomers from './LeadsCustomers'

const Dashboard = () => {
    const {user} = useAuth()
  return (
    <div className="h-screen w-full">
      <Navbar/>
      <div className=" flex h-180 lg:h-142 w-full">
      <Sidebar/>
      <LeadsCustomers/>
      </div>
    </div>
  )
}

export default Dashboard
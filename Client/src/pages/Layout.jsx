import React, { useState } from 'react'
import { useAuth } from '../hooks/useAuth'
import Navbar from '../components/Navbar'
import Sidebar from '../components/Sidebar'
import LeadsCustomers from '../components/LeadsCustomers'

const Dashboard = () => {
    const {user} = useAuth()
    const [tabs, setTabs] = useState("Dashboard")
  return (
    <div className="h-screen w-full">
      <Navbar/>
      <div className=" flex h-180 lg:h-142 w-full">
      <Sidebar setTabs = {setTabs}/>
      {tabs === "CustomerLead" && (
      <LeadsCustomers tabs = {tabs}/>
           )}
      </div>
    </div>
  )
}

export default Dashboard
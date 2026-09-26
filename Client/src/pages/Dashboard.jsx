import React from 'react'
import { useAuth } from '../hooks/useAuth'

const Dashboard = () => {
    const {user} = useAuth()
  return (
    <div>Dashboard
        <h1>Hello{user.name}</h1>
    </div>
  )
}

export default Dashboard
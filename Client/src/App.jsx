import { useEffect, useState } from 'react'
import AppRoutes from './routes/AppRoutes.jsx'
import { useAuth } from './hooks/useAuth.js';


const App = () => {
  const {checkAuth} = useAuth()
  useEffect(() => {
   checkAuth();
}, []);

  return (
   <div className="flex justify-center items-center h-screen w-full">
    <AppRoutes/>
   
   </div>
  )
}

export default App
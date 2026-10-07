import { useEffect, useState } from 'react'
import AppRoutes from './routes/AppRoutes.jsx'
import { useAuth } from './hooks/useAuth.js';
import Sidebar from './components/Sidebar.jsx';
import { useLead } from './hooks/uselead.js';

const App = () => {
    const {checklead}= useLead()
    const {checkAuth} = useAuth()
    
  useEffect(() => {
   checkAuth();
}, []);

  useEffect(() => {
   checklead();
}, []);

  return (
   <div className="flex justify-center items-center h-screen w-full">
    <AppRoutes/>
   
   </div>
  )
}
export default App
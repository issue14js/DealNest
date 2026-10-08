import { useEffect, useState } from 'react'
import AppRoutes from './routes/AppRoutes.jsx'
import { useAuth } from './hooks/useAuth.js';
import Sidebar from './components/Sidebar.jsx';
import { useLead } from './hooks/uselead.js';
import CreateLead from './components/CreateLead.jsx';


const App = () => {
    const {checklead,createlead}= useLead()
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
    {createlead?<CreateLead/>:""}
   
   </div>
  )
}
export default App
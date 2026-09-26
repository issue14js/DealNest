import { useState } from 'react'
import Login from './components/Login'
import Register from './components/Register'
import { Route,  Routes } from 'react-router-dom'
import Dashboard from './pages/Dashboard'



const App = () => {
  const [mode, setMode] = useState('login')

  return (
   <div className="flex justify-center items-center h-screen w-full">
    <Routes>
      <Route path='/' element={<h1>Home</h1>}/>
      <Route path='/login' element={<Login/>}/>
      <Route path='/register' element={<Register />} />
      <Route path='/dashboard' element={<Dashboard/>} />
    </Routes>
   </div>
  )
}

export default App
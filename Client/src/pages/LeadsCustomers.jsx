import React from 'react'
import {RiArrowRightSLine} from "@remixicon/react"
import { useNavigate } from 'react-router-dom'
import { Link } from "react-router-dom";


const LeadsCustomers = () => {
    const navigate = useNavigate()
  return (
    <div className='w-[80%]  '>
        {/* Header */}
        <div className="shadow shadow-outline-variant flex items-center px-4 h-15 w-full">
            <span className='flex items-center text-sm'> <p className='cursor-pointer' onClick={navigate("/")}>Home</p> <RiArrowRightSLine /> Leads & Customers </span>
        </div>
    </div>
  )
}

export default LeadsCustomers
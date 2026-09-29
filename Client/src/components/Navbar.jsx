import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import {
  RiAddLine,
  RiSearchLine,
  RiCalendarLine,
  RiNotification3Line,
  RiArrowDownSLine,
  RiContactsBook2Line,
  RiBuildingLine,
} from "@remixicon/react";
import { useAuth } from "../hooks/useAuth";

const Navbar = () => {
  const navigate = useNavigate()
  const { user } = useAuth();
  const [Dropwown, setDropwown] = useState(false)

  return (
    <div className="lg:h-20 h-15 w-full flex items-center justify-between gap-3 py-2 px-3 sm:px-4 bg-background shadow  ">

      {/* Left Section */}
      <div className="flex gap-2 sm:gap-4 items-center min-w-0 flex-1">

        {/* Logo */}
        <img
          onClick={()=>{navigate('/')}}
          className="h-9 w-9  cursor-pointer sm:h-10 sm:w-10  shrink-0"
          src="/icons.svg"
          alt="App_logo"
        />

        {/* Search */}
        <div className="shadow-outline shadow border-outline-variant items-center px-3 sm:px-4 gap-2 flex h-10 sm:h-11 rounded-4xl outline-none overflow-hidden bg-surface-container-high w-full max-w-[460px]">

          <RiSearchLine size={18} className="shrink-0" />

          <input
            className="outline-none h-full w-full min-w-0 bg-transparent"
            type="search"
          />

          {/* Ctrl + K only bigger screens */}
          <button className="hidden cursor-pointer md:block h-5 w-15 text-[11px] px-2 rounded-[7px] font-sans shadow  bg-background shrink-0">
            Ctrl+K
          </button>
        </div>
      </div>

      {/* Right Section */}
      <div className="flex gap-2 sm:gap-4 h-11 items-center shrink-0">

        {/* New Lead */}
        <button className="flex cursor-pointer rounded-4xl px-3 sm:px-4 py-2 shadow-outline shadow shadow-primary items-center gap-1 bg-primary-container text-surface-bright">
          <RiAddLine size={18} />
          <span className="hidden lg:inline">New Lead</span>
        </button>

        {/* Calendar */}
        <button className="hidden sm:flex cursor-pointer bg-amber-50 p-3 rounded-full  shadow-outline shadow ">
          <RiCalendarLine size={18} />
        </button>

        {/* Notification */}
        <button className="hidden cursor-pointer sm:flex bg-amber-50 p-3 rounded-full shadow-outline shadow">
          <RiNotification3Line size={18} />
        </button>

        {/* User */}
        <div className="relative shadow-outline shadow flex gap-1 items-center rounded-4xl p-1">

          <img
            className=" rounded-full h-9 w-9 sm:h-10 sm:w-10 shrink-0"
            src={user?.avatar}
            alt=""
          />

          {/* Name + Role */}
          <div className="hidden md:block items-center px-1">
            <span className="flex flex-col font-semibold text-sm">
              {user?.name}
            </span>

            <p className="text-sm text-primary-container font-semibold">
              {user?.role}
            </p>
          </div>

          <button onClick={() => setDropwown(!Dropwown)} className="px-2 cursor-pointer bg-amber-50">
            <RiArrowDownSLine />
          </button>

          {/* Dropdown */}
          {Dropwown && (
            <div className="bg-background shadow-outline shadow border-outline absolute top-13 right-0 w-72 flex gap-1 flex-col rounded-2xl py-2 px-4">

            <div onClick={()=>{navigate('/profile')}} className="border-b  cursor-pointer px-2  pb-2" >
              <span className="flex flex-col font-semibold text-sm">
                {user?.name}
              </span>

              <p className="text-[12px] text-outline font-semibold">
                {user?.email}
              </p>
            </div>

            <div className="rounded gap-1 cursor-pointer text-sm hover:bg-outline-variant flex items-center p-2">
              <RiContactsBook2Line color="#003d48" size={20} />
              <span>Lead 360: Sophia Martinez</span>
            </div>

            <div className="rounded gap-1 cursor-pointer text-sm hover:bg-outline-variant flex items-center p-2">
              <RiBuildingLine color="#003d48" size={20} />
              <span>Customer Dossier: CUST-8492</span>
            </div>

          </div>
          )}
          
        </div>
      </div>
    </div>
  );
};

export default Navbar;
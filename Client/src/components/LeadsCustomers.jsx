import React, { useState } from "react";
import {
  RiArrowRightSLine,
  RiSearchLine,
  RiRefreshLine,
  RiGlobalLine,
  RiCircleFill,
  RiEyeLine,
  RiPencilLine,
  RiMore2Line,
  RiAddLine
} from "@remixicon/react";
import { useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";
import LeadComponents from "./leadComponents";

const LeadsCustomers = (tabs) => {
  const navigate = useNavigate();
  const [filter, setfilter] = useState("All_Leads");

  const ClickAllLeads = () => {
    setfilter("All_Leads");
  };
  const ClickAssignedToMe = () => {
    setfilter("AssignedToMe");
  };
  const ClickConvertedCustomers = () => {
    setfilter("ConvertedCustomers");
  };
  const ClickArchived = () => {
    setfilter("Archived");
  };
  return (
    <div className={` w-[80%]  `}>
      {/* Header */}
      <div className="shadow shadow-outline-variant flex flex-col justify-center p-4  w-full">
        <span className="flex py-2 items-center text-sm">
          {" "}
          <p
            className="cursor-pointer"
            onClick={() => {
              navigate("/");
            }}
          >
            Home
          </p>{" "}
          <RiArrowRightSLine /> Leads & Customers{" "}
        </span>
        <div className="w-full justify-between flex p-2  ">
          <div className="">
            <h1 className="text-3xl">Leads & Customers</h1>
            <span className="text-sm font-w opacity-60">
              Multi-stage enterprise pipeline directory with real-time
              attribution <br />
              and round-robin allocation.
            </span>
          </div>
          <div className="flex items-end justify-end h-20 w-1/2">
            <button className="flex cursor-pointer rounded-4xl px-3 sm:px-4 py-2 shadow-outline shadow  items-center gap-1 bg-primary-container text-surface-bright">
          <RiAddLine size={18} />
          <span className="hidden lg:inline">New Lead</span>
        </button>
          </div>
        </div>
      </div>
      {/* Tabs */}
      <div className=" py-2 rounded overflow-x-auto  flex justify-around [scrollbar-width:none] [&::-webkit-scrollbar]:hidden  w-full shadow-[inset_0_0_4px_rgba(0,0,0,0.08)] shadow-outline ">
        <button
          onClick={ClickAllLeads}
          className={` cursor-pointer ${filter == "All_Leads" ? " shadow shadow-on-surface-variant" : ""} outline-none rounded px-4 py-2  `}
        >
          All Leads <span>99</span>{" "}
        </button>
        <button
          onClick={ClickAssignedToMe}
          className={` cursor-pointer  outline-none rounded px-4 py-2 ${filter == "AssignedToMe" ? " shadow shadow-on-surface-variant" : ""} `}
        >
          Assigned to Me <span>99</span>{" "}
        </button>
        <button
          onClick={ClickConvertedCustomers}
          className={` cursor-pointeroutline-none rounded px-4 py-2 ${filter == "ConvertedCustomers" ? " shadow shadow-on-surface-variant" : ""} `}
        >
          Converted Customers <span>99</span>{" "}
        </button>
        <button
          onClick={ClickArchived}
          className={` cursor-pointer outline-none rounded px-4 py-2 ${filter == "Archived" ? " shadow shadow-on-surface-variant" : ""} `}
        >
          Archived <span>99</span>{" "}
        </button>
      </div>
      {/* Search and filter */}
      <div className="overflow-x-auto [scrollbar-width:none] [&::-webkit-scrollbar]:hidden">
        <div className="className= flex w-full  lg:flex-wrap items-center gap-2 px-4 py-2">
          {/* SEARCH */}
          <div className="flex h-10 w-30 shrink-0 items-center gap-2 overflow-hidden rounded-4xl border border-outline px-3 shadow-[inset_0_0_5px_rgba(0,0,0,0.08)]  sm:h-11 lg:w-120">
            <RiSearchLine size={18} className="shrink-0" />

            <input
              className="h-full min-w-0 flex-1 bg-transparent outline-none"
              type="search"
              placeholder="Search"
            />
          </div>

          {/* STATUS */}
          <div className="flex h-10 shrink-0 items-center rounded-4xl border border-outline px-3 shadow-[inset_0_0_5px_rgba(0,0,0,0.08)]">
            <span className="text-[11px]">STATUS:</span>

            <select className="bg-transparent text-sm font-semibold text-primary outline-none">
              <option value="">All</option>
              <option value="new">New</option>
              <option value="contacted">Contacted</option>
              <option value="qualified">Qualified</option>
            </select>
          </div>

          {/* SOURCE */}
          <div className="flex h-10 shrink-0 items-center rounded-4xl border border-outline px-3 shadow-[inset_0_0_5px_rgba(0,0,0,0.08)]">
            <span className="text-[11px]">SOURCE:</span>

            <select className="bg-transparent text-sm font-semibold text-primary outline-none">
              <option value="">All</option>
              <option value="website">Website</option>
              <option value="referral">Referral</option>
              <option value="social">Social Media</option>
            </select>
          </div>

          {/* ASSIGNED TO */}
          <div className="flex h-10 shrink-0 items-center rounded-4xl border border-outline px-3 shadow-[inset_0_0_5px_rgba(0,0,0,0.08)]">
            <span className="text-[11px]">ASSIGNED:</span>

            <select className="bg-transparent text-sm font-semibold text-primary outline-none">
              <option value="">All</option>
              <option value="user1">User 1</option>
              <option value="user2">User 2</option>
            </select>
          </div>

          <button className="shrink-0 rounded-full p-2">
            <RiRefreshLine />
          </button>
        </div>
      </div>

        {/* Leads Data */}
        <div className=" overflow-auto  h-70  [scrollbar-width:none] [&::-webkit-scrollbar]:hidden ">
          <div className="lg:w-full flex lg:justify-between items-center lg:px-4 py-2 lg:gap-0  px-2 gap-11 ">
            <h1 className="whitespace-nowrap lg:text-m text-[10px] lg:text-base">ID</h1>
            <h1 className="whitespace-nowrap lg:text-m text-[10px] lg:text-base relative lg:right-4 right-2">
              Name & Company
            </h1>
            <h1 className="whitespace-nowrap lg:text-m text-[10px] lg:text-base relative right-7 ">SOURCE</h1>
            <h1 className="whitespace-nowrap lg:text-m text-[10px] lg:text-base relative right-6  ">STATUS</h1>
            <h1 className="whitespace-nowrap lg:text-m text-[10px] lg:text-base relative right-2">
              ASSIGNED TO
            </h1>
            <h1 className="whitespace-nowrap lg:text-m text-[10px] lg:text-base lg:mr-4 relative right-4 ">ACTION</h1>
          </div>
          <LeadComponents/>
          <LeadComponents/>
          <LeadComponents/>
          <LeadComponents/>
          <LeadComponents/>
          <LeadComponents/>
          <LeadComponents/>
          <LeadComponents/>
          <LeadComponents/>
          <LeadComponents/>
          <LeadComponents/>
          <LeadComponents/>
          <LeadComponents/>
          <LeadComponents/>
          <LeadComponents/>
          <LeadComponents/>
          <LeadComponents/>
          <LeadComponents/>
          <LeadComponents/>
          <LeadComponents/>
          <LeadComponents/>
          <LeadComponents/>
          <LeadComponents/>
          <LeadComponents/>
          <LeadComponents/>
          <LeadComponents/>
          <LeadComponents/>
          <LeadComponents/>
          <LeadComponents/>
          <LeadComponents/>
        </div>
    </div>
  );
};

export default LeadsCustomers;

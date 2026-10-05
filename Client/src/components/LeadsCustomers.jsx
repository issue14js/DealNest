import React, { useState } from "react";
import { RiArrowRightSLine, RiSearchLine } from "@remixicon/react";
import { useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";

const LeadsCustomers = (tabs) => {
  const navigate = useNavigate();
  const [filter, setfilter] = useState("");

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
        <div className="w-full p-2  ">
          <div className="">
            <h1 className="text-3xl">Leads & Customers</h1>
            <span className="text-sm font-w opacity-60">
              Multi-stage enterprise pipeline directory with real-time
              attribution <br />
              and round-robin allocation.
            </span>
          </div>
        </div>
      </div>
      {/* Tabs */}
      <div className=" py-2 rounded overflow-x-auto w-full shadow-[inset_0_0_4px_rgba(0,0,0,0.08)] shadow-outline flex justify-around ">
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
      {/* Search */}
      <div className=" items-center gap-10 flex px-4 py-2 h-20 w-full">
        <div className="shadow-[inset_0_0_4px_rgba(0,0,0,0.08)]  border-outline-variant items-center px-3 sm:px-4 gap-2 flex h-10 sm:h-11 rounded-4xl outline-none overflow-hidden  w-50 ">
          <RiSearchLine size={18} className="shrink-0" />
          <input
            className="outline-none h-full w-full min-w-0 bg-transparent"
            type="search"
            placeholder="Search"
          />
        </div>
        <div className=" items-center shadow-[inset_0_0_4px_rgba(0,0,0,0.08)] p-3 rounded-2xl flex ">
          <h1>Status:</h1>
          <select className="rounded-xl flex justify-center outline-none ">
            <option value="">All</option>
            <option value="new">New</option>
            <option value="contacted">Contacted</option>
            <option value="qualified">Qualified</option>
          </select>
        </div>
      </div>
    </div>
  );
};

export default LeadsCustomers;

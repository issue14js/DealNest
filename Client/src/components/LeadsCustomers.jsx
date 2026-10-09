import React, { useState } from "react";
import { useLead } from "../hooks/uselead";
import {
  RiArrowRightSLine,
  RiSearchLine,
  RiRefreshLine,
  RiGlobalLine,
  RiCircleFill,
  RiEyeLine,
  RiPencilLine,
  RiMore2Line,
  RiAddLine,
} from "@remixicon/react";
import { useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";

const LeadsCustomers = (tabs) => {
  const navigate = useNavigate();
  const { lead, setcreatelead, createlead } = useLead();
  const { rootUrl } = useLead();

  const [search, setsearch] = useState("");
  const [statusFilter, setstatusFilter] = useState("");
  const [sourceFilter, setsourceFilter] = useState("");
  const [assignedFilter, setAssignedFilter] = useState("");
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

  const createLead = () => {
    setcreatelead(!createlead);
  };

  const assignedUsers = [
    ...new Map(
      lead
        .filter((item) => item.assignedTo?._id)
        .map((item) => [
          item.assignedTo._id,
          {
            _id: item.assignedTo._id,
            name: item.assignedTo.name,
          },
        ]),
    ).values(),
  ];
  const filteredLeads = lead.filter((item) => {
    const query = search.toLowerCase().trim();

    const matchesSearch =
      item.name?.toLowerCase().includes(query) ||
      item.email?.toLowerCase().includes(query) ||
      item.number?.toString().includes(query) ||
      item.company?.toLowerCase().includes(query);

    const matchesStatus =
      !statusFilter ||
      item.status?.toLowerCase() === statusFilter.toLowerCase();

    const matchesSource =
      !sourceFilter ||
      item.source?.toLowerCase() === sourceFilter.toLowerCase();

    const matchesAssigned =
      !assignedFilter ||
      (assignedFilter === "unassigned"
        ? !item.assignedTo
        : item.assignedTo?._id === assignedFilter);

    return matchesSearch && matchesStatus && matchesSource && matchesAssigned;
  });

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
            <button
              onClick={createLead}
              className="flex cursor-pointer rounded-4xl px-3 sm:px-4 py-2 shadow-outline shadow  items-center gap-1 bg-primary-container text-surface-bright"
            >
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
          <div className="flex h-10 w-30 shrink-0 items-center gap-2 overflow-hidden rounded-4xl border border-outline px-3 shadow-[inset_0_0_5px_rgba(0,0,0,0.08)]  sm:h-11 lg:w-105">
            <RiSearchLine size={18} className="shrink-0" />

            <input
              className="h-full min-w-0 flex-1 bg-transparent outline-none"
              type="search"
              placeholder="Search"
              value={search}
              onChange={(e) => setsearch(e.target.value)}
            />
          </div>

          {/* STATUS */}
          <div className="flex h-10 shrink-0 items-center rounded-4xl border border-outline px-3 shadow-[inset_0_0_5px_rgba(0,0,0,0.08)]">
            <span className="text-[11px]">STATUS:</span>

            <select
              value={statusFilter}
              onChange={(e) => setstatusFilter(e.target.value)}
              className="bg-transparent text-sm font-semibold text-primary outline-none"
            >
              <option value="">All</option>
              <option value="New">New</option>
              <option value="Contacted">Contacted</option>
              <option value="Qualified">Qualified</option>
              <option value="Proposal">Proposal</option>
              <option value="Won">Won</option>
              <option value="Lost">Lost</option>
            </select>
          </div>

          {/* SOURCE */}
          <div className="flex h-10 shrink-0 items-center rounded-4xl border border-outline px-3 shadow-[inset_0_0_5px_rgba(0,0,0,0.08)]">
            <span className="text-[11px]">SOURCE:</span>

            <select
              value={sourceFilter}
              onChange={(e) => setsourceFilter(e.target.value)}
              className="bg-transparent text-sm font-semibold text-primary outline-none"
            >
              <option value="">All</option>
              <option value="Website">Website</option>
              <option value="Referral">Referral</option>
              <option value="Social Media">Social Media</option>
              <option value="Advertisement">Advertisement</option>
              <option value="Cold Call">Cold Call</option>
              <option value="Other">Other</option>
            </select>
          </div>

          {/* ASSIGNED TO */}
          <div className="flex h-10 shrink-0 items-center rounded-4xl border border-outline px-3 shadow-[inset_0_0_5px_rgba(0,0,0,0.08)]">
            <span className="text-[11px]">ASSIGNED:</span>

            <select
              value={assignedFilter}
              onChange={(e) => setAssignedFilter(e.target.value)}
              className="bg-transparent text-sm font-semibold text-primary outline-none"
            >
              <option value="">All</option>
              <option value="unassigned">Unassigned</option>

              {assignedUsers.map((user) => (
                <option key={user._id} value={user._id}>
                  {user.name}
                </option>
              ))}
            </select>
          </div>

          <button className="shrink-0 rounded-full p-2">
            <RiRefreshLine />
          </button>
        </div>
      </div>

      {/* Leads Data */}
      <div className="h-70 overflow-auto [scrollbar-width:none] [&::-webkit-scrollbar]:hidden">
        <div
          className="
      grid min-w-[720px]
      grid-cols-[70px_1.6fr_120px_140px_1.5fr_100px]
      items-center gap-3
      px-3 py-2
      lg:min-w-0
      lg:grid-cols-[80px_1.7fr_130px_150px_1.7fr_110px]
      lg:px-4
    "
        >
          {/* ID */}
          <h1 className="whitespace-nowrap text-[10px] lg:text-base">ID</h1>

          {/* Name & Company */}
          <h1 className="whitespace-nowrap text-[10px] lg:text-base">
            Name & Company
          </h1>

          {/* Source */}
          <h1 className="whitespace-nowrap ml-7 text-[10px] lg:text-base">
            SOURCE
          </h1>

          {/* Status */}
          <h1 className="whitespace-nowrap relative left-8 text-[10px] lg:text-base">
            STATUS
          </h1>

          {/* Assigned To */}
          <h1 className="whitespace-nowrap relative left-5 text-[10px] lg:text-base">
            ASSIGNED TO
          </h1>

          {/* Action */}
          <h1 className="whitespace-nowrap relative left-5 text-[10px] lg:text-base">
            ACTION
          </h1>
        </div>
        {filteredLeads.map((Data) => (
          <div
            key={Data._id}
            className="grid w-full min-w-[720px] grid-cols-[70px_1.6fr_120px_140px_1.5fr_100px] items-center gap-3 px-3 py-3 lg:min-w-0 lg:grid-cols-[80px_1.7fr_130px_150px_1.7fr_110px] lg:px-4"
          >
            {/* Lead ID */}
            <div className="min-w-0">
              <p className="truncate text-[10px] text-primary lg:text-sm">
                {Data.leadId}
              </p>
            </div>

            {/* Name & Company */}
            <div className="flex min-w-0 items-center gap-2">
              <img
                className="h-7 w-7 shrink-0 rounded-full lg:h-15 lg:w-15"
                src={`${rootUrl}${Data.avatar}`}
                alt="Ritu Raj"
              />

              <div className="min-w-0">
                <h1 className="truncate text-[10px] lg:text-sm">{Data.name}</h1>

                <p className="truncate text-[7px] opacity-60 lg:text-[12px]">
                  {Data.email}
                </p>
                <p className="truncate text-[5px] opacity-60 lg:text-[10px]">
                  {Data.company}
                </p>
              </div>
            </div>

            {/* Source */}
            <div className="min-w-0 flex justify-center">
              <span className="flex w-fit items-center gap-1 whitespace-nowrap rounded-4xl px-2 py-2 text-[10px] shadow shadow-outline lg:px-4 lg:text-sm">
                <RiGlobalLine className="shrink-0 text-primary" size={14} />
                {Data.source}
              </span>
            </div>

            {/* Status */}
            <div className=" flex justify-center  ">
              <span className="flex w-fit items-center  gap-1 whitespace-nowrap rounded-4xl bg-primary px-2 py-2 text-[10px] text-background shadow shadow-outline lg:px-4 lg:text-sm">
                <span>{Data.status}</span>
              </span>
            </div>

            {/* Assigned To */}
            <div className="flex min-w-0 items-center gap-2">
              <img
                className="h-7 w-7 shrink-0 rounded-full lg:h-10 lg:w-10"
                src={`${rootUrl}${Data.assignedTo.avatar}`}
                alt="Sumira Mahto"
              />

              <div className="min-w-0">
                <h1 className="truncate text-[10px] lg:text-xl">
                  {Data.assignedTo.name}
                </h1>

                <p className="truncate text-[9px] opacity-60 lg:text-sm">
                  {Data.assignedTo.company}
                </p>
              </div>
            </div>

            {/* Actions */}
            <div className="flex items-center justify-end gap-1 lg:gap-3">
              <button
                type="button"
                className="rounded-full p-1.5 hover:bg-surface-variant"
                aria-label="View lead"
              >
                <RiEyeLine size={18} />
              </button>

              <button
                type="button"
                className="rounded-full p-1.5 hover:bg-surface-variant"
                aria-label="Edit lead"
              >
                <RiPencilLine size={18} />
              </button>

              <button
                type="button"
                className="rounded-full p-1.5 hover:bg-surface-variant"
                aria-label="More actions"
              >
                <RiMore2Line size={18} />
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default LeadsCustomers;

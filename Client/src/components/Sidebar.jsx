import React, { useState } from "react";
import {
  RiDashboardLine,
  RiBarChartBoxLine,
  RiTeamLine,
  RiContactsBook2Line,
  RiCheckboxCircleLine,
  RiHistoryFill,
  RiMailUnreadLine,
  RiLineChartLine,
  RiShieldUserLine,
} from "@remixicon/react";
import { useNavigate } from "react-router-dom";

const Sidebar = () => {
  const [click, setclick] = useState("");
  const navigate = useNavigate()

  const handelDashboard = () => {
    setclick("Dashboard");
  };
  const handelDealsPipeline = () => {
    setclick("DealsPipeline");
  };
  const handelCustomerLead = () => {
    setclick("CustomerLead");
  };
  const handelLead360Detail = () => {
    setclick("Lead360Detail");
  };
  const handelTaskQueueFollowUps = () => {
    setclick("TaskQueueFollow-ups");
  };
  const handelActivitiesTimeline = () => {
    setclick("ActivitiesTimeline");
  };
  const handelEmailHub = () => {
    setclick("EmailHub");
  };
  const handelReportsExport = () => {
    setclick("ReportsExport");
  };
  const handelAdminRBACSettings = () => {
    setclick("AdminRBACSettings");
  };
  return (
    <div className=" lg:h-142 h-180  relative gap-2 flex flex-col shadow-[0_4px_6px_-2px] shadow-outline py-4 px-3 w-[20%]">
      <div
        onClick={handelDashboard}
        className={`cursor-pointer rounded-xl items-center flex px-4 w-full bg-background h-10  ${click === "Dashboard" ? "shadow-[inset_0_0_15px_rgba(0,0,0,0.15)] text-primary font-semibold" : ""} `}
      >
        <h2 className="flex gap-2  items-center text-sm">
          <RiDashboardLine size={22} />{" "}
          <p className="hidden lg:block"> Dashboard</p>{" "}
        </h2>
      </div>
      <div
        onClick={handelDealsPipeline}
        className={`cursor-pointer rounded-xl items-center flex px-4 w-full bg-background h-10  ${click === "DealsPipeline" ? "shadow-[inset_0_0_15px_rgba(0,0,0,0.15)] text-primary font-semibold" : ""} `}
      >
        <h2 className="flex gap-2 text-sm items-center">
          <RiBarChartBoxLine size={22} />{" "}
          <p className="hidden lg:block"> Deals Pipeline</p>
        </h2>
      </div>
      <div
        onClick={handelCustomerLead}
        className={`cursor-pointer rounded-xl items-center flex px-4 w-full bg-background h-10  ${click === "CustomerLead" ? "shadow-[inset_0_0_15px_rgba(0,0,0,0.15)] text-primary font-semibold" : ""} `}
      >
        <h2 className="flex gap-2 text-sm items-center ">
          <RiTeamLine size={22} />{" "}
          <p className="hidden lg:block"> Leads & Customers</p>
        </h2>
      </div>
      <div
        onClick={handelLead360Detail}
        className={`cursor-pointer rounded-xl items-center flex px-4 w-full bg-background h-10  ${click === "Lead360Detail" ? "shadow-[inset_0_0_15px_rgba(0,0,0,0.15)] text-primary font-semibold" : ""} `}
      >
        <h2 className="flex gap-2 text-sm items-center ">
          <RiContactsBook2Line size={22} />{" "}
          <p className="hidden lg:block"> Lead 360 Detail</p>
        </h2>
      </div>
      <div
        onClick={handelTaskQueueFollowUps}
        className={`cursor-pointer rounded-xl items-center flex px-4 w-full bg-background h-10  ${click === "TaskQueueFollow-ups" ? "shadow-[inset_0_0_15px_rgba(0,0,0,0.15)] text-primary font-semibold" : ""} `}
      >
        <h2 className="flex gap-2 text-sm items-center ">
          {" "}
          <RiCheckboxCircleLine size={22} />{" "}
          <p className="hidden lg:block"> Task Queue & Follow-ups</p>
        </h2>
      </div>
      <div
        onClick={handelActivitiesTimeline}
        className={`cursor-pointer rounded-xl items-center flex px-4 w-full bg-background h-10  ${click === "ActivitiesTimeline" ? "shadow-[inset_0_0_15px_rgba(0,0,0,0.15)] text-primary font-semibold" : ""} `}
      >
        <h2 className="flex gap-2 text-sm items-center ">
          <RiHistoryFill size={22} />{" "}
          <p className="hidden lg:block"> Activities & Timeline</p>
        </h2>
      </div>
      <div
        onClick={handelEmailHub}
        className={`cursor-pointer rounded-xl items-center flex px-4 w-full bg-background h-10  ${click === "EmailHub" ? "shadow-[inset_0_0_15px_rgba(0,0,0,0.15)] text-primary font-semibold" : ""} `}
      >
        <h2 className="flex gap-2 text-sm items-center ">
          {" "}
          <RiMailUnreadLine size={22} />{" "}
          <p className="hidden lg:block"> Email Hub</p>
        </h2>
      </div>
      <div
        onClick={handelReportsExport}
        className={`cursor-pointer rounded-xl items-center flex px-4 w-full bg-background h-10  ${click === "ReportsExport" ? "shadow-[inset_0_0_15px_rgba(0,0,0,0.15)] text-primary font-semibold" : ""} `}
      >
        <h2 className="flex gap-2 text-sm items-center ">
          <RiLineChartLine size={22} />{" "}
          <p className="hidden lg:block"> Reports & Export</p>
        </h2>
      </div>
      <div
        onClick={handelAdminRBACSettings}
        className={`cursor-pointer rounded-xl items-center flex px-4 w-full bg-background h-10  ${click === "AdminRBACSettings" ? "shadow-[inset_0_0_15px_rgba(0,0,0,0.15)] text-primary font-semibold" : ""} `}
      >
        <h2 className="flex gap-2 text-sm items-center ">
          {" "}
          <RiShieldUserLine size={22} />{" "}
          <p className="hidden lg:block"> Admin & RBAC Settings</p>
        </h2>
      </div>

      {/* Bottom Section */}
      <div className="mt-5 flex flex-col gap-1 lg:relative absolute bottom-2  rounded-2xl bg-surface-bright p-2 shadow shadow-outline">
        {/* Live Sync */}
        <div className="flex h-9 w-full items-center justify-between rounded-xl bg-red-100 px-2 shadow-[0_2px_6px_rgba(0,0,0,0.08)] text-xs font-medium">
          <span className="flex min-w-0 items-center gap-1.5">
            <span className="h-2 w-2 shrink-0 rounded-full bg-emerald-700"></span>

            <span className="hidden lg:block truncate">Live Sync: On</span>
          </span>

          <span className="hidden xl:block shrink-0 text-outline">99.98%</span>
        </div>

        {/* Round Robin */}
        <div className="flex h-11 w-full items-center justify-between rounded-xl bg-background px-2 shadow-[0_2px_6px_rgba(0,0,0,0.08)]">
          <span className="flex items-center gap-2 text-xs font-medium">
            <span className="text-lg">↻</span>

            <span className="hidden lg:block truncate">Round-Robin</span>
          </span>

          <span className="hidden xl:block shrink-0 text-xs font-semibold text-primary">
            Active (4)
          </span>
        </div>
      </div>
    </div>
  );
};

export default Sidebar;

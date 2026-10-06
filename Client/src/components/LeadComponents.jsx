import React from "react";
import {
  RiArrowRightSLine,
  RiSearchLine,
  RiRefreshLine,
  RiGlobalLine,
  RiCircleFill,
  RiEyeLine,
  RiPencilLine,
  RiMore2Line
} from "@remixicon/react";

const LeadComponents = () => {
  return (
    <div className="w-full flex gap-4 items-center justify-between  h-20 lg:px-4 px-2 ">
      <h1 className="text-primary lg:text-sm text-[10px]">4525</h1>
      <div className="flex items-center gap-2">
        <img
          className="h-7 w-7 lg:h-10 lg:w-10  rounded-full"
          src="https://i.pinimg.com/736x/8a/cc/32/8acc3259cd26b57b557e756306373618.jpg"
          alt="logo"
        />
        <div className="">
          <h1 className="lg:text-xl text-[10px]">Ritu Raj</h1>
          <p className="lg:text-sm text-[9px] opacity-60 ">Detoxy Privet Limited</p>
        </div>
      </div>
      <h1 className="flex gap-1  ml-10 text-[10px] lg:text-sm px-2 lg:px-4 py-2  shadow shadow-outline rounded-4xl items-center  ">
        <RiGlobalLine className="text-primary " size={14} />
        Website
      </h1>
      <h1 className=" bg-primary text-[10px] lg:text-sm flex gap-1 text-background lg:px-4 py-2 px-2  shadow shadow-outline rounded-4xl items-center">
        {" "}
        Demo <span>Scheduled</span>
      </h1>
      <div className="flex  items-center gap-2">
        <img
          className="h-7 w-7 lg:h-10 lg:w-10 rounded-full"
          src="https://i.pinimg.com/736x/46/e7/72/46e7724771f4dcbb20f6472a5c7a0b9f.jpg"
          alt="assignedToLOGO"
        /> 
        <div className="">
          <h1 className="lg:text-xl text-sm">Sumira Mahto</h1>
          <p className="lg:text-sm text-[9px] overflow-hidden opacity-60 ">mahtosumira12@gmail.com</p>
        </div>
      </div>
      <div className=" lg:gap-4 gap-1 px-2 flex">
        <button>
          <RiEyeLine size={18} />
        </button>
        <button>
          <RiPencilLine size={18} />
        </button>
        <button>
          <RiMore2Line size={18} />
        </button>
      </div>
    </div>
  );
};

export default LeadComponents;

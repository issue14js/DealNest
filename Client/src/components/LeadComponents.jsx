import React from "react";
import {
  RiGlobalLine,
  RiEyeLine,
  RiPencilLine,
  RiMore2Line,
} from "@remixicon/react";

const LeadComponents = () => {
  return (
    <div className="grid w-full min-w-[720px] grid-cols-[70px_1.6fr_120px_140px_1.5fr_100px] items-center gap-3 px-3 py-3 lg:min-w-0 lg:grid-cols-[80px_1.7fr_130px_150px_1.7fr_110px] lg:px-4">
      
      {/* Lead ID */}
      <div className="min-w-0">
        <p className="truncate text-[10px] text-primary lg:text-sm">
          4525
        </p>
      </div>

      {/* Name & Company */}
      <div className="flex min-w-0 items-center gap-2">
        <img
          className="h-7 w-7 shrink-0 rounded-full lg:h-10 lg:w-10"
          src="https://i.pinimg.com/736x/8a/cc/32/8acc3259cd26b57b557e756306373618.jpg"
          alt="Ritu Raj"
        />

        <div className="min-w-0">
          <h1 className="truncate text-[10px] lg:text-xl">
            Ritu Raj
          </h1>

          <p className="truncate text-[9px] opacity-60 lg:text-sm">
            Detoxy Privet Limited
          </p>
        </div>
      </div>

      {/* Source */}
      <div className="min-w-0">
        <span className="flex w-fit items-center gap-1 whitespace-nowrap rounded-4xl px-2 py-2 text-[10px] shadow shadow-outline lg:px-4 lg:text-sm">
          <RiGlobalLine
            className="shrink-0 text-primary"
            size={14}
          />
          Website
        </span>
      </div>

      {/* Status */}
      <div className="min-w-0">
        <span className="flex w-fit items-center gap-1 whitespace-nowrap rounded-4xl bg-primary px-2 py-2 text-[10px] text-background shadow shadow-outline lg:px-4 lg:text-sm">
          Demo <span>Scheduled</span>
        </span>
      </div>

      {/* Assigned To */}
      <div className="flex min-w-0 items-center gap-2">
        <img
          className="h-7 w-7 shrink-0 rounded-full lg:h-10 lg:w-10"
          src="https://i.pinimg.com/736x/46/e7/72/46e7724771f4dcbb20f6472a5c7a0b9f.jpg"
          alt="Sumira Mahto"
        />

        <div className="min-w-0">
          <h1 className="truncate text-[10px] lg:text-xl">
            Sumira Mahto
          </h1>

          <p className="truncate text-[9px] opacity-60 lg:text-sm">
            mahtosumira12@gmail.com
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
  );
};

export default LeadComponents;
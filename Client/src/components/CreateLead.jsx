import React, { useState } from "react";
import {
  RiUser3Line,
  RiMailLine,
  RiPhoneLine,
  RiBuildingLine,
  RiGlobalLine,
  RiCloseLine,
  RiAddLine,
} from "@remixicon/react";
import { useLead } from "../hooks/uselead";

const CreateLead = () => {
  const {createlead,setcreatelead,create,checklead} = useLead()
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    number: "",
    company: "",
    source: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;

    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setcreatelead(!createlead)
    console.log("Lead Data:", formData);
    create(formData)
  };

  return (
    <div className="absolute">
    <form
          onSubmit={handleSubmit}
          className="
          
            rounded-2xl
            border border-outline-variant
            bg-surface-container-low
            p-4
            shadow-[6px_6px_14px_rgba(188,172,154,0.18),-4px_-4px_12px_rgba(255,255,255,0.8)]
            sm:p-6
            lg:p-8
          "
        >
          <div className="mb-5">
          <h1 className="text-2xl font-semibold text-on-background sm:text-3xl">
            Create New Lead
          </h1>

          <p className="mt-1 text-sm text-on-surface-variant">
            Add a new lead to your sales pipeline.
          </p>
        </div>
          {/* Form Grid */}
          <div className="grid grid-cols-1 gap-5 md:grid-cols-2">

            {/* Name */}
            <div>
              <label className="mb-2 block text-sm font-medium text-on-background">
                Lead Name
              </label>

              <div className="
                flex h-11 items-center gap-2 rounded-xl
                border border-outline-variant
                bg-surface-bright px-3
                shadow-[inset_0_0_6px_rgba(0,0,0,0.08)]
                focus-within:border-primary
              ">
                <RiUser3Line
                  size={18}
                  className="shrink-0 text-outline"
                />

                <input
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  placeholder="Enter lead name"
                  className="h-full min-w-0 flex-1 bg-transparent text-sm text-on-background outline-none"
                />
              </div>
            </div>

            {/* Email */}
            <div>
              <label className="mb-2 block text-sm font-medium text-on-background">
                Email
              </label>

              <div className="
                flex h-11 items-center gap-2 rounded-xl
                border border-outline-variant
                bg-surface-bright px-3
                shadow-[inset_0_0_6px_rgba(0,0,0,0.08)]
                focus-within:border-primary
              ">
                <RiMailLine
                  size={18}
                  className="shrink-0 text-outline"
                />

                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  placeholder="Enter email"
                  className="h-full min-w-0 flex-1 bg-transparent text-sm text-on-background outline-none"
                />
              </div>
            </div>

            {/* Number */}
            <div>
              <label className="mb-2 block text-sm font-medium text-on-background">
                Phone Number
              </label>

              <div className="
                flex h-11 items-center gap-2 rounded-xl
                border border-outline-variant
                bg-surface-bright px-3
                shadow-[inset_0_0_6px_rgba(0,0,0,0.08)]
                focus-within:border-primary
              ">
                <RiPhoneLine
                  size={18}
                  className="shrink-0 text-outline"
                />

                <input
                  type="tel"
                  name="number"
                  value={formData.number}
                  onChange={handleChange}
                  placeholder="Enter phone number"
                  className="h-full min-w-0 flex-1 bg-transparent text-sm text-on-background outline-none"
                />
              </div>
            </div>

            {/* Company */}
            <div>
              <label className="mb-2 block text-sm font-medium text-on-background">
                Company
              </label>

              <div className="
                flex h-11 items-center gap-2 rounded-xl
                border border-outline-variant
                bg-surface-bright px-3
                shadow-[inset_0_0_6px_rgba(0,0,0,0.08)]
                focus-within:border-primary
              ">
                <RiBuildingLine
                  size={18}
                  className="shrink-0 text-outline"
                />

                <input
                  type="text"
                  name="company"
                  value={formData.company}
                  onChange={handleChange}
                  placeholder="Enter company name"
                  className="h-full min-w-0 flex-1 bg-transparent text-sm text-on-background outline-none"
                />
              </div>
            </div>

            {/* Source */}
            <div className="md:col-span-2">
              <label className="mb-2 block text-sm font-medium text-on-background">
                Lead Source
              </label>

              <div className="
                flex h-11 items-center gap-2 rounded-xl
                border border-outline-variant
                bg-surface-bright px-3
                shadow-[inset_0_0_6px_rgba(0,0,0,0.08)]
              ">
                <RiGlobalLine
                  size={18}
                  className="shrink-0 text-outline"
                />

                <select
                  name="source"
                  value={formData.source}
                  onChange={handleChange}
                  className="
                    h-full w-full
                    bg-transparent
                    text-sm font-medium
                    text-primary
                    outline-none
                  "
                >
                  <option value="Website">Website</option>
                  <option value="Referral">Referral</option>
                  <option value="Social Media">Social Media</option>
                  <option value="Advertisement">Advertisement</option>
                  <option value="Cold Call">Cold Call</option>
                  <option value="Other">Other</option>
                </select>
              </div>
            </div>
          </div>

          {/* Divider */}
          <div className="my-6 border-t border-outline-variant" />

          {/* Buttons */}
          <div className="flex flex-col-reverse gap-3 sm:flex-row sm:justify-end">

            <button
            onClick={()=>{
              setcreatelead(!createlead)
            }}
              type="button"
              className="
                flex h-11 items-center justify-center gap-2
                rounded-xl px-5
                text-sm font-medium
                text-on-background
                shadow-[inset_0_0_6px_rgba(0,0,0,0.08)]
                transition
                hover:bg-surface-container-high
              "
            >
              <RiCloseLine size={18} />
              Cancel
            </button>

            <button
            
              type="submit"
              className="
                flex h-11 items-center justify-center gap-2
                rounded-xl px-6
                bg-primary
                text-sm font-semibold text-on-primary
                shadow-[4px_4px_10px_rgba(11,85,99,0.22)]
                transition
                hover:opacity-90
                active:scale-[0.98]
              "
            >
              <RiAddLine size={18} />
              Create Lead
            </button>

          </div>
        </form>
        </div>
  );
};

export default CreateLead;
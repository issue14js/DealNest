import React, { useState } from "react";
import { useAuth } from "../hooks/useAuth";
import { useNavigate } from "react-router-dom";
import Navbar from "../components/Navbar";

const Profile = () => {
  const { user, updateProfile, changeDp, rootUrl, changePassword, logout } =
    useAuth();
  const [changepassdropdown, setchangepassdropdown] = useState(false);
  const { navigate } = useNavigate();
  const [showCurrent, setShowCurrent] = useState(false);
  const [showNew, setShowNew] = useState(false);
  const [form, setForm] = useState({
    name: user?.name || "",
    email: user?.email || "",
    role: user?.role || "",
    number: user?.number || "",
    department: user?.department || "",
  });
  const [passwordform, setpasswordform] = useState({
    currentpassword: "",
    newpassword: "",
  });


  const handleChange = (event) => {
    const { name, value } = event.target;
    setForm((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    updateProfile(form);
  };
  const dpChange = (event) => {
    const file = event.target.files[0];
    if (!file) return;
    changeDp(file);
  };
  const handleChangepass = (event) => {
    const { name, value } = event.target;

    setpasswordform((prev) => ({
      ...prev,
      [name]: value,
    }));
  };
  const changePass = (event) => {
    event.preventDefault();
    setchangepassdropdown((prev) => !prev);
    changePassword(passwordform);
  };
  const handelLogout = () => {
    logout();
  };

  return (
    <div className="flex  flex-col h-screen w-full">
      <div className="h-[10%] min-h-20 shrink-0 w-full  ">
        <Navbar />
      </div>
      <div className=" w-full gap-2 flex-col lg:flex-row  p-2 flex ">
        <div className=" gap-5 flex flex-col  w-full lg:w-[60%] lg:grid lg:grid-rows-[25%_70%] lg:gap-3 ">
          {/* Basic info */}
          <div className="flex w-full lg:row-span-1 items-center justify-between lg:col-span-1 p-5 shadow shadow-outline rounded-2xl  ">
            <input
              name="avatar"
              accept="image/*"
              onChange={(event) => {
                dpChange(event);
              }}
              className=" h-25 w-25 absolute rounded-full text-[1px] "
              type="file"
            />
            <img
              className=" h-25 shrink-0  object-center w-25 object-cover rounded-full"
              src={`${rootUrl}${user.avatar}`}
              alt={user.name}
            />
            <div className=" h-30 flex flex-col justify-center px-4 w-full ">
              <span className="text-xl mb-1 font-bold">{user.name}</span>
              <span className="text-primary">{user.role}</span>
              <span className="text-[12px]">{user.email}</span>
            </div>
          </div>

          {/* Personal Information */}

          <form
            onSubmit={handleSubmit}
            className="rounded-2xl relative p-5 flex flex-col  col-end-2 shadow shadow-outline"
            action=""
          >
            <h1 className="font-semibold  ">Personal Information</h1>
            <div className="grid grid-cols-2  grid-row-2">
              <div className=" mr-4 col-span-1">
                <label className="block mt-2 py-2" htmlFor="">
                  Name
                </label>
                <input
                  name="name"
                  onChange={handleChange}
                  className="w-full rounded-xl shadow shadow-outline outline-none px-4 h-10 bg-surface-container"
                  value={form.name}
                  type="text"
                />
              </div>
              <div className=" mr-4 h-20 col-span-1 ">
                <label className="block mt-2 py-2 " htmlFor="">
                  Email
                </label>
                <input
                  name="email"
                  onChange={handleChange}
                  className="w-full rounded-xl shadow shadow-outline outline-none px-4 h-10 bg-surface-container"
                  value={form.email}
                  type="text"
                />
              </div>
              <div className=" mr-4 h-20 col-span-1">
                <label className="block py-2  " htmlFor="">
                  Number
                </label>
                <input
                  name="number"
                  onChange={handleChange}
                  value={form.number}
                  className="w-full rounded-xl shadow shadow-outline outline-none px-4 h-10 bg-surface-container"
                  type="text"
                />
              </div>
              <div className=" mr-4 h-20  col-span-1 ">
                <label className="block py-2  " htmlFor="">
                  Role
                </label>
                <select
                  name="role"
                  value={form.role}
                  onChange={handleChange}
                  className={` outline-none shadow shadow-outline-variant w-full  rounded-xl px-4 py-3 
                    ${
                    user.role !== "admin" && user.role !== "manager"
                      ? "hidden"
                      : ""
                  }`}
                  id=""
                >
                  <option
                    className="bg-outline-variant text-primary-container"
                    value="admin"
                  >
                    Admin
                  </option>
                  <option
                    className="bg-outline-variant text-primary-container"
                    value="manager"
                  >
                    Manager
                  </option>
                  <option
                    className="bg-outline-variant text-primary-container"
                    value="salesAgent"
                  >
                    Sales Agent
                  </option>
                  <option
                    className=" bg-outline-variant text-primary-container"
                    value="supportAgent "
                  >
                    Support Agent
                  </option>
                </select>
                <div className=" outline-none shadow bg-surface-container shadow-outline-variant w-full rounded-xl px-4 py-2 ">
                  <h1>{user.role}</h1>
                </div>
              </div>
              <div className=" mt-2  col-span-2 ">
                <label className="">Department</label>

                <select
                  name="department"
                  value={form.department}
                  onChange={handleChange}
                  className="outline-none   shadow shadow-outline-variant w-full  rounded-xl px-4 py-3"
                >
                  <option value="sales">Sales</option>
                  <option value="marketing">Marketing</option>
                  <option value="development">Development</option>
                  <option value="support">Support</option>
                  <option value="hr">HR</option>
                </select>
              </div>
              <div className=" col-span-2 flex justify-end mt-4">
                <button
                  type="submit"
                  className="hover:bg-outline-variant hover:text-primary shadow shadow-outline-variant bg-primary rounded-xl text-background font-semibold w-36 relative  px-4 py-3"
                >
                  Save Changes
                </button>
              </div>
            </div>
          </form>
        </div>
        {/* Security */}
        <div className="  w-full h-132 lg:w-[40%] ">
          <div className="rounded-2xl border  border-outline p-5">
            {/* Heading */}
            <h2 className="mb-5 text-lg font-semibold">Account Security</h2>

            {/* Inner box */}
            <div className="rounded-2xl border border-outline-variant shadow bg-surface-container p-4">
              {/* Password */}
              <div className="flex border-b items-center justify-between pb-4">
                <div>
                  <p className="text-sm">Password</p>
                  <p className="mt-1 text-sm tracking-wider">•••••••••••</p>
                </div>

                <button
                  onClick={() => setchangepassdropdown((prev) => !prev)}
                  className={` ${!changepassdropdown ? "block" : "hidden"}
          rounded-xl shadow shadow-outline-variant bg-primary-container  text-surface-bright font-semibold 
          px-4 py-3 text-sm
          hover:bg-outline-variant hover:text-primary
                  `}
                >
                  Change Password
                </button>
                <div
                  className={` gap-2 flex ${changepassdropdown ? "block" : "hidden"}`}
                >
                  <button
                    onClick={changePass}
                    className={` ${changepassdropdown ? "block" : "hidden"}
               rounded-xl shadow shadow-outline-variant bg-primary-container  text-surface-bright font-semibold 
               px-4 py-3 text-sm
               hover:bg-outline-variant hover:text-primary
               `}
                  >
                    Save Password
                  </button>
                  <button
                    onClick={() => setchangepassdropdown((prev) => !prev)}
                    className={` ${changepassdropdown ? "block" : "hidden"}
               rounded-xl shadow shadow-outline-variant bg-primary-container  text-surface-bright font-semibold 
               px-4 py-3 text-sm
               hover:bg-outline-variant hover:text-primary
               `}
                  >
                    X
                  </button>
                </div>
              </div>

              {/* Divider */}
              <div
                className={`relative ${
                  changepassdropdown ? " flex-col flex lg:flex-row" : "hidden"
                } gap-2 p-2`}
              >
                <div className="flex w-full flex-col">
                  <label htmlFor="currentpassword">Current Password</label>

                  <input
                    id="currentpassword"
                    name="currentpassword"
                    type={showCurrent ? "text" : "password"}
                    required
                    minLength={6}
                    value={passwordform.currentpassword}
                    onChange={handleChangepass}
                    className="h-10 w-full rounded-xl bg-surface-container px-2 shadow shadow-outline outline-none"
                  />
                </div>

                <div className="flex w-full flex-col">
                  <label htmlFor="newpassword">New Password</label>

                  <input
                    id="newpassword"
                    name="newpassword"
                    type={showCurrent ? "text" : "password"}
                    required
                    minLength={6}
                    value={passwordform.newpassword}
                    onChange={handleChangepass}
                    className="h-10 w-full rounded-xl bg-surface-container px-2 shadow shadow-outline outline-none"
                  />
                </div>
                <button
                  type="button"
                  onClick={() => setShowCurrent((prev) => !prev)}
                  className="absolute right-2 cursor-pointer"
                >
                  {showCurrent ? "🙈" : "👁️"}
                </button>
              </div>

              {/* Last Login */}
              <div className=" relative pt-4">
                <p className="text-sm">Last login</p>

                <p className="mt-1  text-sm">
                  {user?.lastLogin
                    ? new Date(user.lastLogin).toLocaleString("en-IN", {
                        day: "numeric",
                        month: "short",
                        hour: "numeric",
                        minute: "2-digit",
                      })
                    : "No login yet"}
                </p>
                <button
                  onClick={handelLogout}
                  className="absolute lg:left-90 left-45  px-4 py-2 bg-primary text-surface-bright font-semibold hover:bg-outline-variant hover:text-primary  bottom-2 rounded-xl"
                >
                  Logout
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Profile;

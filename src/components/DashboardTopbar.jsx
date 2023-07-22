import React from "react";
import { AiOutlinePlus } from "react-icons/ai";
import { FiSettings } from "react-icons/fi";
import { HiMagnifyingGlass } from "react-icons/hi2";

const DashboardTopbar = () => {
  return (
    <section className="flex flex-wrap justify-between items-center gap-x-6 gap-y-3 px-8 py-4 bg-white">
      <div className="flex flex-wrap items-center gap-x-8 gap-y-3">
        <h2 className="text-2xl font-semibold text-[#262626]">Add New Post</h2>
        <div className="flex flex-wrap items-center gap-x-8 gap-y-3">
          <button className="flex items-center gap-1 text-[#262626]">
            <AiOutlinePlus className="text-lg" />
            Add Contact
          </button>
          <button className="flex items-center gap-1 text-[#262626]">
            <FiSettings></FiSettings>
            Settings
          </button>
        </div>
      </div>
      <div className="relative">
        <input
          id="password"
          type="text"
          className="md:w-[330px] border mt-1 pl-4 pr-9 py-3 rounded-md placeholder:text-[#000] font-light"
          placeholder="
            Search content.."
        />
        <HiMagnifyingGlass className="absolute text-2xl right-2 top-4"></HiMagnifyingGlass>
      </div>
    </section>
  );
};

export default DashboardTopbar;

import Image from "next/image";
import Link from "next/link";
import React from "react";
import { AiOutlinePlus } from "react-icons/ai";
import { HiOutlineXMark } from "react-icons/hi2";
import { PiCirclesFourBold } from "react-icons/pi";

const Sidebar = ({ hidden, setHidden }) => {
  return (
    <section
      className={`bg-[#262626] w-fit h-[calc(100vh-62px)] fixed lg:static z-40 duration-300 ${
        hidden ? "left-0" : " -left-64"
      }`}
    >
      <div className="px-8 pt-8 lg:pt-4 relative">
        <HiOutlineXMark
          onClick={() => setHidden(!hidden)}
          className="absolute text-xl bg-gray-400 rounded-full top-2 right-2 lg:hidden"
        ></HiOutlineXMark>
        <button className="w-full bg-white flex items-center gap-3 text-lg px-3 py-2 rounded font-medium">
          <AiOutlinePlus />
          New Item
        </button>
      </div>

      <div className="py-4 w-[250px]">
        <div className="collapse collapse-arrow text-white border-t border-t-[#171717] px-4 rounded-none">
          <input type="radio" name="my-accordion-2" defaultChecked="checked" />
          <div className="collapse-title font-medium flex items-center gap-2">
            <PiCirclesFourBold />
            Dashboard
          </div>
          <div className="collapse-content flex flex-col gap-3 ml-5">
            <Link href="/commerce">Commerce</Link>
            <Link href="/analytics">Analytics</Link>
            <Link href="/crypto">Crypto</Link>
            <Link href="/helpdesk">Helpdesk</Link>
            <Link href="/monitoring">Monitoring</Link>
            <Link href="/fitness">Fitness</Link>
          </div>
        </div>
        <div className="collapse collapse-arrow text-white border-t border-t-[#171717] px-4 rounded-none">
          <input type="radio" name="my-accordion-2" defaultChecked="checked" />
          <div className="collapse-title font-medium flex items-center gap-2">
            <PiCirclesFourBold />
            Application
          </div>
        </div>
        <div className="collapse collapse-arrow text-white border-t border-t-[#171717] px-4 rounded-none">
          <input type="radio" name="my-accordion-2" defaultChecked="checked" />
          <div className="collapse-title font-medium flex items-center gap-2">
            <PiCirclesFourBold />
            Elements
          </div>
        </div>
        <div className="collapse collapse-arrow text-white border-t border-t-[#171717] px-4 rounded-none">
          <input type="radio" name="my-accordion-2" defaultChecked="checked" />
          <div className="collapse-title font-medium flex items-center gap-2">
            <PiCirclesFourBold />
            Forms
          </div>
        </div>
        <div className="collapse collapse-arrow text-white border-t border-t-[#171717] px-4 rounded-none">
          <input type="radio" name="my-accordion-2" defaultChecked="checked" />
          <div className="collapse-title font-medium flex items-center gap-2">
            <PiCirclesFourBold />
            Plugins
          </div>
        </div>
        <div className="collapse collapse-arrow text-white border-t border-t-[#171717] px-4 rounded-none">
          <input type="radio" name="my-accordion-2" defaultChecked="checked" />
          <div className="collapse-title font-medium flex items-center gap-2">
            <PiCirclesFourBold />
            Datagrid
          </div>
        </div>
        <div className="collapse collapse-arrow text-white border-t border-t-[#171717] px-4 rounded-none">
          <input type="radio" name="my-accordion-2" defaultChecked="checked" />
          <div className="collapse-title font-medium flex items-center gap-2">
            <PiCirclesFourBold />
            Settings
          </div>
        </div>
      </div>
    </section>
  );
};

export default Sidebar;

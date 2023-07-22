"use client";
import Navbar from "@/components/Navbar";
import Sidebar from "@/components/Sidebar";
import { useState } from "react";
import { AiOutlineArrowRight } from "react-icons/ai";

const DashboardLayout = ({ children }) => {
  const [hidden, setHidden] = useState(false);

  return (
    <html lang="en">
      <body className="font-poppins bg-[#F5F5F5]">
        <Navbar></Navbar>
        <div className="flex">
          <Sidebar hidden={hidden} setHidden={setHidden}></Sidebar>
          <div className="flex-1 h-[calc(100vh-62px)] overflow-y-scroll">
            <div className="fixed top-[96px] left-1 lg:hidden animate-ping bg-sky-400 opacity-75 rounded-full p-2">
              <AiOutlineArrowRight className="text-white"></AiOutlineArrowRight>
            </div>
            <div
              onClick={() => setHidden(!hidden)}
              className="fixed top-[96px] left-1 lg:hidden bg-sky-400 rounded-full p-2"
            >
              <AiOutlineArrowRight className="text-white"></AiOutlineArrowRight>
            </div>
            {children}
          </div>
        </div>
      </body>
    </html>
  );
};

export default DashboardLayout;

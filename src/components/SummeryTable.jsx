"use client";
import React, { useEffect, useState } from "react";
import { AiOutlineDelete, AiOutlineFileText } from "react-icons/ai";
import { PiWarningCircleBold } from "react-icons/pi";
import {
  MdKeyboardDoubleArrowLeft,
  MdKeyboardDoubleArrowRight,
} from "react-icons/md";

const SummeryTable = () => {
  const [tableData, setTableData] = useState([]);
  useEffect(() => {
    fetch("summery.json")
      .then((res) => res.json())
      .then((data) => setTableData(data));
  }, []);

  return (
    <section className="bg-white p-8 rounded-lg">
      <h2 className="text-2xl font-semibold">Financial Summary Table</h2>
      <p className="mt-2">The table provides an overview of financial data</p>
      <div className="flex items-center gap-2 p-4 border border-[#F87171] rounded-lg my-5 bg-[#FEF2F2]">
        <div>
          <PiWarningCircleBold className="text-xl text-[#7F1D1D]" />
        </div>

        <p className="text-[#7F1D1D]">
          Some data in the financial summary table might be outdated. Consider
          refreshing the page
        </p>
      </div>
      <div className="overflow-x-auto">
        <table className="table table-zebra border">
          {/* head */}
          <thead className="bg-[#D4D4D4]">
            <tr className="text-lg">
              <th className="font-semibold text-[#262626] border-r">
                Departments{" "}
              </th>
              <th className="font-semibold text-[#262626] border-r">Revenue</th>
              <th className="font-semibold text-[#262626] border-r">
                Expenses
              </th>
              <th className="font-semibold text-[#262626] border-r">Profit</th>
              <th className="font-semibold text-[#262626]">Action</th>
            </tr>
          </thead>
          <tbody>
            {tableData?.map((item) => (
              <tr key={item.name}>
                <td className="border-r">{item.name}</td>
                <td className="border-r">{item.revenue}</td>
                <td className="border-r">{item.expenses}</td>
                <td className="border-r">{item.profit}</td>
                <td className="flex gap-4">
                  <button className="flex items-center gap-1 bg-[#1D4ED8] px-2 py-1 rounded text-white">
                    <AiOutlineFileText></AiOutlineFileText>
                    Edit
                  </button>
                  <button className="flex items-center gap-1 bg-[#D97706] px-2 py-1 rounded text-white">
                    <AiOutlineDelete></AiOutlineDelete>
                    Delete
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      {/* pagination */}
      <div className="flex justify-center items-center gap-2 mt-5">
        <MdKeyboardDoubleArrowLeft className="text-lg text-[#a8a8a8]" />
        <button className="w-[35px] h-[35px] rounded-md border">1</button>
        <button className="w-[35px] h-[35px] rounded-md border bg-[#2563EB] text-white">
          2
        </button>
        <button className="w-[35px] h-[35px] rounded-md border">3</button>
        <button className="w-[35px] h-[35px] rounded-md border">4</button>
        <button className="w-[35px] h-[35px] rounded-md border">5</button>

        <MdKeyboardDoubleArrowRight className="text-lg" />
      </div>
    </section>
  );
};

export default SummeryTable;

"use client";
import Image from "next/image";
import React, { useEffect, useState } from "react";

const Performance = () => {
  const [performanceData, setPerformanceData] = useState([]);

  useEffect(() => {
    fetch("performance.json")
      .then((res) => res.json())
      .then((data) => setPerformanceData(data));
  }, []);

  return (
    <section className="grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-5">
      {performanceData?.map((item) => (
        <div
          key={item.title}
          className="p-5 bg-white flex items-center gap-3 rounded-lg"
        >
          <div>
            <Image src={item.img} width={45} height={45} alt="icon" />
          </div>
          <div>
            <small>{item.title}</small>
            <h2 className="text-2xl font-semibold text-[#262626]">
              {item.total}
            </h2>
          </div>
        </div>
      ))}
    </section>
  );
};

export default Performance;

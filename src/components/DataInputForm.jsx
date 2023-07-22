"use client";
import React from "react";
import Image from "next/image";
import { useForm } from "react-hook-form";

const DataInputForm = () => {
  const { register, handleSubmit } = useForm();

  const onSubmit = (data) => console.log(data);

  return (
    <section className="p-8 bg-white rounded-lg">
      <h2 className="text-2xl font-semibold">Data Input</h2>
      <p className="font-light text-sm mt-2">
        Please provide the necessary information.{" "}
      </p>

      <form className="mt-5 w-full space-y-5" onSubmit={handleSubmit(onSubmit)}>
        <div className="flex flex-wrap gap-3 items-center">
          <button className="bg-[#FDE68A] flex gap-1 p-1 pr-2 border border-[#D97706] rounded">
            <Image
              src="https://i.ibb.co/F6gPWr2/Flag.png"
              width={25}
              height={25}
              alt="flag"
            />
            English
          </button>
          <button className="hover:bg-[#FDE68A] hover:border-[#D97706] duration-300 flex gap-1 p-1 pr-2 border rounded">
            <Image
              src="https://i.ibb.co/pRFF474/Flag-1.png"
              width={25}
              height={25}
              alt="flag"
            />
            Turkish
          </button>
        </div>

        <div>
          <label htmlFor="">Product/Service</label>
          <input
            className="w-full border rounded-lg mt-1 px-4 py-3 placeholder:text-sm"
            placeholder="Enter your service"
            {...register("service")}
          />
        </div>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5">
          <div>
            <label htmlFor="">Payment Method</label>
            <select id="" className="w-full border px-4 py-3 mt-1 rounded-lg">
              <option>Bharat Pe</option>
              <option>Paytm</option>
            </select>
          </div>
          <div>
            <label htmlFor="">Quantity</label>
            <input
              className="w-full border rounded-lg mt-1 px-4 py-3 placeholder:text-sm"
              placeholder="Enter Quantity"
              {...register("example")}
            />
          </div>
          <div>
            <label htmlFor="">Category</label>
            <input
              className="w-full border rounded-lg mt-1 px-4 py-3 placeholder:text-sm"
              placeholder="Enter Category"
              {...register("example")}
            />
          </div>
        </div>

        <div className="grid md:grid-cols-2 gap-5">
          <div>
            <label htmlFor="">Customer Name</label>
            <input
              className="w-full border rounded-lg px-4 py-3 placeholder:text-sm"
              placeholder="Enter your name"
              {...register("example")}
            />
          </div>
          <div>
            <label htmlFor="">Customer Email</label>
            <input
              className="w-full border rounded-lg px-4 py-3 placeholder:text-sm"
              placeholder="Enter your email"
              {...register("example")}
            />
          </div>
        </div>

        <div>
          <label htmlFor="">Notes/Comments</label>
          <textarea
            className="w-full border rounded-lg mt-1 px-4 py-2 placeholder:text-sm h-[200px]"
            placeholder="Enter your message"
          />
        </div>
      </form>
    </section>
  );
};

export default DataInputForm;

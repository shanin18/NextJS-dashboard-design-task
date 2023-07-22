"use client";
import React from "react";
import { useForm } from "react-hook-form";

const FeedbackForm = () => {
  const { register, handleSubmit } = useForm();

  const onSubmit = (data) => console.log(data);
  return (
    <section className="p-8 bg-white rounded-lg">
      <h2 className="text-2xl font-semibold">Feedback </h2>
      <p className="font-light text-sm mt-2">Please provide a feedback</p>
      <form className="mt-5 w-full space-y-5" onSubmit={handleSubmit(onSubmit)}>
        <div>
          <label htmlFor="">Name</label>
          <input
            className="w-full border rounded-lg mt-1 px-4 py-3 placeholder:text-sm"
            placeholder="Enter Name"
            {...register("service")}
          />
        </div>
        <div>
          <label htmlFor="">Feedback Type</label>
          <select id="" className="w-full border px-4 py-3 mt-1 rounded-lg">
            <option>General Feedback</option>
            <option>Bug Report</option>
            <option>Feature Request</option>
            <option>Security Concern</option>
          </select>
        </div>

        <div>
          <label htmlFor="">Notes/Message</label>
          <textarea
            className="w-full border rounded-lg mt-1 px-4 py-2 placeholder:text-sm h-[200px]"
            placeholder="Enter your message"
          />
        </div>
        <input
          className="w-full border rounded-lg mt-1 px-4 py-3 bg-[#2563EB] text-white"
          type="submit"
          value="Send"
        />
      </form>
    </section>
  );
};

export default FeedbackForm;

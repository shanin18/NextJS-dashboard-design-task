"use client";
import React from "react";
import { useForm } from "react-hook-form";
const AnalyticsSettingsForm = () => {
  const { register, handleSubmit } = useForm();
  const onSubmit = (data) => console.log(data);

  return (
    <section className="p-8 bg-white rounded-lg flex-1">
      <h2 className="text-2xl font-semibold">Analytics Settings</h2>
      <p className="font-light text-sm mt-2">
        Please provide the necessary information.{" "}
      </p>

      <form className="mt-5 w-full space-y-5" onSubmit={handleSubmit(onSubmit)}>
        <div>
          <label htmlFor="">User Identification</label>
          <input
            className="w-full border rounded-lg mt-1 px-4 py-3 placeholder:text-sm"
            placeholder="Enter User Identification"
            {...register("service")}
          />
        </div>
        <div>
          <label htmlFor="">Analytics Provider</label>
          <select id="" className="w-full border px-4 py-3 mt-1 rounded-lg">
            <option>Google Analytics</option>
            <option>Mixpanel</option>
            <option>Matomo</option>
            <option>Firebase Analytics</option>
          </select>
        </div>

        <div className="grid xl:grid-cols-2 gap-5">
          <div>
            <label htmlFor="">Tracking Code/Key</label>
            <input
              className="w-full border rounded-lg px-4 py-3 placeholder:text-sm"
              placeholder="Enter Tracking Code/Key"
              {...register("example")}
            />
          </div>
          <div>
            <label htmlFor="">IP Anonymization</label>
            <input
              className="w-full border rounded-lg px-4 py-3 placeholder:text-sm"
              placeholder="Enter IP Anonymization"
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

export default AnalyticsSettingsForm;

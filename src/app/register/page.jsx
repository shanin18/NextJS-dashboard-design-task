"use client";
import Link from "next/link";
import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { AiFillEye, AiFillEyeInvisible } from "react-icons/ai";

const RegisterPage = () => {
  const [hidden, setHidden] = useState(false);
  const { register, handleSubmit } = useForm();

  const onSubmit = async (data) => {
    const { name, image, email, password } = data;
  };

  return (
    <section className="min-h-screen container mx-auto flex justify-center items-center">
      <div className="p-10 bg-white rounded-lg shadow-lg">
        <h2 className="text-2xl font-semibold">Login</h2>
        <p className="font-light text-sm mt-2">Please login first!</p>

        <div className="mt-10">
          <form onSubmit={handleSubmit(onSubmit)} className="space-y-5">
            <div className="grid md:grid-cols-2 gap-5">
              <div>
                <label htmlFor="name" className="font-light">
                  Name
                </label>
                <input
                  id="name"
                  type="text"
                  className="w-full border mt-1 px-4 py-3 rounded-md placeholder:text-sm font-light"
                  placeholder="Enter your name"
                  {...register("name")}
                />
              </div>
              <div>
                <label htmlFor="email" className="font-light">
                  E-mail
                </label>
                <input
                  id="email"
                  type="email"
                  className="w-full border mt-1 px-4 py-3 rounded-md placeholder:text-sm font-light"
                  placeholder="Enter your email"
                  {...register("email")}
                />
              </div>
            </div>

            <div className="grid md:grid-cols-2 gap-5">
              <div>
                <label htmlFor="image" className="font-light">
                  Image Url
                </label>
                <input
                  id="image"
                  type="text"
                  className="w-full border mt-1 px-4 py-3 rounded-md placeholder:text-sm font-light"
                  placeholder="Enter Image Url"
                  {...register("image")}
                />
              </div>

              <div className="relative">
                <label htmlFor="password" className="font-light">
                  Passowrd
                </label>
                <input
                  id="password"
                  type={hidden ? "password" : undefined}
                  className="w-full border mt-1 pl-4 pr-7 py-3 rounded-md placeholder:text-sm font-light"
                  placeholder="Enter your password"
                  {...register("password", { required: true })}
                />
                {hidden ? (
                  <AiFillEye
                    className="absolute right-2 top-11 cursor-pointer"
                    onClick={() => setHidden(!hidden)}
                  ></AiFillEye>
                ) : (
                  <AiFillEyeInvisible
                    className="absolute right-2 top-11 cursor-pointer"
                    onClick={() => setHidden(!hidden)}
                  ></AiFillEyeInvisible>
                )}
              </div>
            </div>

            <div className="text-right">
              <small className="font-semibold hover:underline cursor-pointer">
                Forgot password?
              </small>
            </div>

            <input
              className="w-full bg-[#2563EB] text-white px-4 py-3 rounded-md"
              type="submit"
              value="Register"
            />
          </form>

          <div className="mt-10">
            <div className="flex items-center">
              <div className="w-full h-px bg-[#E5E5E5]"></div>
              <p className="px-3 text-[#E5E5E5]">or</p>
              <div className="w-full h-px bg-[#E5E5E5]"></div>
            </div>
            <div className="mt-3">
              <Link
                href="/login"
                className="block text-center border border-[#525252] px-4 py-3 hover:bg-[#2563EB] hover:text-white hover:border-[#2563EB] duration-300 rounded-md"
              >
                Login Now
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default RegisterPage;

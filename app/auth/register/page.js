/* eslint-disable react/no-unescaped-entities */
"use client";
import React from "react";
import { EyeInvisibleOutlined, EyeTwoTone } from "@ant-design/icons";
import { Input } from "antd";
import Link from "next/link";

const onChange = (e) => {
  console.log(`checked = ${e.target.checked}`);
};
export default function register() {
  return (
    <div className="lg:flex items-center justify-center font-lora gap-10 ">
      {/* Input Fields Section */}
      <div className="w-full max-w-lg bg-white p-6 rounded-lg shadow-md">
        <div className="text-center space-y-4">
          <h1 className="text-[30px] font-semibold text-primaryText text-center ">
            Create Account
          </h1>
          <p className="text-center pb-4">
            Sign up Now and unlock exclusive access!
          </p>
        </div>
        <div className="mb-4">
          <label
            htmlFor="name"
            className="block text-[18px] font-normal  text-gray-700 mb-2"
          >
            Name
          </label>
          <Input size="large" placeholder="Name" />
        </div>
        <div className="mb-4">
          <label
            htmlFor="email"
            className="block text-[18px] font-normal  text-gray-700 mb-2"
          >
            Email
          </label>
          <Input size="large" placeholder="Enter Your Email" />
        </div>
        

        <div className="mb-4">
        <label
            htmlFor="password"
            className="block text-[18px] font-normal  text-gray-700 mb-2"
          >
            Password
          </label>
          <Input.Password
            size="large"
            placeholder="Password"
            iconRender={(visible) =>
              visible ? <EyeTwoTone /> : <EyeInvisibleOutlined />
            }
          />
        </div>

        <div className="pt-6">
          <button className="w-full py-4 text-lg font-normal font-lora text-white bg-[#dd800c] rounded-lg shadow-md hover:bg-[#c4710b] hover:shadow-lg transition-all duration-200 focus:ring-2 focus:ring-[#dd800c] focus:outline-none disabled:bg-gray-400 disabled:cursor-not-allowed">
            Create Account
          </button>
        </div>
        <div>
          <div className="flex justify-center items-center gap-2 mt-4">
            <p>I have an account?</p>

            <Link href={"/auth"}>
              <button className="text-[15px] font-bold text-black font-lora">
              Sign In Now
              </button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}

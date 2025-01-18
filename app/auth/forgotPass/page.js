"use client";
import React from "react";

import { Button, Input } from "antd";
import Link from "next/link";

export default function forgot() {
  return (
    <div className="lg:flex items-center justify-center font-lora h-screen">
      {/* Input Fields Section */}
      <div className="w-full max-w-lg bg-white p-6 rounded-lg shadow-md">
        <h1 className="text-[32px]  font-bold text-primaryText text-center pb-2">
          Forget Your Password
        </h1>
        <p className=" mx-auto text-center">
          Welcome back! Select method to log in
        </p>
        <div className="mb-4 mt-4">
          <label
            htmlFor="email"
            className="block text-[18px] font-normal  text-gray-700 mb-2"
          >
            Email
          </label>
          <Input size="large" placeholder="Enter Your Email" required />
        </div>

     
        <div className="pt-3 pb-2">
          <button className="w-full py-2 text-lg font-normal font-lora text-white bg-[#dd800c] rounded-lg shadow-md hover:bg-[#c4710b] hover:shadow-lg transition-all duration-200 focus:ring-2 focus:ring-[#dd800c] focus:outline-none disabled:bg-gray-400 disabled:cursor-not-allowed">
          Reset Password
          </button>
        </div>
        <div>
          <div className="flex justify-center items-center gap-2">
            <p>Already have an account ?</p>
            <Link href="/login">
              <Button
                className="text-[15px] font-normal text-primaryText font-lora"
                color="default"
                variant="text"
              >
                Sign In
              </Button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}

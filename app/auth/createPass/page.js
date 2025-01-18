"use client";
import React from "react";

import {  Input } from "antd";



export default function ResetPassword() {
  return (
    <div className="lg:flex items-center justify-center font-lora h-screen">
   

      {/* Input Fields Section */}
      <div className="w-full max-w-lg bg-white p-6 rounded-lg shadow-md">
      <h1 className="text-[32px]  font-bold text-primaryText text-center pb-2">
      Create Password
        </h1>
        <p className=" mx-auto text-center">
        Create your new password for your account
        </p>
        <div className="mb-4 mt-4">
          <Input
            size="large"
            placeholder="Enter Password"

            required
          />
        </div>
        <div className="mb-4 mt-4">
          <Input
            size="large"
            placeholder="Re-enter Password"

            required
          />
        </div>

        <div className="pt-6">
        <button className="w-full py-2 text-lg font-normal font-lora text-white bg-[#dd800c] rounded-lg shadow-md hover:bg-[#c4710b] hover:shadow-lg transition-all duration-200 focus:ring-2 focus:ring-[#dd800c] focus:outline-none disabled:bg-gray-400 disabled:cursor-not-allowed">
        Continue
          </button>
        </div>
        
      </div>
    </div>
  );
}

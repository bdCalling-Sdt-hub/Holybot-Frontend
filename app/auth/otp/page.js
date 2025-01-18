"use client";
import React from "react";

import {  Input } from "antd";




export default function VerifyEmail() {
  const onChange = (text) => {
    console.log("onChange:", text);
  };
  const onInput = (value) => {
    console.log("onInput:", value);
  };
  const sharedProps = {
    onChange,
    onInput,
  };
  return (
    <div className="lg:flex items-center justify-center font-lora gap-10  h-screen">
      {/* Input Fields Section */}
      <div className="w-full max-w-lg bg-white p-6 rounded-lg shadow-md">
        <h1 className="text-[32px]  font-bold text-primaryText text-center pb-2">
          Verify with OTP
        </h1>
        <p className=" mx-auto text-center">
          Please enter the otp we have sent you in your email.{" "}
        </p>
        <div className="mb-4 mt-4 mx-auto lg:w-3/5">
          <Input.OTP
            className=""
            formatter={(str) => str.toUpperCase()}
            {...sharedProps}
            required
            aria-required="true"
          />
        </div>

        <div className="pt-6">
          {/* <Link href={"/ResetPassword"}> */}
            <button className="w-full py-2 text-lg font-normal font-lora text-white bg-[#dd800c] rounded-lg shadow-md hover:bg-[#c4710b] hover:shadow-lg transition-all duration-200 focus:ring-2 focus:ring-[#dd800c] focus:outline-none disabled:bg-gray-400 disabled:cursor-not-allowed">
              Submit
            </button>
          {/* </Link> */}
        </div>
      </div>
    </div>
  );
}

/* eslint-disable react/no-unescaped-entities */
"use client";
import Image from "next/image";
import React from "react";
import {
  UserOutlined,
  EyeInvisibleOutlined,
  EyeTwoTone,
} from "@ant-design/icons";
import { Button, Checkbox, Input } from "antd";
import { KeyRound, MailCheck } from "lucide-react";
import Link from "next/link";

const onChange = (e) => {
  console.log(`checked = ${e.target.checked}`);
};
export default function login() {
  return (
    <div className="lg:flex items-center justify-center font-lora  h-screen">
      {/* Input Fields Section */}
      <div className="w-full max-w-lg bg-white p-6 rounded-lg shadow-md">
        <div className="text-center space-y-4">
          <h1 className="text-[30px] font-semibold text-primaryText text-center ">
            Sign In Now
          </h1>
          <p className="text-center pb-4">Welcome back! Select method log in</p>
        </div>
        <div className="mb-4">
        <label
            htmlFor="email"
            className="block text-[18px] font-normal  text-gray-700 mb-2"
          >
            Email
          </label>
          <Input
            size="large"
            placeholder="Enter Your Email"

          />
        </div>
        <div className="mb-4">
        <label
            htmlFor="Password"
            className="block text-[18px] font-normal  text-gray-700 mb-2"
          >
            Password
          </label>
          <Input.Password
            size="large"

            placeholder="Enter Password"
            iconRender={(visible) =>
              visible ? <EyeTwoTone /> : <EyeInvisibleOutlined />
            }
          />
        </div>
        <div className="flex justify-between items-center text-[15px] font-normal text-primaryText">
          <Checkbox
            onChange={onChange}
            className="text-[15px] font-normal text-primaryText font-lora"
          >
            Remember me
          </Checkbox>
          <Link href="auth/forgotPass">
            <p className="text-primaryText hover:underline cursor-pointer text-yellow-500">
              Forgot password?
            </p>
          </Link>
        </div>
        <div className="pt-6">
          <button className="w-full py-4 text-lg font-normal font-lora text-white bg-[#dd800c] rounded-lg shadow-md hover:bg-[#c4710b] hover:shadow-lg transition-all duration-200 focus:ring-2 focus:ring-[#dd800c] focus:outline-none disabled:bg-gray-400 disabled:cursor-not-allowed">
            Sign In Now
          </button>
        </div>
        <div>
          <div className="flex justify-center items-center gap-2 mt-3">
            <p>Don't have an account?</p>
            <Link href="auth/register" passHref>
              <Button
                className="text-[15px] font-normal text-primaryText font-lora"
                type="link"
              >
                Sign Up
              </Button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}

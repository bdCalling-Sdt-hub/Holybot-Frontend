/* eslint-disable @next/next/no-img-element */


"use client";

import { Input } from "antd";
import { useEffect, useState } from "react";
import { UserOutlined } from '@ant-design/icons';
import { Search } from "lucide-react";


const MainMessagePage = () => {
  ;
  const [isSidebarOpen, setIsSidebarOpen] = useState(false); // Sidebar toggle state

 

  const chats = [
    {
      title: 'Debating some Bible questions',
      lastMessage: 'Last message 3 hours ago',
    },
    {
      title: 'Debating some Bible questions',
      lastMessage: 'Last message 3 hours ago',
    },
  ];

  useEffect(() => {
    if (typeof window !== "undefined") {
      // Client-only logic
    }
  }, []);

  return (
    <div className="min-h-screen flex flex-col lg:flex-row ">
      {/* Sidebar */}
      <div
        className={`fixed top-0 left-0 w-64 bg-[#dedcd1] h-full h-screen transition-transform transform lg:transform-none lg:static ${
          isSidebarOpen ? "translate-x-0" : "-translate-x-full"
        } z-40`}
      >
        <aside className="h-full flex flex-col justify-between">
          <div className="p-4 text-[#535136] text-center font-bold text-4xl border-b">
            Holybot
          </div>

          <div className="mt-auto p-4">
            <div className="text-black bg-gray-200 px-4 py-2 rounded-full font-medium flex justify-center items-center gap-2">
              <img
                src="https://cdn.pixabay.com/photo/2020/07/01/12/58/icon-5359554_1280.png"
                className="w-8 h-8 object-cover rounded-full"
                alt="User Avatar"
              />
              <span className="text-sm">sharifmahamu@gmail.com</span>
            </div>
          </div>
        </aside>
      </div>

      {/* Sidebar Overlay for Mobile */}
      {isSidebarOpen && (
        <div
          className="fixed inset-0 bg-black bg-opacity-50 z-30 lg:hidden"
          onClick={() => setIsSidebarOpen(false)}
        />
      )}

      {/* Main Content */}
      <div className="flex-grow p-4 lg:pl-8">
        {/* Header Section */}
        <div className=" mx-auto w-full  p-6">
          <div className="lg:flex justify-between mb-4">
            <h1 className="text-xl text-center md:text-2xl font-bold ">
              What is the main message of the Bible?
            </h1>
            <div>
              <div className="flex text-center  items-center justify-center gap-5">
                <svg
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M16.5 19H11V15H18V11H22V19H19.5L18 20.5L16.5 19Z"
                    stroke="#FB9B24"
                    strokeWidth="2"
                  />
                  <path
                    d="M2 3H18V15H8.5L6.5 17L4.5 15H2V3Z"
                    stroke="#FB9B24"
                    strokeWidth="2"
                  />
                  <path d="M7.5 9H12" stroke="#FB9B24" strokeWidth="2" />
                  <path d="M10 6L10 12" stroke="#FB9B24" strokeWidth="2" />
                </svg>

                <h2 className="text-[18px] font-bold text-[#fb9b24]">
                  Start new chat
                </h2>
              </div>

              

            </div>
          </div>
          <div className="max-w-4xl mx-auto  px-6 py-10">
                {/* Search Bar */}
                <div className="mb-6">
                  {/* <input
                    type="text"
                    placeholder="Search your chats..."
                    className="w-full p-3 border border-gray-300 rounded-lg bg-white focus:outline-none focus:ring-2 focus:ring-gray-400"
                  /> */}
                      <Input className="py-2 rounded-2xl" size="large" placeholder="Search your chats..." prefix={<Search  className="text-gray-400"/>} />
                </div>

                {/* Chat List Header */}
                <h2 className="text-lg font-medium text-gray-700 mb-4">
                  You have {chats.length} previous chats with holybot
                </h2>

                {/* Chat List */}
                <div className="space-y-4">
                  {chats.map((chat, index) => (
                    <div
                      key={index}
                      className="p-4 border border-gray-200 rounded-lg  hover:shadow-md transition-shadow"
                    >
                      <h3 className="text-base font-semibold text-gray-800">
                        {chat.title}
                      </h3>
                      <p className="text-sm text-gray-500">
                        {chat.lastMessage}
                      </p>
                    </div>
                  ))}
                </div>
              </div>
        </div>
      </div>
    </div>
  );
};

export default MainMessagePage;

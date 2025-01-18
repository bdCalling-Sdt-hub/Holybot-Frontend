/* eslint-disable @next/next/no-img-element */
// 'use client';

// import { useState } from "react";
// import axios from "axios";
// import { BiCamera } from "react-icons/bi";
// import { PiLinkSimpleBold } from "react-icons/pi";
// import Sidebar from "../components/Sidebar";
// import { useRouter } from "next/navigation";

// const MainMessagePage = () => {
//   const router = useRouter(); // Correct usage of useRouter
//   const [loading, setLoading] = useState(false);
//   const [error, setError] = useState(null);
//   const [question, setQuestion] = useState("");
//   const [chatHistory, setChatHistory] = useState([]);
//   const [generatingAnswer, setGeneratingAnswer] = useState(false);
//   const [answerCount, setAnswerCount] = useState(0); // Counter for answers

//   // Function to fetch AI-generated answer
//   async function generateAnswer(e) {
//     e.preventDefault();
//     if (!question.trim()) return;

//     setGeneratingAnswer(true);
//     const currentQuestion = question;
//     setQuestion(""); // Clear input immediately after sending

//     // Add user question to chat history
//     setChatHistory((prev) => [
//       ...prev,
//       { type: "question", content: currentQuestion },
//     ]);

//     try {
//       const response = await axios.post(
//         "https://generativelanguage.googleapis.com/v1beta/models/gemini-1.5-flash-latest:generateContent?key=AIzaSyAAqfA0f2nbOjMPPKKGR_qQh2K3Ag3X2w0",
//         {
//           contents: [{ parts: [{ text: currentQuestion }] }],
//         }
//       );

//       const aiResponse = response.data.candidates[0].content.parts[0].text;
//       setChatHistory((prev) => [
//         ...prev,
//         { type: "answer", content: aiResponse },
//       ]);

//       // Increment answer count
//       setAnswerCount((prev) => prev + 1);

//       // Redirect to payment page after 3 answers
//       if (answerCount >= 2) { // Redirect after 3 answers
//         alert(
//           "You have reached the free limit. Please make a payment for more answers."
//         );
//         router.push("payment"); // Redirect to payment page
//       }
//     } catch (error) {
//       console.error(error);
//       setChatHistory((prev) => [
//         ...prev,
//         {
//           type: "answer",
//           content: "Sorry - Something went wrong. Please try again!",
//         },
//       ]);
//     }
//     setGeneratingAnswer(false);
//   }

//   return (
//     <div className="min-h-screen flex">
//       {/* <Sidebar /> */}
//       <div className="fixed top-0 left-0 w-[326px] min-h-screen flex flex-col   py-[50px] px-5">
//         {/* Sidebar */}
//         <aside className="h-full w-64  text-white flex flex-col justify-between">
//           {/* Header Section */}
//           <div className="p-4 text-[#535136]  text-center font-bold text-4xl border-b ">
//             Holybot
//           </div>

//           <div className=" pt-[680px]">
//             <div className="text-black bg-[#dedcd1] px-8 py-2 rounded-full font-medium flex justify-center items-center gap-2">
//               <img
//                 src="https://cdn.pixabay.com/photo/2020/07/01/12/58/icon-5359554_1280.png"
//                 className="w-12 h-12 object-cover rounded-full" // Ensures the image is sized properly
//                 alt="User Avatar"
//               />
//               <span className="text-sm">sharifmahamu@gmail.com</span>
//             </div>
//           </div>
//         </aside>
//       </div>

//       {/* Main Content */}
//       <div className="flex-grow p-6">
//         <div className="max-w-6xl mx-auto w-full rounded-lg p-6">
//           {/* Header Section */}
//           <h1 className="text-2xl font-bold mb-6">
//             What is the main message of the Bible?
//           </h1>

//           {/* Content Section */}
//           <div className="p-6 rounded-md">
//             {loading ? (
//               <p className="text-gray-700">Loading...</p>
//             ) : error ? (
//               <p className="text-red-500">Error: {error}</p>
//             ) : chatHistory.length > 0 ? (
//               chatHistory.map((chat, index) => (
//                 <div
//                   key={index}
//                   className={`p-4 rounded-md mb-4 ${
//                     chat.type === "question" ? "bg-[#dedcd1]" : "bg-white"
//                   }`}
//                 >
//                   {chat.content}
//                 </div>
//               ))
//             ) : (
//               <p className="text-lg text-gray-700">No data available.</p>
//             )}
//           </div>

//           {/* Footer Input Section */}
//           <div className="max-w-5xl mx-auto flex items-center justify-center h-screen">
//             <form
//               onSubmit={(e) => {
//                 e.preventDefault();
//                 if (question.trim()) {
//                   generateAnswer(e); // Call the generateAnswer function if input is valid
//                 }
//               }}
//               className="fixed bottom-0 left-1/2 transform -translate-x-1/2 bg-white rounded-t-xl shadow-md p-4 z-50 flex items-center gap-4 max-w-3xl w-full"
//             >
//               {/* Input Field */}
//               <div className="relative flex-grow">
//                 <input
//                   type="text"
//                   value={question}
//                   onChange={(e) => setQuestion(e.target.value)}
//                   className="w-full bg-gray-50 p-2 py-4 pl-4 pr-12 rounded-md border border-gray-300 focus:ring-2 focus:ring-blue-500 focus:outline-none"
//                   placeholder="Ask a question..."
//                   required
//                 />
//                 {/* Camera Icon */}
//                 <button
//                   type="button"
//                   className="absolute right-2 top-1/2 transform -translate-y-1/2 text-gray-500 hover:text-gray-700 transition-colors"
//                   onClick={() => alert("Camera button clicked")}
//                 >
//                   <div className="flex gap-2">
//                     <BiCamera size={20} />
//                     <PiLinkSimpleBold size={20} />
//                   </div>
//                 </button>
//               </div>

//               {/* Submit Button */}
//               <button
//                 type="submit"
//                 disabled={generatingAnswer}
//                 className={`px-4 py-2 rounded-md text-white transition-all ${
//                   generatingAnswer
//                     ? "bg-gray-500 cursor-not-allowed"
//                     : "bg-blue-500 hover:bg-blue-600 focus:ring-2 focus:ring-blue-300"
//                 }`}
//               >
//                 {generatingAnswer ? "Generating..." : "Send"}
//               </button>
//             </form>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default MainMessagePage;

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

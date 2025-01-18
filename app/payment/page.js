'use client'

import Image from "next/image";
import { useState } from "react";

function RippleButton({ children, onClick, className = '' }) {
  const [ripples, setRipples] = useState([]);

  const createRipple = (event) => {
    const button = event.currentTarget;
    const rect = button.getBoundingClientRect();
    const diameter = Math.max(button.clientWidth, button.clientHeight);
    const radius = diameter / 2;

    const ripple = {
      x: event.clientX - rect.left - radius,
      y: event.clientY - rect.top - radius,
      diameter,
      id: Date.now(),
    };

    setRipples((prevRipples) => [...prevRipples, ripple]);
    onClick?.();

    setTimeout(() => {
      setRipples((prevRipples) => 
        prevRipples.filter((r) => r.id !== ripple.id)
      );
    }, 600);
  };

  return (
    <button
      className={`relative overflow-hidden ${className}`}
      onClick={createRipple}
    >
      {ripples.map((ripple) => (
        <span
          key={ripple.id}
          className="absolute bg-white/30 -translate-x-1/2 -translate-y-1/2 animate-ripple rounded-full pointer-events-none"
          style={{
            left: ripple.x,
            top: ripple.y,
            width: ripple.diameter,
            height: ripple.diameter,
          }}
        />
      ))}
      {children}
    </button>
  );
}

function App() {
  const [isYearly, setIsYearly] = useState(false);
  
  return (
    <div className="min-h-screen  flex flex-col items-center pt-16 px-4 text-[#3d3929] space-y-5 ">
      {/* Logo and Title */}
      <div className="flex gap-3 ">
        <Image
          className=" size-14 w-[22px] h-[33px]"
          src="/image/logo.png"
          alt="HolyBot logo"
          width={200}
          height={300}
        />
        
        <h1 className="text-3xl fo text-[#3d3929]  font-bold">HolyBot</h1>
      </div>
      <div className="text-center mb-12">
        <h1 className="lg:text-5xl text-4xl font-normal   text-[#3d3929] mb-8">Choose your plan</h1>
        
        {/* Billing Toggle */}
        <div className="inline-flex rounded-full bg-[#e8e6dc]  p-1">
          <RippleButton
            className={`px-6 py-2 rounded-full text-sm font-medium transition-colors ${
              !isYearly ? 'bg-zinc-700 text-white' : 'text-zinc-400'
            }`}
            onClick={() => setIsYearly(false)}
          >
            Pay monthly
          </RippleButton>
          <RippleButton
            className={`px-6 py-2 rounded-full text-sm font-medium transition-colors ${
              isYearly ? 'bg-zinc-700 text-white' : 'text-zinc-400'
            }`}
            onClick={() => setIsYearly(true)}
          >
            Pay yearly
            <span className="ml-2 text-orange-500 text-xs font-bold">
              Best value
            </span>
          </RippleButton>
        </div>
      </div>

      {/* Pricing Card */}
      <div className="w-full max-w-sm border-2 bg-[#f6f4ef] text-[#3d3929] rounded-2xl p-6">
        <div className=" mb-6">
          <div className=" ">
            {/* <Diamond className="w-6 h-6 text-white" /> */}
            <Image src={'/image/pro.png'} height={200} width={200} alt="pro.png"></Image>
          </div>
          <h2 className="text-3xl font-bold text-black ">Premium</h2>
        </div>

        <div className="mb-6">
          <div className="flex items-baseline">
            <span className="text-3xl font-bold ">$9.99</span>
            <span className="text-zinc-400 ml-1">/month</span>
          </div>
        </div>

        <ul className="space-y-4 mb-8 text-[#3d3929]">
          {[
            'All features from basic plan',
            'All features from basic plan',
            'All features from basic plan',
            'All features from basic plan'
          ].map((feature, index) => (
            <li key={index} className="flex items-center text-[#3d3929] font-medium">
              <svg
                className="w-5 h-5 mr-3 text-zinc-500"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M5 13l4 4L19 7"
                />
              </svg>
              {feature}
            </li>
          ))}
        </ul>

        <RippleButton className="w-full py-3 px-6 rounded-lg bg-gradient-to-r from-orange-500 to-orange-600 text-white font-semibold hover:from-orange-600 hover:to-orange-700 transition-colors">
          Subscribe to Pro
        </RippleButton>
      </div>
    </div>
  );
}

export default App;
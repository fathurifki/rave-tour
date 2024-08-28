"use client";

import React, { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";

interface LayoutProps {
  children: React.ReactNode;
}

const Layout: React.FC<LayoutProps> = ({ children }) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [activeTab, setActiveTab] = useState("Your itinerary");

  const tabs = ["Your itinerary", "Dates & prices", "Reviews"];

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY;
      setIsScrolled(scrollPosition > 450); // Adjust this value as needed
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div className="relative min-h-screen">
      <header className="bg-[#F5F5F5] shadow-sm ">
        <div className="flex container mx-auto">
          {tabs.map((tab) => (
            <button
              key={tab}
              className={`
                  whitespace-nowrap  px-6 py-6 border-b-4 font-medium text-lg mx-2
                  ${
                    activeTab === tab
                      ? "border-red-600 text-black"
                      : "border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300"
                  }
                `}
              onClick={() => setActiveTab(tab)}
              aria-current={activeTab === tab ? "page" : undefined}
            >
              {tab}
            </button>
          ))}
        </div>
      </header>
      <header
        className="fixed top-0 left-0 right-0 z-10 bg-white shadow-sm px-8 transition-transform duration-300 ease-in-out"
        style={{
          transform: isScrolled ? "translateY(0)" : "translateY(-100%)",
        }}
      >
        <div className="w-full">
          <div className="">
            <div className="flex items-center justify-between">
              <nav className="-mb-px flex space-x-8" aria-label="Tabs">
              {tabs.map((tab) => (
            <button
              key={tab}
              className={`
                  whitespace-nowrap  px-6 py-6 border-b-4 font-medium text-lg mx-2
                  ${
                    activeTab === tab
                      ? "border-red-600 text-black"
                      : "border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300"
                  }
                `}
              onClick={() => setActiveTab(tab)}
              aria-current={activeTab === tab ? "page" : undefined}
            >
              {tab}
            </button>
          ))}
              </nav>
              <div className="flex  gap-4">
                <div className="bg-red-500 w-[12.125rem] h-[3.25rem] text-white flex items-center justify-center font-bold">
                  Available Dates
                </div>
                <button className=" w-[12.125rem] h-[3.25rem] inline-flex items-center justify-center whitespace-nowrap text-sm border-2 font-bold text-red-500 border-red-600 px-4 py-2 ">
                  Easy Quote
                </button>
              </div>
            </div>
          </div>
        </div>
      </header>
      <main className="relative z-0">{children}</main>
    </div>
  );
};

export default Layout;

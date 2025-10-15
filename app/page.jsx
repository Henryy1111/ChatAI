"use client";
import { assets } from "@/assets/assets";
import Sidebar from "@/components/Sidebar";
import PromptBox from "@/components/PromptBox";
import Message from "@/components/Message";
import Image from "next/image";
import { useState } from "react";

export default function Home() {
  const [expand, setExpand] = useState(false);
  const [messages, setMessages] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  return (
    <div className="flex h-screen bg-[#1e1f22] text-white overflow-hidden">
      {/* SIDEBAR */}
      <Sidebar expand={expand} setExpand={setExpand} />

      {/* MAIN AREA */}
      <main className="flex-1 flex flex-col relative bg-[#292a2d] transition-all duration-500">
        {/* HEADER (mobile only) */}
        <div className="md:hidden absolute top-4 left-4 right-4 flex items-center justify-between">
          <Image
            onClick={() => setExpand(!expand)}
            className="cursor-pointer w-6 transition-transform hover:scale-110"
            src={assets.menu_icon}
            alt="menu"
          />
          <Image className="opacity-70 w-6" src={assets.chat_icon} alt="chat" />
        </div>

        {/* CHAT CONTENT */}
        <div className="flex-1 flex flex-col items-center justify-center px-4 overflow-y-auto">
          {messages.length === 0 ? (
            <div className="flex flex-col items-center text-center mb-8">
              <div className="flex items-center gap-3 mb-2">
                <Image
                  src={assets.logo_icon}
                  alt="Logo"
                  className="h-16 w-16 animate-pulse"
                />
                <p className="text-3xl font-semibold tracking-wide text-white">
                  Hello, chat with me.
                </p>
              </div>
              <p className="text-sm text-gray-400 mb-6">
                Is there anything I can help you with today?
              </p>

              {/* Contoh message */}
              <div>
                <Message role="user" content="What is Next.js?" />
              </div>

              {/* PromptBox right below text */}
              <div className="w-full flex justify-center mt-4">
                <div className="w-full max-w-2xl">
                  <PromptBox
                    isLoading={isLoading}
                    setIsLoading={setIsLoading}
                  />
                </div>
              </div>
            </div>
          ) : (
            <div className="w-full max-w-2xl space-y-4 p-4">
              {messages.map((msg, i) => (
                <Message key={i} role={msg.role} content={msg.text} />
              ))}
            </div>
          )}
        </div>

        {/* FOOTER */}
        <p className="text-xs text-gray-500 text-center pb-3">
          Generate_AI Response Only
        </p>
      </main>
    </div>
  );
}

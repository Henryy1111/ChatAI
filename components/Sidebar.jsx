"use client";
import { assets } from "@/assets/assets";
import Image from "next/image";
import React, { useState } from "react";
import { useClerk, UserButton } from "@clerk/nextjs";
import { useAppContext } from "@/context/AppContext";
import ChatHistory from "./ChatHistory";

const Sidebar = ({ expand, setExpand }) => {
  const { openSignIn } = useClerk();
  const { user } = useAppContext();
  const [openMenu, setOpenMenu] = useState({ id: 0, open: false });

  const recentChats = [
    "How to start a blog?",
    "What is AI learning?",
    "Tips for studying efficiently",
  ];

  return (
    <aside
      className={`flex flex-col justify-between h-screen text-gray-200 transition-all duration-500 ease-in-out
      shadow-[0_0_25px_rgba(0,0,0,0.4)] border-r border-[#3a3b3f]/50
      bg-gradient-to-b from-[#1a1b1e] to-[#232427]
      backdrop-blur-2xl z-50
      ${expand ? "w-64 p-5" : "w-20 p-3"} 
      max-md:absolute max-md:h-full`}
    >
      {/* TOP */}
      <div>
        <div
          className={`flex items-center justify-between ${
            expand ? "flex-row" : "flex-col"
          }`}
        >
          <Image
            src={expand ? assets.logo_text : assets.logo_icon}
            alt="Logo"
            className={`transition-all duration-300 ${
              expand ? "w-36" : "w-10"
            }`}
          />

          <button
            onClick={() => setExpand(!expand)}
            className="group relative mt-2 bg-[#2f3136] hover:bg-[#3a3b3f] rounded-xl p-2 transition-all duration-300 border border-[#45474a]"
          >
            <Image
              src={expand ? assets.sidebar_close_icon : assets.sidebar_icon}
              alt="Toggle Sidebar"
              className="w-6 opacity-80 group-hover:opacity-100"
            />
          </button>
        </div>

        {/* NEW CHAT */}
        <button
          className={`mt-8 flex items-center justify-center gap-3 w-full ${
            expand
              ? "bg-gradient-to-r from-indigo-600/40 to-cyan-500/40 hover:from-indigo-600/60 hover:to-cyan-500/60 text-white rounded-2xl py-2.5 transition-all duration-300 border border-[#3a3b3f]"
              : "bg-[#2f3136] hover:bg-[#3a3b3f] rounded-xl h-10 w-10 mx-auto border border-[#45474a]"
          }`}
        >
          <Image
            src={assets.chat_icon}
            alt="New Chat"
            className={`transition-all duration-300 ${expand ? "w-6" : "w-7"}`}
          />
          {expand && <span className="text-sm font-medium">New Chat</span>}
        </button>

        {/* RECENTS */}
        {expand && (
          <div className="mt-8 text-gray-400 text-xs uppercase tracking-wider">
            <p>Recents</p>
            <div className="mt-2 flex flex-col gap-2">
              {recentChats.map((chat, index) => (
                <ChatHistory
                  key={index}
                  chatId={index}
                  openMenu={openMenu}
                  setOpenMenu={setOpenMenu}
                  title={chat}
                />
              ))}
            </div>
          </div>
        )}
      </div>

      {/* BOTTOM */}
      <div className="space-y-3">
        <div
          className={`flex items-center justify-center cursor-pointer ${
            expand
              ? "gap-3 px-3 py-2 rounded-xl hover:bg-[#2f3136] border border-transparent hover:border-[#3a3b3f] transition-all"
              : "h-10 w-10 mx-auto hover:bg-[#2f3136] rounded-lg border border-[#3a3b3f]"
          }`}
        >
          <Image
            src={assets.phone_icon}
            alt="Get App"
            className="w-6 opacity-80"
          />
          {expand && (
            <>
              <span className="text-sm">Get App</span>
              <Image src={assets.new_icon} alt="New" className="w-4" />
            </>
          )}
        </div>

        <div
          onClick={user ? null : openSignIn}
          className={`flex items-center ${
            expand
              ? "gap-3 px-3 py-2 rounded-xl hover:bg-[#2f3136] border border-transparent hover:border-[#3a3b3f]"
              : "justify-center"
          } cursor-pointer transition-all duration-300`}
        >
          {user ? (
            <UserButton />
          ) : (
            <Image src={assets.profile_icon} alt="Profile" className="w-7" />
          )}
          {expand && <span className="text-sm">My Profile</span>}
        </div>
      </div>
    </aside>
  );
};

export default Sidebar;

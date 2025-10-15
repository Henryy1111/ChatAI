"use client";
import { assets } from "@/assets/assets";
import Image from "next/image";
import React, { useState } from "react";

const PromptBox = ({ setIsLoading, isLoading }) => {
  const [prompt, setPrompt] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!prompt.trim()) return;
    setIsLoading(true);
    setTimeout(() => setIsLoading(false), 1000);
    setPrompt("");
  };

  return (
    <div className="w-full flex justify-center mt-6">
      <form
        onSubmit={handleSubmit}
        className="w-full max-w-2xl bg-gradient-to-br from-gray-800/90 to-gray-700/80 
        border border-gray-600/40 shadow-[0_0_25px_rgba(0,0,0,0.5)] 
        rounded-3xl p-5 backdrop-blur-md transition-all duration-500
        hover:shadow-[0_0_25px_rgba(156,163,175,0.4)]"
      >
        {/* Header */}
        <div className="flex items-center justify-center mb-3">
          <h2 className="text-sm text-gray-300 tracking-wider font-semibold">
            💬 Chat with AI
          </h2>
        </div>

        {/* Text Area */}
        <textarea
          className="w-full bg-gray-900/60 text-gray-100 placeholder-gray-500 
          text-sm outline-none resize-none overflow-hidden p-3 border 
          border-gray-600/50 rounded-2xl 
          focus:border-gray-400 focus:bg-gray-800/80 
          focus:shadow-[0_0_15px_rgba(156,163,175,0.4)] 
          transition-all duration-300"
          rows={3}
          placeholder="Type your message here..."
          required
          onChange={(e) => setPrompt(e.target.value)}
          value={prompt}
        />

        {/* Toolbar */}
        <div className="flex items-center justify-between mt-4 text-sm">
          {/* Chips */}
          <div className="flex items-center gap-2">
            <p
              className="flex items-center gap-2 text-xs border border-gray-500/30 px-3 py-1.5 
            rounded-full cursor-pointer hover:scale-105 hover:border-gray-300 
            hover:bg-gray-600/40 hover:text-white transition-all duration-300"
            >
              <Image className="h-4 w-4" src={assets.deepthink_icon} alt="" />
              DeepThink (R1)
            </p>
            <p
              className="flex items-center gap-2 text-xs border border-gray-500/30 px-3 py-1.5 
            rounded-full cursor-pointer hover:scale-105 hover:border-gray-300 
            hover:bg-gray-600/40 hover:text-white transition-all duration-300"
            >
              <Image className="h-4 w-4" src={assets.search_icon} alt="" />
              Search
            </p>
          </div>

          {/* Right Side: Pin + Send */}
          <div className="flex items-center gap-3">
            <Image
              className="w-4 opacity-80 hover:opacity-100 hover:scale-110 cursor-pointer transition-all"
              src={assets.pin_icon}
              alt="Pin"
            />

            <button
              type="submit"
              disabled={!prompt || isLoading}
              className={`rounded-full p-3 transition-all duration-300 flex items-center justify-center ${
                prompt
                  ? "bg-gradient-to-r from-gray-500 to-gray-400 hover:shadow-[0_0_15px_rgba(156,163,175,0.6)]"
                  : "bg-gray-700/60 cursor-not-allowed"
              }`}
            >
              <Image
                className={`w-3.5 aspect-square transition-transform duration-300 ${
                  prompt ? "rotate-0" : "rotate-45 opacity-60"
                }`}
                src={prompt ? assets.arrow_icon : assets.arrow_icon_dull}
                alt="Send"
              />
            </button>
          </div>
        </div>
      </form>
    </div>
  );
};

export default PromptBox;

"use client";
import React from "react";
import Image from "next/image";
import { assets } from "@/assets/assets";

const Message = ({ role, content }) => {
  return (
    <div className="flex flex-col items-center w-full max-w-3xl text-sm">
      <div
        className={`flex flex-col w-full mb-8 ${
          role === "user" ? "items-end" : "items-start"
        }`}
      >
        <div
          className={`group relative flex max-w-2xl py-3 rounded-xl ${
            role === "user" ? "bg-[#414158] px-5" : "gap-3 bg-[#2a2b2f] px-3"
          }`}
        >
          {/* Action icons */}
          <div
            className={`opacity-0 group-hover:opacity-100 absolute transition-all ${
              role === "user" ? "-left-16 top-2.5" : "left-9 -bottom-6"
            }`}
          >
            <div className="flex items-center gap-2 opacity-70">
              {role === "user" ? (
                <>
                  <Image
                    src={assets.copy_icon}
                    alt="Copy"
                    width={16}
                    height={16}
                    className="cursor-pointer"
                  />
                  <Image
                    src={assets.pencil_icon}
                    alt="Edit"
                    width={16}
                    height={16}
                    className="cursor-pointer"
                  />
                </>
              ) : (
                <>
                  <Image
                    src={assets.copy_icon}
                    alt="Copy"
                    width={16}
                    height={16}
                    className="cursor-pointer"
                  />
                  <Image
                    src={assets.regenerate_icon}
                    alt="Regenerate"
                    width={16}
                    height={16}
                    className="cursor-pointer"
                  />
                  <Image
                    src={assets.like_icon}
                    alt="Like"
                    width={16}
                    height={16}
                    className="cursor-pointer"
                  />
                  <Image
                    src={assets.dislike_icon}
                    alt="Dislike"
                    width={16}
                    height={16}
                    className="cursor-pointer"
                  />
                </>
              )}
            </div>
          </div>

          {/* Message content */}
          {role === "user" ? (
            <span className="text-white/90">{content}</span>
          ) : (
            <>
              <Image
                src={assets.logo_icon}
                alt="AI"
                width={36}
                height={36}
                className="p-1 border border-white/15 rounded-full"
              />
              <div className="space-y-4 w-full overflow-auto text-white/90">
                {content}
              </div>
            </>
          )}
        </div>
      </div>
    </div>
  );
};

export default Message;

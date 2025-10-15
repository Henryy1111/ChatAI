"use client";
import React from "react";
import Image from "next/image";
import { assets } from "@/assets/assets";

const ChatHistory = ({
  openMenu,
  setOpenMenu,
  chatId,
  title = "Chat History",
}) => {
  const fallbackIcon = "/default-icon.svg";

  // Fungsi toggle dropdown
  const handleToggle = () => {
    setOpenMenu({
      id: chatId,
      open: openMenu.id === chatId ? !openMenu.open : true,
    });
  };

  return (
    <div
      className="flex items-center justify-between p-2 text-white rounded-lg text-sm cursor-pointer
                 hover:bg-white/10 transition-colors duration-200 group"
    >
      <p className="truncate max-w-[70%] group-hover:text-white/90 transition-colors duration-200">
        {title}
      </p>

      <div
        className="relative flex items-center justify-center h-6 w-6 aspect-square rounded-lg 
                   hover:bg-black/70 transition-all duration-200"
        onClick={handleToggle}
      >
        {/* Tombol tiga titik */}
        <Image
          src={assets?.three_icon || fallbackIcon}
          alt="Options"
          width={16}
          height={16}
          className="w-4"
        />

        {/* Dropdown menu */}
        {openMenu.id === chatId && openMenu.open && (
          <div
            className="absolute -right-36 top-6 bg-gray-800/90 backdrop-blur-md rounded-xl w-max p-2 shadow-lg
                       flex flex-col gap-1 transition-all duration-200 z-50"
          >
            <button className="flex items-center gap-3 px-3 py-2 rounded-lg hover:bg-white/10 transition-all duration-150">
              <Image
                src={assets?.pencil_icon || fallbackIcon}
                alt="Rename"
                width={16}
                height={16}
                className="w-4"
              />
              <span className="text-white text-sm">Rename</span>
            </button>

            <button className="flex items-center gap-3 px-3 py-2 rounded-lg hover:bg-white/10 transition-all duration-150">
              <Image
                src={assets?.delete_icon || fallbackIcon}
                alt="Delete"
                width={16}
                height={16}
                className="w-4"
              />
              <span className="text-white text-sm">Delete</span>
            </button>
          </div>
        )}
      </div>
    </div>
  );
};

export default ChatHistory;

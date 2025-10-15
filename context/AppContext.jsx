"use client";
import { useUser } from "@clerk/nextjs";
import { createContext, useContext } from "react";

// Buat context global
export const AppContext = createContext();

// Custom hook agar lebih mudah akses context
export const useAppContext = () => {
  return useContext(AppContext);
};

// Provider utama untuk membungkus seluruh aplikasi
export const AppContextProvider = ({ children }) => {
  const { user } = useUser();

  // Nilai yang ingin dibagikan ke seluruh komponen
  const value = { user };

  return <AppContext.Provider value={value}>{children}</AppContext.Provider>;
};

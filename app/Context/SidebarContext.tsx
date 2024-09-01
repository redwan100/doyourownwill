"use client";
import {
  createContext,
  Dispatch,
  ReactNode,
  SetStateAction,
  useState,
} from "react";

interface LayoutContextType {
  sidebarOpen: boolean;
  toggleSidebar: () => void;
  setSidebarOpen: Dispatch<SetStateAction<boolean>>;
}

export const MySidebarContext = createContext<LayoutContextType | undefined>(
  undefined
);

const SidebarContextProvider = ({ children }: { children: ReactNode }) => {
  const [sidebarOpen, setSidebarOpen] = useState<boolean>(false);

  const toggleSidebar = () => {
    setSidebarOpen((prev) => !prev);
  };

  const value = {
    sidebarOpen,
    setSidebarOpen,
    toggleSidebar,
  };

  return (
    <MySidebarContext.Provider value={value}>
      {children}
    </MySidebarContext.Provider>
  );
};

export default SidebarContextProvider;

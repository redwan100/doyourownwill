"use client";
import { MySidebarContext } from "@/app/Context/SidebarContext";
import { usePathname } from "next/navigation";
import { ReactNode, useContext, useEffect } from "react";
import SidebarPage from "../sidebar/sidebar";

const Layout = ({ children }: { children: ReactNode }) => {
  const context = useContext(MySidebarContext);
  const pathname = usePathname();

  useEffect(() => {
    if (pathname === "/yourownmill") {
      context?.setSidebarOpen(false);
    }
  }, [pathname, context]);

  return (
    <div className="w-full max-w-[1040px] mx-auto flex">
      <div
        className={`${!context?.sidebarOpen ? "hidden md:block " : "block"} ${
          pathname === "/yourownmill" && "md:hidden"
        }`}
      >
        <SidebarPage />
      </div>
      <div className="px-4 md:px-0 py-4 w-full">{children}</div>
    </div>
  );
};

export default Layout;

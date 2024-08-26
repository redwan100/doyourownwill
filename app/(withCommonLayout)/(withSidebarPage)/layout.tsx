import { ReactNode } from "react";
import SidebarPage from "../sidebar/sidebar";

const layout = ({ children }: { children: ReactNode }) => {
  return (
    <div className="w-full max-w-[1040px] mx-auto flex">
      <div className="hidden md:block">
        <SidebarPage />
      </div>
      <div className="px-4 md:px-0 py-4 w-full">{children}</div>
    </div>
  );
};

export default layout;

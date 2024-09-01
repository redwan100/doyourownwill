"use client";
import { useContext } from "react";
import DoYourOwnWillOnline from "../components/DoYourOwnWillOnline";
import FileDetails from "../components/heroSection/FileDetails";
import HeroSection from "../components/heroSection/HeroSection";
import { MySidebarContext } from "../Context/SidebarContext";
import SidebarPage from "./sidebar/sidebar";

const HomePages = () => {
  const context = useContext(MySidebarContext);
  return (
    <div className="">
      <HeroSection />
      <FileDetails />
      <div className="flex gap-10 max-w-[1040px] mx-auto px-4">
        <div
          className={` ${context?.sidebarOpen ? "block" : "hidden"} md:block`}
        >
          <SidebarPage />
        </div>
        <DoYourOwnWillOnline />
      </div>
    </div>
  );
};

export default HomePages;

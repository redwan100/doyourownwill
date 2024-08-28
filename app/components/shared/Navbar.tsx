"use client";

import logo from "@/public/pictures/logo.png";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";

const Navbar = () => {
  const pathname = usePathname();
  const isActive = (path: string) => pathname === path;

  return (
    <div className="w-full border-b border-b-neutral-200 sticky top-0 left-0 py-8 z-50 bg-white">
      <div className="w-full max-w-[1140px] mx-auto flex items-center justify-between px-2 ">
        <Link href={"/"}>
          <Image src={logo} alt="logo" className="w-[200px]" />
        </Link>

        {/* menus  */}
        <div>
          <ul className="flex items-center divide-x-2 divide-gray-100 *:text-neutral-600 *:text-[14px] hover:*:bg-gray-100 *:py-[.7rem] *:px-4">
            <li className={`${isActive("/faq") && "bg-gray-100/80"}`}>
              <Link href="/faq">FAQs</Link>
            </li>
            <li className={`${isActive("/blog") && "bg-gray-100/80"}`}>
              <Link href="/blog">Blog</Link>
            </li>
            <li
              className={`${isActive("/about-contact-us") && "bg-gray-100/80"}`}
            >
              <Link href="/about-contact-us">About/Contact Us</Link>
            </li>
            <li className="bg-[#337AB7] text-[white_!important] hover:bg-[#337AB7_!important]">
              <Link href="/planningguide">Planning Guide</Link>
            </li>
            <li className={`${isActive("/sign-in") && "bg-gray-100/80"}`}>
              <Link href="#">Sign in</Link>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Navbar;

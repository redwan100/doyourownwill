import logo from "@/public/pictures/logo.png";
import Image from "next/image";
import Link from "next/link";

const Navbar = () => {
  return (
    <div className="w-full border-b border-b-neutral-200 sticky top-0 left-0 py-8 z-50 bg-white">
      <div className="w-full max-w-[1140px] mx-auto flex items-center justify-between px-2 ">
        <Link href={"/"}>
          <Image src={logo} alt="logo" className="w-[200px]" />
        </Link>

        {/* menus  */}
        <div>
          <ul className="flex items-center divide-x-2 divide-gray-100 *:text-neutral-600 *:text-[14px] hover:*:bg-gray-100 *:py-[.7rem] *:px-4">
            <li className="">
              <Link href="/faq">FAQs</Link>
            </li>
            <li>
              <Link href="/blog">Blog</Link>
            </li>
            <li>
              <Link href="#">About/Contact Us</Link>
            </li>
            <li className="bg-[#337AB7] text-[white_!important] hover:bg-[#337AB7_!important]">
              <Link href="#">Planning Guide</Link>
            </li>
            <li>
              <Link href="#">Sign in</Link>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Navbar;

import Link from "next/link";
import { TiArrowForward } from "react-icons/ti";
import DocumentForm from "./DocumentForm";

const HeroSection = () => {
  return (
    <div className="w-full bg-[#2F323A] pb-10 pt-24">
      <div className="w-full max-w-[1140px] mx-auto px-4 md:px-0 grid place-content-center">
        <div className="max-w-[20rem]  w-full mx-auto text-xl text-center md:max-w-[40rem]">
          <p className="text-white font-bold md:text-[44px] md:leading-[1.2]">
            Always the completely free way to make your will.
          </p>
        </div>
        <div className="flex items-center gap-2 w-max mx-auto my-2 md:my-3 pt-4">
          <Link
            href={"#"}
            className="bg-[#9D4241] text-white py-[.4rem] px-2 font-bold uppercase text-[14px] w-max md:flex items-center gap-1 hidden md:py-[.6rem] md:px-3"
          >
            {" "}
            start your will free <TiArrowForward className="text-xl" />
          </Link>
          <Link
            href={"#"}
            className="bg-[#3373AB] text-white py-[.4rem] px-2 font-bold uppercase text-[14px] w-max md:flex items-center gap-1 hidden md:py-[.6rem] md:px-3"
          >
            {" "}
            browse documents <TiArrowForward className="text-xl" />
          </Link>
          <Link
            href={"#"}
            className="bg-[#3373AB] text-white py-[.4rem] px-2 font-bold uppercase text-[14px] w-max flex items-center gap-1 md:hidden"
          >
            {" "}
            start your will
            <TiArrowForward className="text-xl" />
          </Link>
        </div>
      </div>
      <DocumentForm />
    </div>
  );
};

export default HeroSection;

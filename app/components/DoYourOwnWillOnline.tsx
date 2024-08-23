import Image from "next/image";
import Link from "next/link";

import img from "@/public/pictures/start-your-will.jpg";

const DoYourOwnWillOnline = () => {
  return (
    <div className="w-full bg-white">
      <div className="p-3">
        <h2 className="text-[1.5rem] font-bold mb-3">
          Do Your Own Will Online
        </h2>
        <p className="text-[14px] leading-6 text-pera mb-3">
          Although the end of your life is something you probably don't want to
          dwell on, deciding what will happen to your assets and personal
          possessions after your death is important. Preparing a Will is the
          simplest way to ensure that your funds and property will be
          distributed according to your wishes.
        </p>
        <p className="text-[14px] leading-6 text-pera mb-3">
          A Will is a legal document designating the transfer of your property
          and assets after you die, and can be written by any person over the
          age of 18 who is of sound mind and memory.
        </p>
        <p className="text-[14px] leading-6 text-pera">
          Writing a Will doesn't have to be complicated or expensive.{" "}
          <span className="font-bold">
            This site provides a free and simple way to compose your own legal
            Will online in a few easy steps:
          </span>
        </p>

        <ul className="list-disc pl-10 w-full *:text-[14px] space-y-1 mt-4">
          <li className="text-pera">
            Enter basic information (name, address, marital status, children)
          </li>
          <li className="text-pera">Name a Will Executor</li>
          <li className="text-pera">
            Describe how you would like your assets to be distributed
          </li>
          <li className="text-pera">
            Describe how you would like your assets to be distributed
          </li>
        </ul>

        <p className="  mt-3">
          See the{" "}
          <Link href={"/"} className="text-red1 underline">
            How this Site Works
          </Link>{" "}
          page of this site for a step-by-step explanation of how to complete
          your online Will or check the{" "}
          <Link href={"/"} className="text-red1 underline">
            FAQs
          </Link>{" "}
          page for answers to additional questions. When you're ready to begin
          drafting your Will, click the icon below to get started!
        </p>
      </div>

      <div className="my-5 flex gap-3">
        <Link href={"/"}>
          <Image src={img} alt="photo" width={200} height={100} />
        </Link>
        <div className="space-y-3">
          <h3 className="font-bold">
            Protect yourself and your family with a legally binding Will.
          </h3>
          <p className="text-[14px]">
            <span className="font-bold">100% FREE of charge</span> with instant
            .docx and .pdf download.
          </p>
          <button className=" py-1 px-3 font-bold bg-primary text-white uppercase text-[14px] shadow shadow-primary">
            <Link href={"/create-will"} className="">
              Start Your Will
            </Link>{" "}
          </button>
        </div>
      </div>
    </div>
  );
};

export default DoYourOwnWillOnline;

import img from "@/public/pictures/start-your-will.jpg";
import Image from "next/image";
import Link from "next/link";

const ProtectYourSelf = () => {
  return (
    <>
      <div className="my-5 flex gap-3">
        <Link href={"/"}>
          <Image src={img} alt="photo" width={150} height={100} />
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
    </>
  );
};

export default ProtectYourSelf;

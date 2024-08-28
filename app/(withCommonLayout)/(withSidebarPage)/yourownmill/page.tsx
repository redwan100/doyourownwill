import SidebarPageTitle from "@/app/components/shared/SidebarPageTitle";
import Link from "next/link";
import { BiChevronRight } from "react-icons/bi";
import StatusForm from "./components/StatusForm";

const YourOwnMilPage = () => {
  return (
    <div>
      <div>
        <SidebarPageTitle title="Do Your Own Will" />
      </div>
      <div className="mt-5 space-y-3 text-sm sm:text-base mb-4">
        <p>
          Congratulations on taking the first step towards creating your own
          Will!
        </p>
        <h4 className="font-bold">
          Your Will is 100% free and available to instantly download in either
          .docx or .pdf format.
        </h4>
        <div className="bg-yellow-50 py-3 px-4 text-center">
          <p>
            What to expect as you progress through your Will -{" "}
            <Link href={"#"} className="text-red-700 underline">
              View Brief Summary
            </Link>
          </p>
        </div>
      </div>

      <div className="bg-[#3379B7] py-5 px-6 flex gap-3 justify-between items-center text-white text-xs">
        <p className="">
          Please select the options that best describes your status below:
        </p>
        <p>Step 1 of 3</p>
      </div>

      <div className="mt-3">
        <StatusForm />
      </div>

      <div className="mt-3 mb-5">
        <p className="text-sm text-pera sm:text-base text-center">
          By clicking the button below, you agree to our{" "}
          <Link href={"#"} className="text-red-700 underline">
            Terms and Conditions.
          </Link>
        </p>
      </div>
      <button className="bg-[#337AB7] py-1 px-3 text-white uppercase rounded-sm shadow-sm shadow-[#337AB7] font-bold flex items-center text-sm ml-auto ">
        next to step 2 <BiChevronRight className="text-3xl" />
      </button>
    </div>
  );
};

export default YourOwnMilPage;

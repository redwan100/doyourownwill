"use client";

import { BiChevronRight } from "react-icons/bi";

import bed from "@/public/pictures/bed.png";
import Image from "next/image";
import { useState } from "react";

const StepForm = () => {
  // State to manage the checkboxes
  const [firstChecked, setFirstChecked] = useState(true);
  const [secondChecked, setSecondChecked] = useState(false);

  // Handler functions
  const handleFirstCheckboxChange = () => {
    setFirstChecked(!firstChecked);
    if (!firstChecked) {
      setSecondChecked(false); // Uncheck the second checkbox
    }
  };

  const handleSecondCheckboxChange = () => {
    setSecondChecked(!secondChecked);
    if (!secondChecked) {
      setFirstChecked(false); // Uncheck the first checkbox
    }
  };
  return (
    <>
      <div className="w-full border border-neutral-300 my-4 rounded-[3px] p-8">
        <div>
          <h2 className="text-lg font-bold">Step 1</h2>
          <div className="flex items-center justify-between">
            <p>
              Choose one of the options below that will instruct health care
              providers in the event you become critically ill and can&apos;t
              speak for yourself: (select only one)
            </p>
            <Image src={bed} alt="bed image" className="w-24" />
          </div>
        </div>

        <form className="p-4">
          <div className="mb-4">
            <label className="flex items-center space-x-2">
              <input
                type="checkbox"
                checked={firstChecked}
                onChange={handleFirstCheckboxChange}
                className=" h-3 w-3 text-blue-600 appearance-none  checked:outline outline-1 outline-offset-2 outline-green-700 checked:bg-blue-500 rounded-full border border-gray-500 checked:border-transparent"
              />
              <span className="text-lg font-bold">
                Choice NOT To Prolong Life
              </span>
            </label>
            <p>
              I do not want my life to be prolonged if (1) I have an incurable
              and irreversible condition that will result in my death within a
              relatively short time, (2) I become unconscious and, to a
              reasonable degree of medical certainty, I will not regain
              consciousness, or (3) the likely risks and burdens of treatment
              would outweigh the expected benefits.
            </p>
          </div>
          <div>
            <label className="flex items-center space-x-2">
              <input
                type="checkbox"
                checked={secondChecked}
                onChange={handleSecondCheckboxChange}
                className=" h-3 w-3 text-blue-600 appearance-none  checked:outline outline-1 outline-offset-2 outline-green-700 checked:bg-blue-500 rounded-full border border-gray-500 checked:border-transparent"
              />
              <span className="text-lg font-bold">Choice to Prolong Life</span>
            </label>
            <p>
              I want my life to be prolonged as long as possible within the
              limits of generally accepted health care standards.
            </p>
          </div>
        </form>
      </div>
      <button className="bg-primary text-white uppercase font-bold flex items-center py-1 pl-3 shadow shadow-primary rounded-sm w-max ml-auto">
        Next <BiChevronRight className="text-3xl" />
      </button>
    </>
  );
};

export default StepForm;

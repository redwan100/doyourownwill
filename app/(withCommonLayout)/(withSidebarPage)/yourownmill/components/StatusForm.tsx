"use client";
import { FaRegUser } from "react-icons/fa";

import { useState } from "react";

const StatusForm = () => {
  const [formData, setFormData] = useState({
    sex: "male",
    marriedStatus: "single",
    isChildren: true,
    childrenAge: null,
  });

  const handleSexChange = (fieldName: string, fieldValue: string | boolean) => {
    setFormData({
      ...formData,
      [fieldName]: fieldValue,
    });
  };

  return (
    <div className="w-full border border-gray-200 rounded-sm shadow-sm p-5">
      <div className="w-full space-y-6">
        {/* box 1 */}
        <div className="relative">
          {/* user icon  */}
          <FaRegUser className="absolute top-2 right-2 text-xl text-gray-600" />
          {/* user icon  */}
          <div className="w-[13rem] flex gap-5 mx-auto">
            <p className="font-bold text-right">Sex:</p>
            <div className="w-full flex flex-wrap gap-x-2 gap-y-3 self-start">
              <button
                onClick={() => handleSexChange("sex", "male")}
                className={`py-1 px-3 text-center text-[#337AB7] text-sm uppercase font-bold shadow-md w-max border border-gray-200 rounded-sm ${
                  formData.sex === "male" &&
                  "bg-[#337ab7] text-[white_!important]"
                }`}
              >
                male
              </button>
              <button
                onClick={() => handleSexChange("sex", "female")}
                className={`py-1 px-3 text-center text-[#337AB7] text-sm uppercase font-bold shadow-md w-max border border-gray-200 rounded-sm ${
                  formData.sex === "female" &&
                  "bg-[#337ab7] text-[white_!important]"
                }`}
              >
                female
              </button>
              <button
                onClick={() => handleSexChange("sex", "non-binary")}
                className={`py-1 px-3 text-center text-[#337AB7] text-sm uppercase font-bold shadow-md w-max border border-gray-200 rounded-sm ${
                  formData.sex === "non-binary" &&
                  "bg-[#337ab7] text-[white_!important]"
                }`}
              >
                non-binary
              </button>
            </div>
          </div>
        </div>
        {/* box 1*/}

        {/* box 2 */}
        <div className="relative w-full">
          <div className="w-[23rem] flex gap-5 mx-auto">
            <p className="font-bold text-right w-[12rem]">Marital Status:</p>
            <div className="w-full flex gap-x-2 gap-y-3  self-start">
              <button
                onClick={() => handleSexChange("marriedStatus", "single")}
                className={`py-1 px-3 text-center text-[#337AB7] text-sm uppercase font-bold shadow-md w-max border border-gray-200 rounded-sm ${
                  formData.marriedStatus === "single" &&
                  "bg-[#337ab7] text-[white_!important]"
                }`}
              >
                single
              </button>
              <button
                onClick={() => handleSexChange("marriedStatus", "married")}
                className={`py-1 px-3 text-center text-[#337AB7] text-sm uppercase font-bold shadow-md w-max border border-gray-200 rounded-sm ${
                  formData.marriedStatus === "married" &&
                  "bg-[#337ab7] text-[white_!important]"
                }`}
              >
                married
              </button>
            </div>
          </div>
        </div>
        {/* box 2 */}

        {/* box 3  */}
        <div className="relative w-full">
          <div className="w-[17rem] flex gap-5 mx-auto justify-between">
            <p className="font-bold text-right">Children:</p>
            <div className="w-full flex gap-x-2 gap-y-3">
              <button
                onClick={() => handleSexChange("isChildren", true)}
                className={`py-1 px-3 text-center text-[#337AB7] text-sm uppercase font-bold shadow-md w-max border border-gray-200 rounded-sm ${
                  formData.isChildren === true &&
                  "bg-[#337ab7] text-[white_!important]"
                }`}
              >
                yes
              </button>
              <button
                onClick={() => handleSexChange("isChildren", false)}
                className={`py-1 px-3 text-center text-[#337AB7] text-sm uppercase font-bold shadow-md w-max border border-gray-200 rounded-sm ${
                  formData.isChildren === false &&
                  "bg-[#337ab7] text-[white_!important]"
                }`}
              >
                no
              </button>
            </div>
          </div>
        </div>
        {/* box 3  */}

        {/* box 4 */}
        {formData.isChildren && (
          <div className="relative w-full">
            <div className="w-[25rem]  flex gap-5 ml-[5rem]">
              <p className="font-bold text-right">
                Any children minors (under 18?):
              </p>
              <div className="flex gap-x-2 gap-y-3">
                <button
                  onClick={() => handleSexChange("childrenAge", true)}
                  className={`py-1 px-3 text-center text-[#337AB7] text-sm uppercase font-bold shadow-md w-max border border-gray-200 rounded-sm ${
                    formData.childrenAge === true &&
                    "bg-[#337ab7] text-[white_!important]"
                  }`}
                >
                  yes
                </button>
                <button
                  onClick={() => handleSexChange("childrenAge", false)}
                  className={`py-1 px-3 text-center text-[#337AB7] text-sm uppercase font-bold shadow-md w-max border border-gray-200 rounded-sm ${
                    formData.childrenAge === false &&
                    "bg-[#337ab7] text-[white_!important]"
                  }`}
                >
                  no
                </button>
              </div>
            </div>
          </div>
        )}
        {/* box 4 */}
      </div>
    </div>
  );
};

export default StatusForm;

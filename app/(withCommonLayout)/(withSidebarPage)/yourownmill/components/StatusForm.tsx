"use client";
import { FaRegUser } from "react-icons/fa";

import { useState } from "react";

const StatusForm = () => {
  const [formData, setFormData] = useState({
    sex: "male",
    marriedStatus: "single",
    isChildren: true,
    childrenAge: false,
  });

  const handleSexChange = (fieldName: string, fieldValue: string | boolean) => {
    setFormData({
      ...formData,
      [fieldName]: fieldValue,
    });
  };

  return (
    <div className="w-full border border-gray-200 rounded-sm shadow-md p-5">
      <div className="w-full space-y-10">
        {/* box 1 */}
        <div className="relative">
          {/* user icon  */}
          <FaRegUser className="absolute top-2 right-2 text-xl text-gray-600" />
          {/* user icon  */}
          <div className="flex md:gap-10 gap-4 flex-col md:flex-row">
            <p className="font-bold md:text-right text-left flex-1">Sex:</p>
            <div className="flex-1">
              <div className="flex gap-1 mb-2 flex-1">
                {" "}
                <button
                  onClick={() => handleSexChange("sex", "male")}
                  className={`btn-common ${
                    formData.sex === "male" &&
                    "bg-[#337ab7] text-[white_!important] shadow-md"
                  }`}
                >
                  male
                </button>
                <button
                  onClick={() => handleSexChange("sex", "female")}
                  className={`btn-common ${
                    formData.sex === "female" &&
                    "bg-[#337ab7] text-[white_!important]"
                  }`}
                >
                  female
                </button>
              </div>
              <div className="w-full">
                <button
                  onClick={() => handleSexChange("sex", "non-binary")}
                  className={`btn-common ${
                    formData.sex === "non-binary" &&
                    "bg-[#337ab7] text-[white_!important]"
                  }`}
                >
                  non-binary
                </button>
              </div>
            </div>
          </div>
        </div>
        {/* box 1*/}

        {/* box 2 */}
        <div className="relative w-full">
          <div className="flex md:gap-10 gap-4 flex-col md:flex-row">
            <p className="font-bold md:text-right text-left flex-1">
              Marital Status:
            </p>
            <div className="flex-1 flex gap-1">
              <button
                onClick={() => handleSexChange("marriedStatus", "single")}
                className={`btn-common ${
                  formData.marriedStatus === "single" &&
                  "bg-[#337ab7] text-[white_!important]"
                }`}
              >
                single
              </button>
              <button
                onClick={() => handleSexChange("marriedStatus", "married")}
                className={`btn-common ${
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
          <div className="flex md:gap-10 gap-4 flex-col md:flex-row">
            <p className="font-bold md:text-right text-left flex-1">
              Children:
            </p>
            <div className="flex-1 flex gap-1">
              <button
                onClick={() => handleSexChange("isChildren", true)}
                className={`btn-common ${
                  formData.isChildren === true &&
                  "bg-[#337ab7] text-[white_!important]"
                }`}
              >
                yes
              </button>
              <button
                onClick={() => handleSexChange("isChildren", false)}
                className={`btn-common ${
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
            <div className="flex md:gap-10 gap-4 flex-col md:flex-row">
              <p className="font-bold md:text-right text-left flex-1">
                Any children minors (under 18?):
              </p>
              <div className="flex-1 flex gap-1">
                <button
                  onClick={() => handleSexChange("childrenAge", true)}
                  className={`btn-common ${
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

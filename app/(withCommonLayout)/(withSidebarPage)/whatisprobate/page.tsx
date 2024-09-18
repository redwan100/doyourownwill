import ProtectYourSelf from "@/app/components/shared/ProtectYourSelf";
import SidebarPageTitle from "@/app/components/shared/SidebarPageTitle";
import Link from "next/link";

const WhatIsProbate = () => {
  return (
    <div>
      <div>
        <SidebarPageTitle title="What is Probate" />

        <div className="mt-4 space-y-4">
          <div>
            <p className="text-sm text-pera sm:text-base">
              Probate is the legal process of administering the estate of a
              deceased person.
            </p>
            <p className="text-sm text-pera sm:text-base">
              This process is generally overseen and accomplished by the
              <Link href={"#"} className="text-red-700 underline">
                executor
              </Link>{" "}
              if there is a Will, or by a court-appointed representative if
              there is not.
            </p>
          </div>

          <div className="">
            <h3 className="text-lg font-bold mb-3">
              Though state laws vary, probate typically involves:
            </h3>

            <div className="border border-neutral-200 rounded-sm">
              <ul className="text-sm text-pera sm:text-base space-y-1 list-disc py-4 px-10">
                <li>
                  Identifying and inventorying the deceased person&apos;s
                  property.
                </li>
                <li>Accounting and appraisal of the property.</li>
                <li>
                  Payment of taxes and creditors. Under state law, the surviving
                  spouse and/or children are usually allotted a specific amount
                  of the deceased’s assets. This allotment is typically paid
                  prior to paying taxes, creditors, and other claims against the
                  estate.
                </li>
                <li>
                  Formal distribution of the remaining property as the will
                  directs, or by the state laws of intestate succession, if
                  there is no will.
                </li>
              </ul>
            </div>
            <p className="text-sm text-para sm:text-base my-3">
              In most states, smaller estates may fall within a probate
              exemption which allows a certain amount of property to pass free
              of probate, or through a simplified procedure.
            </p>
          </div>

          <div className="mt-3">
            <ProtectYourSelf />
          </div>
        </div>
      </div>
    </div>
  );
};

export default WhatIsProbate;

import CreateDocumentForm from "@/app/components/shared/CreateDocumentForm";
import ProtectYourSelf from "@/app/components/shared/ProtectYourSelf";
import Link from "next/link";
const NeedWill = () => {
  return (
    <div>
      <div className="space-y-4">
        <h2 className="text-2xl font-bold mb-4">Why Do I Need Will</h2>

        <div>
          <p className="text-pera text-sm sm:text-base">
            Many people put off writing a Will because they believe it will be
            costly or difficult, that it is unnecessary because their
            possessions will automatically pass to their spouse or children, or
            simply to avoid thinking about their own death. But writing a Will
            is critically important for all adults regardless of wealth, marital
            status, or age.
          </p>

          <div className="my-5">
            <CreateDocumentForm title="OFFICIAL LAST WILL AND TESTAMENT" />
          </div>

          <div>
            <h2 className="text-xl font-bold mb-3">A Will allows you to:</h2>

            <div className="border border-neutral-300 py-6 px-5 space-y-8">
              {/* box 1 */}
              <div>
                <h3 className="text-lg font-bold mb-2">
                  Ensure that your possessions will be distributed as you wish.
                </h3>
                <p className="text-pera text-sm sm:text-base">
                  If you die without a Will, the law decides how your estate
                  will be distributed. Although some property will automatically
                  be passed to a spouse or children, exact distribution depends
                  on the value of the property and the terms of title deeds. A
                  Will is the only way to ensure that your wishes will be
                  carried out.
                </p>
              </div>
              {/* box 1 */}
              {/* box 2 */}
              <div>
                <h3 className="text-lg font-bold mb-2">
                  Appoint and outline powers of an Executor and/or Trustee.
                </h3>
                <p className="text-pera text-sm sm:text-base">
                  Writing a Will allows you to decide who will oversee and
                  manage distribution of your estate. Designating a trustworthy
                  and impartial Executor provides peace of mind that the terms
                  of your Will will be honored. See the section on{" "}
                  <Link href={"#"} className="text-red-700 underline">
                    Naming an Executor
                  </Link>{" "}
                  under Legal Information for more details.
                </p>
              </div>
              {/* box 2 */}
              {/* box 3 */}
              <div>
                <h3 className="text-lg font-bold mb-2">
                  Appoint a guardian for minor children.
                </h3>
                <p className="text-pera text-sm sm:text-base">
                  Your Will serves as the legal guiding document for care of
                  minor children in the event of the death of both parents. See
                  the section on{" "}
                  <Link href={"#"} className="text-red-700 underline">
                    Naming Guardians
                  </Link>{" "}
                  under Legal Information for more details.
                </p>
              </div>
              {/* box 3 */}
              {/* box 4 */}
              <div>
                <h3 className="text-lg font-bold mb-2">
                  Specify funeral wishes.
                </h3>
                <p className="text-pera text-sm sm:text-base">
                  Specifying your funeral wishes in your Will reduces stress for
                  loved ones and ensures your body will treated in the way you
                  desire (e.g. burial vs. cremation).
                </p>
              </div>
              {/* box 4 */}
              {/* box 5 */}
              <div>
                <h3 className="text-lg font-bold mb-2">
                  Expedite the legal process.
                </h3>
                <p className="text-pera text-sm sm:text-base">
                  It is generally faster and less costly to settle an estate
                  with a valid Will. Reducing legal fees protects the value of
                  your property and savings to be passed to beneficiaries.
                </p>
              </div>
              {/* box 5 */}
              {/* box 6 */}
              <div>
                <h3 className="text-lg font-bold mb-2">
                  Reduce stress and heartache for loved ones.
                </h3>
                <p className="text-pera text-sm sm:text-base">
                  A Will that clearly outlines your wishes for funeral
                  arrangements and property distribution will reduce confusion
                  and family disagreements during a stressful and emotionally
                  difficult time.
                </p>
              </div>
              {/* box 6 */}
            </div>
            <div className="my-4">
              <p className="text-sm sm:text-base text-pera">
                Most people don’t realize that planning and preparing a Will can
                be quite simple. This site is designed to walk you through the
                process of creating a simple Will online so you can reap the
                benefits outlined above. Whether you chose to do it yourself on
                this site or consult an attorney for additional guidance,
                writing your Will is a necessary and important step.
              </p>
            </div>
            {/* horizontal line */}
            <div className="w-full border-b my-6"></div>
            {/* horizontal line */}
            <div>
              <ProtectYourSelf />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default NeedWill;

import img from "@/public/pictures/start-your-will.jpg";
import Image from "next/image";
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

          <div className="rounded-md border border-stone-300 overflow-hidden mt-4 mb-10">
            <p className="bg-red-700 text-center py-2 font-semibold text-white">
              OFFICIAL LAST WILL AND TESTAMENT
            </p>
            <div className="p-2">
              <form className="">
                <div className="mb-4 w-full flex flex-col sm:flex-row items-center gap-1">
                  <select
                    name="documentType"
                    className="mt-1 block w-full font-medium sm:text-sm border-gray-300 rounded-md py-3 border focus:border-blue-300 focus:outline-none flex-1"
                    required
                  >
                    <option value="last will and testament (will)">
                      Last Will and Testament (Will)
                    </option>
                  </select>

                  <div className="flex items-center gap-1 flex-1 w-full">
                    <select
                      name="documentType"
                      className="mt-1 block w-full font-medium sm:text-sm border-gray-300  rounded-md py-3 border focus:border-blue-300 focus:outline-none flex-1"
                      required
                    >
                      <option value="all states">All States</option>
                      <option value="alabama">Alabama</option>
                      <option value="all states">All States</option>
                      <option value="alabama">Alabama</option>
                      <option value="all states">All States</option>
                      <option value="alabama">Alabama</option>
                    </select>

                    <button className="bg-red-700 hover:bg-red-800 transition-all py-2 rounded-md capitalize  px-3 text-white w-full text-lg flex-1">
                      create document
                    </button>
                  </div>
                </div>
              </form>
            </div>
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
              <h3 className="font-bold">
                Protect yourself and your family with a legally binding Will.
              </h3>
              <div className="my-5 flex gap-3">
                <Link href={"/"}>
                  <Image src={img} alt="photo" width={150} height={100} />
                </Link>
                <div className="space-y-3">
                  <p className="text-[14px]">
                    <span className="font-bold">100% FREE of charge</span> with
                    instant .docx and .pdf download.
                  </p>
                  <button className=" py-1 px-3 font-bold bg-primary text-white uppercase text-[14px] shadow shadow-primary">
                    <Link href={"/create-will"} className="">
                      Start Your Will
                    </Link>{" "}
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default NeedWill;

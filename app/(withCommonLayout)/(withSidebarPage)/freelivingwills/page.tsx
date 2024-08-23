import StepForm from "./components/StepForm";

const FreeLivingWillsPa = () => {
  return (
    <div>
      <div>
        <h2 className="text-[24px] font-bold mb-3">
          Free State-Specific Living Will
        </h2>
        <p className="text-[14px] mb-2">
          A living will is a directive to physicians and other healthcare
          providers specifying your wishes with regard to specific treatments or
          procedures to be used in the event of your incapacity. A living will
          becomes effective only when you are unable to express your wishes.
        </p>
        <p className="text-[14px]">
          The purpose of a living will is to make your intentions known, so that
          your family and your doctors will be able to lawfully act in
          accordance with your wishes. Once completed, discuss your wishes as
          reflected in your living will with family members, and be sure they
          have a signed copy. A living will, or advance directive, is not a part
          of your Will, and must be completed separately.
        </p>
      </div>

      <div className="rounded-md border border-stone-300 overflow-hidden mt-4 mb-10">
        <p className="bg-red1 text-center py-2 font-semibold text-white">
          OFFICIAL ADVANCE DIRECTIVE
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

                <button className="bg-red1 hover:bg-red-900 transition-all py-2 rounded-md capitalize  px-3 text-white w-full text-lg flex-1">
                  create document
                </button>
              </div>
            </div>
          </form>
        </div>
      </div>
      <div>
        <p className="text-pera text-[14px]">
          <span className="text-lg font-semibold text-red1 underline">
            Proceed to Free Living Will Forms
          </span>{" "}
          for all 50 states.
        </p>

        <div className="text-center bg-red-50 py-1 px-2 space-y-2 my-5">
          <h3 className="text-lg font-bold">
            Write and Print Your Living Will Below!
          </h3>
          <p>No account needed, no credit card - just 100% free!</p>
        </div>

        <p className="font-bold">
          Instant .docx and .pdf download at end of questionnaire.
        </p>

        <div>
          <StepForm />
        </div>
      </div>
    </div>
  );
};

export default FreeLivingWillsPa;

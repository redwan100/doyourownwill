const CreateDocumentForm = ({ title }: { title: string }) => {
  return (
    <div className="rounded-md border border-stone-300 overflow-hidden w-full">
      <p className="bg-red-700 text-center py-2 font-semibold text-white px-3">
        {title}
      </p>
      <div className="p-2 w-full">
        <form className="w-full">
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
                <a
                  href="https://eforms.com/form/medical-power-of-attorney-form/?state=&utm_source=www.doyourownwill.com/&utm_medium=microsite&utm_campaign=DoYourOwnWill%20-%20Advance%20Directive&utm_content=widget&utm_term=https://www.doyourownwill.com/free-living-wills.html&eflow=e39322db03ec4da2ad16a3fba0c84712&eflow_affil=10&eflow_offer=1"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  {" "}
                  create document
                </a>
              </button>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
};

export default CreateDocumentForm;

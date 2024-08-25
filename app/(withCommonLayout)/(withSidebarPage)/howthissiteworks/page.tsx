import ProtectYourSelf from "@/app/components/shared/ProtectYourSelf";
import Link from "next/link";

const HowThisSiteWorks = () => {
  return (
    <div>
      <div>
        <h2 className="text-2xl font-bold mb-4">How this Site Works</h2>
        <div className="space-y-3">
          <p className="text-sm sm:text-base">
            This site is designed to function both as a resource for those
            interested in learning more about Wills and Will preparation, and to
            provide a free service that guides you through the process of
            writing your own Will.
          </p>
          <p className="text-sm sm:text-base">
            If you are interested in learning more about{" "}
            <Link href={"#"} className="text-red-700 underline">
              Will requirements
            </Link>
            ,whether you are a good candidate for writing your own Will, and
            other related legal issues before you begin writing your Will, you
            may want to visit the Legal{" "}
            <Link href={"#"} className="text-red-700 underline">
              Information
            </Link>
            and{" "}
            <Link href={"#"} className="text-red-700 underline">
              FAQs
            </Link>{" "}
            sections of this site. The simple Will you’ll produce using this
            service is intended to cover most general situations. If the free
            simple Will is not sufficient for your needs (i.e. you have a more
            complicated estate), you should seek legal counsel and may be better
            served by another estate planning tools.
          </p>
          <p className="text-sm sm:text-base">
            When you are ready to begin drafting your Will, simply navigate to
            the{" "}
            <Link href={"#"} className="text-red-700 underline">
              Do Your Own Will
            </Link>{" "}
            page and follow the step-by-step process summarized below. The site
            will prompt you to enter the necessary information as you go along,
            so don’t worry about remembering the information below.
          </p>
          <div className="space-y-3">
            <p className="text-sm sm:text-base">
              <Link href={"#"} className="text-red-700 underline">
                Preview the steps
              </Link>{" "}
              needed to complete your Will.
            </p>
            <ul className="text-sm sm:text-base text-pera list-disc pl-8 space-y-1">
              <li>Read and agree to the site’s disclaimer</li>
              <li>Select your marital status and whether you have children</li>
              <li>Enter your personal information (name, address)</li>
              <li>
                Name an{" "}
                <Link href={"#"} className="text-red-700 underline">
                  Executor
                </Link>{" "}
                for your Will
              </li>
              <li>
                If desired, note specific items to be given to designated
                individuals or organizations
              </li>
              <li>Describe how remaining assets will be distributed</li>
              <li>Confirm a summary of the information you have entered</li>
              <li>Save your document in Adobe PDF or editable .docx format</li>
              <li>
                Follow the signing instructions at the end of the document
              </li>
            </ul>

            <h4 className="font-bold">
              The free service produces a Will that is valid in all states.
            </h4>
          </div>

          <div>
            <ProtectYourSelf />
          </div>
        </div>
      </div>
    </div>
  );
};

export default HowThisSiteWorks;

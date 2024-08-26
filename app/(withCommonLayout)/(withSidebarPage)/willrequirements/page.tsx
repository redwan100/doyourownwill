import CreateDocumentForm from "@/app/components/shared/CreateDocumentForm";
import ProtectYourSelf from "@/app/components/shared/ProtectYourSelf";
import SidebarPageTitle from "@/app/components/shared/SidebarPageTitle";
import Link from "next/link";

const WillRequirementsPage = () => {
  return (
    <div className="w-full">
      <div className="w-full">
        <SidebarPageTitle title="Will Requirements" />
        <div className="w-full space-y-3 mt-4">
          <CreateDocumentForm title="OFFICIAL LAST WILL AND TESTAMENT" />
          <p className="text-sm text-pera sm:text-base">
            The questionnaire on this site will walk you through the process of
            filling out your Will and produce a valid, state-specific document.
            Although you don’t necessarily need to remember all the requirements
            discussed below, it may be helpful to become familiar with the
            components of a Will. Generally, a Will includes the following
            information:
          </p>

          <ul className="text-sm text-pera list-disc pl-8 sm:text-base space-y-1">
            <li>Your name and place of residence</li>
            <li>A description of your assets</li>
            <li>Names of spouse, children, and other beneficiaries</li>
            <li>
              Alternate beneficiaries, in the event a beneficiary dies before
              you do
            </li>
            <li>Specific gifts</li>
            <li>
              Name of an{" "}
              <Link href={"#"} className="text-red-700 underline">
                executor
              </Link>
            </li>
            <li>
              Name of a
              <Link href={"#"} className="text-red-700 underline">
                {" "}
                guardian
              </Link>
              for minor children
            </li>
            <li>
              Name of an alternative guardian, in the event your first choice is
              unable or unwilling to act
            </li>
            <li>Your signature</li>
            <li>Witnesses' signatures</li>
          </ul>

          <p className="text-sm text-pera sm:text-base">
            In order to ensure that the Will accurately states your wishes (and
            that you are the one who actually created the document), there are
            several added technical requirements:
          </p>

          <ul className="text-sm text-pera list-disc pl-8 sm:text-base space-y-1">
            <li>
              The Will must be typewritten or computer-generated (unless formal
              requirements are followed for a handwritten (or holographic) Will.
            </li>
            <li>The document must expressly state that it is your Will.</li>
            <li>You must date and sign the Will.</li>
            <li>
              The Will must be signed by at least two, or in some states, three,
              witnesses.
            </li>
            <li>
              They must watch you sign the will, though they don't need to read
              it. Your witnesses must be people who will not inherit anything
              under the will.
            </li>
          </ul>

          <p className="text-sm text-pera sm:text-base">
            The will does not have to be notarized in order to be valid.
            However, if you and your witnesses sign an affidavit (sworn
            statement) before a notary public, you can help simplify the court
            procedures required to prove the validity of the Will after you die.
            This procedure makes the will “self-proving.”
          </p>
        </div>

        <ProtectYourSelf />
      </div>
    </div>
  );
};

export default WillRequirementsPage;

import CreateDocumentForm from "@/app/components/shared/CreateDocumentForm";
import ProtectYourSelf from "@/app/components/shared/ProtectYourSelf";
import pdf from "@/public/pictures/pdf-icon.png";
import word from "@/public/pictures/word-icon.png";
import Image from "next/image";
import Link from "next/link";
import { TiArrowForward } from "react-icons/ti";

const CanIDoMySelfPage = () => {
  return (
    <div>
      <div>
        <h2 className="text-2xl font-bold mb-4">Can I Do My Own Will?</h2>
        <p className="text-sm sm:text-base text-pera">
          Most likely, yes. The wills provided on this site are generally
          sufficient for people with simple distribution plans and who own
          property worth less than the threshold limit for federal estate taxes.
          The personal estate tax exemption allows a set dollar amount of
          property ($11.7 million for deaths in 2021) to be transferred free of
          tax.
        </p>
      </div>
      <div className="my-6 space-y-5">
        <CreateDocumentForm title="OFFICIAL LAST WILL AND TESTAMENT" />
        <div className="flex items-center gap-1">
          <button>
            {" "}
            <Link
              href={"#"}
              className="bg-primary shadow shadow-primary rounded-sm text-white py-[.4rem] px-2 font-bold uppercase text-[14px] flex items-center gap-1 md:py-[.6rem] md:px-3"
            >
              {" "}
              begin your will now <TiArrowForward className="text-xl" />
            </Link>
          </button>
          <div className="flex items-center gap-2">
            <Image src={pdf} alt="image" width={40} />
            <Image src={word} alt="image" width={40} />
          </div>
        </div>
      </div>

      <div className="space-y-4">
        <p className="text-pera text-sm sm:text-base">
          Your estate consists of the net worth of all the property you own at
          the time of your death. Net worth is the market value of the property,
          less any amounts owed on it. When adding up your assets to determine
          estate value, be sure to include the following (less any amounts owed
          on them):
        </p>

        <ul className="list-disc pl-6 *:text-sm space-y-1 sm:*:text-base">
          <li>Residence and other real estate</li>
          <li>Savings (bank accounts, CDs, money markets)</li>
          <li>Investments (stocks, bonds, mutual funds)</li>
          <li>401(k), IRA, pension and other retirement accounts</li>
          <li>Life insurance policies and annuities</li>
          <li>Ownership interest in a business</li>
          <li>Motor vehicles (cars, boats, planes)</li>
          <li>Jewelry</li>
          <li>Collectibles</li>
          <li>Other personal property</li>
        </ul>

        <p className="text-pera text-sm sm:text-base">
          If you have total assets worth more than $5 million, estate planning
          beyond the basic Will on this site will benefit your heirs and can
          reap huge rewards when the tax bill arrives. If you are close to, or
          above that threshold limit, you should consult an attorney or estate
          planning professional. Our net worth calculator can help you determine
          the value of your estate.
        </p>
        <p className="text-pera text-sm sm:text-base">
          The simplest and most common situations related to asset distribution
          are summarized below. If one of these descriptions applies to your
          situation, and your estate is below the threshold limit described
          above, you may be a good candidate for doing your own Will.
        </p>

        <ul className="list-disc pl-6 space-y-1 *:text-sm sm:*:text-base">
          <li>
            Most married couples with children divide assets between the
            surviving spouse and children. After a spouse’s death, the surviving
            mate will typically divide assets among their children in their
            Will.
          </li>
          <li>
            Single parents typically divide assets among their children, and
            name guardians for minor children.
          </li>
          <li>
            People without children often leave their estates to their spouse,
            significant other, relatives or friends.
          </li>
        </ul>

        <p className="text-pera text-sm sm:text-base">
          The simple Will on this site is intended to cover most general
          situations. If your situation is more complex, the Will provided on
          this site may not be sufficient to meet your needs. For example, if
          want to disinherit your current spouse or other relatives, set up
          complicated trust provisions, have a child with a disability, or
          anticipate family conflict, you should seek legal counsel and may be
          better served by another estate planning tool.
        </p>
        <p className="text-pera text-sm sm:text-base">
          Also, please note that this site is not a substitute for the advice of
          an attorney. Specific questions regarding your estate plan should be
          directed to a qualified attorney or estate planning professional.
        </p>
        <p className="text-pera text-sm sm:text-base">
          <Link href={"#"} className="text-red-700 underline">
            Preview the steps
          </Link>{" "}
          required to complete my free will.
        </p>
      </div>
      <div>
        <ProtectYourSelf />
      </div>
    </div>
  );
};

export default CanIDoMySelfPage;

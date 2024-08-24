import mirror from "@/public/pictures/mirror-documents.png";
import img from "@/public/pictures/start-your-will.jpg";
import Image from "next/image";
import Link from "next/link";

const FaqBox = ({ title, desc }: { title: string; desc: string }) => {
  return (
    <div className="border border-gray-300 rounded-sm w-full p-8">
      <h3 className="text-lg font-bold mb-3">{title}</h3>
      <p className="text-sm sm:text-base text-pera">{desc}</p>
    </div>
  );
};
const FAQPage = () => {
  return (
    <div>
      <div>
        <h2 className="text-2xl font-bold mb-5">FAQs</h2>
        <div className="space-y-5">
          {/* box 1 */}
          <FaqBox
            title={"Do I have to share my email address to complete my Will?"}
            desc={
              "No. You will not be asked to provide an email address to complete or save your Will. DoYourOwnWill.com does not collect or sell email addresses."
            }
          />
          {/* box 1 */}

          {/* box 2  */}
          <FaqBox title={"Is it really free?"} desc={"Is it really free?"} />
          {/* box 2  */}

          {/* box 3  */}
          <div className="border border-gray-300 rounded-sm w-full p-8">
            <h3 className="text-lg font-bold mb-3">
              How does this site make money if the service is free?
            </h3>
            <p className="text-sm sm:text-base text-pera mb-2">
              DoYourOwnWill.com collects revenue by placing relevant
              advertisements along the bottom and side of the web page and
              through affiliate relationships with other companies.
            </p>
            <p className="text-sm sm:text-base text-pera">
              Your sensitive information is{" "}
              <span className="font-bold italic">never</span> sold.
            </p>
          </div>
          {/* box 3  */}

          {/* box 4 */}
          <FaqBox
            title={"Do I need to create an account?"}
            desc={
              "No. You don’t need to create an account to download any document on this site."
            }
          />
          {/* box 4 */}

          {/* box 5  */}
          <div className="border border-gray-300 rounded-sm w-full p-8">
            <h3 className="text-lg font-bold mb-3">
              Why should I write a Will?
            </h3>
            <p className="text-sm sm:text-base text-pera">
              Writing a Will is critically important for all adults regardless
              of wealth, marital status, or age. A Will allows you to: ensure
              that your possessions will be distributed as you wish; appoint and
              outline powers of an executor and/or trustee; appoint a guardian
              for minor children; specify funeral wishes; expedite the legal
              process; and reduce stress and heartache for loved ones. See the
              <span className="text-red-700 underline text-lg">
                {" "}
                <Link href={"/"}>DYOW Blog</Link>
              </span>{" "}
              or
              <span className="text-red-700 underline text-lg">
                {" "}
                <Link href={"/"}>Why Do I Need a Will</Link>
              </span>{" "}
              page of this site for more information.
            </p>
          </div>
          {/* box 5  */}

          {/* box 6 */}
          <div className="border border-gray-300 rounded-sm w-full p-8">
            <h3 className="text-lg font-bold mb-3">How do I update my Will?</h3>
            <p className="text-sm sm:text-base text-pera mb-3">
              You can use this site to update your Will if it was completed on
              our site or elsewhere.
            </p>
            <ul className="text-pera mb-3 list-disc pl-10">
              <li>
                If have one completed and saved here,{" "}
                <span>
                  <Link href={"/"} className="text-red-700 underline">
                    sign back in
                  </Link>
                </span>{" "}
                in to update.
              </li>
              <li>
                If you created one elsewhere, just create a new will using
                Doyourownwill, and destroy any earlier versions.
              </li>
            </ul>

            <p>
              Read more about the process of{" "}
              <span>
                <Link href={"/"} className="text-red-700 underline">
                  updating your Will.
                </Link>
              </span>
            </p>
          </div>
          {/* box 6 */}

          {/* box 7  */}
          <div className="border border-gray-300 rounded-sm w-full p-8">
            <h3 className="text-lg font-bold mb-3">
              How can I make a duplicate Will for my spouse?
            </h3>
            <p className="text-sm sm:text-base text-pera">
              At the end of your Will questionnaire, you have the option to
              create a duplicate Will for your spouse.
            </p>

            <div className="bg-red-50/50 p-4 mt-8 space-y-3">
              <Image src={mirror} alt="mirror img" width={50} />
              <p className="font-bold">
                Mirror your completed Will for your spouse.
              </p>
              <p className="text-sm sm:text-base">
                A duplicate Will of yours will be created in your spouses name.
              </p>
            </div>
          </div>
          {/* box 7  */}

          {/* box 8  */}
          <FaqBox
            title="What states and countries do you provide forms for?"
            desc="Doyourownwill's free service provides documents that are valid for all 50 United States and the District of Columbia."
          />
          {/* box 8  */}

          {/* box 9 */}
          <div className="border border-gray-300 rounded-sm w-full p-8">
            <h3 className="text-lg font-bold mb-3">
              Does my Will need to be notarized?
            </h3>
            <p className="text-sm sm:text-base text-pera mb-3">
              The will does not have to be notarized in order to be valid.
              However, if you and your witnesses sign an affidavit (sworn
              statement) before a notary public, you can help simplify the court
              procedures required to prove the{" "}
              <span>
                <Link href={"/"} className="text-red-700 underline">
                  validity of the Will
                </Link>
              </span>{" "}
              after you die. This procedure makes the will "self-proving."
            </p>
            <p className="text-sm sm:text-base text-pera">
              Read more about the process of{" "}
              <span>
                <Link href={"/"} className="text-red-700 underline">
                  signing your Will
                </Link>
              </span>
              .
            </p>
          </div>
          {/* box 9 */}

          {/* box 10  */}
          <FaqBox
            title="Do I need to to notarize my legal documents?"
            desc="It is typically recommended that all important legal documents be notarized, but not required to be legally binding."
          />
          {/* box 10  */}

          {/* box 11  */}
          <div className="border border-gray-300 rounded-sm w-full p-8">
            <h3 className="text-lg font-bold mb-3">
              What happens after signing my Will?
            </h3>
            <div className="space-y-4">
              <p className="text-sm sm:text-base text-pera">
                Decide where the original Will is to be kept and inform the
                executor of the location. and deliver it (getting a receipt).
                Beware of storage in a bank safety deposit box as some states
                require that they be sealed upon death and retrieval of the Will
                documents could be difficult. Generally, storage in a fireproof
                box or some other safe location should be sufficient.
              </p>
              <p className="text-sm sm:text-base text-pera">
                Be sure to let the executor and any alternates know the location
                of the Will. Remember that, should you desire to change your
                Will in the future, a formal Codicil or new Will will have to be
                executed. You should not write on or otherwise attempt to revise
                the Will.
              </p>
              <p className="text-sm sm:text-base text-pera">
                Remember: Periodically review changes in your life and consider
                whether you should change your Will.
              </p>

              {/* link  */}
              <Link href={"/"} className="text-red-700 underline block">
                Read more
              </Link>
              {/* link  */}
            </div>
          </div>
          {/* box 11  */}

          {/* box 12  */}
          <div className="border border-gray-300 rounded-sm w-full p-8">
            <h3 className="text-lg font-bold mb-3">
              Can I preview the steps required to complete my free Will?
            </h3>
            <p className="text-sm sm:text-base text-pera">
              Read more about the process of writing your{" "}
              <span>
                <Link href={"/"} className="text-red-700 underline">
                  free Will
                </Link>
              </span>{" "}
              on DoYourOwnWill.com.
            </p>
          </div>
          {/* box 12  */}

          {/* box 13 */}
          <FaqBox
            title="What is a Living Will?"
            desc="A Living Will is a written declaration in which you state, in advance, your wishes about the use of life-prolonging medical care if you become terminally ill and unable to communicate or a physician has determined that you will not recover from a vegetative state due to brain damage. Usually, you will be in a state that if you do not receive life-sustaining treatment (e.g., intravenous feeding, respirator), you will die. If you do not want to burden your family with the medical expenses and prolonged grief involved in keeping you alive, when there is no reasonable hope of revival, a Living Will typically authorizes withholding or turning off life-sustaining treatment. If your Living Will is properly prepared and clearly states your wishes, the hospital or doctor should abide by it, and will, in turn, be immune from criminal or civil liability for withholding treatment. Some people worry that by making a Living Will, they are authorizing abandonment by the medical system. However, a Living Will can state whatever your wishes are regarding treatment; so even if you prefer to receive all possible treatment, whatever your condition, it is a good idea to state those wishes in a Living Will."
          />
          {/* box 13 */}
          {/* box 14 */}
          <div className="border border-gray-300 rounded-sm w-full p-8">
            <h3 className="text-lg font-bold mb-3">
              What types of medical treatment can I specify in a Living Will?
            </h3>
            <div className="space-y-3">
              <p className="text-sm sm:text-base text-pera">
                A Living Will can be general or very specific in specifying the
                types of medical treatment you desire if you become
                incapacitated. For example, typical language commonly utilized
                in Living Wills is as follows: "If at any time (a) I am close to
                death and life support would only postpone the moment of my
                death; or (b) I am unconscious and it is very unlikely that I
                will ever become conscious again; or (c) I have a progressive
                illness that will be fatal and the illness is in an advanced
                stage, and I am consistently and permanently unable to
                communicate, swallow food and water safely, care for myself and
                recognize my family and other people, and it is very unlikely
                that my condition will substantially improve; or (d) life
                support would not help my medical condition and would make me
                suffer permanent and severe pain; then, in any such event, I
                direct that life support be withheld and withdrawn and that I be
                permitted to die naturally with only the administration of
                medication or the performance of any medical procedure deemed
                necessary to keep me comfortable and to relieve pain. The
                procedures and treatment to be withheld and withdrawn include,
                without limitation, surgery, antibiotics, cardiac and pulmonary
                resuscitation, and respiratory support. I expressly authorize
                the withholding and withdrawal of artificially provided food,
                water, and other nourishment and fluids."
              </p>
              <p className="text-sm sm:text-base text-pera">
                A Living Will can also address whether you want to donate tissue
                or organs upon your death, whether you desire to live the last
                days of your life in your home instead of a hospital, and other
                near- death health issues. Free state specific Living Wills can
                be found on our site{" "}
                <span className="text-red-700 underline">
                  <Link href={"/"}>here.</Link>
                </span>
              </p>
              <p className="text-sm sm:text-base text-pera">
                Once you complete your Living Will, inform and provide copies to
                family members and your health care providers.
              </p>
            </div>
          </div>
          {/* box 14 */}
          <div>
            <div className="my-5 flex gap-3">
              <Link href={"/"}>
                <Image src={img} alt="photo" width={150} height={100} />
              </Link>
              <div className="space-y-3">
                <h3 className="font-bold">
                  Protect yourself and your family with a legally binding Will.
                </h3>
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
  );
};

export default FAQPage;

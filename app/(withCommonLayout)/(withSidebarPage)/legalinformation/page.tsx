import ProtectYourSelf from "@/app/components/shared/ProtectYourSelf";
import Link from "next/link";

const informations = [
  {
    title: "Will Requirements",
    href: "#",
    desc: "The questionnaire on this site will walk you through the process of filling out your Will and produce a valid, state-specific document. Although you don’t necessarily need to remember all the requirements discussed below, it may be helpful to become familiar with the components of a Will. Generally, a Will includes...",
  },
  {
    title: "Naming Guardians for your Children",
    href: "#",
    desc: "As a parent, your Will provides you the opportunity to designate a guardian for minor children in the event of your death. Naming a guardian in your Will ensures that you choose who would care for your children, not the courts. In most cases, if your child’s other parent survives you, they assume guardianship without any other special actions. However, it is important to designate a guardian in the event that neither parent is available to assume the role.",
  },
  {
    title: "What is Probate?",
    href: "#",
    desc: "Probate is the legal process of administering the estate of a deceased person. This process is generally overseen and accomplished by the executor if there is a Will, or by a court-appointed representative if there is not. Though state laws vary, probate typically involves...",
  },
  {
    title: "Naming an Executor",
    href: "#",
    desc: "An executor is the person you choose to carry out the terms of your Will, including administration of your estate. When the Will is admitted to probate, the court gives the executor authority to act as the testator or Will writer’s legal representative in administering the estate. The executor's duties include collecting probate assets of the deceased, paying valid debts (including any estate taxes), investing estate funds, and ultimately distributing them to the beneficiaries in accordance with the Will's terms.",
  },
];

const LegalInformationPage = () => {
  return (
    <div>
      <div className="">
        <h2 className="text-2xl font-bold mb-3">Legal Information</h2>
        <p className="text-sm text-pera sm:text-base">
          Below you will find helpful links to help you understand the process
          of creating your free personal Will.
        </p>

        <div className="my-4 space-y-4">
          {informations.map((info) => (
            <div
              key={info.title}
              className="py-5 px-5 border border-neutral-200 rounded-sm"
            >
              <h3 className="text-lg text-red-700 font-bold underline mb-3">
                <Link href={info.href}>{info.title}</Link>
              </h3>
              <p className="text-sm text-pera sm:text-base leading-6">
                {info.desc}
              </p>
            </div>
          ))}
        </div>

        {/* horizontal line  */}
        <div className="w-full border-b border-b-neutral-200"></div>
        {/* horizontal line  */}

        <div className="my-6">
          <ProtectYourSelf />
        </div>
      </div>
    </div>
  );
};

export default LegalInformationPage;

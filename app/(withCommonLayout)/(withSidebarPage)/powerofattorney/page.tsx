import CreateDocumentForm from "@/app/components/shared/CreateDocumentForm";
import SidebarPageTitle from "@/app/components/shared/SidebarPageTitle";
import pdf from "@/public/pictures/pdf-icon.png";
import word from "@/public/pictures/word-icon.png";
import Image from "next/image";
import Link from "next/link";
import { BsCheckCircleFill } from "react-icons/bs";

const lists = [
  {
    title: "Last Will and Testament",
    desc: "Distribute your property, name guardians, and appoint an executor. ",
    href: "#",
    link: "Start your Will",
  },
  {
    title: "Living Will",
    desc: "Let others know your health care decisions. ",
    href: "#",
    link: "Start your Living Will",
  },
  {
    title: "Durable Power of Attorney",
    desc: "Appoint someone to communicate your decisions if you can't.",
    href: "#",
    link: "Start your Health Care Power of Attorney",
  },
  {
    title: "Pet Guardian Trust",
    desc: "Appoint someone to care for your pets.",
    href: "#",
    link: "Start your Pet Guardian Trust",
  },
];

const PowerOfAttorneyPage = () => {
  return (
    <div className="pb-8">
      <div className="">
        <SidebarPageTitle title="Power Of Attorney" />
      </div>
      <div className="mt-4 space-y-4">
        <p className="text-sm text-pera sm:text-base leading-6">
          Power of Attorney is a legal instrument that is used to delegate legal
          authority to another person (called an Agent or Attorney-in-Fact). The
          person who signs (or executes) a Power of Attorney is called the
          Principal. Power of Attorney gives the Agent authority to make
          property, financial and other legal decisions for the Principal. A
          Principal can give an Agent broad legal authority, or very limited
          authority.
        </p>
        <p className="text-sm text-pera sm:text-base leading-6">
          The Power of Attorney is frequently used in the event of a Principal's
          illness or disability, or in legal transactions where the Principal
          cannot be present to sign necessary legal documents. It can be either
          for all purposes (known as "General") or for a specific purpose (known
          as "Special" or "Limited"). Learn more on{" "}
          <Link href={"#"} className="text-red-700 underline">
            "General" vs "Special"
          </Link>
          .
        </p>
        <ul className="list-disc pl-10 space-y-1">
          <li>
            <Link href={"#"} className="text-red-700 underline">
              Power of Attorney FAQs
            </Link>
          </li>
          <li>
            <Link href={"#"} className="text-red-700 underline">
              Power of Attorney for Minors
            </Link>
          </li>
        </ul>
        <div>
          <CreateDocumentForm title="OFFICIAL POWER OF ATTORNEY" />
        </div>

        <div className="pt-6 space-y-5">
          {/* box 1 */}
          <div className="border border-gray-200 py-6 px-10 rounded-sm bg-red-50/50 shadow-sm shadow-red-50/20 flex justify-between items-center">
            {/* left  */}
            <div className="space-y-2">
              <h3 className="font-bold">General Power of Attorney Forms</h3>
              <p className="text-pera text-sm sm:text-base">
                <Link href={"#"} className="text-red-700 underline font-bold">
                  Fill out online
                </Link>{" "}
                - guided step-by-step.
              </p>
            </div>
            {/* left  */}

            {/* right  */}
            <div className="flex items-center gap-10">
              <div className="">
                <Link href={"#"}>
                  <Image src={pdf} alt="pdf image" width={25} />
                  <p className="text-red-700 underline text-center text-xs">
                    .pdf
                  </p>
                </Link>
              </div>
              <div className="">
                <Link href={"#"}>
                  <Image src={word} alt="word image" width={25} />
                  <p className="text-red-700 underline text-xs text-center">
                    .doc
                  </p>
                </Link>
              </div>
            </div>
            {/* right  */}
          </div>
          {/* box 1 */}

          {/* box 2 */}
          <div className="border border-gray-200 py-6 px-10 rounded-sm bg-red-50/50 shadow-sm shadow-red-50/20 flex justify-between items-center">
            {/* left  */}
            <div className="space-y-2">
              <h3 className="font-bold">Special Power of Attorney Forms</h3>
              <p className="text-pera text-sm sm:text-base">
                <Link href={"#"} className="text-red-700 underline font-bold">
                  Fill out online
                </Link>{" "}
                - guided step-by-step.
              </p>
            </div>
            {/* left  */}

            {/* right  */}
            <div className="flex items-center gap-10">
              <div className="">
                <Link href={"#"}>
                  <Image src={pdf} alt="pdf image" width={25} />
                  <p className="text-red-700 underline text-center text-xs">
                    .pdf
                  </p>
                </Link>
              </div>
              <div className="">
                <Link href={"#"}>
                  <Image src={word} alt="word image" width={25} />
                  <p className="text-red-700 underline text-xs text-center">
                    .doc
                  </p>
                </Link>
              </div>
            </div>
            {/* right  */}
          </div>
          {/* box 2 */}

          {/* box 3 */}
          <div className="border border-gray-200 py-6 px-10 rounded-sm bg-red-50/50 shadow-sm shadow-red-50/20 flex justify-between items-center">
            {/* left  */}
            <div className="space-y-2">
              <h3 className="font-bold">Child Care Power Attorney Forms</h3>
              <p className="text-pera text-sm sm:text-base">
                <Link href={"#"} className="text-red-700 underline font-bold">
                  Fill out online
                </Link>{" "}
                - guided step-by-step.
              </p>
            </div>
            {/* left  */}

            {/* right  */}
            <div className="flex items-center gap-10">
              <div className="">
                <Link href={"#"}>
                  <Image src={pdf} alt="pdf image" width={25} />
                  <p className="text-red-700 underline text-center text-xs">
                    .pdf
                  </p>
                </Link>
              </div>
              <div className="">
                <Link href={"#"}>
                  <Image src={word} alt="word image" width={25} />
                  <p className="text-red-700 underline text-xs text-center">
                    .doc
                  </p>
                </Link>
              </div>
            </div>
            {/* right  */}
          </div>
          {/* box 3 */}

          {/* box 4 */}
          <div className="border border-gray-200 py-6 px-10 rounded-sm bg-red-50/50 shadow-sm shadow-red-50/20 flex justify-between items-center">
            {/* left  */}
            <div className="space-y-2">
              <h3 className="font-bold">Health Care Power of Attorney Form</h3>
              <p className="text-pera text-sm sm:text-base">
                <Link href={"#"} className="text-red-700 underline font-bold">
                  Fill out online
                </Link>{" "}
                - guided step-by-step.
              </p>
            </div>
            {/* left  */}
          </div>
          {/* box 4 */}
        </div>
      </div>

      <div className="my-8 relative">
        <ul className="pl-10 space-y-10 before:'' before:w-[3px] before:h-[32rem] sm:before:h-[35rem] before:bg-gray-100 before:absolute before:left-[14px] before:top-2  after:'' after:w-4 after:h-4 after:bg-white  after:border-gray-200 after:absolute after:left-[8px] after:-bottom-[4rem] after:rounded-full after:border-[3px]">
          {lists.map((list) => (
            <li key={list.title} className="space-y-2">
              <h4 className="relative font-bold">
                <BsCheckCircleFill
                  color="red"
                  className="absolute top-1 -left-[2.1rem] text-lg"
                />
                {list.title}
              </h4>
              <p className="text-pera text-xs sm:text-base">{list.desc}</p>
              <Link
                href={list.href}
                className="text-red-700 underline text-sm sm:text-base block pt-2"
              >
                {list.link}
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default PowerOfAttorneyPage;

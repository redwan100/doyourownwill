import SidebarPageTitle from "@/app/components/shared/SidebarPageTitle";
import digital from "@/public/pictures/digital-assets.png";
import file from "@/public/pictures/three-documents-plus.png";
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
    title: "General Power of Attorney",
    desc: "A Power of Attorney is frequently used in the event of a Principal's illness or disability or where the Principal cannot be present to sign necessary legal documents.",
    href: "#",
    link: "Start your General Power of Attorney",
  },
  {
    title: "Pet Guardian Trust",
    desc: "Appoint someone to care for your pets.",
    href: "#",
    link: "Start your Pet Guardian Trust",
  },
  {
    title: "Assign a Digital Agent",
    desc: "Share access to your estate documents with people you trust to help carry out your wishes.",
    href: "#",
    link: "Assign your Digital Agents",
  },
];

const FreeLegalForms = () => {
  return (
    <div className="w-full my-8 py-16">
      <SidebarPageTitle title="Free Legal Forms" />
      <div className="flex gap-3 items-center justify-between w-full">
        <div className="mt-4 space-y-2 w-full">
          <p>
            Important free legal documents for personal, business, and estate.
          </p>
          <p className="font-bold">
            No account needed, no credit card - just 100% free!{" "}
            <span className="text-xs font-normal">
              | Instant download (Word or PDF)
            </span>
          </p>
        </div>
        <Image src={file} alt="file image" width={50} />
      </div>

      <div className="my-8">
        <h3 className="block pb-3 font-bold">Personal / Family</h3>
        <div className="relative">
          <ul className="pl-10 space-y-10 before:'' before:w-[3px] before:h-[104%] before:bg-gray-100 before:absolute before:left-[14px] before:top-2  after:'' after:w-4 after:h-4 after:bg-white  after:border-gray-200 after:absolute after:left-[8px] after:-bottom-[4rem] after:rounded-full after:border-[3px]">
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
                <div className="flex items-center justify-between gap-5">
                  <Link
                    href={list.href}
                    className="text-red-700 underline text-sm sm:text-base pt-2"
                  >
                    {list.link}
                  </Link>

                  <span className="bg-green-100/60 p-2 text-sm text-green-600">
                    Free
                  </span>
                </div>
              </li>
            ))}

            <li className="space-y-2">
              <h4 className="relative font-bold">
                <BsCheckCircleFill
                  color="red"
                  className="absolute top-1 -left-[2.1rem] text-lg"
                />
                Important Contacts - Your Will
              </h4>
              <p className="text-pera text-xs sm:text-base">
                Add contact details for your Executors and Guardians (addresses,
                emails, phone, and notes.)
              </p>
              <div className="flex items-center justify-between gap-5">
                <p>
                  You must{" "}
                  <Link
                    href="#"
                    className="text-red-700 underline text-sm sm:text-base pt-2"
                  >
                    complete complete your Will
                  </Link>{" "}
                  , before accessing this form.
                </p>

                <span className="bg-green-100/60 p-2 text-sm text-green-600">
                  Free
                </span>
              </div>
            </li>
            <li className="space-y-2">
              <h4 className="relative font-bold">
                <BsCheckCircleFill
                  color="red"
                  className="absolute top-1 -left-[2.1rem] text-lg"
                />
                Funeral Planning Checklist
              </h4>
              <p className="text-pera text-xs sm:text-base">
                Add additional funeral and/or memorial information that wasn't
                stated in your Will.
              </p>
              <div className="flex items-center justify-between gap-5">
                <p>
                  <Link
                    href="#"
                    className="text-red-700 underline text-sm sm:text-base pt-2"
                  >
                    Add Details
                  </Link>{" "}
                </p>

                <span className="bg-green-100/60 p-2 text-sm text-green-600">
                  Free
                </span>
              </div>
            </li>

            <li className="">
              <div className="flex items-center justify-between gap-5">
                <div className="space-y-2">
                  <h4 className="relative font-bold">
                    <BsCheckCircleFill
                      color="red"
                      className="absolute top-1 -left-[2.1rem] text-lg"
                    />
                    Organize Your Digital & Paper Files
                  </h4>
                  <p className="text-pera text-xs sm:text-base">
                    Use these customizable printable worksheets to help document
                    account related information.
                  </p>
                  <p>
                    <Link
                      href="#"
                      className="text-red-700 underline text-sm sm:text-base pt-2"
                    >
                      Add Details
                    </Link>{" "}
                  </p>
                </div>
                <Image src={digital} alt="digital image" width={120} />
              </div>
            </li>

            <li className="space-y-2">
              <h4 className="relative font-bold">
                {/* <BsCheckCircleFill
                  color="red"
                  className="absolute top-1 -left-[2.1rem] text-lg"
                /> */}
                <div className="absolute top-1 -left-[2.1rem] w-4 h-4 rounded-full bg-white border border-2 border-gray-200"></div>
                Additional Worksheets
              </h4>
              <p className="text-pera text-xs sm:text-base">
                Optional worksheets that supplement your estate planning
                documents.
              </p>
              <div className="flex items-center justify-between gap-5">
                <p>
                  Learn about{" "}
                  <Link
                    href="#"
                    className="text-red-700 underline text-sm sm:text-base pt-2"
                  >
                    additional worksheets
                  </Link>{" "}
                  here.
                </p>

                <span className="bg-green-100/60 p-2 text-sm text-green-600">
                  Free
                </span>
              </div>
            </li>
          </ul>
        </div>
      </div>
      <ul className="text-sm sm:text-base space-y-1 list-disc mt-24 pl-8">
        <li>
          <Link href={"#"} className="text-red-700 underline">
            {" "}
            Estate Plan Checklist
          </Link>{" "}
          - Simple and quick estate planning checklist.
        </li>
        <li>
          <Link href={"#"} className="text-red-700 underline">
            {" "}
            Memorial Planner and Information Letter
          </Link>
          - Sample letter used to create record of preferences for memorial
          services and other important information for family and friends.
        </li>
        <li>
          <Link href={"#"} className="text-red-700 underline">
            {" "}
            Child Medical Consent Form
          </Link>
          - Used by the parents of minor children to give medical consent for
          specified treatments and/or medical procedures.
        </li>
      </ul>

      <div className="">
        <h3 className="font-bold mt-4">Other</h3>
        <ul className="text-sm sm:text-base space-y-1 list-disc mt-4 pl-8">
          <li>
            <Link href={"#"} className="text-red-700 underline">
              {" "}
              HIPAA Authorization Form
            </Link>{" "}
            - A signed HIPAA authorization is like a permission slip that
            permits healthcare providers to disclose your health information to
            anyone you specify.
          </li>
          <li>
            <Link href={"#"} className="text-red-700 underline">
              {" "}
              Voluntary Employee Resignation Letter
            </Link>
            - A resignation letter expresses your intention to leave the company
            you currently work for.
          </li>
          <li>
            <Link href={"#"} className="text-red-700 underline">
              {" "}
              Free Federal Forms
            </Link>
            - Our listing of U.S. Government sites that provide free forms.
          </li>
          <li>
            <Link href={"#"} className="text-red-700 underline">
              {" "}
              Other Miscellaneous Forms +
            </Link>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default FreeLegalForms;

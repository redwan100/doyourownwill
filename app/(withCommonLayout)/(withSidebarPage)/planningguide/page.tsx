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
];

const PlanningGuidePage = () => {
  return (
    <div className="pb-12">
      <SidebarPageTitle title="Your State Planning" />
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

      <div className="my-8 pb-4">
        <h3 className="block pb-3 font-bold">Personal / Family</h3>
        <div className="relative ">
          <ul className="pl-10 space-y-10 before:'' before:w-[3px] before:h-[104%] before:bg-gray-100 before:absolute before:left-[14px] before:top-2  after:'' after:w-4 after:h-4 after:bg-white  after:border-gray-200 after:absolute after:left-[8px] after:-bottom-[2rem] after:rounded-full after:border-[3px]">
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
          </ul>
        </div>
      </div>

      <div className="relative">
        <h3 className="block pb-3 font-bold">Additional:</h3>
        <div className="relative">
          <ul className="pl-10 space-y-10 before:'' before:w-[3px] before:h-[104%] before:bg-gray-100 before:absolute before:left-[14px] before:top-2  after:'' after:w-4 after:h-4 after:bg-white  after:border-gray-200 after:absolute after:left-[8px] after:-bottom-[3rem] after:rounded-full after:border-[3px]">
            <li className="space-y-2">
              <h4 className="relative font-bold">
                <BsCheckCircleFill
                  color="red"
                  className="absolute top-1 -left-[2.1rem] text-lg"
                />
                General Power of Attorney
              </h4>
              <p className="text-pera text-xs sm:text-base">
                A Power of Attorney is frequently used in the event of a
                Principal's illness or disability or where the Principal cannot
                be present to sign necessary legal documents.
              </p>
              <div className="flex items-center justify-between gap-5">
                <Link
                  href="#"
                  className="text-red-700 underline text-sm sm:text-base pt-2"
                >
                  Start your General Power of Attorney
                </Link>

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
                Pet Guardian Trust
              </h4>
              <p className="text-pera text-xs sm:text-base">
                Appoint someone to care for your pets.
              </p>
              <div className="flex items-center justify-between gap-5">
                <Link
                  href="#"
                  className="text-red-700 underline text-sm sm:text-base pt-2"
                >
                  Start your Pet Guardian Trust
                </Link>

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
                Assign a Digital Agent
              </h4>
              <p className="text-pera text-xs sm:text-base">
                Share access to your estate documents with people you trust to
                help carry out your wishes.
              </p>
              <div className="flex items-center justify-between gap-5">
                <Link
                  href="#"
                  className="text-red-700 underline text-sm sm:text-base pt-2"
                >
                  Assign your Digital Agents
                </Link>

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
                Important Contacts - Your Will
              </h4>
              <p className="text-pera text-xs sm:text-base">
                Add contact details for your Executors and Guardians (addresses,
                emails, phone, and notes.)
              </p>
              <div className="flex items-center justify-between gap-5">
                <Link
                  href="#"
                  className="text-red-700 underline text-sm sm:text-base pt-2"
                >
                  Add Details
                </Link>

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
                <Link
                  href="#"
                  className="text-red-700 underline text-sm sm:text-base pt-2"
                >
                  Add Details
                </Link>

                <span className="bg-green-100/60 p-2 text-sm text-green-600">
                  Free
                </span>
              </div>
            </li>

            <li className="flex items-center justify-between gap-6">
              <div className="space-y-2">
                <h4 className="relative font-bold">
                  <BsCheckCircleFill
                    color="red"
                    className="absolute top-1 -left-[2.1rem] text-lg"
                  />
                  Pet Guardian Trust
                </h4>
                <p className="text-pera text-xs sm:text-base">
                  Appoint someone to care for your pets.
                </p>

                <Link
                  href="#"
                  className="text-red-700 underline text-sm sm:text-base pt-2 block"
                >
                  Start your Pet Guardian Trust
                </Link>
              </div>
              <Image src={digital} alt="digital image" width={100} />
            </li>

            <li className="space-y-2">
              <h4 className="relative font-bold">
                <div className="absolute top-1 -left-[2rem] bg-white border-2 border-gray-200 w-4 h-4 rounded-full"></div>
                Important Documents You and Your Family Need
              </h4>
              <p className="text-pera text-xs sm:text-base">
                Invite family and friends to DoYourOwnWill.com.
              </p>
              <div className="flex items-center justify-between gap-5">
                <Link
                  href="#"
                  className="text-red-700 underline text-sm sm:text-base pt-2"
                >
                  Share Us
                </Link>
              </div>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default PlanningGuidePage;

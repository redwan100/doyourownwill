import logo1 from "@/public/pictures/fLogo1.png";
import Image from "next/image";
import Link from "next/link";
import { FaLock } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="bg-[#2F323A]">
      {/* top section  */}
      <div className="w-full bg-[#F3F3F3] ">
        <div className="w-full flex flex-col items-center gap-1 justify-center py-6 px-2 md:flex-row">
          <p className="text-sm text-gray-600">As mentioned in</p>

          <Image src={logo1} alt="logo" className="max-w-full w-[25rem]" />
        </div>
      </div>

      {/* get in touch section  */}
      <div className="w-full bg-[#E7E7E7] py-8 px-6">
        <div className="max-w-[1040px] mx-auto">
          <div className="flex flex-col gap-10 md:gap-5 md:flex-row">
            <div>
              <h3 className="text-lg font-semibold uppercase mb-4">
                Who we are
              </h3>
              <div className="space-y-3">
                <p className=" text-[14px] text-pera">
                  DoYourOwnWill.com is under the ownership of eForms.com. Our
                  vision was to deliver accurate and reliable legal information
                  for little to no cost to the user.
                </p>
                <p className="text-[14px] text-pera">
                  Since that time, we have helped millions learn more about
                  Wills and complete their own simple Will online.
                </p>
                <p className="text-[14px] text-pera">
                  Doyourownwill.com provides the only truly free estate planning
                  documents on the web.
                </p>
              </div>
            </div>

            <div>
              <p className="text-[14px] text-pera">Get In Touch</p>
              <div className="space-y-3">
                <p className="text-[14px] text-pera">
                  Because we are not a law firm, we cannot provide legal advice
                  and any questions regarding legal advice or estate planning
                  must be directed to a qualified attorney.
                </p>
                <p className="text-[14px] text-pera">
                  We welcome your comments, questions and suggestions about this
                  site:
                </p>

                <ul className="space-y-3">
                  <li className="text-red-700 underline text-[15px] ">
                    <Link href={"/"}>via online form</Link>
                  </li>
                  <li className="text-red-700 underline text-[15px] ">
                    <Link href={"/"}>support@eforms.com</Link>
                  </li>
                </ul>
              </div>
            </div>
          </div>

          <div className="mt-10">
            <h3 className="text-lg font-semibold uppercase mb-3">
              Nonprofit Planned Giving
            </h3>
            <p className="text-red-700 underline text-[15px] ">
              <Link href={"/"}>Planned Giving Signup for 501(c)(3)</Link>
            </p>
          </div>
        </div>
      </div>
      {/* get in touch section  */}

      {/* top section  */}

      {/* bottom section  */}
      <div className="space-y-3 max-w-[1040px] w-full mx-auto px-6 py-8">
        <p className="text-neutral-400  text-[14px]">
          © 2024 Electronic Forms LLC{" "}
          <span className="text-gray-50 font-normal underline">
            <Link href={"/"}> All Rights Reserved.</Link>
          </span>
        </p>

        <p className="text-neutral-400  text-[14px]">
          Disclaimer: Communications between you and doyourownwill are protected
          by our{" "}
          <span className="text-gray-50 font-normal underline">
            <Link href={"/"}>Privacy Statement</Link>
          </span>{" "}
          but not by the attorney-client privilege or as work product. We are
          not a law firm or a substitute for an attorney or law firm. We cannot
          provide any kind of advice, explanation, opinion, or recommendation
          about possible legal rights, remedies, defenses, options, selection of
          forms or strategies. Your access to the website is subject to our
          <span className="text-gray-50 font-normal underline">
            <Link href={"/"}> Disclaimers</Link>
          </span>
        </p>

        <p className="text-neutral-400 flex items-center gap-1">
          <FaLock />
          SSL Secured Connection.
        </p>
      </div>
      {/* bottom section  */}
    </footer>
  );
};

export default Footer;

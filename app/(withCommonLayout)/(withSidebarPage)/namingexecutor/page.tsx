import ProtectYourSelf from "@/app/components/shared/ProtectYourSelf";
import SidebarPageTitle from "@/app/components/shared/SidebarPageTitle";
import Link from "next/link";

const NamingExecutorPage = () => {
  return (
    <div>
      <div className="">
        <SidebarPageTitle title="Naming An Executor" />
      </div>

      <div className="space-y-4 mt-4">
        <p className="text-sm text-pera sm:text-base">
          An executor is the person you choose to carry out the terms of your
          Will, including administration of your estate. When the Will is
          admitted to{" "}
          <Link href={"#"} className="text-red-700 underline">
            probate
          </Link>
          , the court gives the executor authority to act as the testator or
          Will writer’s legal representative in administering the estate. The
          executor&apos;s duties include collecting probate assets of the
          deceased, paying valid debts (including any estate taxes), investing
          estate funds, and ultimately distributing them to the beneficiaries in
          accordance with the Will&apos;s terms.
        </p>
        <p className="text-sm text-pera sm:text-base">
          Your executor should be someone you consider highly trustworthy, with
          good judgment. You might choose a trusted friend or relative who is
          capable of handling financial matters. Many banks will serve as
          executor, but they will charge for the service. In most cases, when a
          friend or relative agrees to become your executor, he or she will
          waive or refuse a fee.
        </p>
        <p className="text-sm text-pera sm:text-base">
          There are some restrictions on who may serve as an executor. Many
          states will only appoint individuals who are residents of the same
          state. If you want to select a non-resident executor, contact your
          county clerk of probate court or an attorney to find out what your
          state allows. It is recommended that a second choice for executor be
          named in case the first choice refuses or is unable to serve. An
          executor should not be a minor, convicted felon, or non-U.S. citizen.
        </p>
        <p className="text-sm text-pera sm:text-base">
          Most jurisdictions require that the executor post a bond to protect
          the assets of the estate. There are usually waivers available in most
          states that would excuse the executor from posting a bond, the most
          common of which is if you request it in your Will. By default, the
          Will generated at this site provides for such a waiver.
        </p>
      </div>
      <div className="">
        <ProtectYourSelf />
      </div>
    </div>
  );
};

export default NamingExecutorPage;

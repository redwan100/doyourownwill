import ProtectYourSelf from "@/app/components/shared/ProtectYourSelf";
import SidebarPageTitle from "@/app/components/shared/SidebarPageTitle";

const descs = [
  {
    desc: "As a parent, your Will provides you the opportunity to designate a guardian for minor children in the event of your death. Naming a guardian in your Will ensures that you choose who would care for your children, not the courts.",
  },
  {
    desc: "In most cases, if your child’s other parent survives you, they assume guardianship without any other special actions. However, it is important to designate a guardian in the event that neither parent is available to assume the role",
  },
  {
    desc: "A guardian becomes responsible for the child’s physical care, health, education, and welfare until he or she reaches 18 years of age. This includes providing the basic needs such as food, clothing, shelter, health care decisions and education choices. The guardian is not responsible to meet the child's financial needs with his or her own money. Usually, a trustee, who may also be the executor, handles those arrangements with money provided by the estate and dedicated for that purpose. A guardian is not paid for his or her services.",
  },
  {
    desc: "The person you choose as the guardian should have good parenting skills and values similar to your own. You should have complete confidence in the person you nominate, and you should be certain that your nominee is willing to accept the responsibility of raising your children should the need actually arise. Family members or trusted friends are good options. Naming co-guardians is permitted but doing so may create custody problems should the co-guardians separate in the future.",
  },
];

const NamingGuardianPage = () => {
  return (
    <div>
      <div>
        <SidebarPageTitle title="Naming Guardians for your Children" />

        <div className="space-y-4 mt-4">
          {descs.map(({ desc }, index) => (
            <p key={index} className="text-pera text-sm sm:text-base">
              {desc}
            </p>
          ))}
        </div>

        <div className="pt-4">
          <ProtectYourSelf />
        </div>
      </div>
    </div>
  );
};

export default NamingGuardianPage;

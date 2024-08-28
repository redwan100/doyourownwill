import CreateDocumentForm from "@/app/components/shared/CreateDocumentForm";
import StepForm from "./components/StepForm";

const FreeLivingWillsPa = () => {
  return (
    <div>
      <div>
        <h2 className="text-[24px] font-bold mb-3">
          Free State-Specific Living Will
        </h2>
        <p className="text-[14px] mb-2">
          A living will is a directive to physicians and other healthcare
          providers specifying your wishes with regard to specific treatments or
          procedures to be used in the event of your incapacity. A living will
          becomes effective only when you are unable to express your wishes.
        </p>
        <p className="text-[14px]">
          The purpose of a living will is to make your intentions known, so that
          your family and your doctors will be able to lawfully act in
          accordance with your wishes. Once completed, discuss your wishes as
          reflected in your living will with family members, and be sure they
          have a signed copy. A living will, or advance directive, is not a part
          of your Will, and must be completed separately.
        </p>
      </div>

      <div className="my-5">
        <CreateDocumentForm title="OFFICIAL ADVANCE DIRECTIVE" />
      </div>
      <div>
        <p className="text-pera text-[14px]">
          <span className="text-lg font-semibold text-red1 underline">
            Proceed to Free Living Will Forms
          </span>{" "}
          for all 50 states.
        </p>

        <div className="text-center bg-red-50 py-1 px-2 space-y-2 my-5">
          <h3 className="text-lg font-bold">
            Write and Print Your Living Will Below!
          </h3>
          <p>No account needed, no credit card - just 100% free!</p>
        </div>

        <p className="font-bold">
          Instant .docx and .pdf download at end of questionnaire.
        </p>

        <div>
          <StepForm />
        </div>
      </div>
    </div>
  );
};

export default FreeLivingWillsPa;

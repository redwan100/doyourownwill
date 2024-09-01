import paper from "@/public/pictures/paper-will2.png";
import Image from "next/image";
import Link from "next/link";

const FileDetails = () => {
  return (
    <div>
      <div className="w-full bg-white font-semibold">
        <p className="text-center py-8 px-3">
          No account needed, no credit card - just 100% free! - Instant download
          (Word or PDF)
        </p>
      </div>

      <div className="bg-[#F5F5F5]">
        <div className="max-w-[1040px] mx-auto w-full grid md:grid-cols-3 divide-x divide-y lg:divide-y-0">
          <div className="flex justify-between gap-3 px-6 py-4 flex-1">
            <div>
              <h3 className="font-bold mb-2">Last Will and Testament</h3>
              <p className="text-neutral-700 leading-5 text-sm ">
                Distribute your property, name guardians, and appoint an
                executor.
              </p>
              <Link
                href={"/"}
                className="text-red-700 underline mt-3 inline-block font-bold text-sm"
              >
                Start your Will
              </Link>
            </div>
            <Image
              src={paper}
              alt="paper image"
              width={80}
              className="shadow-md max-h-[8rem] h-full"
            />
          </div>
          <div className="flex justify-between gap-3 px-6 py-4 flex-1 ">
            <div>
              <h3 className="font-bold mb-2">Living Will</h3>
              <p className="text-neutral-700 leading-5 text-sm ">
                Let others know your health care decisions.
              </p>
              <Link
                href={"/"}
                className="text-red-700 underline mt-3 inline-block font-bold text-sm"
              >
                Start your Living Will
              </Link>
            </div>
            <Image
              src={paper}
              alt="paper image"
              width={80}
              className="shadow-md max-h-[8rem] h-full"
            />
          </div>
          <div className="flex justify-between gap-3 px-6 py-4 flex-1 ">
            <div>
              <h3 className="font-bold mb-2">Durable Power of Attorney</h3>
              <p className="text-neutral-700 leading-5 text-sm ">
                Appoint someone to communicate your decisions if you can't.
              </p>

              <Link
                href={"/"}
                className="text-red-700 underline mt-3 inline-block font-bold text-sm"
              >
                Start your Power of Attorney
              </Link>
            </div>
            <Image
              src={paper}
              alt="paper image"
              width={80}
              className="shadow-md max-h-[8rem] h-full"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default FileDetails;

import seen from "@/public/pictures/as-seen-in.png";
import Image from "next/image";

const AboutContactUsPage = () => {
  return (
    <div>
      <div>
        <h2 className="text-2xl font-bold mb-4">About/Contact Us</h2>

        <div className="space-y-4">
          <p className="text-pera">
            This platform allows us to reach a large and diverse audience who
            desire to handle common legal issues in the privacy of their own
            home.
          </p>

          <div className="flex justify-between items-center divide-x divide-neutral-300">
            {/* left  */}
            <div className="text-center flex-1">
              <p className="font-bold">9 Million+</p>
              <p className="font-bold uppercase text-red-600">people helped</p>
            </div>
            {/* left  */}

            {/* right  */}
            <div className="text-center flex-1">
              <p className="font-bold">15 Million+</p>
              <p className="font-bold uppercase text-red-600">
                documents provided
              </p>
            </div>
            {/* right  */}
          </div>

          <p className="text-pera">
            Doyourownwill.com was developed to assist those with simple estates
            create their own will online for free. This website is unique in
            that it quickly delivers the documents right to the user’s desk
            through a patent-pending process. Since its inception,
            Doyourownwill.com has helped millions acquire more information about
            estate planning and Will preparation and write their Wills.
          </p>
          <p className="text-pera">
            Doyourownwill.com has been mentioned in The Los Angeles Times, The
            New York Post, The Wall Street Journal Sunday edition, and Parenting
            Magazine – just to name a few!
          </p>
          <div className="bg-red-50/50 py-3 px-4">
            <Image src={seen} alt="seen img" />
          </div>

          <p className="text-pera">
            We welcome your comments, questions and suggestions about this site.
            Please feel free to contact us using the form below, and we’ll
            respond to your inquiry as soon as possible.
          </p>
          <p className="text-pera">
            We can be reached at support@eforms.com or via the form below.
            Because we are not a law firm, we cannot provide legal advice and
            any questions regarding legal advice or estate planning must be
            directed to a qualified attorney.
          </p>
        </div>
      </div>
    </div>
  );
};

export default AboutContactUsPage;

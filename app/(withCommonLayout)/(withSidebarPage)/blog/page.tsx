import Image from "next/image";
import Link from "next/link";
import { blogs } from "./components/blogConstant";

const BlogPage = () => {
  return (
    <div>
      <div className="space-y-4">
        <h1 className="text-2xl font-bold">Blog Articles</h1>
        {blogs.map((blog) => (
          <div
            key={blog.title}
            className={`relative border border-gray-300 rounded-sm p-6 space-y-4 ${
              blog.img && "pr-[6rem]"
            }`}
          >
            <h2 className="text-red-700 underline font-bold">
              {" "}
              <Link href={blog.href}>{blog.title}</Link>
            </h2>
            <p className="text-pera">{blog.desc}</p>
            {blog?.img && (
              <>
                <Image
                  src={blog.img}
                  width={60}
                  alt="dog image"
                  className="absolute top-16 right-4"
                />
              </>
            )}
          </div>
        ))}

        <div className=" border border-gray-300 rounded-sm p-6 space-y-4">
          <h2 className="text-red-700 underline font-bold">
            {" "}
            <Link href="#">
              Life Insurance: An Important Estate Planning Tool
            </Link>
          </h2>

          <p className="text-pera">
            Many people put off buying life insurance for the same reasons they
            avoid writing their Will: because they believe it will be costly and
            difficult, that it is unnecessary, or simply to avoid thinking about
            their own death. But life insurance is a valuable estate planning
            tool for many people, and the process of buying it can be relatively
            straightforward.
          </p>
        </div>
        <div className=" border border-gray-300 rounded-sm p-6 space-y-4">
          <h2 className="text-red-700 underline font-bold">
            {" "}
            <Link href="#">
              Estate Planning: Passwords, Access Keys and PINs
            </Link>
          </h2>

          <p className="text-pera">
            In an age of ever-increasing reliance on digital information
            storage, password and other access code management has become a
            critical (but often overlooked) part of estate planning. After your
            death your{" "}
            <span>
              <Link href={"#"} className="text-red-700 underline">
                Will Executor
              </Link>
            </span>{" "}
            will be responsible for administering your estate. In order to do so
            effectively, he or she will need access to all documents and
            information related to your property, bank accounts, and other
            assets.
          </p>
        </div>
        <div className=" border border-gray-300 rounded-sm p-6 space-y-4">
          <h2 className="text-red-700 underline font-bold">
            {" "}
            <Link href="#">Frank Sinatra's Will</Link>
          </h2>

          <p className="text-pera">
            Frank Sinatra (legally Francis Albert Sinatra) was one of the most
            well-known and successful American recording artists and actors of
            all time. He first launched his singing career in the early 1940s
            after signing a deal with Columbia Records. Despite some ebb and
            flow over the years, Sinatra maintained significant fame and
            popularity over a period of more than 5 decades.
          </p>
        </div>

        <div className="divide-x divide-neutral-500">
          <button className="px-2">Page 1</button>
          <button className="px-2 text-red-600 underline">Page 2</button>
          <button className="px-2 text-red-600 underline">Page 3</button>
        </div>
      </div>
    </div>
  );
};

export default BlogPage;

"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { v4 as uuidv4 } from "uuid";
const menus = [
  {
    title: "Create",
    items: [
      {
        id: uuidv4(),
        label: "Do Your Own Will",
        href: "/yourownmill",
      },
      {
        id: uuidv4(),
        label: "Free Living Wills",
        href: "/freelivingwills",
      },
      {
        id: uuidv4(),
        label: "Planning Guide",
        href: "/planningguide",
      },
    ],
  },
  {
    title: "Information",
    items: [
      {
        id: uuidv4(),
        label: "Do I Need a Will?",
        href: "/need-will",
      },
      {
        id: uuidv4(),
        label: "Can I Do it Myself?",
        href: "/doitmyself",
      },
      {
        id: uuidv4(),
        label: "How this Site Works",
        href: "/howthissiteworks",
      },
      {
        id: uuidv4(),
        label: "Legal Information",
        href: "/legalinformation",
      },
      {
        id: uuidv4(),
        label: "Will Requirements",
        href: "/willrequirements",
      },
      {
        id: uuidv4(),
        label: "Naming Guardians",
        href: "/namingguardians",
      },
      {
        id: uuidv4(),
        label: "What is Probate?",
        href: "/whatisprobate",
      },
      {
        id: uuidv4(),
        label: "Naming an Executor",
        href: "/namingexecutor",
      },
    ],
  },
  {
    title: "Others",
    items: [
      {
        id: uuidv4(),
        label: "Power of Attorney",
        href: "/powerofattorney",
      },
      {
        id: uuidv4(),
        label: "Free Legal Forms",
        href: "/freelegalforms",
      },
      {
        id: uuidv4(),
        label: "Famous Wills",
        href: "/famouswills",
      },
    ],
  },
];
const SidebarPage = () => {
  const pathname = usePathname();

  return (
    <>
      <div className="pl-4 py-4 w-full">
        {menus.map((menu, index) => (
          <div key={menu.title} className="w-full">
            <h3 className="text-[18px] font-bold mb-3">{menu.title}</h3>
            <ul className="pl-3 mb-5 w-max">
              {menu.items.map((item, index) => (
                <li
                  key={item.id}
                  className={`hover:bg-[#f6f6f6] py-2 px-2 ${
                    pathname === item.href && "bg-[#f6f6f6]"
                  }`}
                >
                  <Link href={item.href}>
                    <p>{item.label}</p>
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </>
  );
};

export default SidebarPage;

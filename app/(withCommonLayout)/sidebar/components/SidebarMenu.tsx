"use client";

import Link from "next/link";
import { useEffect } from "react";

const menus = [
  {
    title: "Create",
    items: [
      {
        label: "Do Your Own Will",
        href: "/yourownmill",
      },
      {
        label: "Free Living Wills",
        href: "/freelivingwills",
      },
      {
        label: "Planning Guide",
        href: "/planningguide",
      },
    ],
  },
  {
    title: "Information",
    items: [
      {
        label: "Do I Need a Will?",
        href: "/need-will",
      },
      {
        label: "Can I Do it Myself?",
        href: "/doitmyself",
      },
      {
        label: "How this Site Works",
        href: "/howthissiteworks",
      },
      {
        label: "Legal Information",
        href: "/legalinformation",
      },
      {
        label: "Will Requirements",
        href: "/willrequirements",
      },
      {
        label: "Naming Guardians",
        href: "/namingguardians",
      },
      {
        label: "What is Probate?",
        href: "/whatisprobate",
      },
      {
        label: "Naming an Executor",
        href: "/namingexecutor",
      },
    ],
  },
  {
    title: "Others",
    items: [
      {
        label: "Power of Attorney",
        href: "/powerofattorney",
      },
      {
        label: "Free Legal Forms",
        href: "/freelegalforms",
      },
      {
        label: "Famous Wills",
        href: "/famouswills",
      },
    ],
  },
];

const SidebarMenu = ({ pathname }: { pathname: string }) => {
  useEffect(() => {
    console.log({ pathname });
  }, [pathname]);

  return (
    <>
      <div className="pl-4 py-4 w-full">
        {menus.map((menu, index) => (
          <div key={index} className="w-full">
            <h3 className="text-[18px] font-bold mb-3">{menu.title}</h3>
            <ul className="pl-3 mb-5 w-max">
              {menu.items.map((item, index) => (
                <li key={index} className="hover:bg-[#f6f6f6] py-2 px-2">
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

export default SidebarMenu;

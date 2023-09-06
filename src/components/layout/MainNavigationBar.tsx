"use client";

import { motion } from "framer-motion";
import { NavigationItemData } from "@/types/interface";
import Link from "next/link";
import { usePathname } from "next/navigation";

const navigationItem: NavigationItemData[] = [
  { path: "/", title: "All Meetup" },
  { path: "/new-meetup", title: "New Meetup" },
];
export default function MainNavigationBar() {
  const path = usePathname();

  return (
    <ul className="flex">
      {navigationItem.map((val) => (
        <li className="ml-4">
          <Link href={val.path} className="relative text-gray-200">
            {val.title}
            {path === val.path && (
              <motion.span
                layoutId="underline"
                className="absolute left-0 top-full block bg-white w-full h-[1px]"
              />
            )}
          </Link>
        </li>
      ))}
    </ul>
  );
}

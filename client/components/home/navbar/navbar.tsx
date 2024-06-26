"use client";
import { navItems } from "@/utils/navbarData";
import Link from "next/link";
import Image from "next/image";
import Logo from "../../../public/Icons/mainIcon.png";
import UserStatus from "./Status";
import { usePathname } from "next/navigation";
import { cn } from "@/utils/clsx";

export default function Navbar() {
  const path = usePathname();
  console.log(path);
  return (
    <div className="flex w-full h-full p-2">
      <div>
        <Image src={Logo} alt="Shrinkr" height={80} />
      </div>
      <div className="w-full items-center justify-between gap-8 flex">
        <div className="gap-10 flex m-auto">
          {navItems.map((item, index) => {
            return (
              <Link href={item.href} key={index}>
                <h1 className="text-xl">{item.name}</h1>
              </Link>
            );
          })}
        </div>
        <div>
          <UserStatus />
        </div>
      </div>
    </div>
  );
}

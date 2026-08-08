"use client";

import { Button } from "@/components/ui/button";
import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import { navigation } from "@/utils/navigation";
import { Menu } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import Sidebar from "./Sidebar";

const NavBar = () => {
  return (
    <nav className="sticky top-0 z-40 h-20 w-full border-b border-[#E5E7EB] bg-white/95 text-[#0F172A] backdrop-blur">
      <div className="mx-auto flex h-full w-full max-w-7xl items-center justify-between gap-4 px-4 sm:px-6 lg:px-8">
        <Link
          href="/"
          className="flex min-w-0 items-center gap-3 text-lg font-semibold lg:text-xl"
        >
          <Image
            src="/images/logo.png"
            alt="EduSecure logo"
            width={42}
            height={42}
            className="size-10 rounded-lg object-contain"
            priority
          />
          <span className="truncate">EduSecure</span>
        </Link>

        <ul className="hidden items-center gap-1 lg:flex">
          {navigation.map((item) => (
            <li key={item.id}>
              <Link
                href={item.href}
                className="rounded-lg px-3 py-2 text-sm font-medium capitalize text-[#64748B] transition hover:bg-blue-50 hover:text-[#2563EB]"
              >
                {item.name}
              </Link>
            </li>
          ))}
        </ul>

        <Button className="hidden cursor-pointer rounded-md bg-blue-500 px-5 py-2 font-medium text-white hover:bg-blue-600 lg:inline-flex">
          Get Started
        </Button>

        <Sheet>
          <SheetTrigger
            render={
              <Button
                variant="outline"
                size="icon-lg"
                className="bg-white lg:hidden"
                aria-label="Open navigation"
              />
            }
          >
            <Menu className="size-5" />
          </SheetTrigger>
          <SheetContent
            side="left"
            className="w-[320px] max-w-[88vw] border-0 bg-[#0F2340] p-0"
            showCloseButton={false}
          >
            <SheetHeader className="sr-only">
              <SheetTitle>Navigation</SheetTitle>
              <SheetDescription>EduSecure site navigation</SheetDescription>
            </SheetHeader>
            <Sidebar />
          </SheetContent>
        </Sheet>
      </div>
    </nav>
  );
};

export default NavBar;

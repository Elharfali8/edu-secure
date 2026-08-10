"use client";

import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import {
  Bell,
  CalendarCheck,
  ChevronDown,
  LayoutDashboard,
  Radio,
  ScrollText,
  Settings,
  ShieldCheck,
  UserCheck,
  UserCog,
  Users,
} from "lucide-react";

import { Avatar, AvatarFallback } from "@/components/ui/avatar";
import { cn } from "@/lib/utils";

type DashboardSidebarProps = {
  username: string;
  className?: string;
};

const sections = [
  {
    label: "MAIN",
    items: [{ label: "Dashboard", href: "dashboard", icon: LayoutDashboard }],
  },
  {
    label: "MANAGEMENT",
    items: [
      { label: "Students", href: "students", icon: Users },
      { label: "Parents", href: "parents", icon: UserCheck },
      { label: "Pickup Persons", href: "pickup-persons", icon: UserCog },
      { label: "NFC Cards", href: "nfc-cards", icon: Radio },
      { label: "Permissions", href: "permissions", icon: ShieldCheck },
    ],
  },
  {
    label: "ACTIVITY",
    items: [
      { label: "Pickup Logs", href: "pickup-logs", icon: ScrollText },
      { label: "Notifications", href: "notifications", icon: Bell },
    ],
  },
  {
    label: "SYSTEM",
    items: [
      { label: "Employees", href: "employees", icon: CalendarCheck },
      { label: "Settings", href: "settings", icon: Settings },
    ],
  },
];

export function DashboardSidebar({ username, className }: DashboardSidebarProps) {
  const pathname = usePathname();

  return (
    <aside
      className={cn(
        "flex h-full w-[250px] flex-col bg-[#0F2340] px-4 py-5 text-white",
        className
      )}
    >
      <div className="flex items-center gap-3 px-2">
        <Image
          src="/images/logo.png"
          alt="EduSecure logo"
          width={42}
          height={42}
          className="size-10 rounded-lg bg-white object-contain p-1"
          priority
        />
        <div className="min-w-0">
          <p className="truncate text-base font-semibold leading-5">EduSecure</p>
          <p className="truncate text-xs text-blue-100/75">School Pickup System</p>
        </div>
      </div>

      <nav className="mt-8 flex-1 space-y-7 overflow-y-auto pr-1 custom-scrollbar">
        {sections.map((section) => (
          <div key={section.label}>
            <p className="px-3 text-[11px] font-semibold tracking-[0.14em] text-blue-100/50">
              {section.label}
            </p>
            <div className="mt-2 space-y-1">
              {section.items.map((item) => {
                const href = `/${username}/${item.href}`;
                const active = pathname === href;
                const Icon = item.icon;

                return (
                  <Link
                    key={item.href}
                    href={href}
                    className={cn(
                      "flex h-10 items-center gap-3 rounded-lg px-3 text-sm font-medium text-blue-50/80 transition hover:bg-white/10 hover:text-white",
                      active && "bg-[#2563EB] text-white shadow-sm shadow-blue-950/30"
                    )}
                  >
                    <Icon className="size-4" />
                    <span className="truncate">{item.label}</span>
                  </Link>
                );
              })}
            </div>
          </div>
        ))}
      </nav>

      <button className="mt-5 flex w-full items-center gap-3 rounded-xl border border-white/10 bg-white/[0.06] p-3 text-left transition hover:bg-white/[0.1]">
        <Avatar className="size-9 border border-white/10">
          <AvatarFallback className="bg-[#2563EB] text-xs font-semibold text-white">
            MS
          </AvatarFallback>
        </Avatar>
        <span className="min-w-0 flex-1">
          <span className="block truncate text-sm font-semibold">Mohamed Samir</span>
          <span className="block truncate text-xs text-blue-100/60">Administrator</span>
        </span>
        <ChevronDown className="size-4 text-blue-100/60" />
      </button>
    </aside>
  );
}

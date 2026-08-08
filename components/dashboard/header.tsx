"use client";

import {
  Bell,
  ChevronDown,
  Maximize2,
  Menu,
  Search,
  Settings,
  User,
} from "lucide-react";

import { DashboardSidebar } from "@/components/dashboard/sidebar";
import { Avatar, AvatarFallback } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Input } from "@/components/ui/input";
import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";

type DashboardHeaderProps = {
  username: string;
};

export function DashboardHeader({ username }: DashboardHeaderProps) {
  return (
    <header className="sticky top-0 z-30 border-b border-[#E5E7EB] bg-white/95 backdrop-blur">
      <div className="mx-auto flex h-20 max-w-[1800px] items-center gap-3 px-4 sm:px-6 lg:px-8">
        <Sheet>
          <SheetTrigger
            render={
              <Button
                variant="outline"
                size="icon-lg"
                className="shrink-0 lg:hidden"
                aria-label="Open navigation"
              />
            }
          >
            <Menu className="size-5" />
          </SheetTrigger>
          <SheetContent
            side="left"
            className="w-[280px] max-w-[85vw] border-0 bg-[#0F2340] p-0"
            showCloseButton={false}
          >
            <SheetHeader className="sr-only">
              <SheetTitle>Navigation</SheetTitle>
              <SheetDescription>EduSecure dashboard navigation</SheetDescription>
            </SheetHeader>
            <DashboardSidebar username={username} className="w-full" />
          </SheetContent>
        </Sheet>

        <div className="min-w-0 flex-1">
          <h1 className="truncate text-xl font-semibold text-[#0F172A] sm:text-2xl">
            Dashboard
          </h1>
          <p className="truncate text-sm text-[#64748B]">
            Welcome back, Mohamed Samir
          </p>
        </div>

        <div className="hidden w-full max-w-md items-center gap-2 rounded-lg border border-[#E5E7EB] bg-[#F8FAFC] px-3 lg:flex">
          <Search className="size-4 text-[#64748B]" />
          <Input
            aria-label="Search"
            placeholder="Search students, parents, cards..."
            className="h-10 border-0 bg-transparent px-0 shadow-none focus-visible:ring-0"
          />
        </div>

        <Button
          variant="outline"
          size="icon-lg"
          className="relative shrink-0 bg-white"
          aria-label="Notifications"
        >
          <Bell className="size-4" />
          <span className="absolute right-2 top-2 size-2 rounded-full bg-[#DC2626] ring-2 ring-white" />
        </Button>
        <Button
          variant="outline"
          size="icon-lg"
          className="hidden shrink-0 bg-white sm:inline-flex"
          aria-label="Fullscreen"
        >
          <Maximize2 className="size-4" />
        </Button>

        <DropdownMenu>
          <DropdownMenuTrigger
            render={
              <Button
                variant="ghost"
                className="h-11 gap-2 px-2"
                aria-label="Open admin menu"
              />
            }
          >
            <Avatar className="size-9">
              <AvatarFallback className="bg-[#2563EB] text-xs font-semibold text-white">
                MS
              </AvatarFallback>
            </Avatar>
            <ChevronDown className="hidden size-4 text-[#64748B] sm:block" />
          </DropdownMenuTrigger>
          <DropdownMenuContent align="end" className="w-44">
            <DropdownMenuItem>
              <User className="size-4" />
              Profile
            </DropdownMenuItem>
            <DropdownMenuItem>
              <Settings className="size-4" />
              Settings
            </DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>
      </div>
    </header>
  );
}


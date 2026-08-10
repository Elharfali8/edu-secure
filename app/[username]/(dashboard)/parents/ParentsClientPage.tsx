"use client";

import React from "react";
import {
  ClipboardClock,
  Filter,
  Search,
  ShieldCheck,
  Users,
} from "lucide-react";

import { Input } from "@/components/ui/input";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Button } from "@/components/ui/button";

const ParentsClientPage = () => {
  const summary = [
    {
      id: "fb21",
      title: "total parents",
      desc: "all registered parents",
      style: "bg-blue-50 text-blue-600",
      number: 83,
      icon: Users,
    },
    {
      id: "fb22",
      title: "active parents",
      desc: "with active children",
      style: "bg-green-50 text-green-600",
      number: 80,
      icon: ShieldCheck,
    },
    {
      id: "fb23",
      title: "pending approval",
      desc: "awaiting verification",
      style: "bg-orange-50 text-orange-600",
      number: 3,
      icon: ClipboardClock,
    },
    ];
    
    const parents = [
        {
            id: 'hs',
            first_name: 'Fatima',
            last_name: 'Zahra',
            phone: '0646526359',
            children: 2
        },
        {
            id: 'hs2',
            first_name: 'Saad',
            last_name: 'Elnassraoui',
            phone: '0656235995',
            children: 1
        },
        {
            id: 'hs7',
            first_name: 'Imane Lakout',
            last_name: '',
            phone: '0645129685',
            children: 2
        },
        {
            id: 'hs29',
            first_name: 'Saida',
            last_name: 'Elbin',
            phone: '0652195652',
            children: 1
        },
    ]

  return (
    <main className="w-full">
      <h1 className="text-2xl font-semibold tracking-tight text-[#0F172A]">
        Parents
      </h1>

      {/* SUMMARY */}
      <div className="my-5 grid gap-4 md:grid-cols-2 lg:my-8 lg:grid-cols-3">
        {summary.map((item) => {
          const Icon = item.icon;

          return (
            <div
              key={item.id}
              className="flex items-center gap-4 rounded-xl border border-[#E5E7EB] bg-white p-5 shadow-sm lg:p-6"
            >
              <div
                className={`flex size-14 shrink-0 items-center justify-center rounded-lg ${item.style}`}
              >
                <Icon className="size-7" />
              </div>

              <div className="min-w-0">
                <p className="text-2xl font-bold leading-none text-[#0F172A]">
                  {item.number}
                </p>

                <h4 className="mt-1 text-sm font-semibold capitalize text-[#475569]">
                  {item.title}
                </h4>

                <p className="mt-1 text-xs text-[#64748B]">
                  {item.desc}
                </p>
              </div>
            </div>
          );
        })}
      </div>

      {/* SEARCH & FILTERS */}
          <div className="rounded-xl border border-[#E5E7EB] bg-white p-3 shadow-sm">
              {/*  */}
  <div className="flex min-w-0 flex-col gap-3 lg:flex-row lg:items-center">

    {/* SEARCH */}
    <div className="relative h-10 w-full shrink-0 lg:w-[380px]">
      <Input
        placeholder="Search parents..."
        className="!h-10 w-full pr-10 shadow-none"
      />

      <div className="absolute inset-y-0 right-0 flex h-10 w-10 items-center justify-center border-l">
        <Search className="size-5" />
      </div>
    </div>

    {/* FILTERS */}
    <div className="flex min-w-0 flex-1 items-center gap-3">

      {/* STATUS */}
      <Select>
        <SelectTrigger
          className="!h-10 !min-h-10 !max-h-10 min-w-0 flex-1"
        >
          <SelectValue placeholder="All Status" />
        </SelectTrigger>

        <SelectContent>
          <SelectItem value="all">All Status</SelectItem>
          <SelectItem value="active">Active</SelectItem>
          <SelectItem value="pending">Pending</SelectItem>
          <SelectItem value="inactive">Inactive</SelectItem>
        </SelectContent>
      </Select>

      {/* CHILDREN */}
      <Select>
        <SelectTrigger
          className="!h-10 !min-h-10 !max-h-10 min-w-0 flex-1"
        >
          <SelectValue placeholder="All Children" />
        </SelectTrigger>

        <SelectContent>
          <SelectItem value="all">All Children</SelectItem>
          <SelectItem value="one">1 Child</SelectItem>
          <SelectItem value="multiple">2+ Children</SelectItem>
        </SelectContent>
      </Select>

      {/* CLASSES */}
      <Select>
        <SelectTrigger
          className="!h-10 !min-h-10 !max-h-10 min-w-0 flex-1"
        >
          <SelectValue placeholder="All Classes" />
        </SelectTrigger>

        <SelectContent>
          <SelectItem value="all">All Classes</SelectItem>
          <SelectItem value="grade-1">Grade 1</SelectItem>
          <SelectItem value="grade-2">Grade 2</SelectItem>
          <SelectItem value="grade-3">Grade 3</SelectItem>
        </SelectContent>
      </Select>

      {/* FILTER BUTTON */}
      <Button
        variant="outline"
        className="!h-10 !min-h-10 !max-h-10 shrink-0 gap-2 px-6 shadow-none"
      >
        <Filter className="size-4" />
        Filters
      </Button>

    </div>
              </div>
              {/* PARENTS TABLE */}
<div className="mt-3 overflow-hidden rounded-xl border border-[#E5E7EB] bg-white shadow-sm">
  {/* TABLE HEADER */}
  <div className="hidden grid-cols-[2fr_1.5fr_1fr] border-b border-[#E5E7EB] bg-[#F8FAFC] px-6 py-4 md:grid">
    <div className="text-xs font-semibold uppercase tracking-wide text-[#334155]">
      Parent
    </div>

    <div className="text-xs font-semibold uppercase tracking-wide text-[#334155]">
      Phone
    </div>

    <div className="text-xs font-semibold uppercase tracking-wide text-[#334155]">
      Children
    </div>
  </div>

  {/* TABLE ROWS */}
  <div>
    {parents.map((p) => {
      const initials = `${p.first_name?.[0] ?? ""}${
        p.last_name?.[0] ?? ""
      }`.toUpperCase();

      return (
        <div
          key={p.id}
          className="
            grid
            grid-cols-1
            gap-4
            border-b border-[#E5E7EB]
            px-5 py-4
            last:border-b-0
            md:grid-cols-[2fr_1.5fr_1fr]
            md:items-center
            md:px-6
            md:py-4
          "
        >
          {/* PARENT */}
          <div className="flex items-center gap-3">
            <div className="flex size-11 shrink-0 items-center justify-center rounded-full bg-[#EEF2FF] text-sm font-semibold text-[#6366F1]">
              {initials}
            </div>

            <div className="min-w-0">
              <h3 className="truncate text-sm font-semibold text-[#0F172A] md:text-base">
                {p.first_name} {p.last_name}
              </h3>

              <p className="text-xs text-[#64748B]">
                {p.children} {p.children === 1 ? "child" : "children"}
              </p>
            </div>
          </div>

          {/* PHONE */}
          <div>
            <p className="text-sm font-medium text-[#334155]">
              {p.phone}
            </p>
          </div>

          {/* CHILDREN */}
          <div>
            <span className="text-sm font-medium text-[#334155]">
              {p.children}
            </span>
          </div>
        </div>
      );
    })}
  </div>
</div>
</div>
    </main>
  );
};

export default ParentsClientPage;
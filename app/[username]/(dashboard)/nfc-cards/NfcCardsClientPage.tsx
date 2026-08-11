"use client";

import React from "react";
import {
  Ban,
  CreditCard,
  Ellipsis,
  Filter,
  History,
  Radio,
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

const NfcCardsClientPage = () => {
  const summary = [
    {
      id: "nc1",
      title: "total cards",
      desc: "all registered NFC cards",
      number: 286,
      icon: CreditCard,
      style: "bg-blue-50 text-blue-600",
    },
    {
      id: "nc2",
      title: "active cards",
      desc: "currently authorized",
      number: 278,
      icon: ShieldCheck,
      style: "bg-green-50 text-green-600",
    },
    {
      id: "nc3",
      title: "unassigned cards",
      desc: "ready to be assigned",
      number: 5,
      icon: Radio,
      style: "bg-purple-50 text-purple-600",
    },
    {
      id: "nc4",
      title: "blocked cards",
      desc: "currently disabled",
      number: 3,
      icon: Ban,
      style: "bg-red-50 text-red-600",
    },
  ];

  const cards = [
    {
      id: "card-01",
      uid: "04A3 9F82 7B1C 90",
      cardNumber: "NFC-0001",
      holder: "Ahmed Ben Ali",
      relationship: "Uncle",
      phone: "0623 45 67 89",
      students: 2,
      studentNames: ["Youssef", "Sara"],
      lastUsed: "Today, 16:42",
      status: "Active",
      color: "blue",
    },
    {
      id: "card-02",
      uid: "04A3 9F82 7B1C 91",
      cardNumber: "NFC-0002",
      holder: "Fatima Zahra",
      relationship: "Mother",
      phone: "0612 34 56 78",
      students: 2,
      studentNames: ["Youssef", "Sara"],
      lastUsed: "Today, 16:35",
      status: "Active",
      color: "purple",
    },
    {
      id: "card-03",
      uid: "04A3 9F82 7B1C 92",
      cardNumber: "NFC-0003",
      holder: "Mohammed Amrani",
      relationship: "Father",
      phone: "0634 56 78 90",
      students: 1,
      studentNames: ["Adam"],
      lastUsed: "Today, 16:28",
      status: "Active",
      color: "cyan",
    },
    {
      id: "card-04",
      uid: "04A3 9F82 7B1C 94",
      cardNumber: "NFC-0004",
      holder: "Yassine Bennani",
      relationship: "Driver",
      phone: "0656 78 90 12",
      students: 2,
      studentNames: ["Rayan", "Adam"],
      lastUsed: "Never",
      status: "Pending",
      color: "orange",
    },
    {
      id: "card-05",
      uid: "04A3 9F82 7B1C 95",
      cardNumber: "NFC-0005",
      holder: "Khalid Ouahidi",
      relationship: "Father",
      phone: "0667 89 01 23",
      students: 1,
      studentNames: ["Lina"],
      lastUsed: "Yesterday, 17:12",
      status: "Blocked",
      color: "gray",
    },
  ];

  return (
    <main className="w-full">

      {/* ================= HEADER ================= */}
      <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
        <div>
          <h1 className="text-2xl font-semibold tracking-tight text-[#0F172A]">
            NFC Cards
          </h1>

          <p className="mt-1 text-sm text-[#64748B]">
            Manage and monitor all NFC pickup cards used in the system.
          </p>
        </div>

        <Button className="h-10 gap-2 bg-[#2563EB] px-4 hover:bg-[#1D4ED8]">
          <CreditCard className="size-4" />
          Add NFC Card
        </Button>
      </div>

      {/* ================= SUMMARY ================= */}
      <div className="my-5 grid gap-4 md:grid-cols-2 xl:my-8 xl:grid-cols-4">
        {summary.map((item) => {
          const Icon = item.icon;

          return (
            <div
              key={item.id}
              className="flex items-center gap-4 rounded-xl border border-[#E5E7EB] bg-white p-5 shadow-sm"
            >
              <div
                className={`flex size-14 shrink-0 items-center justify-center rounded-lg ${item.style}`}
              >
                <Icon className="size-7" />
              </div>

              <div className="min-w-0">
                <p className="text-2xl font-bold text-[#0F172A]">
                  {item.number}
                </p>

                <h4 className="text-sm font-semibold capitalize text-[#475569]">
                  {item.title}
                </h4>

                <p className="mt-1 truncate text-xs text-[#64748B]">
                  {item.desc}
                </p>
              </div>
            </div>
          );
        })}
      </div>

      {/* ================= SEARCH & FILTERS ================= */}
      <div className="rounded-xl border border-[#E5E7EB] bg-white p-3 shadow-sm">
        <div className="flex min-w-0 flex-col gap-3 lg:flex-row lg:items-center">

          {/* SEARCH */}
          <div className="relative h-10 w-full shrink-0 lg:w-[380px]">
            <Input
              placeholder="Search cards, holders, UID..."
              className="!h-10 w-full pr-10 shadow-none"
            />

            <div className="absolute inset-y-0 right-0 flex h-10 w-10 items-center justify-center border-l">
              <Search className="size-5 text-[#64748B]" />
            </div>
          </div>

          {/* FILTERS */}
          <div className="flex min-w-0 flex-1 items-center gap-3">

            <Select>
              <SelectTrigger className="!h-10 !min-h-10 !max-h-10 min-w-0 flex-1">
                <SelectValue placeholder="All Status" />
              </SelectTrigger>

              <SelectContent>
                <SelectItem value="all">All Status</SelectItem>
                <SelectItem value="active">Active</SelectItem>
                <SelectItem value="pending">Pending</SelectItem>
                <SelectItem value="blocked">Blocked</SelectItem>
                <SelectItem value="unassigned">Unassigned</SelectItem>
              </SelectContent>
            </Select>

            <Select>
              <SelectTrigger className="!h-10 !min-h-10 !max-h-10 min-w-0 flex-1">
                <SelectValue placeholder="All Relationships" />
              </SelectTrigger>

              <SelectContent>
                <SelectItem value="all">All Relationships</SelectItem>
                <SelectItem value="parent">Parent</SelectItem>
                <SelectItem value="uncle">Uncle</SelectItem>
                <SelectItem value="aunt">Aunt</SelectItem>
                <SelectItem value="grandparent">Grandparent</SelectItem>
                <SelectItem value="driver">Driver</SelectItem>
              </SelectContent>
            </Select>

            <Select>
              <SelectTrigger className="!h-10 !min-h-10 !max-h-10 min-w-0 flex-1">
                <SelectValue placeholder="Card Usage" />
              </SelectTrigger>

              <SelectContent>
                <SelectItem value="all">Card Usage</SelectItem>
                <SelectItem value="today">Used Today</SelectItem>
                <SelectItem value="week">Used This Week</SelectItem>
                <SelectItem value="never">Never Used</SelectItem>
              </SelectContent>
            </Select>

            <Button
              variant="outline"
              className="!h-10 !min-h-10 !max-h-10 shrink-0 gap-2 px-6 shadow-none"
            >
              <Filter className="size-4" />
              Filters
            </Button>

          </div>
        </div>
      </div>

      {/* ================= NFC CARDS TABLE ================= */}
      <div className="mt-4 overflow-hidden rounded-xl border border-[#E5E7EB] bg-white shadow-sm">

        {/* DESKTOP HEADER */}
        <div className="hidden grid-cols-[1.6fr_2fr_1.5fr_1.2fr_1.2fr_0.5fr] border-b border-[#E5E7EB] bg-[#F8FAFC] px-6 py-4 md:grid">

          <div className="text-xs font-semibold uppercase tracking-wide text-[#334155]">
            Card
          </div>

          <div className="text-xs font-semibold uppercase tracking-wide text-[#334155]">
            Holder
          </div>

          <div className="text-xs font-semibold uppercase tracking-wide text-[#334155]">
            Students
          </div>

          <div className="text-xs font-semibold uppercase tracking-wide text-[#334155]">
            Last Used
          </div>

          <div className="text-xs font-semibold uppercase tracking-wide text-[#334155]">
            Status
          </div>

          <div />
        </div>

        {/* ROWS */}
        <div>
          {cards.map((card) => (
            <div
              key={card.id}
              className="
                border-b border-[#E5E7EB]
                last:border-b-0
                px-4 py-4
                md:grid md:grid-cols-[1.6fr_2fr_1.5fr_1.2fr_1.2fr_0.5fr]
                md:items-center
                md:px-6 md:py-4
              "
            >

              {/* ================= CARD ================= */}
              <div className="flex items-center gap-3">

                {/* MINI NFC CARD */}
                <div
                  className={`
                    relative flex h-14 w-20 shrink-0 flex-col
                    justify-between overflow-hidden rounded-lg
                    p-2 text-white shadow-sm
                    ${
                      card.color === "blue"
                        ? "bg-gradient-to-br from-blue-600 to-blue-800"
                        : card.color === "purple"
                        ? "bg-gradient-to-br from-purple-500 to-purple-700"
                        : card.color === "cyan"
                        ? "bg-gradient-to-br from-cyan-500 to-cyan-700"
                        : card.color === "orange"
                        ? "bg-gradient-to-br from-orange-400 to-orange-600"
                        : "bg-gradient-to-br from-slate-500 to-slate-700"
                    }
                  `}
                >
                  <div className="flex items-center justify-between">
                    <span className="text-[7px] font-semibold">
                      EduSecure
                    </span>

                    <Radio className="size-3" />
                  </div>

                  <div className="flex items-end justify-between">
                    <CreditCard className="size-3" />

                    <div className="flex gap-0.5">
                      <span className="size-1 rounded-full bg-white/60" />
                      <span className="size-1.5 rounded-full bg-white/70" />
                      <span className="size-2 rounded-full bg-white/90" />
                    </div>
                  </div>
                </div>

                <div className="min-w-0">
                  <p className="truncate text-xs font-semibold text-[#0F172A]">
                    {card.uid}
                  </p>

                  <p className="mt-1 text-[10px] text-[#64748B]">
                    Card ID · #{card.cardNumber}
                  </p>
                </div>
              </div>

              {/* ================= HOLDER ================= */}
              <div className="mt-4 md:mt-0">
                <div className="flex items-center gap-3">
                  <div className="flex size-10 shrink-0 items-center justify-center rounded-full bg-[#EEF2FF] text-xs font-semibold text-[#6366F1]">
                    {card.holder
                      .split(" ")
                      .map((word) => word[0])
                      .join("")
                      .slice(0, 2)}
                  </div>

                  <div>
                    <p className="text-sm font-semibold text-[#0F172A]">
                      {card.holder}
                    </p>

                    <p className="text-xs text-[#64748B]">
                      {card.relationship}
                    </p>

                    <p className="mt-0.5 text-xs text-[#64748B]">
                      {card.phone}
                    </p>
                  </div>
                </div>
              </div>

              {/* ================= STUDENTS ================= */}
              <div className="mt-4 md:mt-0">
                <div className="flex items-center gap-2">
                  <Users className="size-4 text-[#64748B]" />

                  <div>
                    <p className="text-sm font-semibold text-[#334155]">
                      {card.students}{" "}
                      {card.students === 1 ? "student" : "students"}
                    </p>

                    <p className="max-w-[130px] truncate text-xs text-[#64748B]">
                      {card.studentNames.join(", ")}
                    </p>
                  </div>
                </div>
              </div>

              {/* ================= LAST USED ================= */}
              <div className="mt-4 md:mt-0">
                <div className="flex items-center gap-2">
                  <History className="size-4 text-[#64748B]" />

                  <span className="text-sm text-[#475569]">
                    {card.lastUsed}
                  </span>
                </div>
              </div>

              {/* ================= STATUS ================= */}
              <div className="mt-4 md:mt-0">
                <span
                  className={`
                    inline-flex items-center gap-1.5 rounded-full
                    px-3 py-1 text-xs font-semibold
                    ${
                      card.status === "Active"
                        ? "bg-green-50 text-green-600"
                        : card.status === "Pending"
                        ? "bg-orange-50 text-orange-600"
                        : "bg-red-50 text-red-600"
                    }
                  `}
                >
                  <span
                    className={`size-1.5 rounded-full ${
                      card.status === "Active"
                        ? "bg-green-500"
                        : card.status === "Pending"
                        ? "bg-orange-500"
                        : "bg-red-500"
                    }`}
                  />

                  {card.status}
                </span>
              </div>

              {/* ================= ACTIONS ================= */}
              <div className="mt-4 flex justify-end md:mt-0">
                <Button
                  variant="ghost"
                  size="icon"
                  className="size-8 text-[#64748B]"
                >
                  <Ellipsis className="size-4" />
                </Button>
              </div>

            </div>
          ))}
        </div>

        {/* ================= TABLE FOOTER ================= */}
        <div className="flex flex-col gap-3 border-t border-[#E5E7EB] px-5 py-4 sm:flex-row sm:items-center sm:justify-between">
          <p className="text-xs text-[#64748B]">
            Showing <span className="font-medium text-[#334155]">1</span> to{" "}
            <span className="font-medium text-[#334155]">
              {cards.length}
            </span>{" "}
            of{" "}
            <span className="font-medium text-[#334155]">286</span> cards
          </p>

          <div className="flex items-center gap-1">
            <Button variant="outline" size="sm">
              Previous
            </Button>

            <Button
              size="sm"
              className="bg-[#2563EB] hover:bg-[#1D4ED8]"
            >
              1
            </Button>

            <Button variant="outline" size="sm">
              2
            </Button>

            <Button variant="outline" size="sm">
              3
            </Button>

            <Button variant="outline" size="sm">
              Next
            </Button>
          </div>
        </div>
      </div>
    </main>
  );
};

export default NfcCardsClientPage;
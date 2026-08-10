"use client";

import React from "react";
import {
  BadgeCheck,
  Baby,
  CircleUserRound,
  CreditCard,
  Filter,
  Phone,
  Radio,
  Search,
  ShieldCheck,
  UserCheck,
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

const PickupPersonsClientPage = () => {
  const summary = [
    {
      id: "pp1",
      title: "total pickup persons",
      desc: "all registered persons",
      style: "bg-blue-50 text-blue-600",
      number: 142,
      icon: Users,
    },
    {
      id: "pp2",
      title: "authorized persons",
      desc: "currently authorized",
      style: "bg-green-50 text-green-600",
      number: 136,
      icon: ShieldCheck,
    },
    {
      id: "pp3",
      title: "active NFC cards",
      desc: "cards currently assigned",
      style: "bg-purple-50 text-purple-600",
      number: 131,
      icon: Radio,
    },
  ];

  const pickupPersons = [
    {
      id: "pp101",
      first_name: "Ahmed",
      last_name: "Ben Ali",
      relationship: "Uncle",
      phone: "0623456789",
      students: 2,
      card_id: "04A3 9F82 7B1C 90",
      status: "Authorized",
    },
    {
      id: "pp102",
      first_name: "Fatima",
      last_name: "Zahra",
      relationship: "Mother",
      phone: "0612345678",
      students: 2,
      card_id: "04A3 9F82 7B1C 91",
      status: "Authorized",
    },
    {
      id: "pp103",
      first_name: "Mohammed",
      last_name: "Amrani",
      relationship: "Father",
      phone: "0634567890",
      students: 1,
      card_id: "04A3 9F82 7B1C 92",
      status: "Authorized",
    },
    {
      id: "pp104",
      first_name: "Samira",
      last_name: "El Ouardi",
      relationship: "Grandmother",
      phone: "0645678901",
      students: 2,
      card_id: "04A3 9F82 7B1C 93",
      status: "Authorized",
    },
    {
      id: "pp105",
      first_name: "Yassine",
      last_name: "Bennani",
      relationship: "Driver",
      phone: "0656789012",
      students: 4,
      card_id: "04A3 9F82 7B1C 94",
      status: "Pending",
    },
    {
      id: "pp106",
      first_name: "Khalid",
      last_name: "Ouahidi",
      relationship: "Father",
      phone: "0667890123",
      students: 1,
      card_id: "—",
      status: "Blocked",
    },
  ];

  return (
    <main className="w-full">
      {/* PAGE TITLE */}
      <h1 className="text-2xl font-semibold tracking-tight text-[#0F172A]">
        Pickup Persons
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
        <div className="flex min-w-0 flex-col gap-3 lg:flex-row lg:items-center">
          {/* SEARCH */}
          <div className="relative h-10 w-full shrink-0 lg:w-[380px]">
            <Input
              placeholder="Search pickup persons..."
              className="!h-10 w-full pr-10 shadow-none"
            />

            <div className="absolute inset-y-0 right-0 flex h-10 w-10 items-center justify-center border-l">
              <Search className="size-5 text-[#64748B]" />
            </div>
          </div>

          {/* FILTERS */}
          <div className="flex min-w-0 flex-1 items-center gap-3">
            {/* STATUS */}
            <Select>
              <SelectTrigger className="!h-10 !min-h-10 !max-h-10 min-w-0 flex-1">
                <SelectValue placeholder="All Status" />
              </SelectTrigger>

              <SelectContent>
                <SelectItem value="all">All Status</SelectItem>
                <SelectItem value="authorized">Authorized</SelectItem>
                <SelectItem value="pending">Pending</SelectItem>
                <SelectItem value="blocked">Blocked</SelectItem>
              </SelectContent>
            </Select>

            {/* RELATIONSHIP */}
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

            {/* NFC CARD */}
            <Select>
              <SelectTrigger className="!h-10 !min-h-10 !max-h-10 min-w-0 flex-1">
                <SelectValue placeholder="NFC Card" />
              </SelectTrigger>

              <SelectContent>
                <SelectItem value="all">All Cards</SelectItem>
                <SelectItem value="assigned">Card Assigned</SelectItem>
                <SelectItem value="unassigned">No Card</SelectItem>
                <SelectItem value="blocked">Blocked Card</SelectItem>
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
      </div>

      {/* PICKUP PERSONS TABLE */}
      <div className="mt-3 overflow-hidden rounded-xl border border-[#E5E7EB] bg-white shadow-sm">
        {/* DESKTOP HEADER */}
        <div className="hidden grid-cols-[2fr_1.2fr_1.5fr_1fr_1.2fr_1fr] border-b border-[#E5E7EB] bg-[#F8FAFC] px-6 py-4 md:grid">
          <div className="text-xs font-semibold uppercase tracking-wide text-[#334155]">
            Pickup Person
          </div>

          <div className="text-xs font-semibold uppercase tracking-wide text-[#334155]">
            Relationship
          </div>

          <div className="text-xs font-semibold uppercase tracking-wide text-[#334155]">
            Phone
          </div>

          <div className="text-xs font-semibold uppercase tracking-wide text-[#334155]">
            Students
          </div>

          <div className="text-xs font-semibold uppercase tracking-wide text-[#334155]">
            NFC Card
          </div>

          <div className="text-xs font-semibold uppercase tracking-wide text-[#334155]">
            Status
          </div>
        </div>

        {/* ROWS */}
        <div>
          {pickupPersons.map((person) => {
            const initials = `${person.first_name?.[0] ?? ""}${
              person.last_name?.[0] ?? ""
            }`.toUpperCase();

            const isAuthorized = person.status === "Authorized";
            const isPending = person.status === "Pending";

            return (
              <div
                key={person.id}
                className="
                  border-b border-[#E5E7EB]
                  last:border-b-0
                  px-4 py-4
                  md:grid md:grid-cols-[2fr_1.2fr_1.5fr_1fr_1.2fr_1fr]
                  md:items-center
                  md:px-6 md:py-4
                "
              >
                {/* PICKUP PERSON */}
                <div className="flex items-center gap-3">
                  <div className="flex size-11 shrink-0 items-center justify-center rounded-full bg-[#EEF2FF] text-sm font-semibold text-[#6366F1]">
                    {initials}
                  </div>

                  <div className="min-w-0">
                    <h3 className="truncate text-sm font-semibold text-[#0F172A] md:text-base">
                      {person.first_name} {person.last_name}
                    </h3>

                    <p className="mt-0.5 text-xs text-[#64748B]">
                      Pickup Person ID: {person.id}
                    </p>
                  </div>
                </div>

                {/* MOBILE INFORMATION */}
                <div className="mt-4 grid grid-cols-2 gap-3 md:hidden">
                  {/* RELATIONSHIP */}
                  <div className="flex items-center gap-2 rounded-lg bg-[#F8FAFC] px-3 py-2.5">
                    <div className="flex size-8 shrink-0 items-center justify-center rounded-md bg-blue-50">
                      <CircleUserRound className="size-4 text-blue-600" />
                    </div>

                    <div className="min-w-0">
                      <p className="text-[10px] font-medium uppercase tracking-wide text-[#94A3B8]">
                        Relationship
                      </p>

                      <p className="truncate text-xs font-semibold text-[#334155]">
                        {person.relationship}
                      </p>
                    </div>
                  </div>

                  {/* PHONE */}
                  <div className="flex items-center gap-2 rounded-lg bg-[#F8FAFC] px-3 py-2.5">
                    <div className="flex size-8 shrink-0 items-center justify-center rounded-md bg-blue-50">
                      <Phone className="size-4 text-blue-600" />
                    </div>

                    <div className="min-w-0">
                      <p className="text-[10px] font-medium uppercase tracking-wide text-[#94A3B8]">
                        Phone
                      </p>

                      <p className="truncate text-xs font-semibold text-[#334155]">
                        {person.phone}
                      </p>
                    </div>
                  </div>

                  {/* STUDENTS */}
                  <div className="flex items-center gap-2 rounded-lg bg-[#F8FAFC] px-3 py-2.5">
                    <div className="flex size-8 shrink-0 items-center justify-center rounded-md bg-green-50">
                      <Baby className="size-4 text-green-600" />
                    </div>

                    <div>
                      <p className="text-[10px] font-medium uppercase tracking-wide text-[#94A3B8]">
                        Students
                      </p>

                      <p className="text-xs font-semibold text-[#334155]">
                        {person.students}
                      </p>
                    </div>
                  </div>

                  {/* NFC CARD */}
                  <div className="flex items-center gap-2 rounded-lg bg-[#F8FAFC] px-3 py-2.5">
                    <div className="flex size-8 shrink-0 items-center justify-center rounded-md bg-purple-50">
                      <CreditCard className="size-4 text-purple-600" />
                    </div>

                    <div className="min-w-0">
                      <p className="text-[10px] font-medium uppercase tracking-wide text-[#94A3B8]">
                        NFC Card
                      </p>

                      <p className="truncate text-xs font-semibold text-[#334155]">
                        {person.card_id === "—" ? "Not assigned" : "Assigned"}
                      </p>
                    </div>
                  </div>

                  {/* STATUS */}
                  <div className="col-span-2 flex items-center gap-2 rounded-lg bg-[#F8FAFC] px-3 py-2.5">
                    <div
                      className={`flex size-8 shrink-0 items-center justify-center rounded-md ${
                        isAuthorized
                          ? "bg-green-50"
                          : isPending
                            ? "bg-orange-50"
                            : "bg-red-50"
                      }`}
                    >
                      <BadgeCheck
                        className={`size-4 ${
                          isAuthorized
                            ? "text-green-600"
                            : isPending
                              ? "text-orange-600"
                              : "text-red-600"
                        }`}
                      />
                    </div>

                    <div>
                      <p className="text-[10px] font-medium uppercase tracking-wide text-[#94A3B8]">
                        Status
                      </p>

                      <p
                        className={`text-xs font-semibold ${
                          isAuthorized
                            ? "text-green-600"
                            : isPending
                              ? "text-orange-600"
                              : "text-red-600"
                        }`}
                      >
                        {person.status}
                      </p>
                    </div>
                  </div>
                </div>

                {/* DESKTOP RELATIONSHIP */}
                <div className="hidden md:block">
                  <p className="text-sm font-medium text-[#334155]">
                    {person.relationship}
                  </p>
                </div>

                {/* DESKTOP PHONE */}
                <div className="hidden md:block">
                  <p className="text-sm font-medium text-[#334155]">
                    {person.phone}
                  </p>
                </div>

                {/* DESKTOP STUDENTS */}
                <div className="hidden items-center gap-2 md:flex">
                  <Users className="size-4 text-[#64748B]" />

                  <span className="text-sm font-medium text-[#334155]">
                    {person.students}
                  </span>
                </div>

                {/* DESKTOP NFC CARD */}
                <div className="hidden md:block">
                  {person.card_id === "—" ? (
                    <span className="text-sm text-[#94A3B8]">
                      Not assigned
                    </span>
                  ) : (
                    <div className="flex items-center gap-2">
                      <Radio className="size-4 text-[#6366F1]" />

                      <span className="text-xs font-medium text-[#334155]">
                        {person.card_id}
                      </span>
                    </div>
                  )}
                </div>

                {/* DESKTOP STATUS */}
                <div className="hidden md:block">
                  <span
                    className={`inline-flex items-center rounded-full px-3 py-1 text-xs font-semibold ${
                      isAuthorized
                        ? "bg-green-50 text-green-600"
                        : isPending
                          ? "bg-orange-50 text-orange-600"
                          : "bg-red-50 text-red-600"
                    }`}
                  >
                    {person.status}
                  </span>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </main>
  );
};

export default PickupPersonsClientPage;
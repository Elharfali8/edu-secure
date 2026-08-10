"use client";

import React from "react";
import {
  Baby,
  BookOpen,
  CheckCircle2,
  ClipboardClock,
  Filter,
  GraduationCap,
  Search,
  UserRound,
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

const StudentsClientPage = () => {
  const summary = [
    {
      id: "st1",
      title: "total students",
      desc: "all registered students",
      style: "bg-blue-50 text-blue-600",
      number: 326,
      icon: Users,
    },
    {
      id: "st2",
      title: "active students",
      desc: "currently enrolled",
      style: "bg-green-50 text-green-600",
      number: 318,
      icon: CheckCircle2,
    },
    {
      id: "st3",
      title: "pending enrollment",
      desc: "awaiting verification",
      style: "bg-orange-50 text-orange-600",
      number: 8,
      icon: ClipboardClock,
    },
  ];

  const students = [
    {
      id: "st101",
      first_name: "Youssef",
      last_name: "Ben Ali",
      parent: "Fatima Zahra",
      class_name: "Grade 4B",
      status: "Active",
    },
    {
      id: "st102",
      first_name: "Sara",
      last_name: "Ben Ali",
      parent: "Fatima Zahra",
      class_name: "Grade 2A",
      status: "Active",
    },
    {
      id: "st103",
      first_name: "Adam",
      last_name: "El Amrani",
      parent: "Mohammed Amrani",
      class_name: "Grade 5A",
      status: "Active",
    },
    {
      id: "st104",
      first_name: "Lina",
      last_name: "Ouahidi",
      parent: "Saida Elbin",
      class_name: "Grade 3B",
      status: "Active",
    },
    {
      id: "st105",
      first_name: "Rayan",
      last_name: "Benniss",
      parent: "Saad Elnassraoui",
      class_name: "Grade 1A",
      status: "Pending",
    },
  ];

  return (
    <main className="w-full">
      {/* PAGE TITLE */}
      <h1 className="text-2xl font-semibold tracking-tight text-[#0F172A]">
        Students
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
              placeholder="Search students..."
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
                <SelectItem value="active">Active</SelectItem>
                <SelectItem value="pending">Pending</SelectItem>
                <SelectItem value="inactive">Inactive</SelectItem>
              </SelectContent>
            </Select>

            {/* CLASS */}
            <Select>
              <SelectTrigger className="!h-10 !min-h-10 !max-h-10 min-w-0 flex-1">
                <SelectValue placeholder="All Classes" />
              </SelectTrigger>

              <SelectContent>
                <SelectItem value="all">All Classes</SelectItem>
                <SelectItem value="grade-1">Grade 1</SelectItem>
                <SelectItem value="grade-2">Grade 2</SelectItem>
                <SelectItem value="grade-3">Grade 3</SelectItem>
                <SelectItem value="grade-4">Grade 4</SelectItem>
                <SelectItem value="grade-5">Grade 5</SelectItem>
              </SelectContent>
            </Select>

            {/* PARENT */}
            <Select>
              <SelectTrigger className="!h-10 !min-h-10 !max-h-10 min-w-0 flex-1">
                <SelectValue placeholder="All Parents" />
              </SelectTrigger>

              <SelectContent>
                <SelectItem value="all">All Parents</SelectItem>
                <SelectItem value="fatima">Fatima Zahra</SelectItem>
                <SelectItem value="saad">Saad Elnassraoui</SelectItem>
                <SelectItem value="mohammed">
                  Mohammed Amrani
                </SelectItem>
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

      {/* STUDENTS TABLE */}
      <div className="mt-3 overflow-hidden rounded-xl border border-[#E5E7EB] bg-white shadow-sm">
        {/* DESKTOP HEADER */}
        <div className="hidden grid-cols-[2fr_1.5fr_1.2fr_1fr] border-b border-[#E5E7EB] bg-[#F8FAFC] px-6 py-4 md:grid">
          <div className="text-xs font-semibold uppercase tracking-wide text-[#334155]">
            Student
          </div>

          <div className="text-xs font-semibold uppercase tracking-wide text-[#334155]">
            Parent
          </div>

          <div className="text-xs font-semibold uppercase tracking-wide text-[#334155]">
            Class
          </div>

          <div className="text-xs font-semibold uppercase tracking-wide text-[#334155]">
            Status
          </div>
        </div>

        {/* ROWS */}
        <div>
          {students.map((student) => {
            const initials = `${student.first_name?.[0] ?? ""}${
              student.last_name?.[0] ?? ""
            }`.toUpperCase();

            return (
              <div
                key={student.id}
                className="
                  border-b border-[#E5E7EB]
                  last:border-b-0
                  px-4 py-4
                  md:grid md:grid-cols-[2fr_1.5fr_1.2fr_1fr]
                  md:items-center
                  md:px-6 md:py-4
                "
              >
                {/* STUDENT */}
                <div className="flex items-center gap-3">
                  <div className="flex size-11 shrink-0 items-center justify-center rounded-full bg-[#EEF2FF] text-sm font-semibold text-[#6366F1]">
                    {initials}
                  </div>

                  <div className="min-w-0">
                    <h3 className="truncate text-sm font-semibold text-[#0F172A] md:text-base">
                      {student.first_name} {student.last_name}
                    </h3>

                    <p className="mt-0.5 text-xs text-[#64748B]">
                      Student ID: {student.id}
                    </p>
                  </div>
                </div>

                {/* MOBILE INFORMATION */}
                <div className="mt-4 grid grid-cols-1 gap-3 sm:grid-cols-3 md:hidden">
                  {/* PARENT */}
                  <div className="flex items-center gap-2 rounded-lg bg-[#F8FAFC] px-3 py-2.5">
                    <div className="flex size-8 shrink-0 items-center justify-center rounded-md bg-blue-50">
                      <UserRound className="size-4 text-blue-600" />
                    </div>

                    <div className="min-w-0">
                      <p className="text-[10px] font-medium uppercase tracking-wide text-[#94A3B8]">
                        Parent
                      </p>

                      <p className="truncate text-xs font-semibold text-[#334155]">
                        {student.parent}
                      </p>
                    </div>
                  </div>

                  {/* CLASS */}
                  <div className="flex items-center gap-2 rounded-lg bg-[#F8FAFC] px-3 py-2.5">
                    <div className="flex size-8 shrink-0 items-center justify-center rounded-md bg-purple-50">
                      <BookOpen className="size-4 text-purple-600" />
                    </div>

                    <div>
                      <p className="text-[10px] font-medium uppercase tracking-wide text-[#94A3B8]">
                        Class
                      </p>

                      <p className="text-xs font-semibold text-[#334155]">
                        {student.class_name}
                      </p>
                    </div>
                  </div>

                  {/* STATUS */}
                  <div className="flex items-center gap-2 rounded-lg bg-[#F8FAFC] px-3 py-2.5">
                    <div className="flex size-8 shrink-0 items-center justify-center rounded-md bg-green-50">
                      <CheckCircle2 className="size-4 text-green-600" />
                    </div>

                    <div>
                      <p className="text-[10px] font-medium uppercase tracking-wide text-[#94A3B8]">
                        Status
                      </p>

                      <p
                        className={`text-xs font-semibold ${
                          student.status === "Active"
                            ? "text-green-600"
                            : "text-orange-600"
                        }`}
                      >
                        {student.status}
                      </p>
                    </div>
                  </div>
                </div>

                {/* DESKTOP PARENT */}
                <div className="hidden md:block">
                  <p className="text-sm font-medium text-[#334155]">
                    {student.parent}
                  </p>
                </div>

                {/* DESKTOP CLASS */}
                <div className="hidden md:flex items-center gap-2">
                  <GraduationCap className="size-4 text-[#64748B]" />

                  <span className="text-sm font-medium text-[#334155]">
                    {student.class_name}
                  </span>
                </div>

                {/* DESKTOP STATUS */}
                <div className="hidden md:block">
                  <span
                    className={`inline-flex items-center rounded-full px-3 py-1 text-xs font-semibold ${
                      student.status === "Active"
                        ? "bg-green-50 text-green-600"
                        : "bg-orange-50 text-orange-600"
                    }`}
                  >
                    {student.status}
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

export default StudentsClientPage;
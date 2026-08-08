import type { LucideIcon } from "lucide-react";

import { Card, CardContent } from "@/components/ui/card";

type StatCardProps = {
  title: string;
  value: string;
  detail: string;
  icon: LucideIcon;
};

export function StatCard({ title, value, detail, icon: Icon }: StatCardProps) {
  return (
    <Card className="border-[#E5E7EB] shadow-sm transition hover:-translate-y-0.5 hover:shadow-md">
      <CardContent className="flex items-start justify-between gap-4 p-5">
        <div className="min-w-0">
          <p className="text-sm font-medium text-[#64748B]">{title}</p>
          <p className="mt-3 text-3xl font-semibold tracking-normal text-[#0F172A]">
            {value}
          </p>
          <p className="mt-2 text-sm font-medium text-[#16A34A]">{detail}</p>
        </div>
        <div className="flex size-12 shrink-0 items-center justify-center rounded-xl bg-blue-50 text-[#2563EB]">
          <Icon className="size-5" />
        </div>
      </CardContent>
    </Card>
  );
}


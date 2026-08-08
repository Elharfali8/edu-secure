import { Info, Radio } from "lucide-react";

import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

export function QuickScan() {
  return (
    <Card className="h-full border-[#E5E7EB] shadow-sm">
      <CardHeader className="flex-row items-center justify-between">
        <CardTitle className="text-lg font-semibold text-[#0F172A]">
          Quick Scan
        </CardTitle>
        <div className="flex size-9 items-center justify-center rounded-lg bg-blue-50 text-[#2563EB]">
          <Radio className="size-4" />
        </div>
      </CardHeader>
      <CardContent className="space-y-6">
        <div className="rounded-2xl border border-dashed border-blue-200 bg-blue-50/70 px-5 py-8 text-center">
          <div className="mx-auto flex size-20 items-center justify-center rounded-full bg-white text-[#2563EB] shadow-sm">
            <Radio className="size-9" />
          </div>
          <h2 className="mt-5 text-xl font-semibold text-[#0F172A]">
            Ready to Scan
          </h2>
          <p className="mt-2 text-sm text-[#64748B]">
            Hold the NFC card near the reader
          </p>
        </div>

        <div className="flex items-center justify-between rounded-xl border border-[#E5E7EB] px-4 py-3">
          <span className="text-sm font-medium text-[#64748B]">Reader Status</span>
          <span className="inline-flex items-center gap-2 text-sm font-semibold text-[#16A34A]">
            <span className="size-2.5 rounded-full bg-[#16A34A]" />
            Connected
          </span>
        </div>

        <div className="flex gap-3 rounded-xl bg-slate-50 p-4 text-sm text-[#64748B]">
          <Info className="mt-0.5 size-4 shrink-0 text-[#2563EB]" />
          <p>Make sure the card is placed close to the NFC reader</p>
        </div>
      </CardContent>
    </Card>
  );
}


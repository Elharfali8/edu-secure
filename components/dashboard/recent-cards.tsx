import { ArrowUpRight, Radio } from "lucide-react";

import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

const cards = [
  ["Hicham Ait Ali", "Brother", "04A3 9F82 7B1C 98"],
  ["Samira El Ouardi", "Aunt", "04A3 9F82 7B1C 97"],
  ["Driver Yassine", "Driver", "04A3 9F82 7B1C 96"],
];

export function RecentCards() {
  return (
    <Card className="border-[#E5E7EB] shadow-sm">
      <CardHeader className="flex-row items-center justify-between">
        <CardTitle className="text-lg font-semibold text-[#0F172A]">
          Recently Added Cards
        </CardTitle>
        <Button variant="ghost" size="sm" className="text-[#2563EB]">
          View all
          <ArrowUpRight className="size-3.5" />
        </Button>
      </CardHeader>
      <CardContent className="space-y-3">
        {cards.map(([name, role, card]) => (
          <div key={card} className="flex items-center gap-3 rounded-xl border border-[#E5E7EB] p-3">
            <div className="flex size-10 shrink-0 items-center justify-center rounded-lg bg-blue-50 text-[#2563EB]">
              <Radio className="size-4" />
            </div>
            <div className="min-w-0">
              <p className="truncate font-semibold text-[#0F172A]">{name}</p>
              <p className="text-xs text-[#64748B]">{role}</p>
              <p className="mt-1 truncate font-mono text-xs text-[#64748B]">{card}</p>
            </div>
          </div>
        ))}
      </CardContent>
    </Card>
  );
}

import { ArrowUpRight } from "lucide-react";

import { Avatar, AvatarFallback } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

const people = [
  ["1", "Fatima Zahra", "Mother", "24 pickups", "FZ"],
  ["2", "Ahmed Ben Ali", "Uncle", "18 pickups", "AB"],
  ["3", "Mohammed Amrani", "Father", "15 pickups", "MA"],
];

export function TopPickupPersons() {
  return (
    <Card className="border-[#E5E7EB] shadow-sm">
      <CardHeader className="flex-row items-center justify-between">
        <CardTitle className="text-lg font-semibold text-[#0F172A]">
          Top Pickup Persons
        </CardTitle>
        <Button variant="ghost" size="sm" className="text-[#2563EB]">
          View all
          <ArrowUpRight className="size-3.5" />
        </Button>
      </CardHeader>
      <CardContent className="space-y-3">
        {people.map(([rank, name, role, pickups, initials]) => (
          <div key={name} className="flex items-center gap-3 rounded-xl border border-[#E5E7EB] p-3">
            <div className="flex size-8 shrink-0 items-center justify-center rounded-lg bg-slate-100 text-sm font-semibold text-[#0F172A]">
              {rank}
            </div>
            <Avatar>
              <AvatarFallback className="bg-blue-50 text-xs font-semibold text-[#2563EB]">
                {initials}
              </AvatarFallback>
            </Avatar>
            <div className="min-w-0 flex-1">
              <p className="truncate font-semibold text-[#0F172A]">{name}</p>
              <p className="text-xs text-[#64748B]">{role}</p>
            </div>
            <p className="shrink-0 text-sm font-semibold text-[#2563EB]">{pickups}</p>
          </div>
        ))}
      </CardContent>
    </Card>
  );
}


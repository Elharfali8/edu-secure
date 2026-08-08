import { ArrowUpRight } from "lucide-react";

import { Avatar, AvatarFallback } from "@/components/ui/avatar";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";

const pickups = [
  ["16:42", "Youssef Ben Ali", "YB", "Ahmed Ben Ali", "Uncle", "AB", "04A3 9F82 7B1C 90"],
  ["16:35", "Sara Ben Ali", "SB", "Fatima Zahra", "Mother", "FZ", "04A3 9F82 7B1C 91"],
  ["16:28", "Adam El Amrani", "AA", "Mohammed Amrani", "Father", "MA", "04A3 9F82 7B1C 92"],
  ["16:15", "Lina Ouahidi", "LO", "Khalid Ouahidi", "Father", "KO", "04A3 9F82 7B1C 93"],
  ["16:02", "Rayan Benniss", "RB", "Driver Yassine", "Driver", "DY", "04A3 9F82 7B1C 94"],
];

export function RecentPickups() {
  return (
    <Card className="h-full min-w-0 border-[#E5E7EB] shadow-sm">
      <CardHeader className="flex-row items-center justify-between">
        <CardTitle className="text-lg font-semibold text-[#0F172A]">
          Recent Pickups
        </CardTitle>
        <Button variant="ghost" size="sm" className="text-[#2563EB]">
          View all
          <ArrowUpRight className="size-3.5" />
        </Button>
      </CardHeader>
      <CardContent className="min-w-0">
        <Table>
          <TableHeader>
            <TableRow className="hover:bg-transparent">
              <TableHead className="text-xs text-[#64748B]">TIME</TableHead>
              <TableHead className="text-xs text-[#64748B]">STUDENT</TableHead>
              <TableHead className="text-xs text-[#64748B]">PICKED BY</TableHead>
              <TableHead className="text-xs text-[#64748B]">CARD ID</TableHead>
              <TableHead className="text-xs text-[#64748B]">STATUS</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {pickups.map(([time, student, studentInitials, pickedBy, role, pickupInitials, card]) => (
              <TableRow key={card}>
                <TableCell className="font-medium text-[#0F172A]">{time}</TableCell>
                <TableCell>
                  <div className="flex items-center gap-2">
                    <Avatar size="sm">
                      <AvatarFallback className="bg-blue-50 text-[11px] font-semibold text-[#2563EB]">
                        {studentInitials}
                      </AvatarFallback>
                    </Avatar>
                    <span className="font-medium text-[#0F172A]">{student}</span>
                  </div>
                </TableCell>
                <TableCell>
                  <div className="flex items-center gap-2">
                    <Avatar size="sm">
                      <AvatarFallback className="bg-slate-100 text-[11px] font-semibold text-[#64748B]">
                        {pickupInitials}
                      </AvatarFallback>
                    </Avatar>
                    <div>
                      <p className="font-medium text-[#0F172A]">{pickedBy}</p>
                      <p className="text-xs text-[#64748B]">{role}</p>
                    </div>
                  </div>
                </TableCell>
                <TableCell className="font-mono text-xs text-[#64748B]">{card}</TableCell>
                <TableCell>
                  <Badge className="bg-green-50 text-[#16A34A] hover:bg-green-50">
                    Approved
                  </Badge>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </CardContent>
    </Card>
  );
}


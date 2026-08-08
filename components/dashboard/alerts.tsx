import { AlertTriangle, BellRing, ShieldAlert } from "lucide-react";

import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

const alerts = [
  {
    title: "Blocked card attempt",
    message: "Card 04A3 9F82 7B1C 95 was blocked",
    time: "15:47",
    icon: ShieldAlert,
    tone: "bg-red-50 text-[#DC2626]",
  },
  {
    title: "Card expiring soon",
    message: "2 cards will expire in 7 days",
    time: "15:20",
    icon: AlertTriangle,
    tone: "bg-amber-50 text-[#F59E0B]",
  },
  {
    title: "New pickup person",
    message: "Hicham Ait Ali was added by a parent",
    time: "14:10",
    icon: BellRing,
    tone: "bg-blue-50 text-[#2563EB]",
  },
];

export function Alerts() {
  return (
    <Card className="h-full border-[#E5E7EB] shadow-sm">
      <CardHeader>
        <CardTitle className="text-lg font-semibold text-[#0F172A]">
          Alerts & Notifications
        </CardTitle>
      </CardHeader>
      <CardContent className="space-y-3">
        {alerts.map((alert) => {
          const Icon = alert.icon;

          return (
            <div
              key={alert.title}
              className="flex gap-3 rounded-xl border border-[#E5E7EB] p-3"
            >
              <div className={`flex size-10 shrink-0 items-center justify-center rounded-lg ${alert.tone}`}>
                <Icon className="size-4" />
              </div>
              <div className="min-w-0 flex-1">
                <div className="flex items-start justify-between gap-3">
                  <p className="font-semibold text-[#0F172A]">{alert.title}</p>
                  <span className="text-xs font-medium text-[#64748B]">
                    {alert.time}
                  </span>
                </div>
                <p className="mt-1 text-sm leading-5 text-[#64748B]">
                  {alert.message}
                </p>
              </div>
            </div>
          );
        })}
      </CardContent>
      <CardFooter className="bg-white">
        <Button variant="outline" className="w-full bg-white">
          View all notifications
        </Button>
      </CardFooter>
    </Card>
  );
}


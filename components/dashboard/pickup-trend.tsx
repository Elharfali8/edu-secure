import { ChevronDown } from "lucide-react";

import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

const points = [
  { day: "Mon", value: 20 },
  { day: "Tue", value: 56 },
  { day: "Wed", value: 65 },
  { day: "Thu", value: 30 },
  { day: "Fri", value: 24 },
  { day: "Sat", value: 50 },
  { day: "Sun", value: 20 },
];

const polyline = "20,112 100,62 180,48 260,98 340,106 420,70 500,112";

export function PickupTrend() {
  return (
    <Card className="min-w-0 border-[#E5E7EB] shadow-sm">
      <CardHeader className="flex-row items-center justify-between">
        <CardTitle className="text-lg font-semibold text-[#0F172A]">
          Pickup Trend
        </CardTitle>
        <Button variant="outline" size="sm" className="bg-white">
          This Week
          <ChevronDown className="size-3.5" />
        </Button>
      </CardHeader>
      <CardContent>
        <div className="h-64 w-full">
          <svg viewBox="0 0 520 190" className="h-full w-full" role="img" aria-label="Weekly pickup trend line chart">
            <defs>
              <linearGradient id="pickup-fill" x1="0" x2="0" y1="0" y2="1">
                <stop offset="0%" stopColor="#2563EB" stopOpacity="0.16" />
                <stop offset="100%" stopColor="#2563EB" stopOpacity="0" />
              </linearGradient>
            </defs>
            {[40, 80, 120].map((y) => (
              <line key={y} x1="20" x2="500" y1={y} y2={y} stroke="#E5E7EB" strokeDasharray="4 6" />
            ))}
            <polygon points={`20,150 ${polyline} 500,150`} fill="url(#pickup-fill)" />
            <polyline
              points={polyline}
              fill="none"
              stroke="#2563EB"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="4"
            />
            {points.map((point, index) => {
              const x = 20 + index * 80;
              const y = [112, 62, 48, 98, 106, 70, 112][index];

              return (
                <g key={point.day}>
                  <circle cx={x} cy={y} r="5" fill="#FFFFFF" stroke="#2563EB" strokeWidth="3" />
                  <text x={x} y="174" textAnchor="middle" className="fill-[#64748B] text-[12px] font-medium">
                    {point.day}
                  </text>
                  <text x={x} y={y - 16} textAnchor="middle" className="fill-[#0F172A] text-[12px] font-semibold">
                    {point.value}
                  </text>
                </g>
              );
            })}
          </svg>
        </div>
      </CardContent>
    </Card>
  );
}


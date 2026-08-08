import { Alerts } from "@/components/dashboard/alerts";
import { PickupTrend } from "@/components/dashboard/pickup-trend";
import { QuickScan } from "@/components/dashboard/quick-scan";
import { RecentCards } from "@/components/dashboard/recent-cards";
import { RecentPickups } from "@/components/dashboard/recent-pickups";
import { StatCard } from "@/components/dashboard/stat-card";
import { TopPickupPersons } from "@/components/dashboard/top-pickup-persons";
import { CalendarCheck, Radio, UserCheck, Users } from "lucide-react";

export default function DashboardPage() {
  return (
    <div className="space-y-6">
      <section className="grid gap-4 sm:grid-cols-2 xl:grid-cols-4">
        <StatCard
          title="Total Students"
          value="320"
          detail="+12 this month"
          icon={Users}
        />
        <StatCard
          title="Authorized Persons"
          value="278"
          detail="+8 this month"
          icon={UserCheck}
        />
        <StatCard
          title="Active NFC Cards"
          value="278"
          detail="98% active"
          icon={Radio}
        />
        <StatCard
          title="Pickups Today"
          value="42"
          detail="Live updates"
          icon={CalendarCheck}
        />
      </section>

      <section className="grid min-w-0 gap-4 xl:grid-cols-[minmax(280px,0.9fr)_minmax(520px,1.5fr)_minmax(300px,0.9fr)]">
        <QuickScan />
        <RecentPickups />
        <Alerts />
      </section>

      <section className="grid min-w-0 gap-4 xl:grid-cols-[minmax(420px,1.4fr)_minmax(300px,0.8fr)_minmax(300px,0.8fr)]">
        <PickupTrend />
        <TopPickupPersons />
        <RecentCards />
      </section>
    </div>
  );
}

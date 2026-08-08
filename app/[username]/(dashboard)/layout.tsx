import { DashboardHeader } from "@/components/dashboard/header";
import { DashboardSidebar } from "@/components/dashboard/sidebar";

export default async function DashboardLayout({
  children,
  params,
}: LayoutProps<"/[username]">) {
  const { username } = await params;

  return (
    <div className="min-h-screen bg-[#F8FAFC] text-[#0F172A]">
      <DashboardSidebar
        username={username}
        className="fixed inset-y-0 left-0 z-40 hidden h-screen lg:flex"
      />
      <div className="min-w-0 lg:pl-[250px]">
        <DashboardHeader username={username} />
        <main className="mx-auto w-full max-w-[1800px] px-4 py-5 sm:px-6 lg:px-8">
          {children}
        </main>
      </div>
    </div>
  );
}

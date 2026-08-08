import NavBar from "@/components/home/layout/NavBar";

export default function HomeLayout({ children }: LayoutProps<"/">) {
  return (
    <div className="min-h-screen bg-[#F8FAFC] text-[#0F172A]">
      <NavBar />
      <main className="min-w-0">{children}</main>
    </div>
  );
}

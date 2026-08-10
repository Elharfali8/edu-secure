import Footer from "@/components/home/layout/Footer";
import NavBar from "@/components/home/layout/NavBar";

export default function HomeLayout({ children }: LayoutProps<"/">) {
  return (
    <div className="min-h-screen bg-[#F8FAFC] text-[#0F172A]">
      <NavBar />
      <main className="">{children}</main>
      <Footer />
    </div>
  );
}

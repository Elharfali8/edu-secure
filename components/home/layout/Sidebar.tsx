import { navigation } from "@/utils/navigation";
import { ArrowRight } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

const Sidebar = () => {
  return (
    <aside className="flex h-full w-full flex-col bg-[#0F2340] px-4 py-5 text-white">
      <div className="flex h-full flex-col">
        <div className="flex items-center gap-3">
          <Image
            src="/images/logo.png"
            alt="EduSecure logo"
            width={40}
            height={40}
            className="size-10 rounded-lg bg-white object-contain p-1"
          />
          <div>
            <p className="font-semibold text-white">EduSecure</p>
            <p className="text-xs text-blue-100/70">School Pickup System</p>
          </div>
        </div>

        <nav className="mt-6 grid gap-1">
          {navigation.map((item) => (
            <Link
              key={item.id}
              href={item.href}
              className="flex items-center justify-between rounded-lg px-3 py-3 text-sm font-medium capitalize text-blue-50/85 transition hover:bg-white/10 hover:text-white"
            >
              {item.name}
              <ArrowRight className="size-4 text-blue-100/50" />
            </Link>
          ))}
        </nav>
      </div>
    </aside>
  );
};

export default Sidebar;

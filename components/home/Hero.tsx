import { Button } from "@/components/ui/button";
import { ArrowRight, CircleUserRound, ShieldCheck } from "lucide-react";
import Image from "next/image";

const Hero = () => {
  return (
    <section className="min-h-[calc(100vh-80px)] bg-white">
      <div className="mx-auto grid h-[calc(100vh-80px)] max-w-7xl items-center gap-8 px-4 py-6 sm:px-6 lg:grid-cols-2 lg:px-8">
        <div className="max-w-2xl">
          <div className="inline-flex items-center gap-2 rounded-full bg-blue-50 px-3 py-1 text-xs font-semibold text-blue-600">
            <ShieldCheck className="size-3.5" />
            Trusted by modern private schools
          </div>

          <h1 className="mt-5 text-4xl font-semibold leading-[1.08] tracking-normal text-[#0F172A] sm:text-5xl xl:text-[54px]">
            Secure every pickup.
            <span className="block text-[#2563EB]">Protect every student.</span>
          </h1>

          <p className="mt-5 max-w-xl text-base leading-7 text-[#64748B]">
            EduSecure replaces paper pickup authorizations with secure NFC cards,
            real-time verification, and complete pickup tracking — built for
            modern private schools.
          </p>

          <div className="mt-7 flex flex-wrap gap-3">
            <Button className="h-11 rounded-md bg-[#2563EB] px-5 font-semibold text-white hover:bg-blue-700">
              Get Started
              <ArrowRight className="size-4" />
            </Button>
            <Button
              variant="outline"
              className="h-11 rounded-md border-[#E5E7EB] bg-white px-5 font-semibold text-[#0F172A]"
            >
              Login
              <CircleUserRound className="size-4" />
            </Button>
          </div>

          <div className="mt-7 grid gap-4 sm:grid-cols-3">
            {[
              ["No paper passes", "Go digital"],
              ["Instant verification", "In seconds"],
              ["Complete history", "Always recorded"],
            ].map(([title, subtitle]) => (
              <div key={title} className="flex items-start gap-2.5">
                <ShieldCheck className="mt-0.5 size-4 shrink-0 text-[#2563EB]" />
                <div>
                  <p className="text-xs font-semibold text-[#0F172A] sm:text-sm">
                    {title}
                  </p>
                  <p className="text-xs text-[#64748B] sm:text-sm">{subtitle}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="flex items-center justify-center lg:justify-end">
          <div className="flex aspect-square w-full max-w-sm items-center justify-center rounded-2xl border border-[#E5E7EB] bg-[#F8FAFC] p-10 shadow-sm xl:max-w-md">
            <Image
              src="/images/logo.png"
              alt="EduSecure logo"
              width={360}
              height={360}
              className="h-auto w-full object-contain"
              priority
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;

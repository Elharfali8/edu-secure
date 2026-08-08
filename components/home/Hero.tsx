import { Button } from "@/components/ui/button";
import { ArrowRight, CircleUserRound, ShieldCheck } from "lucide-react";
import Image from "next/image";

const Hero = () => {
  return (
    <section className="bg-white lg:min-h-[calc(100vh-80px)]">
      <div className="mx-auto grid max-w-7xl items-center gap-8 px-4 py-10 sm:px-6 lg:h-[calc(100vh-80px)] lg:grid-cols-2 lg:px-8 lg:py-6">
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
          <div className="relative w-full max-w-[320px] sm:max-w-sm xl:max-w-md">
            <div className="absolute -left-5 top-10 h-28 w-28 rounded-[2rem] bg-blue-100" />
            <div className="absolute -right-4 -top-5 h-24 w-24 rounded-full bg-[#2563EB]/12" />
            <div className="absolute -bottom-6 right-8 h-16 w-40 rounded-full bg-[#2563EB]/10" />

            <div className="relative overflow-hidden rounded-[2rem] border border-blue-100 bg-white p-5 shadow-xl shadow-blue-950/10">
              <div className="absolute inset-x-0 top-0 h-28 bg-blue-50" />
              <div className="relative flex aspect-square items-center justify-center rounded-[1.5rem] bg-[#F8FAFC] p-8 ring-1 ring-[#E5E7EB] sm:p-10">
                <Image
                  src="/images/logo.png"
                  alt="EduSecure logo"
                  width={360}
                  height={360}
                  className="h-auto w-full object-contain"
                  priority
                />
              </div>

              <div className="relative mt-4 grid grid-cols-3 gap-2">
                <div className="h-2 rounded-full bg-[#2563EB]" />
                <div className="h-2 rounded-full bg-blue-200" />
                <div className="h-2 rounded-full bg-blue-100" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;

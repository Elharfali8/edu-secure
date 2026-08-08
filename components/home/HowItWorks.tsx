import Image from "next/image";
import {
  BadgeX,
  Bell,
  CalendarCheck,
  Clipboard,
  IdCard,
  Link2Off,
  ScanLine,
  ShieldCheck,
  ShieldX,
  UserCheck,
} from "lucide-react";

const problemCards = [
  {
    title: "Lost Passes",
    description: "A paper authorization can easily disappear before pickup time.",
    icon: BadgeX,
    tone: "bg-rose-50 text-rose-500",
  },
  {
    title: "Easy to Copy",
    description:
      "A photocopy doesn't tell your staff whether the person is actually authorized.",
    icon: Clipboard,
    tone: "bg-orange-50 text-orange-500",
  },
  {
    title: "No Real-Time Control",
    description: "Once a paper pass is issued, revoking access is difficult and slow.",
    icon: ShieldX,
    tone: "bg-amber-50 text-amber-500",
  },
  {
    title: "No Audit Trail",
    description:
      "Paper cannot reliably tell you who picked up a student and when.",
    icon: Link2Off,
    tone: "bg-violet-50 text-violet-500",
  },
];

const solutionSteps = [
  {
    number: "01",
    title: "Authorizations",
    description: "Parents authorize trusted pickup persons",
    icon: UserCheck,
  },
  {
    number: "02",
    title: "NFC Card Assigned",
    description: "Unique NFC card issued to each authorized person",
    icon: IdCard,
  },
  {
    number: "03",
    title: "Tap at School",
    description: "Pickup person taps NFC card at the school entrance",
    icon: ScanLine,
  },
  {
    number: "04",
    title: "Verify & Confirm",
    description: "Staff verifies and confirms the authorized pickup",
    icon: ShieldCheck,
  },
  {
    number: "05",
    title: "Pickup Logged",
    description: "System logs the pickup with time and details",
    icon: CalendarCheck,
  },
  {
    number: "06",
    title: "Parent Notified",
    description: "Parent receives instant pickup notification",
    icon: Bell,
  },
];

const HowItWorks = () => {
  return (
    <section id="how-it-works" className="bg-white py-12 lg:py-16">
      <div className="mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* ------THE PROBLEM------ */}
        <div className="relative overflow-hidden rounded-[2rem] border border-blue-100 bg-[#F8FAFC] p-5 shadow-xl shadow-blue-950/5 sm:p-6 lg:p-8">
          <div className="absolute -left-10 top-16 h-32 w-32 rounded-[2.25rem] bg-blue-100/70" />
          <div className="absolute -right-12 -top-10 h-32 w-32 rounded-full bg-[#2563EB]/10" />
          <div className="absolute bottom-0 right-1/3 h-16 w-52 rounded-t-full bg-blue-50" />

          <div className="relative grid gap-6 lg:grid-cols-2 lg:items-start">
            <div>
              <p className="text-sm font-semibold uppercase tracking-[0.16em] text-[#2563EB]">
                The Problem
              </p>
              <h2 className="mt-3 max-w-xl text-3xl font-semibold leading-tight tracking-normal text-[#0F172A] lg:text-4xl">
                Paper passes were never designed for modern school security.
              </h2>
            </div>
            <p className="max-w-xl text-base font-medium leading-7 text-[#64748B] lg:pt-10">
              Traditional paper authorization slips create unnecessary risks and
              make it difficult for schools to keep students safe.
            </p>
          </div>

          <div className="relative mt-8 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
            {problemCards.map((card) => {
              const Icon = card.icon;

              return (
                <article
                  key={card.title}
                  className="rounded-xl border border-[#E5E7EB] bg-white p-6 shadow-sm transition hover:-translate-y-0.5 hover:shadow-md"
                >
                  <div
                    className={`flex size-11 items-center justify-center rounded-xl ${card.tone}`}
                  >
                    <Icon className="size-5" />
                  </div>
                  <h3 className="mt-6 text-lg font-semibold text-[#0F172A]">
                    {card.title}
                  </h3>
                  <p className="mt-3 text-sm font-medium leading-6 text-[#64748B]">
                    {card.description}
                  </p>
                </article>
              );
            })}
          </div>
        </div>

        {/* ------THE SOLUTION------ */}
        <div className="mt-12 grid overflow-hidden bg-white lg:grid-cols-[0.95fr_1fr]">
          <div className="order-2 relative flex min-h-[360px] items-center justify-center overflow-hidden bg-[#EFF6FF] p-6 sm:min-h-[430px] lg:order-1">
            <div className="absolute size-[360px] rounded-full bg-blue-100/70 sm:size-[440px]" />
            <div className="absolute size-[280px] rounded-full bg-white/45 sm:size-[350px]" />
            <Image
              src="/images/cart-nfc.png"
              alt="EduSecure authorized pickup NFC card"
              width={500}
              height={620}
              className="relative z-10 h-auto w-full max-w-[300px] object-contain drop-shadow-2xl sm:max-w-[360px]"
            />
            <div className="absolute bottom-4 left-1/2 z-20 flex -translate-x-1/2 gap-2">
              <span className="h-2 w-12 rounded-full bg-[#2563EB]" />
              <span className="h-2 w-12 rounded-full bg-blue-200" />
              <span className="h-2 w-12 rounded-full bg-blue-100" />
            </div>
          </div>

          <div className="contents lg:order-2 lg:block lg:px-10 lg:py-12">
            <div className="order-1 px-4 py-9 sm:px-8 lg:p-0">
              <p className="text-sm font-semibold uppercase tracking-[0.16em] text-[#2563EB]">
                The Solution
              </p>
              <h2 className="mt-2 max-w-lg text-3xl font-semibold leading-tight tracking-normal text-[#0F172A] lg:text-4xl">
                One secure card.
                <span className="block">Complete control.</span>
              </h2>
              <p className="mt-4 max-w-xl text-base font-medium leading-7 text-[#64748B]">
                EduSecure gives schools centralized control over pickup
                authorization with secure NFC technology.
              </p>
            </div>

            <div className="order-3 grid gap-x-8 gap-y-6 px-4 py-9 sm:px-8 md:grid-cols-2 lg:mt-8 lg:p-0">
              {solutionSteps.map((step, index) => {
                const Icon = step.icon;
                const isLastInColumn = index === 2 || index === 5;

                return (
                  <div
                    key={step.number}
                    className="grid grid-cols-[40px_48px_1fr] gap-3 lg:[&:nth-child(2)]:order-3 lg:[&:nth-child(3)]:order-5 lg:[&:nth-child(4)]:order-2 lg:[&:nth-child(5)]:order-4 lg:[&:nth-child(6)]:order-6"
                  >
                    <div className="relative flex flex-col items-center">
                      <div className="z-10 flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-[#2563EB] text-[11px] font-semibold leading-none text-white shadow-sm shadow-blue-950/20">
                        {step.number}
                      </div>
                      {!isLastInColumn && (
                        <div className="mt-2 h-full min-h-10 border-l border-dashed border-blue-200" />
                      )}
                    </div>
                    <div className="flex size-12 items-center justify-center rounded-xl bg-blue-50 text-[#0F2340] ring-1 ring-blue-100">
                      <Icon className="size-5" />
                    </div>
                    <div>
                      <h3 className="text-base font-semibold text-[#0F172A]">
                        {step.title}
                      </h3>
                      <p className="mt-1 text-sm font-medium leading-5 text-[#64748B]">
                        {step.description}
                      </p>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;

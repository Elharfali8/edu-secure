import { BadgeX, Clipboard, Link2Off, ShieldX } from "lucide-react";

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
      </div>
    </section>
  );
};

export default HowItWorks;

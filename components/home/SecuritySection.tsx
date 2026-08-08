import {
  Bell,
  Contact,
  Radio,
  ShieldAlert,
} from "lucide-react";

const securityStats = [
  {
    label: "Active Cards",
    value: "278",
    detail: "98% active",
    icon: Contact,
    tone: "bg-emerald-500/15 text-emerald-300",
  },
  {
    label: "Blocked Cards",
    value: "12",
    detail: "This week",
    icon: ShieldAlert,
    tone: "bg-rose-500/15 text-rose-300",
  },
  {
    label: "Today's Pickups",
    value: "42",
    detail: "Live updates",
    icon: Radio,
    tone: "bg-blue-500/15 text-blue-300",
  },
  {
    label: "Verification Rate",
    value: "99.8%",
    detail: "This week",
    icon: Bell,
    tone: "bg-emerald-500/15 text-emerald-300",
  },
];

const SecuritySection = () => {
  return (
    <section className="bg-white py-8 lg:py-12">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="overflow-hidden rounded-2xl border border-blue-900/20 bg-[#061D3B] p-6 text-white shadow-xl shadow-blue-950/15 lg:p-8">
          <div className="grid gap-8 lg:grid-cols-[0.85fr_1.65fr] lg:items-center">
            <div>
              <p className="text-sm font-semibold uppercase tracking-[0.16em] text-[#2563EB]">
                Built for Security
              </p>
              <h2 className="mt-4 max-w-sm text-3xl font-semibold leading-tight tracking-normal lg:text-4xl">
                Security should be built into every pickup.
              </h2>
              <p className="mt-5 max-w-md text-sm font-medium leading-6 text-blue-100/75 lg:text-base">
                EduSecure gives schools the visibility and control they need to
                make every student pickup accountable and secure.
              </p>
              <a
                href="#how-it-works"
                className="mt-4 inline-flex items-center gap-2 text-sm font-semibold text-white transition hover:text-blue-200"
              >
                Learn about our security
                <span aria-hidden="true">›</span>
              </a>
            </div>

            <div className="rounded-2xl border border-white/10 bg-white/[0.07] p-5 shadow-2xl shadow-black/10">
              <div className="mb-5 flex items-center justify-between gap-4">
                <h3 className="text-sm font-semibold uppercase tracking-wide text-white">
                  Security Center
                </h3>
                <p className="text-sm font-medium text-blue-100/75">
                  Live Overview
                </p>
              </div>

              <div className="grid gap-3 sm:grid-cols-2 xl:grid-cols-4">
                {securityStats.map((stat) => {
                  const Icon = stat.icon;

                  return (
                    <div
                      key={stat.label}
                      className="rounded-xl border border-white/10 bg-[#0B2547] p-4"
                    >
                      <div className="flex items-start justify-between gap-3">
                        <div>
                          <p className="text-sm font-medium text-blue-100/80">
                            {stat.label}
                          </p>
                          <p className="mt-3 text-3xl font-semibold leading-none text-white">
                            {stat.value}
                          </p>
                          <p className="mt-2 text-sm font-medium text-blue-100/75">
                            {stat.detail}
                          </p>
                        </div>
                        <div
                          className={`flex size-11 shrink-0 items-center justify-center rounded-xl ${stat.tone}`}
                        >
                          <Icon className="size-5" />
                        </div>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SecuritySection;

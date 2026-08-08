import { banner } from "@/utils/banner";

const Banner = () => {
  return (
    <div className="bg-[#F8FAFC] py-8 lg:py-12">
      <div className="mx-auto max-w-7xl px-4">
        <div className="relative overflow-hidden rounded-[2rem] border border-blue-100 bg-white p-5 shadow-xl shadow-blue-950/5 sm:p-6">
          <div className="absolute -left-8 -top-8 h-28 w-28 rounded-[2rem] bg-blue-100/80" />
          <div className="absolute -right-10 top-10 h-24 w-24 rounded-full bg-[#2563EB]/10" />
          <div className="absolute bottom-0 left-1/2 h-14 w-44 rounded-t-full bg-blue-50" />

          <div className="relative mb-6 grid place-items-center text-center">
            <h3 className="text-lg font-bold text-[#0F172A] lg:text-xl">
              Built for safer, smarter school operations.
            </h3>
          </div>

          <div className="relative grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {banner.map((item) => {
              const Icon = item.icon;

              return (
                <div
                  className="flex items-center gap-3 rounded-xl border border-blue-100 bg-[#F8FAFC]/90 p-4 shadow-sm"
                  key={item.id}
                >
                  <span className="flex size-11 shrink-0 items-center justify-center rounded-xl bg-blue-50 text-blue-600">
                    <Icon size={22} />
                  </span>
                  <p className="text-sm font-medium leading-5 text-[#64748B] lg:text-base">
                    {item.description}
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Banner;

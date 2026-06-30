import DashboardHeader from "./DashboardHeader";
import SummaryCards from "./SummaryCards";
import PortfolioChart from "../charts/PortfolioChart";
import AssetAllocationChart from "../charts/AssetAllocationChart";
import LivePriceCard from "./LivePriceCard";

export default function Dashboard() {
  return (
    <section className="flex-1 p-8">

      <DashboardHeader />

      <SummaryCards />

      {/* Charts */}
      <div className="mt-8 grid gap-6 xl:grid-cols-3">

        <div className="xl:col-span-2">
          <PortfolioChart />
        </div>

        <AssetAllocationChart />

      </div>

      {/* Live Prices */}
      <div className="mt-8 grid gap-6 md:grid-cols-2">

        <LivePriceCard />

        <div className="rounded-2xl border border-zinc-800 bg-zinc-900 p-6">

          <div className="flex items-center justify-between">

            <div>

              <p className="text-zinc-400">
                Live Silver Price
              </p>

              <h2 className="mt-2 text-3xl font-bold text-white">
                ₹171.52/g
              </h2>

            </div>

            <span className="text-4xl">
              🥈
            </span>

          </div>

          <p className="mt-5 text-red-400">
            ▼ -0.12%
          </p>

          <p className="mt-3 text-xs text-zinc-500">
            Updated just now
          </p>

        </div>

      </div>

      {/* Recent Transactions */}

      <div className="mt-8 rounded-2xl border border-zinc-800 bg-zinc-900 p-6">

        <h2 className="mb-4 text-xl font-semibold text-white">
          Recent Transactions
        </h2>

        <div className="flex h-56 items-center justify-center rounded-xl border border-dashed border-zinc-700 text-zinc-500">
          No transactions yet.
        </div>

      </div>

    </section>
  );
}
import Sidebar from "@/components/layout/Sidebar";
import Navbar from "@/components/layout/Navbar";
import SummaryCard from "@/components/dashboard/SummaryCard";

export default function Home() {
  return (
    <main className="flex min-h-screen bg-zinc-950">
      {/* Sidebar */}
      <Sidebar />

      {/* Main Content */}
      <div className="flex flex-1 flex-col">
        {/* Top Navigation */}
        <Navbar />

        {/* Dashboard */}
        <section className="flex-1 p-8">
          <h1 className="text-4xl font-bold text-white">
            Dashboard
          </h1>

          <p className="mt-2 text-zinc-400">
            Welcome back, Deepak 👋
          </p>

          {/* Summary Cards */}
          <div className="mt-8 grid gap-6 md:grid-cols-2 xl:grid-cols-4">
            <SummaryCard
              title="Net Worth"
              value="₹0.00"
            />

            <SummaryCard
              title="Today's P/L"
              value="₹0.00"
              change="+0.00%"
              color="text-green-400"
            />

            <SummaryCard
              title="Overall Return"
              value="0.00%"
              color="text-blue-400"
            />

            <SummaryCard
              title="Assets"
              value="0"
            />
          </div>

          {/* Placeholder Sections */}
          <div className="mt-8 grid gap-6 xl:grid-cols-3">
            {/* Portfolio Chart */}
            <div className="col-span-2 rounded-2xl border border-zinc-800 bg-zinc-900 p-6">
              <h2 className="mb-4 text-xl font-semibold text-white">
                Portfolio Value
              </h2>

              <div className="flex h-72 items-center justify-center rounded-xl border border-dashed border-zinc-700 text-zinc-500">
                Chart Coming Soon 📈
              </div>
            </div>

            {/* Asset Allocation */}
            <div className="rounded-2xl border border-zinc-800 bg-zinc-900 p-6">
              <h2 className="mb-4 text-xl font-semibold text-white">
                Asset Allocation
              </h2>

              <div className="flex h-72 items-center justify-center rounded-xl border border-dashed border-zinc-700 text-zinc-500">
                Pie Chart Coming Soon 🥇
              </div>
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
      </div>
    </main>
  );
}
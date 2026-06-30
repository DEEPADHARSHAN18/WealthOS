export default function Home() {
  return (
    <main className="min-h-screen bg-slate-950 text-white">
      <div className="mx-auto max-w-7xl p-8">

        <h1 className="text-5xl font-bold">
          WealthOS
        </h1>

        <p className="mt-2 text-gray-400">
          AI Powered Investment Portfolio
        </p>

        <div className="grid gap-6 mt-10 md:grid-cols-3">

          <div className="rounded-2xl bg-slate-900 p-6">
            <h2 className="text-gray-400">
              Net Worth
            </h2>

            <p className="text-3xl font-bold mt-2">
              ₹0
            </p>
          </div>

          <div className="rounded-2xl bg-slate-900 p-6">
            <h2 className="text-gray-400">
              Today's P/L
            </h2>

            <p className="text-3xl font-bold text-green-400 mt-2">
              ₹0
            </p>
          </div>

          <div className="rounded-2xl bg-slate-900 p-6">
            <h2 className="text-gray-400">
              Total Return
            </h2>

            <p className="text-3xl font-bold text-blue-400 mt-2">
              0%
            </p>
          </div>

        </div>

      </div>
    </main>
  );
}
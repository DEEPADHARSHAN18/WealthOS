import SummaryCard from "./SummaryCard";

import { portfolio } from "@/data/portfolio";

import {
  calculateNetWorth,
  calculateTotalAssets,
} from "@/lib/portfolioEngine";

export default function SummaryCards() {
  const netWorth = calculateNetWorth(portfolio);

  const assets = calculateTotalAssets();

  return (
    <div className="mt-8 grid gap-6 md:grid-cols-2 xl:grid-cols-4">

      <SummaryCard
        title="Net Worth"
        value={`₹${netWorth.toLocaleString("en-IN", {
          minimumFractionDigits: 2,
        })}`}
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
        value={assets.toString()}
      />

    </div>
  );
}
export interface PortfolioData {
  gold: number;
  silver: number;
  stocks: number;
  mutualFunds: number;
  debt: number;
  cash: number;
}

export function calculateNetWorth(data: PortfolioData) {
  return (
    data.gold +
    data.silver +
    data.stocks +
    data.mutualFunds +
    data.debt +
    data.cash
  );
}

export function calculateAllocation(data: PortfolioData) {
  const total = calculateNetWorth(data);

  return [
    {
      name: "Gold",
      value: Number(((data.gold / total) * 100).toFixed(2)),
    },
    {
      name: "Silver",
      value: Number(((data.silver / total) * 100).toFixed(2)),
    },
    {
      name: "Stocks",
      value: Number(((data.stocks / total) * 100).toFixed(2)),
    },
    {
      name: "Mutual Funds",
      value: Number(((data.mutualFunds / total) * 100).toFixed(2)),
    },
    {
      name: "Debt",
      value: Number(((data.debt / total) * 100).toFixed(2)),
    },
    {
      name: "Cash",
      value: Number(((data.cash / total) * 100).toFixed(2)),
    },
  ];
}

export function calculateTotalAssets() {
  return 6;
}
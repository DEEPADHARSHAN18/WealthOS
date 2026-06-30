"use client";

import {
  PieChart,
  Pie,
  Cell,
  ResponsiveContainer,
  Tooltip,
  Legend,
} from "recharts";

const data = [
  { name: "Gold", value: 45 },
  { name: "Stocks", value: 25 },
  { name: "Mutual Funds", value: 15 },
  { name: "Silver", value: 10 },
  { name: "Cash", value: 5 },
];

const COLORS = [
  "#FFD700",
  "#3B82F6",
  "#10B981",
  "#C0C0C0",
  "#8B5CF6",
];

export default function AssetAllocationChart() {
  return (
    <div className="rounded-2xl border border-zinc-800 bg-zinc-900 p-6 h-full">
      <h2 className="mb-6 text-xl font-semibold text-white">
        Asset Allocation
      </h2>

      <div className="h-80">
        <ResponsiveContainer width="100%" height="100%">
          <PieChart>
            <Pie
              data={data}
              innerRadius={65}
              outerRadius={95}
              paddingAngle={3}
              dataKey="value"
            >
              {data.map((_, index) => (
                <Cell
                  key={index}
                  fill={COLORS[index % COLORS.length]}
                />
              ))}
            </Pie>

            <Tooltip />
            <Legend />
          </PieChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
}
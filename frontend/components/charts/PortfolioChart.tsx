"use client";

import {
  ResponsiveContainer,
  AreaChart,
  Area,
  CartesianGrid,
  Tooltip,
  XAxis,
  YAxis,
} from "recharts";

const data = [
  { month: "Jan", value: 100000 },
  { month: "Feb", value: 112000 },
  { month: "Mar", value: 109000 },
  { month: "Apr", value: 125000 },
  { month: "May", value: 138000 },
  { month: "Jun", value: 152000 },
];

export default function PortfolioChart() {
  return (
    <div className="rounded-2xl border border-zinc-800 bg-zinc-900 p-6">
      <h2 className="mb-6 text-xl font-semibold text-white">
        Portfolio Value
      </h2>

      <div className="h-80">
        <ResponsiveContainer width="100%" height="100%">
          <AreaChart data={data}>
            <defs>
              <linearGradient id="portfolio" x1="0" y1="0" x2="0" y2="1">
                <stop offset="5%" stopColor="#3B82F6" stopOpacity={0.8} />
                <stop offset="95%" stopColor="#3B82F6" stopOpacity={0} />
              </linearGradient>
            </defs>

            <CartesianGrid stroke="#27272A" />

            <XAxis
              dataKey="month"
              stroke="#A1A1AA"
            />

            <YAxis stroke="#A1A1AA" />

            <Tooltip />

            <Area
              type="monotone"
              dataKey="value"
              stroke="#3B82F6"
              strokeWidth={3}
              fill="url(#portfolio)"
            />
          </AreaChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
}
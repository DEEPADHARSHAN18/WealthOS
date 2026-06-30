"use client";

import { useEffect, useState } from "react";
import { TrendingUp } from "lucide-react";
import { getGoldPrice } from "@/services/goldService";

export default function LivePriceCard() {
  const [price, setPrice] = useState("Loading...");
  const [updated, setUpdated] = useState("");

  async function loadPrice() {
    const data = await getGoldPrice();

    if (data) {
      setPrice(`₹${Number(data.price).toFixed(2)}/g`);

      const time = new Date(data.updated).toLocaleTimeString();

      setUpdated(time);
    }
  }

  useEffect(() => {
    loadPrice();

    const interval = setInterval(loadPrice, 10000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="rounded-2xl border border-zinc-800 bg-zinc-900 p-6">
      <div className="flex justify-between items-center">
        <div>
          <p className="text-zinc-400">
            Live Gold Price
          </p>

          <h2 className="text-3xl font-bold text-white mt-2">
            {price}
          </h2>
        </div>

        <span className="text-4xl">
          🥇
        </span>
      </div>

      <div className="flex items-center gap-2 text-green-400 mt-5">
        <TrendingUp size={18} />

        Live
      </div>

      <p className="text-xs text-zinc-500 mt-3">
        Updated {updated}
      </p>
    </div>
  );
}
import {
  LayoutDashboard,
  Briefcase,
  Coins,
  ChartCandlestick,
  Landmark,
  BarChart3,
  Bot,
  Settings,
} from "lucide-react";

const menu = [
  { name: "Dashboard", icon: LayoutDashboard },
  { name: "Portfolio", icon: Briefcase },
  { name: "Gold", icon: Coins },
  { name: "Stocks", icon: ChartCandlestick },
  { name: "Mutual Funds", icon: Landmark },
  { name: "Analytics", icon: BarChart3 },
  { name: "AI Assistant", icon: Bot },
  { name: "Settings", icon: Settings },
];

export default function Sidebar() {
  return (
    <aside className="w-72 min-h-screen bg-zinc-950 border-r border-zinc-800">
      <div className="p-6">
        <h1 className="text-3xl font-bold text-white">
          Wealth<span className="text-blue-500">OS</span>
        </h1>

        <p className="text-zinc-500 text-sm mt-1">
          AI Portfolio Manager
        </p>
      </div>

      <nav className="mt-6 px-3">
        {menu.map((item) => {
          const Icon = item.icon;

          return (
            <button
              key={item.name}
              className="flex items-center gap-4 w-full rounded-xl px-4 py-3 text-zinc-300 hover:bg-zinc-900 hover:text-white transition"
            >
              <Icon size={20} />
              <span>{item.name}</span>
            </button>
          );
        })}
      </nav>
    </aside>
  );
}
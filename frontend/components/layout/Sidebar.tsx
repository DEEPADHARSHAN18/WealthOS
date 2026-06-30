import Link from "next/link";
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
  { name: "Dashboard", href: "/", icon: LayoutDashboard },
  { name: "Portfolio", href: "/portfolio", icon: Briefcase },
  { name: "Gold", href: "/gold", icon: Coins },
  { name: "Stocks", href: "/stocks", icon: ChartCandlestick },
  { name: "Mutual Funds", href: "/mutual-funds", icon: Landmark },
  { name: "Analytics", href: "/analytics", icon: BarChart3 },
  { name: "AI Assistant", href: "/assistant", icon: Bot },
  { name: "Settings", href: "/settings", icon: Settings },
];

export default function Sidebar() {
  return (
    <aside className="w-72 min-h-screen bg-zinc-950 border-r border-zinc-800">
      <div className="p-6">
        <h1 className="text-3xl font-bold text-white">
          Wealth<span className="text-blue-500">OS</span>
        </h1>

        <p className="mt-1 text-sm text-zinc-500">
          AI Portfolio Manager
        </p>
      </div>

      <nav className="mt-6 px-3 space-y-2">
        {menu.map((item) => {
          const Icon = item.icon;

          return (
            <Link
              key={item.name}
              href={item.href}
              className="flex items-center gap-4 rounded-xl px-4 py-3 text-zinc-300 transition hover:bg-zinc-900 hover:text-white"
            >
              <Icon size={20} />
              <span>{item.name}</span>
            </Link>
          );
        })}
      </nav>
    </aside>
  );
}
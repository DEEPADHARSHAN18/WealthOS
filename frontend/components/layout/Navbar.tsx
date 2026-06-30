import { Bell, Moon, Search, User } from "lucide-react";

export default function Navbar() {
  return (
    <header className="flex items-center justify-between border-b border-zinc-800 bg-zinc-950 px-8 py-5">
      <div className="relative w-96">
        <Search
          size={18}
          className="absolute left-3 top-3 text-zinc-500"
        />

        <input
          placeholder="Search assets..."
          className="w-full rounded-xl bg-zinc-900 py-2 pl-10 pr-4 text-white outline-none"
        />
      </div>

      <div className="flex items-center gap-6 text-zinc-300">
        <Moon className="cursor-pointer" />
        <Bell className="cursor-pointer" />
        <User className="cursor-pointer" />
      </div>
    </header>
  );
}
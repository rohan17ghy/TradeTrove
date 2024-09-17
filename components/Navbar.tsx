import { Bell, Menu, User } from 'lucide-react'
import { Button } from "@/components/ui/button"

interface NavbarProps {
  isSidebarOpen: boolean;
  setIsSidebarOpen: React.Dispatch<React.SetStateAction<boolean>>;
}

export default function Navbar({ isSidebarOpen, setIsSidebarOpen }: NavbarProps) {
  return (
    <nav className="flex items-center justify-between p-2 bg-[#181818] border-b border-zinc-700">
      <div className="flex items-center justify-between w-[400px] px-2 py-1 text-xs">
        <div className="flex items-center space-x-2">
          <div>
            <span className="font-semibold text-zinc-300 uppercase">Nifty</span>
            <span className="ml-1 font-bold text-green-400">18,245.30</span>
          </div>
          <span className="text-[10px] text-zinc-400">+120.25 (+0.66%)</span>
        </div>
        <div className="flex items-center space-x-2">
          <div>
            <span className="font-semibold text-zinc-300 uppercase">Sensex</span>
            <span className="ml-1 font-bold text-red-400">61,123.45</span>
          </div>
          <span className="text-[10px] text-zinc-400">-87.30 (-0.14%)</span>
        </div>
      </div>
      <div className="flex items-center space-x-2">
        <Button variant="ghost" size="sm" className="text-zinc-300 hover:text-zinc-100 hover:bg-zinc-800">Dashboard</Button>
        <Button variant="ghost" size="sm" className="text-zinc-300 hover:text-zinc-100 hover:bg-zinc-800">Orders</Button>
        <Button variant="ghost" size="sm" className="text-zinc-300 hover:text-zinc-100 hover:bg-zinc-800">Holdings</Button>
        <Button variant="ghost" size="sm" className="text-zinc-300 hover:text-zinc-100 hover:bg-zinc-800">Positions</Button>
        <Button variant="ghost" size="sm" className="text-zinc-300 hover:text-zinc-100 hover:bg-zinc-800">Funds</Button>
        <Button variant="ghost" size="icon" className="text-zinc-300 hover:text-zinc-100 hover:bg-zinc-800">
          <Bell className="h-4 w-4" />
        </Button>
        <Button variant="ghost" size="icon" className="text-zinc-300 hover:text-zinc-100 hover:bg-zinc-800">
          <User className="h-4 w-4" />
        </Button>
      </div>
    </nav>
  )
}
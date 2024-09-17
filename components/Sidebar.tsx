import { Star } from 'lucide-react'
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { ScrollArea } from "@/components/ui/scroll-area"
import WatchlistTable from './WatchlistTable'
import { watchlistData } from '@/app/lib/data'

interface SidebarProps {
  isSidebarOpen: boolean;
}

export default function Sidebar({ isSidebarOpen }: SidebarProps) {
  return (
    <aside className={`w-[400px] bg-[#181818] transition-all duration-300 ease-in-out border-r border-zinc-700 ${isSidebarOpen ? 'translate-x-0' : '-translate-x-full'}`}>
      <ScrollArea className="h-full">
        <div className="p-2">
          {/* <div className="flex items-center justify-between mb-2">
            <h2 className="text-base font-semibold text-zinc-100">Watchlist</h2>
            <Button variant="ghost" size="sm" className="text-zinc-300 hover:text-zinc-100 hover:bg-zinc-800">
              <Star className="h-3 w-3 mr-1" />
              Create
            </Button>
          </div> */}
          <Input type="text" placeholder="Search" className="mb-2 h-7 text-xs bg-[#222222] border-zinc-700 text-zinc-100 placeholder-zinc-400" />
          <WatchlistTable data={watchlistData} />
        </div>
      </ScrollArea>
    </aside>
  )
}
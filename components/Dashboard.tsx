import { ScrollArea } from "@/components/ui/scroll-area"
import HoldingsTable from './HoldingsTable'
import { MarketOverview } from './MarketOverview'
import { RecentTransactions } from './RecentTransactions'
import { holdingsData } from '@/app/lib/data'

export default function Dashboard() {
  return (
    <main className="flex-1 bg-[#181818]">
      <ScrollArea className="h-full">
        <div className="p-4">
          <h2 className="text-xl font-bold mb-3 text-zinc-100">Dashboard</h2>
          
          <MarketOverview />

          <div className="grid grid-cols-1 md:grid-cols-3 gap-3 mb-6">
            <DashboardCard title="Equity" value="₹ 5,23,450.75" change="+₹ 12,350.25 (2.42%)" />
            <DashboardCard title="Margin Available" value="₹ 1,00,000.00" />
            <DashboardCard title="Day's P&L" value="₹ 7,525.50" valueColor="text-green-400" />
          </div>

          <RecentTransactions />

          <div className="bg-[#222222] rounded-lg shadow-md p-4">
            <h3 className="text-lg font-semibold mb-3 text-zinc-100">Holdings</h3>
            <HoldingsTable data={holdingsData} />
          </div>
        </div>
      </ScrollArea>
    </main>
  )
}

interface DashboardCardProps {
  title: string;
  value: string;
  change?: string;
  valueColor?: string;
}

function DashboardCard({ title, value, change, valueColor = "text-zinc-100" }: DashboardCardProps) {
  return (
    <div className="bg-[#222222] p-3 rounded-lg shadow-md">
      <h3 className="text-base font-semibold mb-1 text-zinc-300">{title}</h3>
      <p className={`text-lg font-bold ${valueColor}`}>{value}</p>
      {change && <p className="text-xs text-green-400">{change}</p>}
    </div>
  )
}
import { BarChart2, Trash2, MoreHorizontal, Layers } from 'lucide-react'
import { Button } from "@/components/ui/button"
import { Table, TableBody, TableCell, TableRow } from "@/components/ui/table"
import { WatchlistItem } from '@/app/types'

interface WatchlistTableProps {
  data: WatchlistItem[];
}

export default function WatchlistTable({ data }: WatchlistTableProps) {
  return (
    <Table>
      <TableBody>
        {data.map((item, index) => (
          <TableRow key={index} className="border-b border-zinc-700 group hover:bg-[#131415] transition-colors">
            <TableCell className={`text-xs py-2.5 pr-1 ${item.changePoints.startsWith('+') ? 'text-green-400' : 'text-red-400'}`}>
              {item.symbol}
            </TableCell>
            <TableCell className="p-0 relative">
              <div className="flex justify-end items-center py-2.5 pr-2">
                <span className={`text-xs w-16 text-right ${item.changePoints.startsWith('+') ? 'text-green-400' : 'text-red-400'}`}>
                  {item.changePoints}
                </span>
                <span className={`text-xs w-14 text-right ${item.changePoints.startsWith('+') ? 'text-green-400' : 'text-red-400'}`}>
                  {item.changePercent}
                </span>
                <span className={`text-xs w-20 text-right ${item.changePoints.startsWith('+') ? 'text-green-400' : 'text-red-400'}`}>
                  {item.ltp}
                </span>
              </div>
              <div className="absolute inset-y-0 right-2 flex items-center space-x-1 opacity-0 group-hover:opacity-100 transition-opacity">
                <ActionButton icon={Layers} />
                <ActionButton icon={BarChart2} />
                <ActionButton icon={Trash2} />
                <ActionButton icon={MoreHorizontal} />
              </div>
            </TableCell>
          </TableRow>
        ))}
      </TableBody>
    </Table>
  )
}

interface ActionButtonProps {
  icon: React.ElementType;
}

function ActionButton({ icon: Icon }: ActionButtonProps) {
  return (
    <Button variant="ghost" size="icon" className="h-7 w-7 p-1.5 bg-[#131415] border border-zinc-600">
      <Icon className="h-4 w-4" />
    </Button>
  )
}
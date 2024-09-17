import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"
import { HoldingsItem } from '@/app/types'

interface HoldingsTableProps {
  data: HoldingsItem[];
}

export default function HoldingsTable({ data }: HoldingsTableProps) {
  return (
    <Table>
      <TableHeader>
        <TableRow className="border-b border-zinc-700 hover:bg-[#131415] transition-colors">
          <TableHead className="text-zinc-400 text-xs">Symbol</TableHead>
          <TableHead className="text-zinc-400 text-right text-xs">Qty</TableHead>
          <TableHead className="text-zinc-400 text-right text-xs">Avg. Cost</TableHead>
          <TableHead className="text-zinc-400 text-right text-xs">LTP</TableHead>
          <TableHead className="text-zinc-400 text-right text-xs">P&L</TableHead>
        </TableRow>
      </TableHeader>
      <TableBody>
        {data.map((item, index) => (
          <TableRow key={index} className="border-b border-zinc-700 hover:bg-[#131415] transition-colors">
            <TableCell className="text-zinc-100 text-xs">{item.symbol}</TableCell>
            <TableCell className="text-zinc-100 text-right text-xs">{item.qty}</TableCell>
            <TableCell className="text-zinc-100 text-right text-xs">{item.avgCost}</TableCell>
            <TableCell className="text-zinc-100 text-right text-xs">{item.ltp}</TableCell>
            <TableCell className="text-green-400 text-right text-xs">{item.pnl}</TableCell>
          </TableRow>
        ))}
      </TableBody>
    </Table>
  )
}
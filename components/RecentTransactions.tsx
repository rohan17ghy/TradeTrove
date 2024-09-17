import React from 'react';
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"
import { recentTransactionsData } from '@/app/lib/data'

interface Transaction {
  id: string;
  date: string;
  stock: string;
  type: 'BUY' | 'SELL';
  quantity: number;
  price: string;
}

export const RecentTransactions: React.FC = () => {
  return (
    <div className="bg-[#222222] rounded-lg shadow-md p-4">
      <h3 className="text-lg font-semibold mb-3 text-zinc-100">Recent Transactions</h3>
      <Table>
        <TableHeader>
          <TableRow className="border-b border-zinc-700 hover:bg-[#131415] transition-colors">
            <TableHead className="text-zinc-400 text-xs">Date</TableHead>
            <TableHead className="text-zinc-400 text-xs">Symbol</TableHead>
            <TableHead className="text-zinc-400 text-xs">Type</TableHead>
            <TableHead className="text-zinc-400 text-right text-xs">Qty</TableHead>
            <TableHead className="text-zinc-400 text-right text-xs">Price</TableHead>
            <TableHead className="text-zinc-400 text-right text-xs">Value</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {recentTransactionsData.map((item, index) => (
            <TableRow key={index} className="border-b border-zinc-700 hover:bg-[#131415] transition-colors">
              <TableCell className="text-zinc-100 text-xs">{item.date}</TableCell>
              <TableCell className="text-zinc-100 text-xs">{item.symbol}</TableCell>
              <TableCell className={`text-xs ${item.type === 'BUY' ? 'text-green-400' : 'text-red-400'}`}>{item.type}</TableCell>
              <TableCell className="text-zinc-100 text-right text-xs">{item.qty}</TableCell>
              <TableCell className="text-zinc-100 text-right text-xs">{item.price}</TableCell>
              <TableCell className="text-zinc-100 text-right text-xs">{item.value}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </div>
  );
};
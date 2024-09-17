import React from 'react';
import { ArrowUpRight, ArrowDownRight } from 'lucide-react';

interface MarketIndexProps {
  name: string;
  value: string;
  change: string;
  isPositive: boolean;
}

const MarketIndex: React.FC<MarketIndexProps> = ({ name, value, change, isPositive }) => (
  <div className="flex flex-col items-start p-3 bg-[#222222] rounded-lg">
    <span className="text-sm text-zinc-400">{name}</span>
    <span className="text-lg font-bold text-zinc-100">{value}</span>
    <div className={`flex items-center ${isPositive ? 'text-green-400' : 'text-red-400'}`}>
      {isPositive ? <ArrowUpRight size={16} /> : <ArrowDownRight size={16} />}
      <span className="text-sm ml-1">{change}</span>
    </div>
  </div>
);

export const MarketOverview: React.FC = () => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-6">
      <MarketIndex name="NIFTY 50" value="17,856.50" change="↑ 86.40 (0.49%)" isPositive={true} />
      <MarketIndex name="SENSEX" value="59,832.97" change="↑ 303.15 (0.51%)" isPositive={true} />
      <MarketIndex name="BANK NIFTY" value="41,559.40" change="↓ 123.45 (0.30%)" isPositive={false} />
    </div>
  );
};
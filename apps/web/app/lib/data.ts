import { WatchlistItem, HoldingsItem } from '../types';

export const watchlistData: WatchlistItem[] = [
  { symbol: 'RELIANCE', changePoints: '+30.25', changePercent: '+1.25%', ltp: '2,456.75' },
  { symbol: 'TCS', changePoints: '-24.30', changePercent: '-0.75%', ltp: '3,210.50' },
  { symbol: 'HDFC BANK', changePoints: '+7.65', changePercent: '+0.50%', ltp: '1,543.20' },
  { symbol: 'INFOSYS', changePoints: '-15.20', changePercent: '-1.10%', ltp: '1,367.80' },
  { symbol: 'ITC', changePoints: '+6.20', changePercent: '+2.30%', ltp: '275.60' },
  { symbol: 'ICICI BANK', changePoints: '+7.50', changePercent: '+0.80%', ltp: '945.30' },
];

export const holdingsData: HoldingsItem[] = [
  { symbol: 'RELIANCE', qty: 100, avgCost: '2,100.00', ltp: '2,456.75', pnl: '+35,675.00' },
  { symbol: 'TCS', qty: 50, avgCost: '3,150.00', ltp: '3,210.50', pnl: '+3,025.00' },
  { symbol: 'HDFC BANK', qty: 75, avgCost: '1,500.00', ltp: '1,543.20', pnl: '+3,240.00' },
];

export const recentTransactionsData = [
    { date: '2023-05-15', symbol: 'RELIANCE', type: 'BUY', qty: 50, price: '2,450.00', value: '1,22,500.00' },
    { date: '2023-05-14', symbol: 'TCS', type: 'SELL', qty: 25, price: '3,200.00', value: '80,000.00' },
    { date: '2023-05-13', symbol: 'HDFC BANK', type: 'BUY', qty: 30, price: '1,540.00', value: '46,200.00' },
    { date: '2023-05-12', symbol: 'INFOSYS', type: 'SELL', qty: 40, price: '1,370.00', value: '54,800.00' }
  ]
export interface WatchlistItem {
    symbol: string;
    changePoints: string;
    changePercent: string;
    ltp: string;
}

export interface HoldingsItem {
    symbol: string;
    qty: number;
    avgCost: string;
    ltp: string;
    pnl: string;
}
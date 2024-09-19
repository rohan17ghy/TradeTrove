import fyers from "@/fyers/fyersModel";
import { Resolution } from "@/types/fyersTypes";

class FyersService {
    static async getHistoryData(symbol: string, resolution: Resolution, from: number) {
        const to = Math.floor(Date.now() / 1000);
    const response = await fyers.getHistory({ symbol, resolution, from, to });
        return response.data;
    }
}

export { FyersService };
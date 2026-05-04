//import fyers from "@/fyers/fyersModel";
import { Resolution } from "@/packages/types/fyersTypes";
import { AxiosHeaders } from 'axios'

class FyersService {
    static async getHistoryData(symbol: string, resolution: Resolution, from: number) {
        const to = Math.floor(Date.now() / 1000);
        
        //var api = new fyers.Api(process.env.FYERS_APP_ID ?? "", process.env.FYERS_ACCESS_TOKEN ?? "");
        const auth: Authorization = { 
            appId: "WB23R49T1G-100",
            accessToken: "eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJpc3MiOiJhcGkuZnllcnMuaW4iLCJpYXQiOjE3MjY4OTgwMTEsImV4cCI6MTcyNjk2NTAzMSwibmJmIjoxNzI2ODk4MDExLCJhdWQiOlsieDowIiwieDoxIiwieDoyIiwiZDoxIiwiZDoyIiwieDoxIiwieDowIl0sInN1YiI6ImFjY2Vzc190b2tlbiIsImF0X2hhc2giOiJnQUFBQUFCbTdsOWJKMTBINkVOWXlULS16Mmt6cFp4R0l4WTBPb1NEaUV6T1drVjI1RTNYc2h0SUMwak1CQm5zemxjZ21USWNwMmc5ZUJrYWhhSlM0Wmkzdm1ueWQ5WXNNSTdNdmc3ajRqUXpDTXNlRjdnTDZ6cz0iLCJkaXNwbGF5X25hbWUiOiJERUJPUFJJWUEgQkhBVFRBQ0hBUkpFRSIsIm9tcyI6IksxIiwiaHNtX2tleSI6IjQwYWI2OWIxMjkzOTgwMDc1YTQ2MTdhZDVmNDc0ZTIwMWRhMzA0OTQwOWUxYWMzYThmYmFmYzk1IiwiZnlfaWQiOiJYRDE2NTIyIiwiYXBwVHlwZSI6MTAwLCJwb2FfZmxhZyI6Ik4ifQ.p7S7bxCjvxUaIeyF-5u9RAalplyxtN945qTX-Mp4Ia0"
        }
        console.log(auth);
        const options: GetMarketHistory = {
            symbol,
            resolution,
            date_format: 1,
            range_from: from.toString(),
            range_to: to.toString(),
            cont_flag: "1"
        }
        const response = await fyers.getMarketHistory(auth, options)
        return response;
    }
}

export { FyersService };
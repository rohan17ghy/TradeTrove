const fyersAPI = require('fyers-api-v3');
import axios from 'axios';

async function refreshAccessToken() {
    try {
        const response = await axios.post('https://api-t1.fyers.in/api/v3/validate-refresh-token', {
            grant_type: "refresh_token",
            appIdHash: process.env.APP_ID_HASH,
            refresh_token: process.env.REFRESH_TOKEN,
            pin: process.env.PIN
        });

        const { s, access_token } = response.data;

        if (s === 'ok') {
            process.env.ACCESS_TOKEN = access_token;
            console.log('Access token refreshed');
        } else {
            throw new Error('Failed to refresh access token, maybe refresh token is expired');
        }
    } catch (error) {
        console.error('Error refreshing access token, maybe refresh token is expired: ', (error as Error).message);
    }
}

const fyersModel = new fyersAPI.FyersModel();
refreshAccessToken();
fyersModel.setAppId(process.env.APP_ID);
fyersModel.setAccessToken(process.env.ACCESS_TOKEN);

export default fyersModel;

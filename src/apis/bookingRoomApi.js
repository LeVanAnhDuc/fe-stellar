import axios from './axiosConfig.js';

const getTotalPrices = async (params) => {
    // params truyền theo object
    // Các thuộc tính
    // const { checkinDate, checkoutDate, typeRoom, quantity, acreage, typeBed, view, prices } = params;
    try {
        const response = await axios.get('/booking-room/get-transaction-history', {
            params,
        });
        return response;
    } catch (error) {
        throw error;
    }
};

const getTransactionHistory = async () => {
    try {
        const response = await axios.get('/booking-room/get-transaction-history');
        return response;
    } catch (error) {
        throw error;
    }
};

export default { getTotalPrices, getTransactionHistory };

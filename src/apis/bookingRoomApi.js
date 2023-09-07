/* eslint-disable import/no-anonymous-default-export */
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

const getTransactionHistory = async (page, size) => {
    try {
        const response = await axios.get(`/booking-room/get-transaction-history?page=${page}&size=${size}`);
        return response;
    } catch (error) {
        throw error;
    }
};

const getTotalTransactionHistory = async () => {
    try {
        const response = await axios.get('/booking-room/get-total-transaction-history');
        return response;
    } catch (error) {
        throw error;
    }
};

const bookingRoom = async ({checkinDate, checkoutDate, typeRoom, quantity, prices}) => {
    try {
        const response = await axios.post('/booking-room', {checkinDate, checkoutDate, typeRoom, quantity, prices});
        return response;
    } catch (error) {
        throw error;
    }
};

const payment = async (orderId, bankCode) => {
    try {
        const response = await axios.post('/booking-room/create_payment_url', {orderId, bankCode});
        return response;
    } catch (error) {
        throw error;
    }
};
export default { getTotalPrices, getTransactionHistory, getTotalTransactionHistory, bookingRoom, payment  };

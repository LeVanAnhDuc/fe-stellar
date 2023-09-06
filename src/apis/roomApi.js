import axios from './axiosConfig.js';

const getNumberAvailableRooms = async (params) => {
    try {
        const response = await axios.get('/room/get-number-available-rooms/', {params});
        return response.data;
    } catch (error) {
        throw error;
    }
}
export default {getNumberAvailableRooms};
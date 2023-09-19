import axios from './axiosConfig.js';

const getRoomType = async () => {
    try {
        const response = await axios.get('/type-room');
        console.log(response);
        return response;
    } catch (error) {
        throw error;
    }
};

const getRoomTypeById = async (params) => {
    try {
        const response = await axios.get('type-room/get-type-room-by-id/', { params });
        return response.data;
    } catch (error) {
        throw error;
    }
};
// eslint-disable-next-line import/no-anonymous-default-export
export default { getRoomType, getRoomTypeById };

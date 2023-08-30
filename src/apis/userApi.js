import axios from './axiosConfig.js';

const getProfile = async () => {
    try {
        const response = await axios.get('/user/profile');
        return response;
    } catch (error) {
        throw error;
    }
};

const updateProfile = async (email, userName, phoneNumber, gender, nationality) => {
    try {
        const response = await axios.patch('/user/update-profile', {
            email,
            userName,
            phoneNumber,
            gender,
            nationality,
        });
        return response;
    } catch (error) {
        throw error;
    }
};

const getUserName = async () => {
    try {
        const response = await axios.get('/user/get-name');
        return response;
    } catch (error) {
        throw error;
    }
};

export default { getProfile, updateProfile, getUserName };

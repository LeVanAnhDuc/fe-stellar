import axios from './axiosConfig.js';

export const register = async (email, password, phoneNumber) => {
    try {
        const reponse = await axios.post('/auth/register', {
            email,
            password,
            phoneNumber,
        });

        return reponse;
    } catch (error) {
        throw error;
    }
};

export const login = async (email, password) => {
    try {
        const response = await axios.post('/auth/login', {
            email,
            password,
        });

        const { data } = response.data;

        // Lưu accessToken và refreshToken vào localStorage
        localStorage.setItem('accessToken', data.accessToken);
        localStorage.setItem('refreshToken', data.prefreshToken);

        return response;
    } catch (error) {
        throw error;
    }
};

export const getUserName = async () => {
    try {
        const response = await axios.get('/user/get-name');
        return response;
    } catch (error) {
        throw error;
    }
};

export const logout = async () => {
    try {
        const response = await axios.post('/auth/logout');
        return response;
    } catch (error) {
        throw error;
    }
};

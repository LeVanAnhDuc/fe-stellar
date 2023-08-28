import axios from './axiosConfig.js';

export const login = async (email, password) => {
    try {
        const response = await axios.post('/auth/login', {
            email,
            password,
        });

        const { status, message, data } = response.data;
        // Lưu accessToken và refreshToken vào localStorage
        localStorage.setItem('token', data.accessToken);
        localStorage.setItem('refreshToken', data.refreshToken);

        return response.data;
    } catch (error) {
        throw error;
    }
};

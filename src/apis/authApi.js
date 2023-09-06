/* eslint-disable import/no-anonymous-default-export */
import axios from './axiosConfig.js';

const register = async (email, password, phoneNumber) => {
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

const login = async (email, password) => {
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

const logout = async () => {
    try {
        const response = await axios.post('/auth/logout');
        return response;
    } catch (error) {
        throw error;
    }
};

// Có token
const resetPass_SendOTP = async () => {
    try {
        const response = await axios.post('/auth/sendotp');
        return response;
    } catch (error) {
        throw error;
    }
};

const resetPass = async ( oldpass, newpass, checknewpass, otp) => {
    try {
        const response = await axios.post('/auth/resetpass', { oldpass, newpass, checknewpass, otp });
        return response;
    } catch (error) {
        throw error;
    }
};
// Không token
const forgotpass_SendOTP = async (email) => {
    try {
        const response = await axios.post('/auth/sendotp-forgotpass', { email });
        return response;
    } catch (error) {
        throw error;
    }
};

const forgotpass_CheckOTP = async (email, otp) => {
    try {
        const response = await axios.post('/auth/checkotp-forgotpass', { email, otp });
        return response;
    } catch (error) {
        throw error;
    }
};

const forgotpass = async (email, newpass, checknewpass) => {
    try {
        const response = await axios.post('/auth/forgetpass', { email, newpass, checknewpass });
        return response;
    } catch (error) {
        throw error;
    }
};

export default {
    register,
    login,
    logout,
    resetPass_SendOTP,
    resetPass,
    forgotpass_SendOTP,
    forgotpass_CheckOTP,
    forgotpass,
};

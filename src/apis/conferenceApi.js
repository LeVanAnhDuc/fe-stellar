import axios from './axiosConfig.js';

const createContact = async (name, email, phoneNumber, message) => {
    try {
        const response = await axios.post('/conference/create-contact', {
            name,
            email,
            phoneNumber,
            message,
        });

        return response;
    } catch (error) {
        throw error;
    }
}
export default {createContact};
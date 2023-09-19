import axios from './axiosConfig.js';
const getUtilities = async (params) => {
    try {
        const response = await axios.get('/utilities',{params});
        return response;
    } catch (error) {
        throw error;
    }
}
// eslint-disable-next-line import/no-anonymous-default-export
export default { getUtilities };
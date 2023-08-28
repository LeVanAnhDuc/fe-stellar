import axios from 'axios';

const instance = axios.create({
    baseURL: 'http://localhost:8080/',
    timeout: 300000, // Thời gian timeout cho mỗi request
    headers: {
        'Content-Type': 'application/json',
    },
});

// // Xử lý trước khi xuống server
// // Xử lý token và làm mới token khi cần
// instance.interceptors.request.use(
//     (config) => {
//         console.log('Trước khi request');

//         const token = localStorage.getItem('token'); // Lấy token từ localStorage
//         if (token) {
//             config.headers['Authorization'] = `Bearer ${token}`;
//         }
//         return config;
//     },
//     (error) => {
//         console.log('error: ', error);
//         return Promise.reject(error);
//     },
// );

// // Xử lý data sau khi response tử server
// instance.interceptors.response.use(
//     (response) => {
//         console.log('Sau khi reponse:::');
//         return response;
//     },
//     async (error) => {
//         const originalRequest = error.config;
//         // Kiểm tra lỗi xác thực (ví dụ: mã trạng thái 401)
//         if (error.response.status === 401 && !originalRequest._retry) {
//             originalRequest._retry = true;
//             try {
//                 // Gọi API làm mới token bằng refresh token
//                 const refreshToken = localStorage.getItem('refreshToken');
//                 const response = await axios.post('/refresh-token', { refreshToken });
//                 const newToken = response.data.accessToken;
//                 // Lưu token mới vào localStorage
//                 localStorage.setItem('token', newToken);
//                 // Thực hiện lại yêu cầu ban đầu với token mới
//                 originalRequest.headers['Authorization'] = `Bearer ${newToken}`;
//                 return axios(originalRequest);
//             } catch (refreshError) {
//                 // Xử lý lỗi làm mới token
//                 return Promise.reject(refreshError);
//             }
//         }
//         return Promise.reject(error);
//     },
// );

export default instance;

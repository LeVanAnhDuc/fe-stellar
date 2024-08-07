import axios from 'axios';

const instance = axios.create({
    baseURL: 'http://localhost:8080',
    // baseURL: 'https://stellarapi.onrender.com/',
    timeout: 300000, // Thời gian timeout cho mỗi request
    headers: {
        'Content-Type': 'application/json',
    },
});

const noToken = [
    '/auth/login',
    '/auth/prefresh-token',
    '/auth/sendotp-forgotpass',
    '/auth/checkotp-forgotpass',
    '/auth/forgetpass',
    '/type-room/',
    'type-room/get-type-room-by-id/',
    '/room/get-number-available-rooms/',
    '/room/get-parameters-room/',
];

instance.interceptors.request.use(
    async (config) => {
        if (
            noToken.some((item) => {
                if (config.url.indexOf(item) >= 0) {
                    return true;
                }
            })
        ) {
            return config;
        }

        const accessToken = localStorage.getItem('accessToken'); // Lấy token từ localStorage

        if (accessToken) {
            config.headers['Authorization'] = `Bearer ${accessToken}`;
        }

        return config;
    },
    (error) => {
        return Promise.reject(error);
    },
);

instance.interceptors.response.use(
    (response) => {
        return response;
    },
    async (error) => {
        const originalRequest = error.config;

        if (error.response.status === 401 && !originalRequest._retry) {
            originalRequest._retry = true;

            const refreshToken = localStorage.getItem('refreshToken');

            await instance
                .post('/auth/prefresh-token', { token: refreshToken })
                .then((refreshResponse) => {
                    const { data } = refreshResponse.data;

                    // Update tokens in localStorage

                    localStorage.setItem('accessToken', data.accessToken);

                    // Retry the original request with the new token
                    originalRequest.headers['Authorization'] = `Bearer ${data.accessToken}`;
                    return instance(originalRequest);
                })
                .catch((error) => {
                    return Promise.reject(error);
                });
        } else {
            return Promise.reject(error);
        }
    },
);

export default instance;

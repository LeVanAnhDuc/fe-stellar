import { configureStore } from '@reduxjs/toolkit';
import SignInUser from '../pages/SignIn/signInSlice';
import HeaderSlice from '../Layouts/components/Header/HeaderSlice';

// Khôi phục trạng thái từ Local Storage (nếu có)
const persistedState = localStorage.getItem('reduxState') ? JSON.parse(localStorage.getItem('reduxState')) : {};

const store = configureStore({
    reducer: {
        signInUser: SignInUser.reducer,
        headerSlice: HeaderSlice.reducer,
    },
    preloadedState: persistedState,
});

store.subscribe(() => {
    // Lưu trạng thái mới vào Local Storage sau khi Redux store thay đổi
    localStorage.setItem('reduxState', JSON.stringify(store.getState()));
});

export default store;

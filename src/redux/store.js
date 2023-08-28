import { configureStore } from '@reduxjs/toolkit';
import SignInUser from '../pages/SignIn/signInSlice';

const store = configureStore({
    reducer: { signInUser: SignInUser.reducer },
});

export default store;

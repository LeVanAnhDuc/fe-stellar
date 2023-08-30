import { createSlice } from '@reduxjs/toolkit';

const SignInUser = createSlice({
    name: 'signInUser',
    initialState: {
        user: null,
    },
    reducers: {
        setSignInUser: (state, action) => {
            state.user = action.payload;
        },
    },
});

export default SignInUser;

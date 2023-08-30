import { createSlice } from '@reduxjs/toolkit';

const initialState = {
    isSignIn: false,
};

const HeaderSlice = createSlice({
    name: 'headerSlice',
    initialState,
    reducers: {
        setIsSignIn: (state, action) => {
            state.isSignIn = action.payload;
        },
    },
});

export const { setIsSignIn } = HeaderSlice.actions;
export default HeaderSlice;

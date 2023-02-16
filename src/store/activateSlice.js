import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    name:'',
    avatar: ''
}

export const activeSlice = createSlice({
    name: 'activate',
    initialState,
    reducers: {
        setName: (state, action) => {
            state.name = action.payload
        },
        setAvatar: (state, action) => {
            state.avatar = action.payload;
        },
    }
})

export const { setName, setAvatar } = activeSlice.actions

export default activeSlice.reducer
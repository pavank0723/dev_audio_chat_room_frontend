import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    isAuth : false,
    user : null
}

export const authSlice = createSlice({
    name:'auth',
    initialState,
    reducers:{
        setAuth:(state,actions) =>{
            //
        }
    }
})

export const {setAuth} = authSlice.actions

export default authSlice.reducer
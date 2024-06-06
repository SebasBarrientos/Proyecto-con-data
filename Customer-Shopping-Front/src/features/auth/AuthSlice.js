import {createAsyncThunk, createSlice} from "@reduxjs/toolkit";
import authService from './AuthService'


const user = JSON.parse(localStorage.getItem("user")) || null;


const initialState = {
    user: user,
    isSuccess: false,
    isError: false,
    msg: "",
};


export const getAll = createAsyncThunk("users/getAll", async (id) => {
    try {
      return await authService.getAll(id);
    } catch (error) {
      console.log(error);
      throw error;
    }
  }
);

const authSlice = createSlice({
    name: "auth",
    initialState,
    reducers: {
        reset: (state) =>{
            state.isSuccess = false;
            state.isError = false; 
            state.msg = "";
        }
    },
    extraReducers: (builder)=>{
        builder
        .addCase(getAll.fulfilled,(state,action)=>{
            state.user = action.payload.user
        })
    } 

});




export default authSlice.reducer;
export const { reset } = authSlice.actions;
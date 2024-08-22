import { createAsyncThunk, createSlice } from "@reduxjs/toolkit"
import axios from "axios";

const initialState :any = {
    restuarent:[],
    status : false,
    error: ""
}

export const getRestaurent = createAsyncThunk('restuarent/getRestaurent', async({latitude, longitude}: any)=>{
    try {
        console.log(latitude, longitude);
        const response = await axios.get(`https://foodfire.onrender.com/api/restaurants?lat=21.1702401&lng=72.83106070000001&page_type=DESKTOP_WEB_LISTING`)        
        const data = response.data?.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle?.restaurants;                     
        return data
    } catch (error :any) {
        console.log(error);
        
        return error.message;
    }
})

const restuarentSlice = createSlice({
    name:'restuarent',
    initialState,
    reducers:{
        setUserId: (state,action) =>{            
            state.userId = action.payload
        }
    },
    extraReducers(builder) {
        builder.addCase(getRestaurent.pending, (state, action) => {
            state.status = false;
        })
        builder.addCase(getRestaurent.fulfilled, (state, action) => {
            state.status = true;            
            state.restuarent = action.payload;
        })
        builder.addCase(getRestaurent.rejected, (state, action) =>{
            state.status = false;
            state.error = action.error.message 
        })
    },
})

export const restuarentList = (state :any) => state.restaurent.restuarent

export default restuarentSlice.reducer

import { createSlice } from "@reduxjs/toolkit";

export const alldata=createSlice({
    name:"alldata",
    initialState:{
        value:{sale:0,
        credit:0,
        cash:0,
        tech:0,
        ref:0,
        noreports:0
    }
    },
    reducers:{
        getdata:(state,action)=>{
            state.value=action.payload
        }
    }
})

export default alldata.reducer
export const {getdata}=alldata.actions
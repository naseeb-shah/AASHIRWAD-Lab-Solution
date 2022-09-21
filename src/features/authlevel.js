
import { createSlice } from "@reduxjs/toolkit";

export const Authlavel=createSlice({
    name:"authlevel",
    initialState:{
        value:{
            'addreport':'none',
            'labstatas':'none',
            'reports':'none',
            'name':"",
            'role':''
        }
    },
    reducers:{
      
        Setuser:(state,action)=>{

            state.value=action.payload

        },
        loguser:(state,action)=>{

            state.value={
                'addreport':'none',
                'labstatas':'none',
                'reports':'none',
                'name':'',
                'role':''
            }

        }

    }
})
export const {Setuser,loguser}=Authlavel.actions
export default Authlavel.reducer
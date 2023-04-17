import { createSlice } from '@reduxjs/toolkit'
import type { PayloadAction } from '@reduxjs/toolkit'

const PostContent=createSlice({
    name:"PostDb",
    initialState:[],
    reducers:{
        addpost:(state:any,action:PayloadAction<any>):any=>{
            return[...state,action.payload]
        }
    }
})

export const postuer=PostContent.reducer;
export const {addpost}=PostContent.actions;
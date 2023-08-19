import { createSlice } from '@reduxjs/toolkit'

const initialState = {
    familyUser: "" || null
}

const globalState = createSlice({
  name: "globalState",
  initialState,
  reducers: {
    createFamilyUser:(state:any, {payload}:any)=>{
        state.familyUser = payload
    },
    logOut:(state:any)=>{
        state.familyUser = null
    }
  }
});

export const {createFamilyUser,logOut} = globalState.actions

export default globalState.reducer
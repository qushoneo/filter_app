import { createSlice } from "@reduxjs/toolkit";

const toolkitSlcie = createSlice({
    name:"toolkit",
    initialState:{
        users: []
    },
    reducers:{
        addClientAction(state,action){
            state.users.push(action.payload)
        },
        deleteUserAction(state,action){
            console.log(state)
            state.users.filter(user => user.id !== action.payload)
        },
        sortState(state){
            state.users.sort((a,b) => {
                return a.surname < b.surname ? -1 : 1;
               })
        }
    }
})

export default toolkitSlcie.reducer
export const {addClientAction,deleteUserAction,sortState} = toolkitSlcie.actions
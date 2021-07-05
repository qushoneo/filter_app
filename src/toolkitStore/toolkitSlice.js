import { createSlice } from "@reduxjs/toolkit";
const toolkitSlice = createSlice({
  name: "toolkit",
  initialState: {
    users: [],
  },
  reducers: {
    addClientAction(state, action) {
      state.users.push(action.payload);
    },
    deleteUserAction(state, action) {
      state.users = state.users.filter((user) => user.id !== action.payload.id);
    },
    sortState(state) {
      state.users.sort((a, b) => {
        return a.name < b.name ? -1 : 1;
      });
    },
    clearState(state){
      state.users = []
    }
  },
});

export default toolkitSlice.reducer;
export const { addClientAction, deleteUserAction, sortState , clearState} =
  toolkitSlice.actions;

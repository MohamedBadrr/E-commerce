import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  name: "",
  email: "",
  isLogged: false,
};

const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    setUser: (state, action) => {
      const user = action.payload;
      state.email = user.email;
      state.name = user.name;
      state.isLogged = true;
    },
    deleteuser: (state, action) => {
      const user = action.payload;
      state.email = user.email;
      state.name = user.name;
      state.isLogged = false;
    },
  },
});

export default userSlice.reducer;
export const { setUser, deleteuser } = userSlice.actions;

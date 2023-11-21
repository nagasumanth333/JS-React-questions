// userSlice.js
import { createSlice } from "@reduxjs/toolkit";

const userSlice = createSlice({
  name: "user",
  initialState: {
    username: "",
    email: ""
  },
  reducers: {
    setUser: (state, action) => {
      const { username, email } = action.payload;
      state.username = username;
      state.email = email;
    }
  }
});

export const { setUser } = userSlice.actions;
export default userSlice.reducer;

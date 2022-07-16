import { createSlice } from "@reduxjs/toolkit";
const initialState = {
  name: null,
  email: null,
  loading: false,
  token: null
}

export const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    setUser: (state, action) => {
      state.name = action.payload.name;
      state.email = action.payload.email;
      state.token = action.payload.token;
    }
  }
});

export const { setUser } = userSlice.actions;
export default userSlice.reducer;
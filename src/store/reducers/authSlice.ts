import { createSlice } from "@reduxjs/toolkit";

// Initial state
const initialState = {
  user: null,
};

const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    login: (state, { payload }) => {
      console.log("Authentication payload :", payload);
      state.user = payload;
    },
  },
});

// reducer
const { actions, reducer } = authSlice;

// Export actions and reducer
export const { login } = actions;

export default reducer;

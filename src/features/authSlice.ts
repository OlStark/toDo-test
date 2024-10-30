import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface AuthState {
  isAuth: boolean;
}

const initialState: AuthState = {
  isAuth: !!localStorage.getItem("auth"),
};

const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    login: (
      state,
      action: PayloadAction<{ username: String; password: String }>
    ) => {
      if (
        action.payload.username === "admin" &&
        action.payload.password === "admin"
      ) {
        state.isAuth = true;
        localStorage.setItem("auth", "true");
      }
    },
    logout: (state) => {
      state.isAuth = false;
      localStorage.removeItem("auth");
    },
  },
});

export const { login, logout } = authSlice.actions;
export default authSlice.reducer;

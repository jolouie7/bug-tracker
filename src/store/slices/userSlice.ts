import { createSlice, PayloadAction } from "@reduxjs/toolkit";

export interface UserState {
  firstName: string;
  lastName: string;
  email: string;
}

// Define the initial state using that type
const initialState: UserState = {
  firstName: "",
  lastName: "",
  email: "",
};

/**
 * Create a slice as a reducer containing actions.
 */
export const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    setFirstName: (state, action: PayloadAction<string>) => {
      state.firstName = action.payload;
    },
    setLastName: (state, action: PayloadAction<string>) => {
      state.lastName = action.payload;
    },
    setEmail: (state, action: PayloadAction<string>) => {
      state.email = action.payload;
    },
  },
});

// A small helper of user state for `useSelector` function.
export const getUserState = (state: { user: UserState }) => state.user;

// Exports all actions
export const { setFirstName, setLastName, setEmail } = userSlice.actions;

export default userSlice.reducer;

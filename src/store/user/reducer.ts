import { createSlice } from "@reduxjs/toolkit";
import { login, logout } from "./actions";

import { IUserReducer } from "./interfaces";
import { logoutUserOperation, updateUserOperation } from "./operations";

const initialValues: IUserReducer = {
  user: null,
};

export const userStore = createSlice({
  name: 'user',
  initialState: initialValues,
  reducers: {
    updateUser: updateUserOperation,
  },
  extraReducers: builder => {
		builder.addCase(login.fulfilled, updateUserOperation).addCase(logout.fulfilled, logoutUserOperation);
	},
});

export const { updateUser } = userStore.actions;
export default userStore.reducer;

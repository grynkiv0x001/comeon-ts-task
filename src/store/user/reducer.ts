import { createSlice } from "@reduxjs/toolkit";
import { IUserReducer } from "./interfaces";

const initialValues: IUserReducer = {
  user: null,
};

export const userStore = createSlice({
  name: 'user',
  initialState: initialValues,
  reducers: {

  },
});

export default userStore.reducer;

import { createAsyncThunk } from "@reduxjs/toolkit";
import { toast } from "react-toastify";

import axios from '../../core/api/axios.instance';
import { API } from "../../core/api/server.api";
import { User, UserLogin, UserLogout } from "../../core/_models/User";
import { USER_LOGIN, USER_LOGOUT } from "../actions-types";

type LoginResponse = {
  data: {
    player: User,
  },
};

export const login = createAsyncThunk(USER_LOGIN, async (user: UserLogin): Promise<User | boolean> => {
  try {
    const { data }: LoginResponse = await axios.post(API.LOGIN, user);
    return { ...data.player, username: user.username };
  } catch (error) {
    toast('Name or password is invalid!');
    return false;
  }
});

export const logout = createAsyncThunk(USER_LOGOUT, async (user: UserLogout): Promise<void> => {
  try {
    const res = await axios.post(API.LOGOUT, user);
    return res.data;
  } catch (error) {
    toast('Cannot logout!');
  }
});

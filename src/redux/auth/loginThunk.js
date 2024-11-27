import { createAsyncThunk } from "@reduxjs/toolkit";
import { account } from "../appwrite/auth";

// Async thunk for login
export const loginThunk = createAsyncThunk(
  "auth/login",
  async ({ email, password }, thunkAPI) => {
    try {
      const session = await account.createEmailPasswordSession(email, password);
      return session;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  },
);

// Async thunk for checking session
export const checkSessionThunk = createAsyncThunk(
  "auth/checkSession",
  async (_, thunkAPI) => {
    try {
      const currentSession = await account.get();
      return currentSession;
    } catch (error) {
      return thunkAPI.rejectWithValue(null);
    }
  },
);

export const logoutThunk = createAsyncThunk(
  "auth/logout",
  async (_, thunkAPI) => {
    try {
      await account.deleteSession("current");
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  },
);

import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import authService from './authService';
const API_URL = 'http://localhost:5000';
// const API_URL = 'https://apply-oqvest-api.vercel.app';

const initialState = {
    user: null,
    loading: true,
    error: false,
    message: ""
}

export const login = createAsyncThunk(
    API_URL + "/auth/login",
    async (user, thunkApi) => {
        try {
            const res = await authService.login(user);
            if (res) {
                return res;
            } else {
                return thunkApi.rejectWithValue("Invalid email/password!");
            }
        } catch (error) {
            const message =
                (error.response &&
                    error.response.data &&
                    error.response.data.error.message) ||
                error.message ||
                error.toString();

            return thunkApi.rejectWithValue(message);
        }
    }
);

export const currentUser = createAsyncThunk(
    API_URL + "/user",
    async (refreshToken, thunkApi) => {
        try {
            const res = await authService.getUser(refreshToken);
            if (res) {
                return res;
            } else {
                return thunkApi.rejectWithValue("Invalid email/password!");
            }
        } catch (error) {
            const message =
                (error.response &&
                    error.response.data &&
                    error.response.data.error.message) ||
                error.message ||
                error.toString();
            return thunkApi.rejectWithValue(message);
        }
    }
);

export const authSlice = createSlice({
    name: 'auth',
    initialState,
    reducers: {
        login: (state, action) => {
            state.loading = true;
            state.error = false;
            state.user = action.payload;
            state.loading = false;
        },
        logout: (state, action) => {
            state.loading = true;
            state.user = null;
            state.error = false;
            state.loading = false;
            state.message = "";
            localStorage.removeItem("refreshToken");
            localStorage.removeItem("accessToken");
        }
    },
    extraReducers: (builder) => {
        builder
            .addCase(login.fulfilled, (state, action) => {
                state.user = action.payload.data;
            })
            .addCase(login.rejected, (state, action) => {
                state.user = null;
                state.error = true;
                state.loading = false;
                state.message = action.payload;
            })
            .addCase(currentUser.pending, (state, action) => {
                state.loading = true;
            })
            .addCase(currentUser.fulfilled, (state, action) => {
                state.user = action.payload.data;
                state.loading = false;
            })
            .addCase(currentUser.rejected, (state, action) => {
                state.user = null;
                state.error = true;
                state.loading = false;
                state.message = "Session Expired! Please Login!";
            })
    },
});
export const authActions = authSlice.actions;
export default authSlice.reducer;
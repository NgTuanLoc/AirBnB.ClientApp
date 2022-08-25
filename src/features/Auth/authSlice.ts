import { createSlice, PayloadAction } from '@reduxjs/toolkit';

import { loginThunk, registerThunk } from './authThunk';
import { IAuth } from '../../@types/Auth';

export interface IAuthState {
	isLoading: boolean;
	error: string;
	auth: IAuth | null;
	isAuthenticated: boolean;
	token: string;
	userType: 'ADMIN' | 'CLIENT' | '';
}

const initialState: IAuthState = {
	isLoading: false,
	error: '',
	isAuthenticated: false,
	auth: null,
	token: '',
	userType: '',
};

const authSlice = createSlice({
	name: 'Auth',
	initialState,
	reducers: {
		logout: (state: IAuthState) => {
			state.isAuthenticated = false;
			state.userType = '';
			state.token = '';
			state.auth = null;
			localStorage.removeItem('userLogin');
		},
	},
	extraReducers(builder) {
		builder.addCase(loginThunk.pending, (state) => {
			state.isLoading = true;
		});
		builder.addCase(loginThunk.fulfilled, (state, { payload }) => {
			state.isLoading = false;
			state.isAuthenticated = true;
			state.userType = payload.user.type;
			state.token = payload.token;
			state.auth = payload;
			state.error = '';
		});
		builder.addCase(loginThunk.rejected, (state, { payload }) => {
			state.isLoading = false;
			if (payload) {
				state.isAuthenticated = false;
				state.error = payload as string;
			}
		});
		builder.addCase(registerThunk.pending, (state) => {
			state.isLoading = true;
		});
		builder.addCase(registerThunk.fulfilled, (state, { payload }) => {
			state.isLoading = false;
			state.isAuthenticated = true;
			state.userType = payload.user.type;
			state.token = payload.token;
			state.auth = payload;
			state.error = '';
		});
		builder.addCase(registerThunk.rejected, (state, { payload }) => {
			state.isLoading = false;
			if (payload) {
				state.isAuthenticated = false;
				state.error = payload as string;
			}
		});
	},
});

export const { logout } = authSlice.actions;

export default authSlice.reducer;

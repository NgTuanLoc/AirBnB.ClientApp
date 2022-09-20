import { createSlice } from '@reduxjs/toolkit';

import { loginThunk, registerThunk } from './authThunk';
import { IAuth } from '../../@types/Auth';

export interface IAuthState {
	authStatus: 'PENDING' | 'UNAUTHORIZED' | 'SUCCESS';
	error: string;
	auth: IAuth | null;
}

const initialState: IAuthState = {
	authStatus: 'PENDING',
	error: '',
	auth: null,
};

const authSlice = createSlice({
	name: 'Auth',
	initialState,
	reducers: {
		logout: (state: IAuthState) => {
			state.auth = null;
			localStorage.removeItem('userLogin');
		},
	},
	extraReducers(builder) {
		builder.addCase(loginThunk.pending, (state) => {
			state.authStatus = 'PENDING';
		});
		builder.addCase(loginThunk.fulfilled, (state, { payload }) => {
			state.authStatus = 'SUCCESS';
			state.auth = payload;
			state.error = '';
		});
		builder.addCase(loginThunk.rejected, (state, { payload }) => {
			state.authStatus = 'UNAUTHORIZED';
			if (payload) {
				state.error = payload as string;
			}
		});
		builder.addCase(registerThunk.pending, (state) => {
			state.authStatus = 'PENDING';
		});
		builder.addCase(registerThunk.fulfilled, (state, { payload }) => {
			state.authStatus = 'SUCCESS';
			state.auth = payload;
			state.error = '';
		});
		builder.addCase(registerThunk.rejected, (state, { payload }) => {
			state.authStatus = 'UNAUTHORIZED';
			if (payload) {
				state.error = payload as string;
			}
		});
	},
});

export const { logout } = authSlice.actions;

export default authSlice.reducer;

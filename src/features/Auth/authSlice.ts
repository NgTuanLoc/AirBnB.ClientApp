import { createSlice } from '@reduxjs/toolkit';

import { loginThunk, registerThunk } from './authThunk';
import { IAuth } from '../../@types/Auth';

export interface IAuthState {
	isLoading: boolean;
	error: string;
	auth: IAuth | null;
	success: boolean;
}

const initialState: IAuthState = {
	isLoading: false,
	error: '',
	success: false,
	auth: null,
};

const authSlice = createSlice({
	name: 'Auth',
	initialState,
	reducers: {},
	extraReducers(builder) {
		builder.addCase(loginThunk.pending, (state) => {
			state.isLoading = true;
		});
		builder.addCase(loginThunk.fulfilled, (state, { payload }) => {
			state.isLoading = false;
			state.auth = payload;
			state.success = true;
		});
		builder.addCase(loginThunk.rejected, (state, { payload }) => {
			state.isLoading = false;
			if (payload) {
				state.success = false;
				state.error = payload as string;
			}
		});
		builder.addCase(registerThunk.pending, (state) => {
			state.isLoading = true;
		});
		builder.addCase(registerThunk.fulfilled, (state, { payload }) => {
			state.isLoading = false;
			state.success = true;
		});
		builder.addCase(registerThunk.rejected, (state, { payload }) => {
			state.isLoading = false;
			if (payload) {
				state.success = false;
				state.error = payload as string;
			}
		});
	},
});

export default authSlice.reducer;

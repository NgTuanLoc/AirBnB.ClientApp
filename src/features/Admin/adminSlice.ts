import { createSlice, PayloadAction } from '@reduxjs/toolkit';

import { updateRoomById, deleteRoomById } from './adminThunk';

export interface IAdminState {
	isAdmin: boolean;
	success: string;
	error: string;
	isLoading: boolean;
}

const initialState: IAdminState = {
	isAdmin: false,
	success: '',
	error: '',
	isLoading: false,
};

const adminSlice = createSlice({
	name: 'Admin',
	initialState,
	reducers: {
		bookingRoom: () => {},
	},
	extraReducers(builder) {
		builder.addCase(updateRoomById.pending, (state) => {
			state.isLoading = false;
		});
		builder.addCase(updateRoomById.fulfilled, (state, { payload }) => {
			state.isLoading = false;
			state.success = payload;
		});
		builder.addCase(updateRoomById.rejected, (state, { payload }) => {
			state.isLoading = false;
			state.error = payload as string;
		});
	},
});

export default adminSlice.reducer;

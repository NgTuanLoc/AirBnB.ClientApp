import { createSlice, PayloadAction } from '@reduxjs/toolkit';

export interface IAdminState {}

const initialState: IAdminState = {};

const adminSlice = createSlice({
	name: 'Admin',
	initialState,
	reducers: {
		bookingRoom: () => {},
	},
});

export default adminSlice.reducer;

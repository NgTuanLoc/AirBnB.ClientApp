import { createSlice, PayloadAction } from '@reduxjs/toolkit';

import { IRoom } from '../../@types/Room';
import {
	getRoomListByLocationID,
	getRoomDetailByID,
	bookRoomById,
} from './roomThunk';

export interface IRoomState {
	roomList: IRoom[];
	selectedRoom: IRoom | null;
	locationID: string;
	isLoading: boolean;
	error: string;
}

const initialState: IRoomState = {
	roomList: [],
	locationID: '61697f97efe193001c0a5b69',
	isLoading: false,
	error: '',
	selectedRoom: null,
};

const locationSlice = createSlice({
	name: 'room',
	initialState,
	reducers: {
		selectLocation: (state: IRoomState, action: PayloadAction<string>) => {
			state.locationID = action.payload;
		},
	},
	extraReducers(builder) {
		builder.addCase(getRoomListByLocationID.pending, (state) => {
			state.isLoading = true;
		});
		builder.addCase(getRoomListByLocationID.fulfilled, (state, { payload }) => {
			state.isLoading = false;
			state.roomList = payload;
		});
		builder.addCase(getRoomListByLocationID.rejected, (state, { payload }) => {
			state.isLoading = false;
			state.error = payload as string;
		});
		builder.addCase(getRoomDetailByID.pending, (state) => {
			state.isLoading = true;
		});
		builder.addCase(getRoomDetailByID.fulfilled, (state, { payload }) => {
			state.isLoading = false;
			state.selectedRoom = payload;
		});
		builder.addCase(getRoomDetailByID.rejected, (state, { payload }) => {
			state.isLoading = false;
			state.error = payload as string;
		});
		builder.addCase(bookRoomById.pending, (state) => {
			state.isLoading = true;
		});
		builder.addCase(bookRoomById.fulfilled, (state, { payload }) => {
			state.isLoading = false;
		});
		builder.addCase(bookRoomById.rejected, (state, { payload }) => {
			console.log(payload);

			state.isLoading = false;
			state.error = payload as string;
		});
	},
});

export const { selectLocation } = locationSlice.actions;

export default locationSlice.reducer;

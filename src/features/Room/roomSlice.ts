import { createSlice, PayloadAction } from '@reduxjs/toolkit';

import { IRoom } from '../../@types/Room';
import {
	getRoomListByLocationID,
	getRoomDetailByID,
	createNewRoom,
	bookRoomById,
} from './roomThunk';

export interface IRoomState {
	roomList: IRoom[];
	selectedRoom: IRoom | null;
	locationID: string;
	isLoading: boolean;
	successMsg: string;
	error: string;
}

const initialState: IRoomState = {
	roomList: [],
	locationID: '61697f97efe193001c0a5b69',
	isLoading: false,
	successMsg: '',
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
		// Get Room By Location Id
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

		// Get Room By Id
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

		// Book Room By Id
		builder.addCase(bookRoomById.pending, (state) => {
			state.isLoading = true;
		});

		builder.addCase(bookRoomById.fulfilled, (state, { payload }) => {
			state.isLoading = false;
			state.successMsg = payload;
		});
		builder.addCase(bookRoomById.rejected, (state, { payload }) => {
			state.isLoading = false;
			state.error = payload as string;
		});

		// Create Room
		builder.addCase(createNewRoom.pending, (state) => {
			state.isLoading = true;
		});
		builder.addCase(createNewRoom.fulfilled, (state, { payload }) => {
			state.isLoading = false;
			state.successMsg = payload;
		});
		builder.addCase(createNewRoom.rejected, (state, { payload }) => {
			state.isLoading = false;
			state.error = payload as string;
		});
	},
});

export const { selectLocation } = locationSlice.actions;

export default locationSlice.reducer;

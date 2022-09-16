import { createSlice, PayloadAction } from '@reduxjs/toolkit';

import { IRoom } from '../../@types/Room';
import {
	getAllRoom,
	getRoomListByLocationID,
	getRoomDetailByID,
	createNewRoom,
	bookRoomById,
	updateRoomById,
	deleteRoomById,
	uploadRoomImageById,
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
		// Get All Room
		builder.addCase(getAllRoom.pending, (state) => {
			state.isLoading = true;
		});
		builder.addCase(getAllRoom.fulfilled, (state, { payload }) => {
			state.isLoading = false;
			state.successMsg = 'get all room Success';
			state.roomList = payload;
		});
		builder.addCase(getAllRoom.rejected, (state, { payload }) => {
			state.isLoading = false;
			if (payload) {
				state.error = payload as string;
			}
		});

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

		// Update Room
		builder.addCase(updateRoomById.pending, (state) => {
			state.isLoading = true;
		});
		builder.addCase(updateRoomById.fulfilled, (state, { payload }) => {
			state.isLoading = false;
			state.successMsg = payload;
		});
		builder.addCase(updateRoomById.rejected, (state, { payload }) => {
			state.isLoading = false;
			state.error = payload as string;
		});

		// Delete Room By Id
		builder.addCase(deleteRoomById.pending, (state) => {
			state.isLoading = true;
		});
		builder.addCase(deleteRoomById.fulfilled, (state, { payload }) => {
			state.isLoading = false;
			state.successMsg = payload;
		});
		builder.addCase(deleteRoomById.rejected, (state, { payload }) => {
			state.isLoading = false;
			if (payload) {
				state.error = payload as string;
			}
		});

		// Upload Room Image By Id
		builder.addCase(uploadRoomImageById.pending, (state) => {
			state.isLoading = true;
		});
		builder.addCase(uploadRoomImageById.fulfilled, (state, { payload }) => {
			state.isLoading = false;
			state.successMsg = payload;
		});
		builder.addCase(uploadRoomImageById.rejected, (state, { payload }) => {
			state.isLoading = false;
			if (payload) {
				state.error = payload as string;
			}
		});
	},
});

export const { selectLocation } = locationSlice.actions;

export default locationSlice.reducer;

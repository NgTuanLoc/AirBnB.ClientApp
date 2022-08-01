import { createSlice, PayloadAction } from '@reduxjs/toolkit';

import { IRoom } from '../../@types/Room';
import { getRoomListByLocationID } from './roomThunk';

export interface IRoomState {
	roomList: IRoom[];
	locationID: string;
	isLoading: boolean;
	error: string;
}

const initialState: IRoomState = {
	roomList: [],
	locationID: '61697f97efe193001c0a5b69',
	isLoading: false,
	error: '',
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
			// state.error = payload as string;
		});
	},
});

export const { selectLocation } = locationSlice.actions;

export default locationSlice.reducer;

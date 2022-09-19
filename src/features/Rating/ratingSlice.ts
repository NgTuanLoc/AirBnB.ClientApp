import { createSlice } from '@reduxjs/toolkit';

import { IRating } from '../../@types/Rating';
import { getReviewListByRoomId } from './ratingThunk';

export interface IRatingState {
	ratingList: IRating[];
	isLoading: boolean;
	error: string;
}

const initialState: IRatingState = {
	ratingList: [],
	isLoading: false,
	error: '',
};

const locationSlice = createSlice({
	name: 'rating',
	initialState,
	reducers: {},
	extraReducers(builder) {
		builder.addCase(getReviewListByRoomId.pending, (state) => {
			state.isLoading = true;
		});
		builder.addCase(getReviewListByRoomId.fulfilled, (state, { payload }) => {
			state.isLoading = false;
			state.ratingList = payload;
		});
		builder.addCase(getReviewListByRoomId.rejected, (state, { payload }) => {
			state.isLoading = false;
			if (payload) {
				state.error = payload as string;
			}
		});
	},
});

// export const { selectLocation } = locationSlice.actions;

export default locationSlice.reducer;

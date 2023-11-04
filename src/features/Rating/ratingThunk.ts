import { createAsyncThunk } from '@reduxjs/toolkit';

import { axiosInstance } from '../../utils';
import { IRating } from '../../@types/Rating';
// import { RootState } from '../../app/store';

const URL = '/api/v1/reviews';

const getReviewListByRoomId = createAsyncThunk<IRating[], string>(
	'rating/getLocationListByRoomId',
	async (roomId, thunkAPI) => {
		try {
			const params = {
				method: 'GET',
				url: `${URL}/byRoom?roomId=${roomId}`,
			};

			const response = await axiosInstance.request(params);
			return response.data;
		} catch (error: any) {
			return thunkAPI.rejectWithValue('Failed to get review list');
		}
	}
);

export { getReviewListByRoomId };

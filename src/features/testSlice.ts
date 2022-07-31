import { createSlice } from '@reduxjs/toolkit';

const initialState = {};

const testSlice = createSlice({
	name: 'test',
	initialState,
	reducers: {
		test: () => {
			console.log('Hello');
		},
	},
});

export default testSlice.reducer;

import { createSlice, PayloadAction } from '@reduxjs/toolkit';

import { IUser } from '../../@types/User';

export interface IUserState {
	UserList: IUser[];
	successMsg: string;
	error: string;
	isLoading: boolean;
}

const initialState: IUserState = {
	UserList: [],
	successMsg: '',
	error: '',
	isLoading: false,
};

const userSlice = createSlice({
	name: 'User',
	initialState,
	reducers: {
		bookingRoom: () => {},
	},
	extraReducers(builder) {},
});

export default userSlice.reducer;

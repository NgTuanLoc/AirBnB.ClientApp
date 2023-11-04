import { createAsyncThunk } from '@reduxjs/toolkit';

import { axiosInstance } from '../../utils';
import { ILocation } from '../../@types/Location';
import { UNAUTHENTICATED, UNAUTHORIZED } from '../../constant/Error';
import { RootState } from '../../app/store';

const URL = '/api/v1/location';

const getLocationList = createAsyncThunk<ILocation[]>(
	'location/getLocationList',
	async (_, thunkAPI) => {
		try {
			const params = {
				method: 'GET',
				url: URL,
			};

			const response = await axiosInstance.request(params);
			return response.data;
		} catch (error: any) {
			return thunkAPI.rejectWithValue(error);
		}
	}
);

const getLocationById = createAsyncThunk<
	ILocation,
	string,
	{
		state: RootState;
	}
>('location/getLocationById', async (locationId, thunkAPI) => {
	try {
		const params = {
			method: 'GET',
			url: `${URL}/${locationId}`,
		};

		const response = await axiosInstance.request(params);
		return response.data;
	} catch (error: any) {
		return thunkAPI.rejectWithValue(error);
	}
});

const createLocation = createAsyncThunk<
	string,
	ILocation,
	{
		state: RootState;
	}
>('location/createLocation', async (locationDetail, thunkAPI) => {
	try {
		const { auth } = thunkAPI.getState().auth;

		if (!auth) return thunkAPI.rejectWithValue(UNAUTHENTICATED);

		const { roleList } = auth;

		if (roleList.includes('Admin'))
			return thunkAPI.rejectWithValue(UNAUTHORIZED);

		const { name, province, country } = locationDetail;

		const params = {
			method: 'POST',
			url: `${URL}`,
			data: { name, province, country },
		};

		await axiosInstance.request(params);

		return 'success create location';
	} catch (error) {
		return thunkAPI.rejectWithValue('Create Location failed');
	}
});

const updateLocationById = createAsyncThunk<
	string,
	ILocation,
	{
		state: RootState;
	}
>('location/updateLocationById', async (locationDetail, thunkAPI) => {
	try {
		const { auth } = thunkAPI.getState().auth;

		if (!auth) return thunkAPI.rejectWithValue(UNAUTHENTICATED);

		const { roleList } = auth;

		if (roleList.includes('Admin'))
			return thunkAPI.rejectWithValue(UNAUTHORIZED);

		const { name, province, country, id } = locationDetail;

		const params = {
			method: 'PUT',
			url: `${URL}/${id}`,
			data: { name, province, country },
		};

		await axiosInstance.request(params);

		return 'success update room';
	} catch (error) {
		return thunkAPI.rejectWithValue('Update Room failed');
	}
});

const deleteLocationById = createAsyncThunk<
	string,
	string,
	{
		state: RootState;
	}
>('location/deleteLocationById', async (locationId, thunkAPI) => {
	try {
		const { auth } = thunkAPI.getState().auth;

		if (!auth) return thunkAPI.rejectWithValue(UNAUTHENTICATED);

		const { roleList } = auth;

		if (roleList.includes('Admin'))
			return thunkAPI.rejectWithValue(UNAUTHORIZED);

		const params = {
			method: 'DELETE',
			url: `${URL}/${locationId}`,
		};

		await axiosInstance.request(params);

		return 'success delete location';
	} catch (error) {
		return thunkAPI.rejectWithValue('Delete Location failed');
	}
});

const uploadLocationImageById = createAsyncThunk<
	string,
	{ id: string; image: FormData },
	{
		state: RootState;
	}
>('location/uploadLocationImageById', async (location, thunkAPI) => {
	try {
		const { auth } = thunkAPI.getState().auth;
		const { id, image } = location;

		if (!auth) return thunkAPI.rejectWithValue(UNAUTHENTICATED);

		const { roleList } = auth;

		if (roleList.includes('Admin'))
			return thunkAPI.rejectWithValue(UNAUTHORIZED);

		const params = {
			method: 'POST',
			url: `${URL}/upload-images/${id}`,
			headers: {
				'Content-Type': 'multipart/form-data',
			},
			data: image,
		};

		await axiosInstance.request(params);

		return 'Upload Location Image Successful';
	} catch (error) {
		return thunkAPI.rejectWithValue('Upload Location Image failed');
	}
});

export {
	getLocationList,
	getLocationById,
	createLocation,
	updateLocationById,
	deleteLocationById,
	uploadLocationImageById,
};

import { IUser } from './User';

interface IBooking {
	deleteAt: boolean;
	_id: string;
	checkIn: string;
	checkOut: string;
	userId: IUser | null;
	roomId: {
		deleteAt: boolean;
		_id: string;
		name: string;
		guests: number;
		bedRoom: number;
		bath: number;
		description: string;
		price: number;
		elevator: boolean;
		hotTub: boolean;
		pool: boolean;
		indoorFireplace: boolean;
		dryer: boolean;
		gym: boolean;
		kitchen: boolean;
		wifi: boolean;
		heating: boolean;
		cableTV: boolean;
		image: string;
		locationId: string;
	};
	__v: number;
}

export { IBooking };

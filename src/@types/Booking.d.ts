import { IUser } from './User';
import { IRoom } from './Room';

interface IBooking {
	deleteAt: boolean;
	id: string;
	checkIn: string;
	checkOut: string;
	userId: IUser | null;
	roomId: IRoom;
	__v: number;
}

export { IBooking };

import { IRoom } from './Room';
import { IUser } from './User';

interface IRating {
	deleteAt: boolean;
	_id: string;
	content: string;
	roomId: IRoom;
	userId: IUser;
	created_at: string;
	updatedAt: string;
	__v: number;
}

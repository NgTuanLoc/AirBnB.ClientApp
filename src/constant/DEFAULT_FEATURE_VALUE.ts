import { IRoom } from '../@types/Room';
import { ILocation } from '../@types/Location';
import { DEFAULT_IMAGE } from './DefaultImage';

const DEFAULT_LOCATION: ILocation = {
	deleteAt: false,
	_id: '',
	name: '',
	province: '',
	country: '',
	valueate: 0,
	__v: 0,
	image: DEFAULT_IMAGE,
};

const DEFAULT_ROOM: IRoom = {
	deleteAt: false,
	_id: '',
	name: '',
	guests: 0,
	bedRoom: 0,
	bath: 0,
	description: '',
	price: 0,
	elevator: false,
	hotTub: false,
	pool: false,
	indoorFireplace: false,
	dryer: false,
	gym: false,
	kitchen: false,
	wifi: false,
	heating: false,
	cableTV: false,
	locationId: DEFAULT_LOCATION,
	__v: 0,
	image: DEFAULT_IMAGE,
};

export { DEFAULT_ROOM };

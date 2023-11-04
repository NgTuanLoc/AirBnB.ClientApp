import { AiFillClockCircle, AiOutlineWarning } from 'react-icons/ai';
import { MdOutlinePets, MdOutlineAlarm } from 'react-icons/md';
import { BsFillDoorOpenFill } from 'react-icons/bs';
import { IoLogoNoSmoking } from 'react-icons/io5';
import { GiSparkles } from 'react-icons/gi';

import { IRoom } from '../@types/Room';
import { ILocation } from '../@types/Location';
import { DEFAULT_IMAGE } from './DefaultImage';

const USER_DATA: IUser = {
	id: '',
	email: '',
	personName: '',
	address: '',
	profileImage: '',
	description: '',
	isMarried: false,
	phoneNumber: '',
	roleList: ['User'],
};

const LOCATION_DATA: ILocation = {
	id: '',
	name: '',
	province: '',
	country: '',
	image: '',
};

const ROOM_DATA: IRoom = {
	id: '',
	name: '',
	homeType: '',
	location: LOCATION_DATA,
	price: 0,
	imageList: [],
	roomType: '',
	totalOccupancy: 0,
	totalBedrooms: 0,
	totalBathrooms: 0,
	summary: '',
	address: '',
	hasTV: false,
	hasKitchen: false,
	hasAirCon: false,
	hasHeating: false,
	hasInternet: false,
	latitude: 0,
	longitude: 0,
};

const USER_REVIEW = [
	{
		id: '1',
		avatar: 'https://randomuser.me/api/portraits/women/79.jpg',
		name: 'susan smith',
		review:
			'If you are in this place please stay at Panorama. It is a nice suite at 26th floor with beach view. You can walk to beach in 3 minutes. Doesn’t get better with this price.',
		created_at: '2022-05-20T12:29:58.194Z',
	},
	{
		id: '2',
		avatar: 'https://randomuser.me/api/portraits/men/12.jpg',
		name: 'peter jones',
		review:
			'Great place , great view , great price , and a fantastic host. Always there to help',
		created_at: '2022-05-20T12:14:46.072Z',
	},
	{
		id: '3',
		avatar: 'https://randomuser.me/api/portraits/women/14.jpg',
		name: 'anna johnson',
		review:
			'It was in the city center, so it was very convenient to go around, and the facilities were good.',
		created_at: '2022-05-20T19:11:09.633Z',
	},
	{
		id: '4',
		avatar: 'https://randomuser.me/api/portraits/women/63.jpg',
		name: 'Roberta Boyd',
		review: 'Very good',
		created_at: '2022-07-23T14:49:06.631Z',
	},
	{
		id: '5',
		avatar: 'https://randomuser.me/api/portraits/men/54.jpg',
		name: 'bill anderson',
		review:
			'We are very fortunate to be able to enjoy a room with a nice and tidy view at this price.',
		created_at: '2022-04-26T14:59:16.018Z',
	},
	{
		id: '6',
		avatar: 'https://randomuser.me/api/portraits/men/1.jpg',
		name: 'Henry Bell',
		review:
			'The location is good, quiet, and especially the bed is very comfortable.',
		created_at: '2022-04-26T15:44:10.530Z',
	},
];

const THINGS_TO_KNOW_DATA = [
	{
		title: 'House rules',
		list: [
			[<AiFillClockCircle key={1} />, 'Check-in: 3:00 PM - 11:00 PM'],
			[<BsFillDoorOpenFill key={2} />, 'Self check-in with building staff'],
			[<IoLogoNoSmoking key={3} />, 'No smoking'],
			[<MdOutlinePets key={4} />, 'Allow pets'],
		],
	},
	{
		title: 'Health & safety',
		list: [
			[<GiSparkles key={5} />, "Airbnb's COVID-19 safety practices apply"],
			[<AiOutlineWarning key={6} />, 'Carbon monoxide alarm'],
			[<MdOutlineAlarm key={7} />, 'Smoke alarm'],
		],
	},
	{
		title: 'Cancellation policy',
		list: [
			['This reservation is non-refundable.'],
			[
				`Review the Host’s full cancellation policy which applies even if you
		cancel for illness or disruptions caused by COVID-19.`,
			],
		],
	},
];

const DEFAULT_LOCATION: ILocation = {
	id: '',
	name: '',
	province: '',
	country: '',
	image: DEFAULT_IMAGE,
};

const DEFAULT_ROOM: IRoom = {
	id: '',
	name: '',
	price: 0,
	location: DEFAULT_LOCATION,
	imageList: [],
	homeType: '',
	roomType: '',
	totalOccupancy: 0,
	totalBedrooms: 0,
	totalBathrooms: 0,
	summary: '',
	address: '',
	hasTV: false,
	hasKitchen: false,
	hasAirCon: false,
	hasHeating: false,
	hasInternet: false,
	latitude: 0,
	longitude: 0,
};

export {
	USER_DATA,
	ROOM_DATA,
	LOCATION_DATA,
	USER_REVIEW,
	THINGS_TO_KNOW_DATA,
	DEFAULT_ROOM,
};

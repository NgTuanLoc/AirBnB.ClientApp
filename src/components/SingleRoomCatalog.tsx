import { useMediaQuery } from 'react-responsive';
import { AiOutlineHeart } from 'react-icons/ai';
import { FiShare } from 'react-icons/fi';

import Catalog from './Catalog';
import styled from 'styled-components';
import { useAppSelector } from '../hooks/hooks';
import Loading from './Loading';

const dummyImageData = [
	'https://airbnb.cybersoft.edu.vn/public/images/room/1634894280363_a4.jpg',
	'https://airbnb.cybersoft.edu.vn/public/images/room/1658146724696_put-together-a-perfect-guest-room-1976987-hero-223e3e8f697e4b13b62ad4fe898d492d.jpg',
	'https://airbnb.cybersoft.edu.vn/public/images/room/1634310414778_lahotelsaigon.jpg',
	'https://airbnb.cybersoft.edu.vn/public/images/room/1658166647257_NYC-1096x722.jpg',
];

const SingleRoomCatalog = () => {
	const { selectedRoom } = useAppSelector((store) => store.room);
	const isMobileDevice = useMediaQuery({
		query: '(max-width: 992px)',
	});

	if (!selectedRoom) return <Loading />;

	const { name, locationId, image } = selectedRoom;

	return (
		<Container>
			<h3 className='location-name'>
				{name}, {locationId ? locationId.name : 'not provided'},{' '}
				{locationId ? locationId.province : 'not provided'}
			</h3>
			<div className='title'>
				<h5>{locationId ? locationId.province : 'not provided'}</h5>
				<div className='sub-title'>
					<a className='flex-center' href='https://github.com/NgTuanLoc'>
						<FiShare /> <span>share</span>
					</a>
					<a className='flex-center' href='https://github.com/NgTuanLoc'>
						<AiOutlineHeart /> <span>save</span>
					</a>
				</div>
			</div>
			{isMobileDevice ? (
				<Catalog images={[...dummyImageData, image]} />
			) : (
				<div className='photos'>
					<img className='main-image' src={image} alt={name} />
					<img className='image-1' src={dummyImageData[0]} alt={name} />
					<img className='image-2' src={dummyImageData[1]} alt={name} />
					<img className='image-3' src={dummyImageData[2]} alt={name} />
					<img className='image-4' src={dummyImageData[3]} alt={name} />
				</div>
			)}
		</Container>
	);
};

const Container = styled.section`
	width: 100%;
	.title {
		display: flex;
		justify-content: space-between;
		align-items: center;

		h5 {
			font-size: 1.5rem;
			border-bottom: 1px solid black;
			font-weight: 450;
		}

		.sub-title {
			display: flex;
			justify-content: center;
			align-items: center;
			a {
				color: black;
				font-size: 1.5rem;
				margin-inline: 1rem;
				place-items: center;
				transition: var(--transition);
				padding: 0.5rem;
				border-radius: var(--radius);

				span {
					margin-left: 0.5rem;
					border-bottom: 1px solid black;
				}

				:hover {
					background-color: #f7f7f7;
				}
			}
		}
	}

	.photos {
		margin: 3rem auto;
		display: grid;
		grid-gap: 2rem;
		grid-template-columns: repeat(4, 1fr);
		grid-template-rows: repeat(2, 20rem);

		.main-image {
			grid-area: main;
		}
		.image-1 {
			grid-area: image-1;
		}
		.image-2 {
			grid-area: image-2;
		}
		.image-3 {
			grid-area: image-3;
		}
		.image-4 {
			grid-area: image-4;
		}

		grid-template-areas:
			'main main image-1 image-2'
			'main main image-3 image-4';

		img {
			border-radius: var(--radius);
		}
	}
`;

export default SingleRoomCatalog;

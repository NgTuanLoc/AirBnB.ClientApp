import styled from 'styled-components';
import { useParams } from 'react-router-dom';
import { useEffect, useState } from 'react';
import { FiShare } from 'react-icons/fi';
import { AiOutlineHeart, AiOutlineStar } from 'react-icons/ai';
import { GiPoolDive } from 'react-icons/gi';
import { MdOutlineFreeCancellation } from 'react-icons/md';
import moment from 'moment';
import { useMediaQuery } from 'react-responsive';

import imageLogo from '../images/image1.jpg';
import { useAppDispatch, useAppSelector } from '../hooks/hooks';
import { getRoomDetailByID } from '../features/Room/roomThunk';
import {
	Navbar,
	Footer,
	Calendar,
	Card,
	Loading,
	Catalog,
} from '../components';
import { logo } from '../constant/logo';

const dummyImageData = [
	'https://airbnb.cybersoft.edu.vn/public/images/room/1634894280363_a4.jpg',
	'https://airbnb.cybersoft.edu.vn/public/images/room/1658146724696_put-together-a-perfect-guest-room-1976987-hero-223e3e8f697e4b13b62ad4fe898d492d.jpg',
	'https://airbnb.cybersoft.edu.vn/public/images/room/1634310414778_lahotelsaigon.jpg',
	'https://airbnb.cybersoft.edu.vn/public/images/room/1658166647257_NYC-1096x722.jpg',
];

const SingleRoomPage = () => {
	const isMobileDevice = useMediaQuery({
		query: '(max-width: 992px)',
	});
	const { id } = useParams();
	const dispatch = useAppDispatch();
	const { selectedRoom, isLoading } = useAppSelector((store) => store.room);
	const [numberOfVisitNights, setNumberOfVisitNights] = useState(0);

	const [checkIn, setCheckIn] = useState<Date[]>([new Date(), new Date()]);

	useEffect(() => {
		const temp = checkIn[1]
			? Math.round(
					(checkIn[1].getTime() - checkIn[0].getTime()) / (1000 * 3600 * 24)
			  )
			: 0;
		setNumberOfVisitNights(temp);
	}, [checkIn]);

	useEffect(() => {
		dispatch(getRoomDetailByID(id as string));
	}, [dispatch, id]);

	if (isLoading || !selectedRoom) return <Loading />;

	const {
		image,
		name,
		locationId,
		guests,
		bedRoom,
		bath,
		elevator,
		hotTub,
		pool,
		indoorFireplace,
		dryer,
		gym,
		kitchen,
		wifi,
		heating,
		cableTV,
		price,
		description,
	} = selectedRoom;

	return (
		<>
			<Navbar />
			<Container className='section'>
				<h3 className='location-name'>
					{name}, {locationId.name}, {locationId.province}
				</h3>
				<div className='title'>
					<h5>{locationId.province}</h5>
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

				<div className='detail'>
					<div className='detail__info'>
						<div className='detail__title'>
							<div>
								<h4>{name}</h4>
								<p>
									{guests} guests &middot; {bedRoom} bedroom &middot; {bath}{' '}
									bath
								</p>
							</div>
							<img src={imageLogo} alt='logo' />
						</div>
						<div className='line'></div>
						{/* Description */}
						<div className='detail__description'>
							<div className='detail__description-item'>
								<GiPoolDive />
								<div>
									<h4>Dive right in</h4>
									<p>This is one of the few places in the area with a pool.</p>
								</div>
							</div>
							<div className='detail__description-item'>
								<AiOutlineStar />
								<div>
									<h4>Experienced host</h4>
									<p>Dorothy has 757 reviews for other places.</p>
								</div>
							</div>
							<div className='detail__description-item'>
								<MdOutlineFreeCancellation />
								<div>
									<h4>Free cancellation for 48 hours.</h4>
								</div>
							</div>
						</div>
						<div className='line'></div>
						{/* Sponsor */}
						<div className='detail__sponsor'>
							<img
								src='https://a0.muscache.com/im/pictures/54e427bb-9cb7-4a81-94cf-78f19156faad.jpg'
								alt='sponsor'
							/>
							<p>
								Every booking includes free protection from Host cancellations,
								listing inaccuracies, and other issues like trouble checking in.
							</p>
						</div>

						<div className='line'></div>
						{/* Comment */}
						<div className='detail__comment'>
							<h3>Description</h3>
							<p>{description}</p>
						</div>
						<div className='line'></div>
						{/* Offer */}
						<div className='detail__offer'>
							<h3>What this place offers</h3>
							<div className='detail__offer-container'>
								<div className='detail__offer-item'>
									<p className={`${kitchen ? '' : 'disable__offer'}`}>
										{logo['kitchen']} kitchen
									</p>
								</div>
								<div className='detail__offer-item'>
									<p className={`${elevator ? '' : 'disable__offer'}`}>
										{logo['elevator']} elevator
									</p>
								</div>
								<div className='detail__offer-item'>
									<p className={`${hotTub ? '' : 'disable__offer'}`}>
										{logo['hotTub']} hotTub
									</p>
								</div>
								<div className='detail__offer-item'>
									<p className={`${pool ? '' : 'disable__offer'}`}>
										{logo['pool']} pool
									</p>
								</div>
								<div className='detail__offer-item'>
									<p className={`${indoorFireplace ? '' : 'disable__offer'}`}>
										{logo['indoorFireplace']} indoorFireplace
									</p>
								</div>
								<div className='detail__offer-item'>
									<p className={`${dryer ? '' : 'disable__offer'}`}>
										{logo['dryer']} dryer
									</p>
								</div>
								<div className='detail__offer-item'>
									<p className={`${gym ? '' : 'disable__offer'}`}>
										{logo['gym']} gym
									</p>
								</div>
								<div className='detail__offer-item'>
									<p className={`${wifi ? '' : 'disable__offer'}`}>
										{logo['wifi']} wifi
									</p>
								</div>
								<div className='detail__offer-item'>
									<p className={`${heating ? '' : 'disable__offer'}`}>
										{logo['heating']} heating
									</p>
								</div>
								<div className='detail__offer-item'>
									<p className={`${cableTV ? '' : 'disable__offer'}`}>
										{logo['cableTV']} cableTV
									</p>
								</div>
							</div>
						</div>
						{/* Calendar */}
						<div className='line'></div>
						<div className='detail__calendar'>
							<h3>
								{numberOfVisitNights}{' '}
								<span style={{ textTransform: 'lowercase' }}>nights in</span>{' '}
								{name}
							</h3>
							<p>
								{moment(checkIn[0]).format('MMMM Do YYYY')} -{' '}
								{moment(checkIn[1]).format('MMMM Do YYYY')}
							</p>
							<Calendar setCheckIn={setCheckIn} />
						</div>
					</div>
					<div className='detail__booking'>
						<Card
							pricePerNight={price}
							checkIn={checkIn}
							numberOfVisitNights={numberOfVisitNights}
							setCheckInHandler={setCheckIn}
						/>
					</div>
				</div>
				<div className='line'></div>
			</Container>
			<Footer />
		</>
	);
};

const Container = styled.main`
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

	.detail {
		display: grid;
		grid-template-columns: 3fr 2fr;
		margin: 5rem auto;

		p {
			font-weight: 200;
		}

		.detail__title {
			display: flex;
			justify-content: space-between;
			align-items: center;

			p {
				text-transform: capitalize;
			}

			img {
				width: 10rem;
				height: 10rem;
			}
		}
		.detail__description {
			display: flex;
			justify-content: center;
			align-items: flex-start;
			flex-direction: column;

			.detail__description-item {
				display: flex;
				align-items: center;
				gap: 2rem;
				margin: 1.5rem 0;
				h4 {
					margin: 0;
				}

				p {
					color: rgb(113, 113, 113);
					font-size: 300;
					font-size: 1.4rem;
					margin-top: 0.1rem;
				}
				svg {
					font-size: 4rem;
				}
				div {
					flex: 1;
				}
			}
		}

		.detail__sponsor {
			img {
				width: 20rem;
				margin-bottom: 1rem;
			}
		}

		.detail__offer-container {
			display: grid;
			grid-template-columns: 1fr 1fr;

			.detail__offer-item {
				margin: 0.5rem 0;
				p {
					display: flex;
					align-items: center;
					font-weight: 300;
					color: rgb(34, 34, 34);

					svg {
						margin-right: 1rem;
					}
				}

				.disable__offer {
					text-decoration: line-through;
					text-decoration-thickness: 3px;
				}
			}
		}
	}

	.detail__calendar {
		p {
			color: var(--clr-paragraph);
			font-size: 1.5rem;
			font-weight: 200;
		}
	}

	@media only screen and (max-width: 992px) {
		/* .photos {
			display: none;
		} */

		.location-name {
			padding: 1rem;
		}

		.detail {
			display: grid;
			grid-template-columns: 1fr;
			margin: 5rem auto;
			padding: 1rem;
		}

		.title {
			padding: 1rem;
		}
	}
`;

export default SingleRoomPage;

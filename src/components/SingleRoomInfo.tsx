import styled from 'styled-components';
import { AiOutlineStar } from 'react-icons/ai';
import { GiPoolDive } from 'react-icons/gi';
import { MdOutlineFreeCancellation } from 'react-icons/md';

import { logo } from '../constant/logo';
import { transformDate } from '../utils/util';
import { IRoom } from '../@types/Room';
import { Calendar } from './index';
import imageLogo from '../images/image1.jpg';

export interface ISingleRoomInfo extends IRoom {
	setBookDate: any;
	numberOfVisitNights: number;
	bookDate: any;
}

const SingleRoomInfo = ({
	name,
	guests,
	bedRoom,
	bath,
	description,
	kitchen,
	elevator,
	hotTub,
	pool,
	indoorFireplace,
	dryer,
	gym,
	wifi,
	heating,
	cableTV,
	bookDate,
	setBookDate,
	numberOfVisitNights,
}: ISingleRoomInfo) => {
	return (
		<Container>
			<div className='detail__title'>
				<div>
					<h4>{name}</h4>
					<p>
						{guests} guests &middot; {bedRoom} bedroom &middot; {bath} bath
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
					<span style={{ textTransform: 'lowercase' }}>nights in</span> {name}
				</h3>
				<p>
					{transformDate(bookDate.checkIn)} - {transformDate(bookDate.checkOut)}
				</p>
				<Calendar setBookDate={setBookDate} />
			</div>
		</Container>
	);
};

const Container = styled.div`
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

	.detail__calendar {
		p {
			color: var(--clr-paragraph);
			font-size: 1.5rem;
			font-weight: 200;
		}
	}
`;

export default SingleRoomInfo;

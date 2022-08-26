import styled from 'styled-components';
import { Navigate } from 'react-router-dom';
import { MdOutlineVerifiedUser } from 'react-icons/md';
import { TiTickOutline } from 'react-icons/ti';

import { Navbar } from '../components';
import defaultImage from '../images/default-user-image.jpg';
import { useAppSelector } from '../hooks/hooks';
import { transformDate } from '../utils/util';

const UserPage = () => {
	const { auth } = useAppSelector((store) => store.auth);

	if (!auth) {
		return <Navigate to='/login' />;
	}

	const {
		tickets,
		email,
		name,
		phone,
		birthday,
		gender,
		address,
		type,
		avatar,
	} = auth?.user;
	return (
		<>
			<Navbar hideSearch />
			<Container className='section'>
				<div className='user__info'>
					<img
						className='user__image'
						src={avatar ? avatar : defaultImage}
						alt={name}
					/>
					<h5>Upload user image</h5>
					<div>
						<h5 className='flex-center'>
							<MdOutlineVerifiedUser className='icon' /> verified your account
						</h5>
						<p>Verified your account to get authorization badge</p>
						<button>Get Badge</button>
					</div>
					<div className='line'></div>
					<div>
						<h5 className='flex-center'>
							<TiTickOutline className='icon' /> {name} verified
						</h5>
					</div>
				</div>
				<div className='user__detail'>
					<h5>Hello, my name is {name}</h5>
					<p>Join in 2021</p>
					<div className='line'></div>
					<ul>
						<li>Email: {email}</li>
						<li>Phone: {phone}</li>
						<li>Birthday: {transformDate(new Date(birthday))}</li>
						<li>Gender: {gender ? 'male' : 'female'}</li>
						<li>Address: {address}</li>
						<li>Type: {type}</li>
						<li>tickets: {tickets}</li>
					</ul>
				</div>
			</Container>
		</>
	);
};

const Container = styled.section`
	display: grid;
	grid-template-columns: 40rem 1fr;
	grid-gap: 5rem;

	.user__info {
		display: flex;
		flex-direction: column;
		align-items: center;
		border-radius: var(--radius);
		border: 1px solid #dddddd;
		padding: 1rem;

		.user__image {
			border-radius: 50%;
			height: 15rem;
			width: 15rem;
			margin-bottom: 1rem;
		}

		div {
			width: 100%;
			display: flex;
			align-items: flex-start;
			flex-direction: column;

			p {
				font-size: 1.5rem;
			}

			button {
				font-size: 2.5rem;
				border: 1px solid gray;
				padding: 0.5rem 1.5rem;
				margin: 1rem 0;
				border-radius: var(--radius);
			}
		}
		.icon {
			color: var(--clr-success);
		}
	}
	.user__detail {
		li {
			font-size: 2rem;
		}
	}
	.line {
		margin: 2rem 0;
	}
`;

export default UserPage;

import styled from 'styled-components';
import { Link } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';

import { useAppSelector, useAppDispatch } from '../hooks/hooks';
import { logout } from '../features/Auth/authSlice';

const UserModal = () => {
	const { isAuthenticated, auth } = useAppSelector((store) => store.auth);

	const dispatch = useAppDispatch();
	const navigate = useNavigate();

	const logoutHandler = () => {
		dispatch(logout());
		navigate('/');
	};

	if (isAuthenticated) {
		return (
			<Container>
				{auth?.user.type === 'ADMIN' ? (
					<Link className='btn-link bold' to='/admin'>
						Admin
					</Link>
				) : (
					<Link className='btn-link bold' to={`/user/${auth?.user._id}`}>
						User
					</Link>
				)}
				<a href='https://github.com/NgTuanLoc/AirBnB' className='btn-link bold'>
					Messages
				</a>
				<a href='https://github.com/NgTuanLoc/AirBnB' className='btn-link bold'>
					Notifications
				</a>
				<a href='https://github.com/NgTuanLoc/AirBnB' className='btn-link bold'>
					Trips
				</a>
				<a href='https://github.com/NgTuanLoc/AirBnB' className='btn-link bold'>
					Wishlists
				</a>
				<div className='line'></div>
				<a href='https://github.com/NgTuanLoc/AirBnB' className='btn-link'>
					Host your home
				</a>
				<a href='https://github.com/NgTuanLoc/AirBnB' className='btn-link'>
					Host an experience
				</a>
				<Link className='btn-link' to={`/user/${auth?.user._id}`}>
					Account
				</Link>
				<div className='line'></div>
				<a href='https://github.com/NgTuanLoc/AirBnB' className='btn-link'>
					Help
				</a>
				<button className='btn-link' onClick={logoutHandler}>
					Logout
				</button>
			</Container>
		);
	}

	return (
		<Container>
			<Link className='btn-link bold' to='/login'>
				Login
			</Link>
			<Link className='btn-link' to='/register'>
				Sign up
			</Link>
			<div className='line'></div>
			<a className='btn-link' href='https://github.com/NgTuanLoc/AirBnB'>
				Host your home
			</a>
			<a className='btn-link' href='https://github.com/NgTuanLoc/AirBnB'>
				Host an experience
			</a>
			<a className='btn-link' href='https://github.com/NgTuanLoc/AirBnB'>
				Help
			</a>
		</Container>
	);
};

const Container = styled.div`
	position: absolute;
	top: 4.5rem;
	left: 0;
	border-radius: var(--radius);
	width: 100%;
	background-color: white;
	box-shadow: var(--box-shadow);
	display: flex;
	flex-direction: column;
	margin: 0.5rem 0;

	.btn-link {
		width: 100%;
		color: black;
		font-size: 2rem;
		font-weight: 300;
		width: 100%;
		padding: 1rem;
		transition: var(--transition);
		text-align: left;

		:hover {
			background-color: #f7f7f7;
		}
	}

	.bold {
		font-weight: 450;
	}

	.line {
		margin: 1rem auto;
	}
`;

export default UserModal;

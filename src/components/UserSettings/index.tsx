import { useNavigate } from 'react-router-dom';

import { useAppSelector, useAppDispatch } from '../../hooks/hooks';
import { logout } from '../../features/Auth/authSlice';
import { Line } from '../';
import { StyledContainer, StyledButton, StyledLink } from './style';

const UserModal = () => {
	const { auth } = useAppSelector((store) => store.auth);
	const lineMargin = '0.3rem auto';

	const dispatch = useAppDispatch();
	const navigate = useNavigate();

	const logoutHandler = () => {
		dispatch(logout());
		navigate('/');
	};

	if (auth) {
		return (
			<StyledContainer>
				{auth?.user.type === 'ADMIN' ? (
					<StyledLink className='btn-link bold' to='/admin'>
						Admin
					</StyledLink>
				) : (
					<StyledLink className='btn-link bold' to={`/user/${auth?.user._id}`}>
						User
					</StyledLink>
				)}
				<StyledButton
					href='https://github.com/NgTuanLoc/AirBnB'
					className='btn-link bold'>
					Messages
				</StyledButton>
				<StyledButton
					href='https://github.com/NgTuanLoc/AirBnB'
					className='btn-link bold'>
					Notifications
				</StyledButton>
				<StyledButton
					href='https://github.com/NgTuanLoc/AirBnB'
					className='btn-link bold'>
					Trips
				</StyledButton>
				<StyledButton
					href='https://github.com/NgTuanLoc/AirBnB'
					className='btn-link bold'>
					Wishlists
				</StyledButton>
				<Line margin={lineMargin} />
				<StyledButton
					href='https://github.com/NgTuanLoc/AirBnB'
					className='btn-link'>
					Host your home
				</StyledButton>
				<StyledButton
					href='https://github.com/NgTuanLoc/AirBnB'
					className='btn-link'>
					Host an experience
				</StyledButton>
				<StyledLink className='btn-link' to={`/user/${auth?.user._id}`}>
					Account
				</StyledLink>
				<Line margin={lineMargin} />
				<StyledButton
					href='https://github.com/NgTuanLoc/AirBnB'
					className='btn-link'>
					Help
				</StyledButton>
				<StyledButton className='btn-link' onClick={logoutHandler}>
					Logout
				</StyledButton>
			</StyledContainer>
		);
	}

	return (
		<StyledContainer>
			<StyledLink className='btn-link bold' to='/login'>
				Login
			</StyledLink>
			<StyledLink className='btn-link' to='/register'>
				Sign up
			</StyledLink>
			<Line margin={lineMargin} />
			<StyledButton
				className='btn-link'
				href='https://github.com/NgTuanLoc/AirBnB'>
				Host your home
			</StyledButton>
			<StyledButton
				className='btn-link'
				href='https://github.com/NgTuanLoc/AirBnB'>
				Host an experience
			</StyledButton>
			<StyledButton
				className='btn-link'
				href='https://github.com/NgTuanLoc/AirBnB'>
				Help
			</StyledButton>
		</StyledContainer>
	);
};

export default UserModal;

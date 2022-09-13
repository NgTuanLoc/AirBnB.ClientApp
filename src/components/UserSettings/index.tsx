import { useNavigate } from 'react-router-dom';

import { useAppSelector, useAppDispatch } from '../../hooks';
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
					<StyledLink bold='450' to='/admin'>
						Admin
					</StyledLink>
				) : (
					<StyledLink bold='450' to={`/user/${auth?.user._id}`}>
						User
					</StyledLink>
				)}
				<StyledButton bold href='https://github.com/NgTuanLoc/AirBnB'>
					Messages
				</StyledButton>
				<StyledButton bold href='https://github.com/NgTuanLoc/AirBnB'>
					Notifications
				</StyledButton>
				<StyledButton bold href='https://github.com/NgTuanLoc/AirBnB'>
					Trips
				</StyledButton>
				<StyledButton bold href='https://github.com/NgTuanLoc/AirBnB'>
					Wishlists
				</StyledButton>
				<Line margin={lineMargin} />
				<StyledButton href='https://github.com/NgTuanLoc/AirBnB'>
					Host your home
				</StyledButton>
				<StyledButton href='https://github.com/NgTuanLoc/AirBnB'>
					Host an experience
				</StyledButton>
				<StyledLink to={`/user/${auth?.user._id}`}>Account</StyledLink>
				<Line margin={lineMargin} />
				<StyledButton href='https://github.com/NgTuanLoc/AirBnB'>
					Help
				</StyledButton>
				<StyledButton onClick={logoutHandler}>Logout</StyledButton>
			</StyledContainer>
		);
	}

	return (
		<StyledContainer>
			<StyledLink bold='450' to='/login'>
				Login
			</StyledLink>
			<StyledLink bold='450' to='/register'>
				Sign up
			</StyledLink>
			<Line margin={lineMargin} />
			<StyledButton href='https://github.com/NgTuanLoc/AirBnB'>
				Host your home
			</StyledButton>
			<StyledButton href='https://github.com/NgTuanLoc/AirBnB'>
				Host an experience
			</StyledButton>
			<StyledButton href='https://github.com/NgTuanLoc/AirBnB'>
				Help
			</StyledButton>
		</StyledContainer>
	);
};

export default UserModal;

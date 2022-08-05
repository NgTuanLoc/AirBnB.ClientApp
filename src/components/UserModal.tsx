import styled from 'styled-components';
import { Link } from 'react-router-dom';

const UserModal = () => {
	return (
		<Container>
			<Link to='/login' className='bold'>
				Login
			</Link>
			<Link to='/register'>Sign up</Link>
			<div className='line'></div>
			<a href='https://github.com/NgTuanLoc/AirBnB'>Host your home</a>
			<a href='https://github.com/NgTuanLoc/AirBnB'>Host an experience</a>
			<a href='https://github.com/NgTuanLoc/AirBnB'>Help</a>
		</Container>
	);
};

const Container = styled.div`
	position: absolute;
	top: 5.5rem;
	left: 0;
	border-radius: var(--radius);
	width: 100%;
	background-color: white;
	box-shadow: var(--box-shadow);
	display: flex;
	flex-direction: column;
	margin: 0.5rem 0;

	a {
		width: 100%;
		color: black;
		font-size: 2rem;
		font-weight: 300;
		width: 100%;
		padding: 1rem;
		transition: var(--transition);

		:hover {
			background-color: #f7f7f7;
		}
	}

	.bold {
		font-weight: bold;
	}

	.line {
		margin: 1rem auto;
	}
`;

export default UserModal;

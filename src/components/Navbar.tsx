import styled from 'styled-components';
import { Link } from 'react-router-dom';
import { HiOutlineSearch } from 'react-icons/hi';
import { AiOutlineGlobal, AiOutlineMenu, AiOutlineUser } from 'react-icons/ai';

import logo from '../images/logo.svg';

const Navbar = () => {
	return (
		<Container>
			<Link to='/'>
				<img src={logo} alt='airbnb logo' />
			</Link>
			<Search>
				<button>
					<h5>Anywhere</h5>
				</button>
				<div className='vertical-stripe'></div>
				<button>
					<h5>Any week</h5>
				</button>
				<div className='vertical-stripe'></div>
				<button>
					<h5 className='gray'>Add guests</h5>
				</button>
				<button className='btn-search flex-center'>
					<HiOutlineSearch />
				</button>
			</Search>
			<Nav>
				<h5>Become A Host</h5>
				<div className='translate flex-center'>
					<AiOutlineGlobal />
				</div>
				<button className='login flex-center'>
					<AiOutlineMenu />
					<AiOutlineUser />
				</button>
			</Nav>
		</Container>
	);
};

const Container = styled.header`
	display: flex;
	justify-content: space-between;
	align-items: center;
	position: fixed;
	width: 100%;
	top: 0;
	left: 0;
	height: 8rem;
	border: 2px solid var(--clr-secondary);
	padding-inline: 8rem;

	img {
		width: 10rem;
	}
`;

const Search = styled.div`
	display: flex;
	justify-content: space-evenly;
	align-items: center;
	box-shadow: var(--light-shadow);
	padding: 1rem 1.5rem;
	border-radius: 30px;
	transition: var(--transition);
	cursor: pointer;

	h5 {
		font-weight: 350;
	}

	.btn-search {
		margin-left: 0.5rem;
		background-color: var(--clr-primary);
		padding: 0.5rem;
		border-radius: 50%;
		svg {
			color: white;
			font-size: 1.5rem;
		}
	}

	.vertical-stripe {
		width: 1px;
		background-color: var(--clr-secondary);
		height: 2.5rem;
		margin-inline: 1rem;
	}

	.gray {
		color: #858585;
	}

	:hover {
		box-shadow: var(--dark-shadow);
	}
`;

const Nav = styled.nav`
	display: flex;
	justify-content: space-around;
	align-items: center;

	h5 {
		margin: 0;
	}

	.translate {
		margin-inline: 1.5rem;
		svg {
			color: #222222;
			font-size: 1.75rem;
		}
	}

	.login {
		cursor: pointer;
		border: 1px solid #dddddd;
		padding: 1rem;
		border-radius: 30px;
		transition: var(--transition);
		box-shadow: var(--light-shadow);

		svg {
			margin-inline: 0.5rem;
			font-size: 2rem;
		}

		:hover {
			box-shadow: var(--dark-shadow);
		}
	}
`;

export default Navbar;

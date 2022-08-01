import { FormEvent, useEffect, useState, useRef, ChangeEvent } from 'react';
import styled from 'styled-components';
import { Link, useNavigate } from 'react-router-dom';
import { HiOutlineSearch } from 'react-icons/hi';
import { AiOutlineGlobal, AiOutlineMenu, AiOutlineUser } from 'react-icons/ai';

import logo from '../images/logo.svg';
import { useAppSelector } from '../hooks/hooks';
import { useOnClickOutside } from '../hooks/useClickOutsideHook';
import { transformLanguage } from '../utils/util';
import { Modal } from '../components';

interface InputProps {
	disableInput: boolean;
}

export interface IFilteredLocation {
	location: string;
	id: string;
}

const Navbar = () => {
	const [toggleInput, setToggleInput] = useState(false);
	const [inputLocation, setInputLocation] = useState<IFilteredLocation>({
		location: '',
		id: '',
	});
	const [filteredLocation, setFilteredLocation] = useState<IFilteredLocation[]>(
		[]
	);
	const { locationList } = useAppSelector((store) => store.location);
	const ref = useRef(null);
	useOnClickOutside(ref, () => setToggleInput(false));
	const navigate = useNavigate();

	const onSubmitHandler = (e: FormEvent) => {
		e.preventDefault();

		if (!inputLocation) return;

		navigate(`/room-list/${inputLocation.id}`);
	};

	const onFilterLocationHandler = (e: ChangeEvent<HTMLInputElement>) => {
		const temp = transformLanguage(e.target.value);
		setInputLocation({ ...inputLocation, location: temp });
	};

	const setInputLocationHandler = (location: string, id: string) => {
		setInputLocation({ location, id });
	};

	useEffect(() => {
		let transformedLocation = locationList.map((item) => {
			const { _id, province, name } = item;
			const temp = {
				location: `${province}, ${name}`,
				id: _id,
			};
			return temp;
		});

		setFilteredLocation(
			transformedLocation.filter((item) => {
				const temp = transformLanguage(item.location);
				return temp.startsWith(inputLocation.location);
			})
		);
		// eslint-disable-next-line react-hooks/exhaustive-deps
	}, [inputLocation]);

	return (
		<Container>
			<Link to='/'>
				<img src={logo} alt='airbnb logo' />
			</Link>
			<Search onSubmit={onSubmitHandler}>
				<button type='button' ref={ref} style={{ position: 'relative' }}>
					<h5 onClick={() => setToggleInput(true)}>
						{inputLocation.location ? inputLocation.location : 'Anywhere'}
					</h5>
					<Input
						placeholder='Enter Location'
						disableInput={toggleInput}
						onChange={onFilterLocationHandler}
						value={inputLocation.location}
					/>
					<Modal
						setInputLocation={setInputLocationHandler}
						disableInput={toggleInput}
						locationList={filteredLocation}
						setToggleInput={setToggleInput}
					/>
				</button>
				<div className='vertical-stripe'></div>
				<button type='button'>
					<h5>Any week</h5>
				</button>
				<div className='vertical-stripe'></div>
				<button>
					<h5 className='gray'>Add guests</h5>
				</button>
				<button type='submit' className='btn-search flex-center'>
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
	background-color: white;
	justify-content: space-between;
	align-items: center;
	position: fixed;
	width: 100%;
	top: 0;
	left: 0;
	z-index: 100;
	height: 8rem;
	border: 2px solid var(--clr-secondary);
	padding-inline: 8rem;

	img {
		width: 10rem;
	}
`;

const Search = styled.form`
	display: flex;
	justify-content: space-evenly;
	align-items: center;
	box-shadow: var(--light-shadow);
	padding: 1rem 1.5rem;
	border-radius: 30px;
	transition: var(--transition);
	cursor: pointer;

	h5 {
		font-weight: 400;
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

const Input = styled.input<InputProps>`
	display: ${(p) => (p.disableInput ? 'block' : 'none')};
	background-color: transparent;
	border: transparent;
	font-size: 1rem;
	color: #858585;
	outline-style: none;
	padding-inline: 0.5rem;
	margin-top: 0.5rem;
`;

export default Navbar;

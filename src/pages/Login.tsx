import { ChangeEvent, useEffect, useState } from 'react';
import styled from 'styled-components';
import { useForm } from 'react-hook-form';
import { useNavigate, Link } from 'react-router-dom';

import { useAppDispatch, useAppSelector } from '../hooks/hooks';
import { loginThunk } from '../features/Auth/authThunk';
import { Button, Loading, Image } from '../components';

interface ILogin {
	email: string;
	password: string;
}

const Login = () => {
	const dispatch = useAppDispatch();
	const { isLoading, isAuthenticated, auth } = useAppSelector(
		(store) => store.auth
	);
	const navigate = useNavigate();
	const [user, setUser] = useState<ILogin>({
		email: '',
		password: '',
	});
	const {
		register,
		handleSubmit,
		formState: { errors },
	} = useForm();

	const onChangeHandler = (e: ChangeEvent<HTMLInputElement>) => {
		const name = e.target.name;
		const value = e.target.value;

		setUser({ ...user, [name]: value });
	};

	const onSubmitHandler = () => {
		dispatch(loginThunk(user));
	};

	useEffect(() => {
		if (isAuthenticated && auth?.token) {
			localStorage.setItem('token', auth?.token);
			navigate('/');
		}
		// eslint-disable-next-line react-hooks/exhaustive-deps
	}, [auth]);

	return (
		<Container>
			<div className='login__form flex-center'>
				<Link className='back-btn' to='/'>
					Back
				</Link>
				{isLoading ? (
					<Loading />
				) : (
					<form onSubmit={handleSubmit(onSubmitHandler)}>
						<h2 className='heading'>Login to Airbnb</h2>
						<p>
							Find vacation rentals, cabins, beach houses, unique homes and
							experiences around the world.
						</p>
						<div className='login__input'>
							<label htmlFor='email'>Username</label>
							<input
								type='email'
								placeholder='your-email@gmail.com'
								{...register('email', {
									pattern: { value: /^\S+@\S+$/i, message: 'Invalid Email' },
								})}
								onChange={onChangeHandler}
							/>
						</div>
						<div className='login__input'>
							<label htmlFor='password'>Password</label>
							<input
								type='password'
								placeholder='Your password'
								{...register('password', {
									required: {
										value: true,
										message: 'Password must be provided',
									},
									min: {
										value: 6,
										message: 'Password must have at least 6 letters',
									},
								})}
								onChange={onChangeHandler}
							/>
						</div>

						<Button>Login</Button>
					</form>
				)}
			</div>
			<div className='login__image'>
				<Image
					url='https://preview.colorlib.com/theme/bootstrap/login-form-01/images/xbg_1.jpg.pagespeed.ic.nj5iPvtRed.webp'
					alt='travel'
				/>
			</div>
		</Container>
	);
};

const Container = styled.main`
	width: 100vw;
	height: 100vh;
	overflow: hidden;
	background-color: var(--clr-secondary);
	display: grid;
	grid-template-columns: 1fr 1fr;
	h2 {
		background: linear-gradient(to right, #4420d4 0%, #ff385c 100%);
		-webkit-background-clip: text;
		-webkit-text-fill-color: transparent;
		height: 4rem;
	}

	.login__image {
		height: 100vh;
	}

	.login__form {
		height: 100vh;
		position: relative;

		.back-btn {
			position: absolute;
			top: 3rem;
			left: 3rem;
			font-size: 2rem;
			color: var(--clr-primary);
			transition: var(--transition);

			:hover {
				color: #d70466;
			}
		}

		form {
			display: flex;
			flex-direction: column;
			align-items: center;
			width: 80%;
			max-width: 50rem;

			p {
				color: #b3b3b3;
				margin: 2rem 0;
			}

			.login__input {
				border-top-left-radius: var(--radius);
				border-top-right-radius: var(--radius);
				width: 100%;
				display: flex;
				justify-content: center;
				align-items: flex-start;
				flex-direction: column;
				border: 1px solid #b3b3b3;
				padding: 1.5rem;

				label {
					font-size: 1.2rem;
					font-weight: 200;
					color: var(--clr-paragraph);
				}

				input {
					border: transparent;
					background-color: transparent;
					width: 100%;
					font-size: 2rem;
					:focus {
						background-color: transparent;
						border: transparent;
						outline: none;
					}
				}
			}

			.login__input:nth-child(2n) {
				border-top: none;
				border-top-left-radius: 0;
				border-top-right-radius: 0;
				border-bottom-left-radius: var(--radius);
				border-bottom-right-radius: var(--radius);
			}

			button {
				margin: 2rem 0;
			}
		}
	}

	@media only screen and (max-width: 992px) {
		display: flex;
		flex-direction: column;
		.login__form {
			order: 3;
		}

		.login__image {
			width: 100%;
			height: 40rem;
			order: 1;
		}
	}
`;

export default Login;
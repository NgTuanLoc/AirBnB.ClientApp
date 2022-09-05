/* eslint-disable react-hooks/exhaustive-deps */
import { useEffect, useState } from 'react';
import styled from 'styled-components';
import { useForm } from 'react-hook-form';
import { Link, Navigate } from 'react-router-dom';

import { useAppDispatch, useAppSelector } from '../hooks/hooks';
import { registerThunk } from '../features/Auth/authThunk';
import { Button, Loading, Error } from '../components';

type FormInputs = {
	name: string;
	email: string;
	password: string;
	phone: string;
	birthday: string;
	gender: string;
	address: string;
};

const Register = () => {
	const dispatch = useAppDispatch();
	const { isLoading, auth, error } = useAppSelector((store) => store.auth);
	const [errorState, setErrorState] = useState('');

	const {
		register,
		handleSubmit,
		formState: { errors },
	} = useForm<FormInputs>();

	const onSubmitHandler = (user: FormInputs) => {
		dispatch(registerThunk(user));
	};

	useEffect(() => {
		if (!error) {
			setErrorState('');
			return;
		}
		if (error) {
			if (error === 'Không tìm thấy email phù hợp') {
				setErrorState('Your email is not exist');
			}
		}

		return;
	}, [error, errorState, errors]);

	if (auth) {
		return <Navigate to='/' replace={true} />;
	}

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
						<h2>Register For Airbnb</h2>
						<p>
							Find vacation rentals, cabins, beach houses, unique homes and
							experiences around the world.
						</p>
						<div className='login__input login__input--first'>
							<label htmlFor='name'>Username</label>
							<input
								type='name'
								placeholder='name'
								{...register('name', {
									required: { value: true, message: 'Name must be provided' },
								})}
							/>
							{errors.name && <h5 className='danger'>{errors.name.message}</h5>}
						</div>
						<div className='login__input'>
							<label htmlFor='email'>Email</label>
							<input
								type='email'
								placeholder='email'
								{...register('email', {
									required: { value: true, message: 'Email must be provided' },
									pattern: { value: /@gmail.com/i, message: 'Invalid Email' },
								})}
							/>
							{errors.email && (
								<h5 className='danger'>{errors.email.message}</h5>
							)}
						</div>

						<div className='login__input'>
							<label htmlFor='password'>Password</label>
							<input
								type='password'
								placeholder='password'
								{...register('password', {
									required: {
										value: true,
										message: 'Password must be provided',
									},
								})}
							/>
							{errors.password && (
								<h5 className='danger'>{errors.password.message}</h5>
							)}
						</div>

						<div className='login__input'>
							<label htmlFor='phone'>Phone</label>
							<input
								type='text'
								placeholder='phone'
								{...register('phone', {
									required: { value: true, message: 'phone must be provided' },
								})}
							/>
							{errors.phone && (
								<h5 className='danger'>{errors.phone.message}</h5>
							)}
						</div>

						<div className='login__input'>
							<label htmlFor='birthday'>birthday</label>
							<input
								type='date'
								placeholder='birthday'
								{...register('birthday', {
									required: {
										value: true,
										message: 'Birthday must be provided',
									},
								})}
							/>
							{errors.phone && (
								<h5 className='danger'>{errors.phone.message}</h5>
							)}
						</div>

						<div className='login__input gender'>
							<label htmlFor='gender'>gender</label>
							<select
								{...register('gender', {
									required: { value: true, message: 'Gender must be provided' },
								})}>
								<option value='Man'>Man</option>
								<option value='Woman'>Woman</option>
							</select>
							{errors.gender && (
								<h5 className='danger'>{errors.gender.message}</h5>
							)}
						</div>

						<div className='login__input login__input--last'>
							<label htmlFor='address'>address</label>
							<input
								type='text'
								placeholder='address'
								{...register('address', {
									required: {
										value: true,
										message: 'Address must be provided',
									},
								})}
							/>
							{errors.address && (
								<h5 className='danger'>{errors.address.message}</h5>
							)}
						</div>
						<Error>{errorState}</Error>
						<Button fullWidth>Register</Button>
					</form>
				)}
			</div>
			<div className='login__image'>
				<img
					src='https://preview.colorlib.com/theme/bootstrap/login-form-01/images/xbg_1.jpg.pagespeed.ic.nj5iPvtRed.webp'
					alt='travel'
				/>
			</div>
		</Container>
	);
};

const Container = styled.main`
	width: 100vw;
	height: 100vh;
	overflow: scroll;
	background-color: var(--clr-secondary);
	display: grid;
	grid-template-columns: 1fr 1fr;

	h2 {
		background: linear-gradient(to right, #4420d4 0%, #ff385c 100%);
		background-clip: text;
		-webkit-text-fill-color: transparent;
		height: 4rem;
	}

	.login__image {
		height: 100%;
	}

	.login__form {
		position: relative;
		height: 100%;

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
			height: 80%;
			width: 80%;
			max-width: 50rem;

			p {
				color: #b3b3b3;
				margin: 2rem 0;
			}

			.login__input {
				width: 100%;
				display: flex;
				justify-content: center;
				align-items: flex-start;
				flex-direction: column;
				border: 1px solid #b3b3b3;
				border-bottom: none;
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
					font-size: 2.5rem;
					:focus {
						background-color: transparent;
						border: transparent;
						outline: none;
					}
				}

				select {
					margin-top: 1rem;
				}
			}

			.login__input--first {
				border: 1px solid #b3b3b3;
				border-top-left-radius: var(--radius);
				border-top-right-radius: var(--radius);
				border-bottom: none;
			}

			.login__input--last {
				border-bottom: 1px solid #b3b3b3;
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
		height: auto;

		.login__form {
			padding: 3rem;
			order: 3;
		}

		.login__image {
			width: 100%;
			height: 40rem;
			order: 1;
		}
	}
`;

export default Register;

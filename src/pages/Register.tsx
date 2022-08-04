import { ChangeEvent, useEffect, useState } from 'react';
import styled from 'styled-components';
import { useForm } from 'react-hook-form';
import { useNavigate } from 'react-router-dom';

import { useAppDispatch, useAppSelector } from '../hooks/hooks';
import { loginThunk } from '../features/Auth/authThunk';
import { Button, Loading } from '../components';
import { useLocalStorage } from '../hooks/useLocalStorage';

interface ILogin {
	email: string;
	password: string;
}

const Register = () => {
	const dispatch = useAppDispatch();
	const { isLoading, success, auth } = useAppSelector((store) => store.auth);
	const [userToken, setUserToken] = useLocalStorage('token', '');
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
		if (success && auth?.token) {
			setUserToken(auth?.token);
			navigate('/');
		}
		// eslint-disable-next-line react-hooks/exhaustive-deps
	}, [auth]);

	return (
		<Container>
			<div className='login__form flex-center'>
				{isLoading ? (
					<Loading />
				) : (
					<form onSubmit={handleSubmit(onSubmitHandler)}>
						<h2>Register For Airbnb</h2>
						<p>
							Find vacation rentals, cabins, beach houses, unique homes and
							experiences around the world.
						</p>
						<div className='login__input'>
							<label htmlFor='email'>Username</label>
							<input
								type='email'
								placeholder='email'
								{...register('email', {
									required: true,
									pattern: /@gmail.com/i,
								})}
								onChange={onChangeHandler}
							/>
						</div>

						<div className='login__input'>
							<label htmlFor='password'>Password</label>
							<input
								type='password'
								placeholder='password'
								{...register('password', { required: true })}
								onChange={onChangeHandler}
							/>
						</div>

						<div className='login__input'>
							<label htmlFor='phone'>Phone</label>
							<input
								type='text'
								placeholder='phone'
								{...register('phone', { required: true })}
								onChange={onChangeHandler}
							/>
						</div>

						<div className='login__input'>
							<label htmlFor='birthday'>birthday</label>
							<input
								type='datetime'
								placeholder='birthday'
								{...register('birthday', { required: true })}
								onChange={onChangeHandler}
							/>
						</div>

						<div className='login__input gender'>
							<label htmlFor='gender'>gender</label>
							<select {...register('gender', { required: true })}>
								<option value='Man'>Man</option>
								<option value='Woman'>Woman</option>
							</select>
						</div>

						<div className='login__input'>
							<label htmlFor='address'>address</label>
							<input
								type='text'
								placeholder='address'
								{...register('address', { required: true })}
								onChange={onChangeHandler}
							/>
						</div>

						<Button>Register</Button>
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
	overflow: hidden;
	background-color: var(--clr-secondary);
	display: grid;
	grid-template-columns: 1fr 1fr;

	.login__image {
		height: 100vh;
	}

	.login__form {
		position: relative;
		height: 100vh;
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
			}

			.login__input:nth-child(1) {
				border: 1px solid #b3b3b3;
				border-top-left-radius: var(--radius);
				border-top-right-radius: var(--radius);
				border-bottom: none;
			}

			.login__input:nth-child(6) {
				border-bottom: 1px solid #b3b3b3;
				border-bottom-left-radius: var(--radius);
				border-bottom-right-radius: var(--radius);
			}

			button {
				margin: 2rem 0;
			}
		}
	}

	@media only screen and(max-width: 992px) {
		grid-template-columns: 1fr;
	}
`;

export default Register;

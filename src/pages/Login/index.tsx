/* eslint-disable react-hooks/exhaustive-deps */
import { useEffect, useState } from 'react';
import { useForm } from 'react-hook-form';
import { Navigate } from 'react-router-dom';

import { useAppDispatch, useAppSelector } from '../../hooks';
import { loginThunk } from '../../features/Auth/authThunk';
import { LoginLayout } from '../../layouts';
import { Button, Loading, Error } from '../../components';
import {
	StyledTitle,
	StyledParagraph,
	StyledForm,
	StyledBackButton,
	StyledInputContainer,
	StyledLabel,
	StyledInput,
} from './style';

const DEFAULT_IMAGE = {
	imageUrl:
		'https://airbnbstorage.blob.core.windows.net/airbnbimagestorage/16989773242607276_rktkn-ssOtyGE8CyE-unsplash.jpg',
	imageAlt: 'travel',
};

type FormInputs = {
	email: string;
	password: string;
};

const Login = () => {
	const dispatch = useAppDispatch();
	const [errorState, setErrorState] = useState('');
	const { authStatus, auth, error } = useAppSelector((store) => store.auth);

	const {
		register,
		handleSubmit,
		formState: { errors },
	} = useForm<FormInputs>({ mode: 'onChange' });

	const onSubmitHandler = (user: FormInputs) => {
		dispatch(loginThunk(user));
	};

	useEffect(() => {
		if (!error || authStatus === 'SUCCESS') {
			setErrorState('');
			return;
		}

		if (error) {
			if (error === '404') {
				setErrorState('Your email is not exist');
			} else if (error === '500') {
				setErrorState('Your email or password is not valid');
			}
		}

		return;
	}, [error, errorState, errors]);

	if (auth) {
		return <Navigate to='/' replace={true} />;
	}

	return (
		<LoginLayout image={DEFAULT_IMAGE}>
			<StyledBackButton to='/'>Back</StyledBackButton>
			{authStatus === 'PENDING' ? (
				<Loading />
			) : (
				<StyledForm onSubmit={handleSubmit(onSubmitHandler)}>
					<StyledTitle className='heading'>Login to Airbnb</StyledTitle>
					<StyledParagraph>
						Find vacation rentals, cabins, beach houses, unique homes and
						experiences around the world.
					</StyledParagraph>
					<StyledInputContainer>
						<StyledLabel htmlFor='email'>Username</StyledLabel>
						<StyledInput
							type='email'
							placeholder='your-email@gmail.com'
							{...register('email', {
								required: { value: true, message: 'Email must be provided' },
								pattern: { value: /^\S+@\S+$/i, message: 'Invalid Email' },
							})}
						/>
						{errors.email && <h5 className='danger'>{errors.email.message}</h5>}
					</StyledInputContainer>
					<StyledInputContainer>
						<StyledLabel htmlFor='password'>Password</StyledLabel>
						<StyledInput
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
						/>
						{errors.password && (
							<h5 className='danger'>{errors.password.message}</h5>
						)}
					</StyledInputContainer>
					{errorState && <Error>{errorState}</Error>}
					<Button type='submit' fullWidth>
						Login
					</Button>
				</StyledForm>
			)}
		</LoginLayout>
	);
};

export default Login;

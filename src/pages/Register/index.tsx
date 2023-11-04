/* eslint-disable react-hooks/exhaustive-deps */
import { useEffect, useState } from 'react';
import { useForm } from 'react-hook-form';
import { Navigate } from 'react-router-dom';

import { LoginLayout } from '../../layouts';
import { useAppDispatch, useAppSelector } from '../../hooks';
import { registerThunk } from '../../features/Auth/authThunk';
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
		'https://preview.colorlib.com/theme/bootstrap/login-form-01/images/xbg_1.jpg.pagespeed.ic.nj5iPvtRed.webp',
	imageAlt: 'travel',
};

type FormInputs = {
	personName: string;
	email: string;
	phone: string;
	password: string;
	confirmPassword: string;
	address: string;
};

const Register = () => {
	const dispatch = useAppDispatch();
	const { authStatus, auth, error } = useAppSelector((store) => store.auth);
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
			setErrorState(error);
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
					<StyledTitle>Register For Airbnb</StyledTitle>
					<StyledParagraph>
						Find vacation rentals, cabins, beach houses, unique homes and
						experiences around the world.
					</StyledParagraph>
					<StyledInputContainer borderTopLeftRadius borderTopRightRadius>
						<StyledLabel htmlFor='name'>Username</StyledLabel>
						<StyledInput
							type='name'
							placeholder='name'
							{...register('personName', {
								required: { value: true, message: 'Name must be provided' },
							})}
						/>
						{errors.personName && (
							<h5 className='danger'>{errors.personName.message}</h5>
						)}
					</StyledInputContainer>
					<StyledInputContainer>
						<StyledLabel htmlFor='email'>Email</StyledLabel>
						<StyledInput
							type='email'
							placeholder='email'
							{...register('email', {
								required: { value: true, message: 'Email must be provided' },
								pattern: { value: /@gmail.com/i, message: 'Invalid Email' },
							})}
						/>
						{errors.email && <h5 className='danger'>{errors.email.message}</h5>}
					</StyledInputContainer>

					<StyledInputContainer>
						<StyledLabel htmlFor='password'>Password</StyledLabel>
						<StyledInput
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
					</StyledInputContainer>

					<StyledInputContainer>
						<StyledLabel htmlFor='phone'>Phone</StyledLabel>
						<StyledInput
							type='text'
							placeholder='phone'
							{...register('phone', {
								required: { value: true, message: 'phone must be provided' },
							})}
						/>
						{errors.phone && <h5 className='danger'>{errors.phone.message}</h5>}
					</StyledInputContainer>

					{/* <StyledInputContainer>
						<StyledLabel htmlFor='birthday'>birthday</StyledLabel>
						<StyledInput
							type='date'
							placeholder='birthday'
							{...register('birthday', {
								required: {
									value: true,
									message: 'Birthday must be provided',
								},
							})}
						/>
						{errors.phone && <h5 className='danger'>{errors.phone.message}</h5>}
					</StyledInputContainer> */}

					{/* <StyledInputContainer>
						<StyledLabel htmlFor='gender'>gender</StyledLabel>
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
					</StyledInputContainer> */}

					<StyledInputContainer
						marginBottom='1rem'
						borderBottomLeftRadius
						borderBottomRightRadius
						borderBottom>
						<StyledLabel htmlFor='address'>address</StyledLabel>
						<StyledInput
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
					</StyledInputContainer>
					<Error>{errorState}</Error>
					<Button type='submit' fullWidth>
						Register
					</Button>
				</StyledForm>
			)}
		</LoginLayout>
	);
};

export default Register;

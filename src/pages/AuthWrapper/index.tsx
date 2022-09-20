/* eslint-disable react-hooks/exhaustive-deps */
import { ReactNode, useEffect } from 'react';

import { useAppDispatch, useAppSelector, useLocalStorage } from '../../hooks';
import { loginThunk } from '../../features/Auth/authThunk';
import { Loading } from '../../components';

interface IAuthWrapper {
	children: ReactNode;
}

const AuthWrapper = ({ children }: IAuthWrapper) => {
	const [userLogin] = useLocalStorage('userLogin', {
		email: '',
		password: '',
		token: '',
	});
	const { authStatus } = useAppSelector((store) => store.auth);
	const dispatch = useAppDispatch();

	useEffect(() => {
		dispatch(
			loginThunk({
				email: userLogin.email,
				password: userLogin.password,
			})
		);
	}, []);

	if (authStatus === 'PENDING') return <Loading />;

	return <>{children}</>;
};

export default AuthWrapper;

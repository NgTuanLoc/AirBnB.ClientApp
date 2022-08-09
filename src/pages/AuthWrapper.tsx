/* eslint-disable react-hooks/exhaustive-deps */
import { ReactNode, useEffect } from 'react';

import { useAppDispatch, useAppSelector } from '../hooks/hooks';
import { loginThunk } from '../features/Auth/authThunk';
import { useLocalStorage } from '../hooks/useLocalStorage';
import { Loading } from '../components';

interface IAuthWrapper {
	children: ReactNode;
}

const AuthWrapper = ({ children }: IAuthWrapper) => {
	const [token, _] = useLocalStorage('userLogin', {
		email: '',
		password: '',
		token: '',
	});
	const { isLoading } = useAppSelector((store) => store.auth);
	const dispatch = useAppDispatch();

	useEffect(() => {
		if (token.token) {
			dispatch(
				loginThunk({
					email: token.email as string,
					password: token.password as string,
				})
			);
		}
	}, []);

	if (isLoading) return <Loading />;

	return <>{children}</>;
};

export default AuthWrapper;

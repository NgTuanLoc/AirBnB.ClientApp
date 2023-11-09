/* eslint-disable react-hooks/exhaustive-deps */
import { ReactNode, useEffect } from 'react';

import { useAppDispatch, useAppSelector } from '../../hooks';
import { getUserThunk } from '../../features/Auth/authThunk';
import { Loading } from '../../components';

interface IAuthWrapper {
	children: ReactNode;
}

const AuthWrapper = ({ children }: IAuthWrapper) => {
	const { authStatus } = useAppSelector((store) => store.auth);
	const dispatch = useAppDispatch();

	useEffect(() => {
		dispatch(getUserThunk());
	}, []);

	if (authStatus === 'PENDING') return <Loading />;

	return <>{children}</>;
};

export default AuthWrapper;

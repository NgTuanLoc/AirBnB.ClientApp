/* eslint-disable react-hooks/exhaustive-deps */
import { ReactNode } from 'react';
import { Navigate } from 'react-router-dom';
import { Loading } from '../../components';

import { useAppSelector } from '../../hooks';

interface IPrivateRoute {
	type?: 'Admin' | 'Owner' | 'User';
	children: ReactNode;
}

const PrivateRoute = ({ children, type = 'User' }: IPrivateRoute) => {
	const { auth, authStatus } = useAppSelector((store) => store.auth);

	if (authStatus === 'PENDING') {
		return <Loading />;
	}

	if (authStatus === 'UNAUTHORIZED') {
		return <Navigate to='/' />;
	}

	if (authStatus === 'SUCCESS' && auth?.roleList.includes(type)) {
		return <Navigate to='/' />;
	}

	return <>{children}</>;
};

export default PrivateRoute;

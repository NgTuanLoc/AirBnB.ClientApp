/* eslint-disable react-hooks/exhaustive-deps */
import { ReactNode } from 'react';
import { Navigate } from 'react-router-dom';

import { useAppSelector } from '../hooks/hooks';
import { Loading } from '../components';

interface IPrivateRoute {
	type?: 'ADMIN' | 'USER';
	children: ReactNode;
}

const PrivateRoute = ({ children, type = 'USER' }: IPrivateRoute) => {
	const { auth, isLoading } = useAppSelector((store) => store.auth);

	if (isLoading) {
		return <Loading />;
	}

	if (!auth) {
		console.log(
			'🚀 ~ file: PrivateRoute.tsx ~ line 21 ~ PrivateRoute ~ auth',
			auth
		);
		return <Navigate to='/' />;
	}

	if (auth?.user.type !== type) {
		console.log(
			'🚀 ~ file: PrivateRoute.tsx ~ line 29 ~ PrivateRoute ~ auth?.user.type',
			auth?.user.type
		);

		return <Navigate to='/' />;
	}

	return <>{children}</>;
};

export default PrivateRoute;

/* eslint-disable react-hooks/exhaustive-deps */
import { ReactNode } from 'react';
import { Navigate } from 'react-router-dom';

import { useAppSelector } from '../hooks/hooks';

interface IPrivateRoute {
	children: ReactNode;
}

const PrivateRoute = ({ children }: IPrivateRoute) => {
	// const [token, _] = useLocalStorage('userLogin', '');

	const { isAuthenticated } = useAppSelector((store) => store.auth);

	if (!isAuthenticated) {
		return <Navigate to='/' />;
	}

	return <>{children}</>;
};

export default PrivateRoute;

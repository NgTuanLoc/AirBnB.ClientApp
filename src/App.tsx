import { useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { SkeletonTheme } from 'react-loading-skeleton';

import { getLocationList } from './features/Location/locationThunk';
import { useAppDispatch } from './hooks/hooks';
import {
	Home,
	RoomListPage,
	SingleRoomPage,
	AdminPage,
	UserPage,
	Register,
	Login,
	NotFound,
} from './pages';

const App = () => {
	const dispatch = useAppDispatch();

	useEffect(() => {
		dispatch(getLocationList());
		// eslint-disable-next-line react-hooks/exhaustive-deps
	}, []);

	return (
		<SkeletonTheme
			width={`100%`}
			height={`100%`}
			baseColor='#d9d7d9'
			highlightColor='#f5f5f5'
			duration={2}>
			<Router>
				<Routes>
					<Route path='/' element={<Home />} />
					<Route path='/room-list/:locationId' element={<RoomListPage />} />
					<Route path='/room/:id' element={<SingleRoomPage />} />
					<Route path='/admin' element={<AdminPage />} />
					<Route path='/user/:id' element={<UserPage />} />
					<Route path='/register' element={<Register />} />
					<Route path='/login' element={<Login />} />
					<Route path='*' element={<NotFound />} />
				</Routes>
			</Router>
		</SkeletonTheme>
	);
};

export default App;

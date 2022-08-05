import { useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

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
	);
};

export default App;

import { useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import { getLocationList } from './features/Location/locationThunk';
import { useAppDispatch } from './hooks/hooks';
import { Home, RoomListPage, SingleRoomPage, NotFound } from './pages';
import { Navbar } from './components';

const App = () => {
	const dispatch = useAppDispatch();

	useEffect(() => {
		dispatch(getLocationList());
		// eslint-disable-next-line react-hooks/exhaustive-deps
	}, []);

	return (
		<Router>
			<Navbar />
			<Routes>
				<Route path='/' element={<Home />} />
				<Route path='/room-list' element={<RoomListPage />} />
				<Route path='/room/:id' element={<SingleRoomPage />} />
				<Route path='*' element={<NotFound />} />
			</Routes>
		</Router>
	);
};

export default App;

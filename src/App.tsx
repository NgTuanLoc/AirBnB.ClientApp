import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import { Home, RoomListPage, SingleRoomPage, NotFound } from './pages';
import { Navbar } from './components';

const App = () => {
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

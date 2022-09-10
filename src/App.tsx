import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { SkeletonTheme } from 'react-loading-skeleton';

import {
	Home,
	RoomListPage,
	SingleRoomPage,
	Admin,
	UserPage,
	Register,
	Login,
	NotFound,
	AuthWrapper,
	PrivateRoute,
} from './pages';

const App = () => {
	return (
		<AuthWrapper>
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
						<Route
							path='/admin'
							element={
								<PrivateRoute type='ADMIN'>
									<Admin />
								</PrivateRoute>
							}
						/>
						<Route
							path='/user/:id'
							element={
								<PrivateRoute>
									<UserPage />
								</PrivateRoute>
							}
						/>
						<Route path='/register' element={<Register />} />
						<Route path='/login' element={<Login />} />
						<Route
							path='/user-not-found'
							element={<NotFound error='User not existed' />}
						/>
						<Route
							path='*'
							element={
								<NotFound error="We can't seem to find the page you're looking for." />
							}
						/>
					</Routes>
				</Router>
			</SkeletonTheme>
		</AuthWrapper>
	);
};

export default App;

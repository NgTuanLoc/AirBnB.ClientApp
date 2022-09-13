import {
	UserDashboard,
	RoomDashboard,
	LocationDashboard,
} from '../../containers';
import { useAppSelector } from '../../hooks';
import { AdminLayout } from '../../layouts';

const AdminPage = () => {
	const { selectedDashboard } = useAppSelector((store) => store.admin);
	return (
		<AdminLayout>
			{selectedDashboard === 'USER' && <UserDashboard />}
			{selectedDashboard === 'ROOM' && <RoomDashboard />}
			{selectedDashboard === 'LOCATION' && <LocationDashboard />}
		</AdminLayout>
	);
};

export default AdminPage;

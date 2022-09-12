import {
	UserDashboard,
	RoomDashboard,
	LocationDashboard,
} from '../../components';
import { useAppSelector } from '../../hooks/hooks';
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

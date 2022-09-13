/* eslint-disable react-hooks/exhaustive-deps */
import { useState, useEffect } from 'react';

import { useAppDispatch, useAppSelector, usePagination } from '../../hooks';

import {
	getRoomDetailByID,
	deleteRoomById,
	updateRoomById,
	getAllRoom,
} from '../../features/Room/roomThunk';

import { Loading, Button, Image } from '../../components';
import { AdminForm } from '../../components';
import { IRoom } from '../../@types/Room';
import {
	StyledContainer,
	StyledSearchButton,
	StyledSearchContainer,
	StyledSearch,
	StyledTableContainer,
	StyledTable,
	StyledTableHead,
	StyledTableBody,
	StyledTitle,
	StyledItem,
	StyledRow,
	StyledButtonContainer,
	StyledPaginateContainer,
	StyledPrevButton,
	StyledNextButton,
	StyledPageButton,
	StyledTickIcon,
	StyledStopIcon,
} from './style';

const ROOM_PER_PAGE = 10;

const RoomDashboard = () => {
	const [displayRoom, setDisplayRoom] = useState<IRoom[]>([]);
	const { roomList, selectedRoom, isLoading } = useAppSelector(
		(store) => store.room
	);
	const [modalTitle, setModalTitle] = useState('Room Info');
	const [isModalOpen, setIsModalOpen] = useState(false);

	const dispatch = useAppDispatch();
	const maxPage = Math.floor(roomList.length / ROOM_PER_PAGE) - 1;
	const { currentPage, setCurrentPage, nextPage, prevPage, pageArray } =
		usePagination(maxPage);

	const renderNewRoom = () => {
		let tempArray = Array.from(
			{ length: ROOM_PER_PAGE },
			(_, i) => roomList[currentPage * ROOM_PER_PAGE + i]
		);

		tempArray = tempArray.filter((item) => item !== undefined);
		setDisplayRoom(tempArray);
	};

	const deleteRoom = (id: string) => {
		return () => {
			dispatch(deleteRoomById(id));
			dispatch(getAllRoom());
		};
	};

	const showRoom = (id: string) => {
		return () => {
			setModalTitle('Room Info');
			setIsModalOpen(true);
			dispatch(getRoomDetailByID(id));
		};
	};

	const updateRoom = (id: string) => {
		return () => {
			setModalTitle('Update Room');
			setIsModalOpen(true);
			dispatch(getRoomDetailByID(id));
		};
	};

	useEffect(() => {
		renderNewRoom();
	}, [currentPage, roomList]);

	useEffect(() => {
		dispatch(getAllRoom());
	}, [selectedRoom]);

	if (isLoading)
		return (
			<StyledContainer>
				<Loading />
			</StyledContainer>
		);

	return (
		<StyledContainer>
			<AdminForm<IRoom>
				title={modalTitle}
				isModalOpen={isModalOpen}
				setIsModalOpen={setIsModalOpen}
				isLoading={isLoading}
				data={selectedRoom}
				disableInput={modalTitle === 'Update Room' ? false : true}
				dispatchFunction={updateRoomById}
			/>
			<Button fullWidth={false}>Add New</Button>
			<StyledSearchContainer>
				<StyledSearch />
				<StyledSearchButton>Search</StyledSearchButton>
			</StyledSearchContainer>
			<StyledTableContainer>
				<StyledTable>
					<StyledTableHead>
						<StyledRow>
							<StyledTitle>Id</StyledTitle>
							<StyledTitle>Name</StyledTitle>
							<StyledTitle>Guests</StyledTitle>
							<StyledTitle>BedRoom</StyledTitle>
							<StyledTitle>Bath</StyledTitle>
							<StyledTitle>Elevator</StyledTitle>
							<StyledTitle>Hot Tubs</StyledTitle>
							<StyledTitle>Pool</StyledTitle>
							<StyledTitle>Indoor Fireplace</StyledTitle>
							<StyledTitle>Dryer</StyledTitle>
							<StyledTitle>Gym</StyledTitle>
							<StyledTitle>Kitchen</StyledTitle>
							<StyledTitle>Wifi</StyledTitle>
							<StyledTitle>Heating</StyledTitle>
							<StyledTitle>CableTv</StyledTitle>
							<StyledTitle>Image</StyledTitle>
							<StyledTitle>Price</StyledTitle>
							<StyledTitle>Actions</StyledTitle>
						</StyledRow>
					</StyledTableHead>
					<StyledTableBody>
						{displayRoom.map((item) => {
							const {
								_id,
								name,
								guests,
								bedRoom,
								bath,
								price,
								elevator,
								hotTub,
								pool,
								indoorFireplace,
								dryer,
								gym,
								kitchen,
								wifi,
								heating,
								cableTV,
								image,
							} = item;
							return (
								<StyledRow key={_id}>
									<StyledItem>{_id}</StyledItem>
									<StyledItem>{name}</StyledItem>
									<StyledItem>{guests ? guests : 0}</StyledItem>
									<StyledItem>{bedRoom ? bedRoom : 0}</StyledItem>
									<StyledItem>
										{bath ? <StyledTickIcon /> : <StyledStopIcon />}
									</StyledItem>
									<StyledItem>
										{elevator ? <StyledTickIcon /> : <StyledStopIcon />}
									</StyledItem>
									<StyledItem>
										{hotTub ? <StyledTickIcon /> : <StyledStopIcon />}
									</StyledItem>
									<StyledItem>
										{pool ? <StyledTickIcon /> : <StyledStopIcon />}
									</StyledItem>
									<StyledItem>
										{indoorFireplace ? <StyledTickIcon /> : <StyledStopIcon />}
									</StyledItem>
									<StyledItem>
										{dryer ? <StyledTickIcon /> : <StyledStopIcon />}
									</StyledItem>
									<StyledItem>
										{gym ? <StyledTickIcon /> : <StyledStopIcon />}
									</StyledItem>
									<StyledItem>
										{kitchen ? <StyledTickIcon /> : <StyledStopIcon />}
									</StyledItem>
									<StyledItem>
										{wifi ? <StyledTickIcon /> : <StyledStopIcon />}
									</StyledItem>
									<StyledItem>
										{heating ? <StyledTickIcon /> : <StyledStopIcon />}
									</StyledItem>
									<StyledItem>
										{cableTV ? <StyledTickIcon /> : <StyledStopIcon />}
									</StyledItem>
									<StyledItem>
										<Image url={image} alt={name} />
									</StyledItem>
									<StyledItem>{price ? price : 'Not Provided'}</StyledItem>
									<StyledItem>
										<StyledButtonContainer>
											<Button onClickHandler={showRoom(_id)} bgColor='#28a745'>
												Info
											</Button>
											<Button
												onClickHandler={updateRoom(_id)}
												bgColor='#ffc107'>
												Update
											</Button>
											<Button
												onClickHandler={deleteRoom(_id)}
												bgColor='#dc3545'>
												Delete
											</Button>
										</StyledButtonContainer>
									</StyledItem>
								</StyledRow>
							);
						})}
					</StyledTableBody>
				</StyledTable>
			</StyledTableContainer>
			<StyledPaginateContainer>
				<StyledPrevButton onClick={prevPage}>Prev</StyledPrevButton>
				{pageArray.map((page, index) => {
					return (
						<StyledPageButton
							key={index}
							active={currentPage === page}
							onClick={() => setCurrentPage(page)}>
							{page + 1}
						</StyledPageButton>
					);
				})}
				<StyledNextButton onClick={nextPage}>Next</StyledNextButton>
			</StyledPaginateContainer>
		</StyledContainer>
	);
};

export default RoomDashboard;
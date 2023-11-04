/* eslint-disable react-hooks/exhaustive-deps */
import { useState, useEffect, ChangeEvent } from 'react';
import { HiOutlineRefresh } from 'react-icons/hi';

import { useAppDispatch, useAppSelector, usePagination } from '../../hooks';

import {
	getRoomDetailByID,
	deleteRoomById,
	updateRoomById,
	getAllRoom,
	createNewRoom,
	uploadRoomImageById,
} from '../../features/Room/roomThunk';
import { searchRoom } from '../../features/Room/roomSlice';

import { Loading, Button, Image } from '../../components';
import { AdminForm } from '../../components';
import { type FormType } from '../../components/AdminForm';
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
	StyledHeadButtonContainer,
	StyledRefreshButton,
} from './style';
import { ROOM_DATA } from '../../constant';

const ROOM_PER_PAGE = 10;

const RoomDashboard = () => {
	const [formType, setFormType] = useState<FormType>('INFO');
	const [displayRoom, setDisplayRoom] = useState<IRoom[]>([]);
	const { roomList, selectedRoom, searchedRoom, isLoading } = useAppSelector(
		(store) => store.room
	);
	const [modalTitle, setModalTitle] = useState('Room Info');
	const [isModalOpen, setIsModalOpen] = useState(false);

	const dispatch = useAppDispatch();
	const {
		currentPage,
		setCurrentPage,
		nextPage,
		prevPage,
		pageArray,
		maxPage,
		setMaxPage,
	} = usePagination(roomList.length);
	const [rotateRefreshButton, setRotateRefreshButton] = useState(false);
	const [searchValue, setSearchValue] = useState('');

	const renderNewRoom = () => {
		let tempArray = Array.from(
			{ length: ROOM_PER_PAGE },
			(_, i) => searchedRoom[currentPage * ROOM_PER_PAGE + i]
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
			setFormType('INFO');
			setModalTitle('Room Info');
			setIsModalOpen(true);
			dispatch(getRoomDetailByID(id));
		};
	};

	const createRoom = () => {
		return () => {
			setModalTitle('Create Room');
			setFormType('CREATE');
			setIsModalOpen(true);
		};
	};

	const updateRoom = (id: string) => {
		return () => {
			setFormType('UPDATE');
			setModalTitle('Update Room');
			setIsModalOpen(true);
			dispatch(getRoomDetailByID(id));
		};
	};

	const onRefreshHandler = () => {
		setRotateRefreshButton(true);
		dispatch(getAllRoom());
		renderNewRoom();
		setTimeout(() => {
			setRotateRefreshButton(false);
		}, 3000);
	};

	const onSearchHandler = () => {
		dispatch(searchRoom(searchValue));
		setCurrentPage(0);
	};

	const onChangeHandler = (e: ChangeEvent<HTMLInputElement>) => {
		setSearchValue(e.target.value);
	};

	useEffect(() => {
		renderNewRoom();
		setMaxPage(Math.floor(searchedRoom.length / ROOM_PER_PAGE));
	}, [currentPage, roomList, searchedRoom, maxPage]);

	useEffect(() => {
		dispatch(getAllRoom());
	}, [selectedRoom]);

	if (isLoading) {
		return (
			<StyledContainer>
				<Loading />
			</StyledContainer>
		);
	}

	return (
		<StyledContainer>
			<AdminForm<IRoom>
				formType={formType}
				title={modalTitle}
				isModalOpen={isModalOpen}
				setIsModalOpen={setIsModalOpen}
				isLoading={isLoading}
				data={selectedRoom}
				disableInput={formType === 'INFO' ? true : false}
				dispatchFunction={
					formType === 'UPDATE' ? updateRoomById : createNewRoom
				}
				dispatchUploadImageFunction={uploadRoomImageById}
				dummyData={ROOM_DATA}
				imageName='room'
			/>
			<StyledHeadButtonContainer>
				<Button onClickHandler={createRoom()} fullWidth={false}>
					Add New
				</Button>
				<StyledRefreshButton
					isSpin={rotateRefreshButton}
					onClick={onRefreshHandler}>
					<HiOutlineRefresh />
				</StyledRefreshButton>
			</StyledHeadButtonContainer>
			<StyledSearchContainer>
				<StyledSearch onChange={onChangeHandler} />
				<StyledSearchButton onClickHandler={onSearchHandler}>
					Search
				</StyledSearchButton>
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
							{/* <StyledTitle>Description</StyledTitle> */}
							<StyledTitle>Image</StyledTitle>
							<StyledTitle>Price</StyledTitle>
							<StyledTitle>Actions</StyledTitle>
						</StyledRow>
					</StyledTableHead>
					<StyledTableBody>
						{displayRoom.map((item) => {
							const {
								id,
								name,
								// homeType,
								// roomType,
								totalOccupancy,
								totalBedrooms,
								// totalBathrooms,
								// summary,
								// address,
								hasTV,
								hasKitchen,
								hasAirCon,
								hasHeating,
								hasInternet,
								price,
								// publishedAt,
								// owner,
								// latitude,
								// longitude,
								// location,
								imageList,
							} = item;
							return (
								<StyledRow key={id}>
									<StyledItem>{id}</StyledItem>
									<StyledItem>{name}</StyledItem>
									<StyledItem>{totalOccupancy ? totalOccupancy : 0}</StyledItem>
									<StyledItem>{totalBedrooms ? totalBedrooms : 0}</StyledItem>
									<StyledItem>
										{hasTV ? <StyledTickIcon /> : <StyledStopIcon />}
									</StyledItem>
									<StyledItem>
										{hasKitchen ? <StyledTickIcon /> : <StyledStopIcon />}
									</StyledItem>
									<StyledItem>
										{hasAirCon ? <StyledTickIcon /> : <StyledStopIcon />}
									</StyledItem>
									<StyledItem>
										{hasHeating ? <StyledTickIcon /> : <StyledStopIcon />}
									</StyledItem>
									<StyledItem>
										{hasInternet ? <StyledTickIcon /> : <StyledStopIcon />}
									</StyledItem>

									{/* <StyledItem>
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
									</StyledItem> */}
									{/* <StyledItem>
											{description ? description : 'Empty'}
										</StyledItem> */}
									<StyledItem>
										<Image
											url={imageList.map((image) => image.highQualityUrl)[0]}
											alt={name}
										/>
									</StyledItem>
									<StyledItem>{price ? price : 'Not Provided'}</StyledItem>
									<StyledItem>
										<StyledButtonContainer>
											<Button onClickHandler={showRoom(id)} bgColor='#28a745'>
												Info
											</Button>
											<Button onClickHandler={updateRoom(id)} bgColor='#ffc107'>
												Update
											</Button>
											<Button onClickHandler={deleteRoom(id)} bgColor='#dc3545'>
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

			{maxPage !== 0 && (
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
			)}
		</StyledContainer>
	);
};

export default RoomDashboard;

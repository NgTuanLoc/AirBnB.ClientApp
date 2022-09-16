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
import { transformLanguage } from '../../utils';

const ROOM_PER_PAGE = 10;

const RoomDashboard = () => {
	const [formType, setFormType] = useState<FormType>('INFO');
	const [displayRoom, setDisplayRoom] = useState<IRoom[]>([]);
	const { roomList, selectedRoom, isLoading } = useAppSelector(
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
	const [data, setData] = useState<IRoom[]>(roomList);

	const renderNewRoom = () => {
		let tempArray = Array.from(
			{ length: ROOM_PER_PAGE },
			(_, i) => data[currentPage * ROOM_PER_PAGE + i]
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
		setData(roomList);
		renderNewRoom();
		setTimeout(() => {
			setRotateRefreshButton(false);
		}, 3000);
	};

	const onSearchHandler = () => {
		const temp = roomList.filter((item) => {
			if (!item.name) return false;
			const transformedName = transformLanguage(item.name);

			return transformedName.includes(searchValue);
		});
		setCurrentPage(0);
		setData(temp);
	};

	const onChangeHandler = (e: ChangeEvent<HTMLInputElement>) => {
		setSearchValue(e.target.value);
	};

	useEffect(() => {
		renderNewRoom();
		setData(roomList);
		setMaxPage(Math.floor(data.length / ROOM_PER_PAGE));
	}, [currentPage, roomList, data, maxPage]);

	useEffect(() => {
		dispatch(getAllRoom());
	}, [selectedRoom]);

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
				{isLoading ? (
					<Loading />
				) : (
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
									_id,
									name,
									guests,
									bedRoom,
									bath,
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
									// description,
									image,
									price,
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
											{indoorFireplace ? (
												<StyledTickIcon />
											) : (
												<StyledStopIcon />
											)}
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
										{/* <StyledItem>
											{description ? description : 'Empty'}
										</StyledItem> */}
										<StyledItem>
											<Image url={image} alt={name} />
										</StyledItem>
										<StyledItem>{price ? price : 'Not Provided'}</StyledItem>
										<StyledItem>
											<StyledButtonContainer>
												<Button
													onClickHandler={showRoom(_id)}
													bgColor='#28a745'>
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
				)}
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

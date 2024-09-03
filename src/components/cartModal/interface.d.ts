export interface ICardModal {
	data: ICart[] | [];
	isModalOpen: boolean;
	isFetched: boolean;
	isLoading: boolean;
	handleOpenModal: (e: MouseEvent<HTMLDivElement>) => void;
}

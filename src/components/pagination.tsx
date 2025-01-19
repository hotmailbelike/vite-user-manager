import { Button } from './ui/button';

type PaginationProps = {
	pageNumber: number;
	totalPages: number;
	setPageNumber: (page: number) => void;
};

export const Pagination = ({
	setPageNumber,
	pageNumber,
	totalPages,
}: PaginationProps) => {
	return (
		<div className='flex justify-between items-center mt-4'>
			<Button
				onClick={() => setPageNumber(pageNumber - 1)}
				disabled={pageNumber === 0}
				className='px-4 py-2 bg-blue-700 hover:bg-blue-800 disabled:bg-blue-400'
			>
				Previous
			</Button>
			<span>
				Page {pageNumber + 1} of {totalPages}
			</span>
			<Button
				onClick={() => setPageNumber(pageNumber + 1)}
				disabled={pageNumber >= totalPages - 1}
				className='px-4 py-2 bg-blue-700 hover:bg-blue-800 disabled:bg-blue-400'
			>
				Next
			</Button>
		</div>
	);
};

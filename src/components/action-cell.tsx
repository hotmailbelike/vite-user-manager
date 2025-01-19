import { useNavigate } from 'react-router';
import { Button } from './ui/button';

export const ActionCell = ({ userId }: { userId: number }) => {
	const navigate = useNavigate();

	return (
		<Button
			onClick={() => navigate(`/users/${userId}`)}
			className='px-3 py-2 bg-green-500 hover:bg-green-600'
		>
			View Details
		</Button>
	);
};

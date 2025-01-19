import { useEffect } from 'react';
import { useNavigate } from 'react-router';

// don't want to show anything in the root path
export function App() {
	const navigate = useNavigate();

	useEffect(() => {
		navigate('/users');
	}, []);

	return null;
}

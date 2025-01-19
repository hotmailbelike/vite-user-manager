import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import './index.css';
import { App } from './App.tsx';
import { BrowserRouter, Route, Routes } from 'react-router';
import { Provider } from 'react-redux';
import { store } from '@/redux/store';
import { Users } from './pages/users.page.tsx';
import { User } from './pages/user.page.tsx';
import { Error } from './pages/error.page.tsx';

createRoot(document.getElementById('root')!).render(
	<StrictMode>
		<Provider store={store}>
			<BrowserRouter>
				<Routes>
					<Route index element={<App />} />
					<Route path='500' element={<Error />} />

					<Route path='users'>
						<Route index element={<Users />} />
						<Route path=':userId' element={<User />} />
					</Route>
				</Routes>
			</BrowserRouter>
		</Provider>
	</StrictMode>
);

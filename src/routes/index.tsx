import { createBrowserRouter, Outlet } from 'react-router-dom';

// COMPONENTS
import { AppLayout } from 'src/components/layout';
import { NotFound } from 'src/components/errors';

// ROUTES
import { UserRepos } from 'src/features/github';
import { Info } from 'src/features/info';
import { Factorial } from 'src/features/factorial';

export const routes = {
	userProjects: {
		path: '/',
		name: 'routes.userProjects',
	},
	factorial: {
		path: '/factorial',
		name: 'routes.factorial',
	},
	info: {
		path: '/info',
		name: 'routes.info',
	},
};

const App = () => (
	<AppLayout>
		<Outlet />
	</AppLayout>
);

export const router = createBrowserRouter([
	{
		path: '/',
		element: <App />,
		errorElement: <NotFound />,
		children: [
			{
				index: true,
				element: <UserRepos />,
			},
			{
				path: routes.info.path,
				element: <Info />,
			},
			{
				path: routes.factorial.path,
				element: <Factorial />,
			},
		],
	},
]);

import './bootstrap';
import Header from "@components/header";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from './pages/home';
import Puck from './pages/builders/puck';
import GrapesJSEditor from '@pages/builders/grapesjs';

interface IRoute {
	path: string;
	element: React.ReactNode;
}

const ROUTE_MAP: IRoute[] = [
	{
		path: "/",
		element: <Home />,
	},
	{
		path: "/builder/puck",
		element: <Puck />,
	},
	{
		path: "/builder/grapesjs",
		element: <GrapesJSEditor />,
	}
];

function App() {

	return (
		<main>
			<Header />
			<BrowserRouter>
				<Routes>
					{ROUTE_MAP.map(route => <Route key={route.path} {...route} />)}
				</Routes>
			</BrowserRouter>
		</main>
	)
}

export default App

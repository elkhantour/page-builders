import './bootstrap';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from './pages/home';

interface IRoute {
	path: string;
	element: React.ReactNode;
}

const ROUTE_MAP: IRoute[] = [
	{
		path: "/",
		element: <Home />,
	}

]

function App() {

	return (
		<main>
			<BrowserRouter>
				<Routes>
					<Route path="/" element={<Home />} />
					<Route path="/builder/:name" element={<Home />} />
				</Routes>
			</BrowserRouter>
		</main>
	)
}

export default App

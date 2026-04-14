import { useEffect, useState } from "react";

export default function Header() {
	const [items, setItems] = useState([]);
	const [currentPath, setCurrentPath] = useState("");


	useEffect(() => {
		async function load() {
			try {
				const res = await fetch("/api/v1/builders/all");
				const data = await res.json();
				setItems(data);
			} catch (err) {
				console.error("Failed to load header items:", err);
			}
		}

		load();

		// Set initial path
		setCurrentPath(window.location.pathname);

		// Optional: keep in sync if user navigates without reload
		const onPopState = () => {
			setCurrentPath(window.location.pathname);
		};

		window.addEventListener("popstate", onPopState);
		return () => window.removeEventListener("popstate", onPopState);
	}, []);

	return (
		<header className="fixed top-0 left-0 w-full h-14 bg-black/80 backdrop-blur-md border-b border-white/10 z-50">
			<nav className="h-full flex items-center gap-6 px-6 overflow-x-auto">
				{items.map((item) => {
					const isActive = currentPath === item.path;

					return (
						<a
							key={item.id}
							href={item.path}
							className={`text-sm whitespace-nowrap transition-colors ${isActive
								? "text-red-500 font-semibold"
								: "text-white/80 hover:text-white"
								}`}
						>
							{item.label}
						</a>
					);
				})}
			</nav>
		</header>
	);
}

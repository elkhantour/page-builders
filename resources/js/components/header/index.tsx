import { useEffect, useState } from "react";
import AkaciaIcon from "@assets/akacia.svg?react";

export default function Header() {
	const [items, setItems] = useState<any[]>([]);
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

		setCurrentPath(window.location.pathname);

		const onPopState = () => {
			setCurrentPath(window.location.pathname);
		};

		window.addEventListener("popstate", onPopState);
		return () => window.removeEventListener("popstate", onPopState);
	}, []);

	return (
		<header className="fixed top-0 left-0 w-full h-14 bg-white/80 backdrop-blur-md border-b border-black/10 z-50">
			<div className="h-full flex items-center px-6 relative">

				{/* LEFT: Logo */}
				<a className="flex items-center gap-2 z-10 h-full p-2" href="/">
					<AkaciaIcon className="h-full text-black" />
				</a>

				{/* CENTER: Navigation */}
				<nav className="absolute left-1/2 -translate-x-1/2 flex items-center gap-6">
					{items.map((item) => {
						const isActive = currentPath === item.path;

						return (
							<a
								key={item.id}
								href={item.path}
								className={`text-sm whitespace-nowrap transition-colors ${isActive
										? "text-red-500 font-semibold"
										: "text-black/70 hover:text-black"
									}`}
							>
								{item.label}
							</a>
						);
					})}
				</nav>
			</div>
		</header>
	);
}

import { useEffect, useState } from "react";

export default function Intro() {
	const [builders, setBuilders] = useState([]);

	useEffect(() => {
		async function load() {
			try {
				const res = await fetch("/api/v1/builders/all");
				const data = await res.json();
				setBuilders(data);
			} catch (err) {
				console.error(err);
			}
		}

		load();
	}, []);

	return (
		<div className="min-h-screen bg-white text-black flex flex-col items-center justify-center px-6">

			{/* Title */}
			<h1 className="text-4xl font-bold tracking-wide">
				Page Builders Library
			</h1>

			{/* Subtitle */}
			<p className="mt-4 text-center text-black/70 max-w-xl">
				一個用來測試與實驗不同 PHP 頁面建構器的沙盒環境
			</p>

			<p className="mt-2 text-center text-black/50 max-w-xl text-sm">
				A sandbox to try and experiment with different PHP based page builders
			</p>

			{/* Builder buttons */}
			<h3 className="mt-10 text-2xl">Available Builders</h3>
			<div className="mt-4 flex flex-wrap justify-center gap-3 max-w-3xl">
				{builders.map((b) => (
					<a
						key={b.id}
						href={b.path}
						className="px-4 py-2 rounded-md bg-black/10 hover:bg-black/20 transition text-sm"
					>
						{b.label}
					</a>
				))}
			</div>

		</div>
	);
}

import { useEffect, useState } from "react";
import visual from "@assets/builder-main.png";
import Container from "@components/container";

export default function Home() {

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
		<Container className="min-h-screen bg-white h-full text-black flex flex-row items-center justify-center">


			<img src={visual} className="max-w-[800px]" />

			<div className="basis-2xl">
				{/* Title */}
				<h1 className="text-4xl font-bold tracking-wide">
					Page Builders Library
				</h1>

				{/* Subtitle */}
				<p className="mt-4 text-black/70 max-w-xl">
					一個用來測試與實驗不同頁面建構器的沙盒環境
				</p>

				<p className="mt-2 text-black/50 max-w-xl text-sm">
					A sandbox to try and experiment with different page builders
				</p>

				{/* Builder buttons */}
				<h3 className="mt-10 text-2xl">Available Builders</h3>
				<div className="mt-4 flex flex-wrap justify-start gap-3 max-w-3xl">
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
		</Container>

	);

}

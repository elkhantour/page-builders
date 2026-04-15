import ReactIcon from "@assets/icons/react.svg?react";
import PhpIcon from "@assets/icons/php.svg?react";
import LaravelIcon from "@assets/icons/laravel.svg?react";
import JavascriptIcon from "@assets/icons/javascript.svg?react";
import BootstrapIcon from "@assets/icons/bootstrap.svg?react";
import { useEffect, useState } from "react";

/**
 * Map stack keywords → icons
 */
const stackIconMap: Record<string, React.ReactNode> = {
	react: <ReactIcon className="w-[24px]" />,
	php: <PhpIcon className="w-[24px]" />,
	laravel: <LaravelIcon className="w-[24px]" />,
	javascript: <JavascriptIcon className="w-[24px]" />,
	bootstrap: <BootstrapIcon className="w-[24px]" />,
};

/**
 * Stack badge
 */
function StackBadge({ label }: { label: string }) {
	const key = label.toLowerCase();
	const icon = stackIconMap[key] ?? null;

	return (
		<span className="flex items-center gap-2 px-2 py-1 rounded-md bg-zinc-800 text-zinc-200 text-xs border border-zinc-300">
			{icon}
			{label}
		</span>
	);
}

/**
 * Stack list
 */
function StackList({ stack }: { stack: string[] }) {
	return (
		<div className="flex flex-wrap gap-2 mt-3">
			{stack.map((item) => (
				<StackBadge key={item} label={item} />
			))}
		</div>
	);
}

/**
 * Title section
 */
function BuilderTitle({ name }: { name: string }) {
	return (
		<h1 className="text-5xl mb-3 font-semibold text-black/75 tracking-tight">
			{name}
		</h1>
	);
}

/**
 * Description section
 */
function BuilderDescription({ description }: { description: string }) {
	return (
		<h1 className="text-black mt-1 leading-relaxed max-w-2xl">
			{description}
		</h1>
	);
}

/**
 * MAIN COMPONENT
 */
interface Builder {
	id: number;
	label: string;
	path: string;
	description?: string;
	website?: string;
	stack?: string[];
}

interface BuilderHeaderProps {
	label: string;
}

export default function BuilderHeader({ label }: BuilderHeaderProps) {
	const [builder, setBuilder] = useState<Builder | null>(null);

	useEffect(() => {
		async function load() {
			try {
				const res = await fetch(`/api/v1/builders/${label}`);
				const data = await res.json();
				setBuilder(data);
			} catch (err) {
				console.error("Failed to load builder:", err);
			}
		}

		load();
	}, [label]);

	if (!builder) return null;

	return (
		<div className="mt-12 mb-8 w-full p-6 bg-zinc-100 border border-zinc-200 shadow-sm">
			{builder.label && <BuilderTitle name={builder.label} />}

			{builder.website && (
				<a
					href={builder.website}
					target="_blank"
					rel="noopener noreferrer"
					className="text-blue-600 hover:underline text-sm"
				>
					{builder.website}
				</a>
			)}

			{builder.description && (
				<BuilderDescription description={builder.description} />
			)}

			{builder.stack && <StackList stack={builder.stack} />}
		</div>
	);
}
